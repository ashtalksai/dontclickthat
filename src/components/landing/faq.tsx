"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is my parent's email content private?",
      answer:
        "Absolutely. We NEVER read, store, or share email content. Our AI analyzes patterns (sender, subject line patterns, link structures) without accessing private messages. Your privacy is our #1 priority. We're GDPR and CCPA compliant.",
    },
    {
      question: "What phones and devices does it work on?",
      answer:
        "Don't Click That works on iPhone (iOS 14+), Android (version 10+), and connects to Gmail, Yahoo, and Outlook email accounts. Call screening works on Android. For iPhones, we block scam emails and provide scam alerts — call blocking requires carrier support.",
    },
    {
      question: "What if it blocks a real email by mistake?",
      answer:
        "Our AI is 99.7% accurate, but mistakes happen. Blocked emails aren't deleted — they're flagged for review. You can easily mark something as 'not a scam' and it learns from that. False positives are rare and easy to fix.",
    },
    {
      question: "How is this different from the spam filter in Gmail?",
      answer:
        "Gmail catches obvious spam. We catch sophisticated scams designed to look legitimate — fake bank emails, IRS impersonators, romance scammers. Plus, we alert family members instantly. Gmail doesn't call your daughter when your dad gets a suspicious 'wire money now' email.",
    },
    {
      question: "My parent isn't tech-savvy. Can they really use this?",
      answer:
        "We designed this with seniors, not just for them. Large text, simple buttons, no confusing menus. Most parents need just the initial setup (which you can do for them), then it runs automatically. If they need help, our phone support speaks slowly, clearly, and patiently.",
    },
    {
      question: "What happens when the free trial ends?",
      answer:
        "You'll get a reminder before the trial ends. If you don't add a payment method, the service simply stops — no surprise charges. We'll never bill you without your explicit permission. If you do subscribe, you can cancel anytime with one click.",
    },
    {
      question: "Can I protect multiple family members?",
      answer:
        "Yes! One subscription covers up to 3 seniors and 5 family dashboard members. Perfect for protecting both parents plus grandparents, with the whole family able to monitor alerts.",
    },
    {
      question: "How do I get help if something goes wrong?",
      answer:
        "Call us at 1-800-DONT-CLICK, 7 days a week, 8am-8pm EST. Real humans answer — no phone trees, no 'press 1 for this'. You can also email support@dontclickthat.app, but we know many families prefer phone support, so we prioritize it.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full text-lg font-medium mb-6">
            <HelpCircle className="w-5 h-5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-[#1E3A5F] mb-6">
            Frequently Asked <span className="text-[#2563EB]">Questions</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            We know you want to make sure this is right for your family. Here are 
            the questions we hear most often.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#F8FAFC] rounded-2xl border-none px-6"
              >
                <AccordionTrigger className="text-left text-xl font-semibold text-[#1E3A5F] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-[#475569] pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-[#475569]">
            Still have questions?{" "}
            <a
              href="tel:1-800-DONT-CLICK"
              className="font-semibold text-[#2563EB] hover:underline"
            >
              Call us at 1-800-DONT-CLICK
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
