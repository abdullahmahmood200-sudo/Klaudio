import FaqList from "@/components/FaqList";
import { homeFaqs } from "./data";

/**
 * Homepage FAQ, about the company as a whole. The matching FAQPage schema is
 * emitted by app/page.tsx from the same data.
 */
export default function HomeFaq() {
  return <FaqList id="faq" title="Questions about Klaudio LLC" items={homeFaqs} />;
}
