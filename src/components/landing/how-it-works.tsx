"use client";

import { motion } from "framer-motion";
import { Download, Shield, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Install in 5 Minutes",
      description:
        "Download the app on your parent's phone. Connect their email with one tap. No technical knowledge needed — we guide you through every step.",
      color: "#2563EB",
    },
    {
      number: "2",
      icon: Shield,
      title: "AI Monitors 24/7",
      description:
        "Our AI scans every email, call, and text for scam patterns. It catches threats human eyes miss — before they cause damage.",
      color: "#10B981",
    },
    {
      number: "3",
      icon: Bell,
      title: "You Get Instant Alerts",
      description:
        "When a threat is detected, you get a notification instantly. See exactly what was blocked and why. Peace of mind, finally.",
      color: "#F59E0B",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full text-lg font-medium mb-6">
            <span>How It Works</span>
          </div>
          <h2 className="text-[#1E3A5F] mb-6">
            Protection in <span className="text-[#10B981]">Three Simple Steps</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Setting up scam protection shouldn&apos;t require a PhD in technology. 
            We made it simple enough for anyone.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-[#2563EB] via-[#10B981] to-[#F59E0B]" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-[#F8FAFC] rounded-3xl p-8 lg:p-10 text-center h-full">
                  {/* Number Badge */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg relative z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{step.title}</h3>
                  <p className="text-lg text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Mobile Only) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="w-8 h-8 text-[#CBD5E1] rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="text-xl px-10 py-6 bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-[#10B981]/25"
          >
            Get Started Now — It&apos;s Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
