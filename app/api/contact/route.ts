import { NextResponse } from "next/server";

const FIELDS = [
  "name",
  "email",
  "phone",
  "company",
  "jobTitle",
  "businessType",
  "service",
  "timeline",
  "budget",
  "contactMethod",
  "platforms",
  "description",
] as const;

type Field = (typeof FIELDS)[number];

export async function POST(request: Request) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  if (!portalId || !formGuid) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const v = {} as Record<Field, string>;
  for (const f of FIELDS) {
    v[f] = typeof body[f] === "string" ? (body[f] as string).trim().slice(0, 5000) : "";
  }

  if (!v.name || !/^\S+@\S+\.\S+$/.test(v.email)) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }

  const [firstname, ...rest] = v.name.split(/\s+/);
  const lastname = rest.join(" ");

  // Only standard HubSpot contact properties are sent as their own fields.
  // Everything else is folded into the message so it never fails on a
  // property that is missing from the HubSpot form.
  const message = [
    v.description,
    "",
    `Business type: ${v.businessType}`,
    `Service of interest: ${v.service}`,
    `Timeline: ${v.timeline}`,
    `Budget: ${v.budget}`,
    `Preferred contact method: ${v.contactMethod}`,
    `Current platforms: ${v.platforms}`,
  ].join("\n");

  const fields = [
    { name: "firstname", value: firstname },
    { name: "lastname", value: lastname },
    { name: "email", value: v.email },
    { name: "phone", value: v.phone },
    { name: "company", value: v.company },
    { name: "jobtitle", value: v.jobTitle },
    { name: "message", value: message },
  ].filter((f) => f.value);

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: request.headers.get("referer") ?? undefined,
          pageName: "Contact",
        },
      }),
    },
  );

  if (!res.ok) {
    console.error("HubSpot submit failed", res.status, await res.text());
    return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
