"use client";

import { motion } from "framer-motion";
import { Check, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  const features = [
    "Email scam protection (unlimited)",
    "Call screening & blocking",
    "Text message monitoring",
    "Family dashboard access",
    "Real-time threat alerts",
    "Plain English explanations",
    "24/7 AI monitoring",
    "Human support 7 days/week",
    "Up to 3 seniors per account",
    "Up to 5 family members",
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full text-lg font-medium mb-6">
            <Shield className="w-5 h-5" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-[#1E3A5F] mb-6">
            One Plan. <span className="text-[#2563EB]">Everything Included.</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            No hidden fees. No upsells. No confusing tiers. Just complete protection 
            for your entire family.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border-2 border-[#2563EB] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#2563EB] p-8 text-center">
            <Badge className="bg-[#10B981] text-white text-lg px-4 py-1 mb-4">
              14-Day Free Trial
            </Badge>
            <h3 className="text-3xl font-bold text-white mb-2">Family Protection</h3>
            <p className="text-[#BFDBFE]">Everything you need to keep your family safe</p>
          </div>

          {/* Price */}
          <div className="p-8 text-center border-b border-[#E2E8F0]">
            <div className="flex items-end justify-center gap-2 mb-3">
              <span className="text-6xl font-bold text-[#1E3A5F]">$39</span>
              <span className="text-2xl text-[#64748B] mb-2">/month</span>
            </div>
            <p className="text-lg text-[#64748B]">
              or <span className="font-semibold text-[#1E3A5F]">$390/year</span> (save $78)
            </p>
          </div>

          {/* Features */}
          <div className="p-8">
            <p className="text-lg font-semibold text-[#1E3A5F] mb-6">
              Everything included:
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-[#1E293B]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="p-8 pt-0">
            <Button
              size="lg"
              className="w-full text-xl py-6 bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-[#10B981]/25"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-center mt-4 text-[#64748B]">
              No credit card required • Cancel anytime
            </p>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#F0FDF4] border border-[#10B981] rounded-xl px-6 py-4">
            <Shield className="w-8 h-8 text-[#10B981]" />
            <div className="text-left">
              <p className="font-semibold text-[#1E3A5F]">30-Day Money Back Guarantee</p>
              <p className="text-[#64748B]">Not satisfied? Full refund, no questions asked.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
