import type { Article } from "../types";

const article: Article = {
  slug: "ai-voice-agents-inbound-calls",
  title:
    "AI Voice Agents for Inbound Calls: What They Handle Well and When You Still Need a Human",
  description:
    "What an AI voice agent is, which inbound calls it can handle reliably, when a call should go to a person, and how to implement, disclose, and measure one properly.",
  published: "2026-09-28",
  updated: "2026-09-28",
  services: ["ai-automation"],
  intro:
    "An AI voice agent answers phone calls, understands what the caller says, replies in natural speech, and takes actions such as booking an appointment or updating a CRM record. Voice agents handle high-volume, predictable calls well: common questions, booking and rescheduling, lead qualification, after-hours coverage, and routing. Calls involving complaints, sensitive personal matters, judgment calls, or regulated advice should go to a person, with the agent handing over a summary so the caller never has to repeat themselves.",
  takeaways: [
    "Voice agents are strongest on repetitive, well-defined calls where the answer is in your own documents or systems.",
    "The handoff to a human is part of the design, not a fallback. Define exactly when it happens.",
    "Tell callers they are speaking with an AI. Outbound AI calls in the US fall under TCPA consent rules.",
    "Start with one call type, review transcripts every week, and expand only once it performs.",
  ],
  sections: [
    {
      heading: "What is an AI voice agent?",
      answer:
        "An AI voice agent is software that holds a phone conversation. It turns the caller's speech into text, decides what to say or do with a language model, and speaks the reply with a synthetic voice, all quickly enough to feel like a normal call.",
      body: [
        { p: "A production voice agent is several components working together:" },
        {
          ul: [
            "**Telephony**, which connects the agent to a phone number (for example Twilio).",
            "**Speech recognition**, which transcribes the caller in real time.",
            "**A language model**, which understands the request and chooses the response.",
            "**Speech synthesis**, which produces the spoken reply (for example ElevenLabs).",
            "**An orchestration layer**, which manages turn-taking and interruptions (for example Vapi).",
            "**Tools and integrations**, which let the agent check a calendar, create a CRM record, or transfer the call.",
          ],
        },
        {
          p: "The integrations are what separate a useful agent from a talking FAQ page. An agent that can actually book the appointment resolves the call. One that can only describe how to book it just moves the work somewhere else.",
        },
      ],
    },
    {
      heading: "Which calls can an AI voice agent handle well?",
      answer:
        "Voice agents do well on calls that are frequent, follow a predictable pattern, and can be resolved with information or actions in your own systems. For many organizations these make up a large share of inbound volume.",
      body: [
        {
          ul: [
            "Common questions about hours, locations, services, prices, and policies.",
            "Booking, rescheduling, and cancelling appointments, synced to your calendar.",
            "Qualifying new leads and logging them in your CRM with notes.",
            "After-hours and overflow calls that would otherwise go to voicemail.",
            "Routing callers to the right person or department.",
            "Outbound confirmations and reminders, where the recipient has consented.",
          ],
        },
      ],
    },
    {
      heading: "When do you still need a human on the call?",
      answer:
        "A person should take over when the caller is upset, the topic is sensitive, the request needs judgment or authority, or the caller simply asks for a human. A well-built agent recognizes these moments and transfers the call with a summary.",
      body: [
        {
          ul: [
            "Complaints and callers who are frustrated or distressed.",
            "Sensitive situations such as health concerns, financial hardship, or bereavement.",
            "Decisions outside policy, such as exceptions, refunds, or disputes.",
            "Anything that amounts to legal, medical, or financial advice.",
            "Any caller who asks to speak with a person. Never make them fight for it.",
          ],
        },
        {
          p: "The quality of the handoff decides how callers feel about the whole system. Pass along the caller's name, the reason for the call, and what has already been tried, so the person picking up can continue rather than start over.",
        },
      ],
    },
    {
      heading: "How do you implement an AI voice agent properly?",
      answer:
        "Start narrow. Pick one call type, give the agent accurate knowledge from your own documents, connect it to the systems it needs, define the handoff rules, and review real transcripts before expanding.",
      body: [
        {
          ol: [
            "**Choose one call type** with high volume and a clear outcome, such as appointment booking.",
            "**Write the knowledge base from real sources:** your policies, service descriptions, and the answers your best staff already give.",
            "**Connect the systems** the agent needs to finish the job, usually your calendar and CRM.",
            "**Define the handoff rules** and test them as carefully as the happy path.",
            "**Disclose the AI** at the start of every call.",
            "**Review transcripts weekly,** fix wrong answers at the source, and only then add the next call type.",
          ],
        },
        {
          p: "On disclosure: telling callers they are speaking with an AI builds trust, and in some places and uses it is legally required. In the United States, the FCC ruled in 2024 that AI-generated voices count as artificial voices under the Telephone Consumer Protection Act, so outbound AI calls need the same prior consent as other automated calls.",
        },
      ],
    },
    {
      heading: "How do you measure whether a voice agent is working?",
      answer:
        "Measure outcomes, not call counts. The key numbers are how many calls the agent resolves on its own, how many it hands off correctly, and whether callers get what they called for.",
      body: [
        {
          ul: [
            "**Containment rate:** the share of calls resolved without a person.",
            "**Correct handoff rate:** calls that reached a person when they should have, with a useful summary.",
            "**Task completion:** bookings made, leads qualified, or questions answered correctly.",
            "**Missed and abandoned calls,** compared with the period before launch.",
            "**Error review:** a weekly sample of transcripts checked for wrong or invented answers.",
          ],
        },
      ],
    },
    {
      heading: "What about privacy and call data?",
      answer:
        "Calls contain personal data, so treat the voice agent like any other system that stores customer information. Decide what is recorded, how long it is kept, who can access it, and what each vendor in the call path is allowed to do with it.",
      body: [
        {
          p: "Check whether vendors use your call data to train their models, and turn that off where you can. In US healthcare, every vendor that handles protected health information needs to sign a Business Associate Agreement under HIPAA before the agent goes live.",
        },
        {
          p: "Klaudio LLC builds voice agents, chatbots, and the automations behind them, with human handoff designed in. See [AI & Automation services](/services/ai-automation).",
        },
      ],
    },
  ],
};

export default article;
