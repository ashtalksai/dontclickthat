"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Zap,
  Users,
  Eye,
  ShieldCheck,
  HeartHandshake,
  Smartphone,
  Clock,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Lock,
      title: "Privacy-First",
      description:
        "We never read or store your emails. AI analyzes patterns, not content. Your data stays yours.",
    },
    {
      icon: Zap,
      title: "Real-Time Protection",
      description:
        "Threats are detected and blocked in seconds, not hours. Scammers don't wait, and neither do we.",
    },
    {
      icon: Users,
      title: "Family Dashboard",
      description:
        "See your loved one's protection status at a glance. Get alerts when threats are blocked.",
    },
    {
      icon: Eye,
      title: "Plain English Explanations",
      description:
        "No tech jargon. We explain exactly why something was flagged in simple, clear language.",
    },
    {
      icon: ShieldCheck,
      title: "99.7% Accuracy",
      description:
        "Our AI is trained on millions of scam patterns. It catches what humans miss.",
    },
    {
      icon: HeartHandshake,
      title: "Human Support",
      description:
        "Real people available 7 days a week. Call us, don't email — we know you prefer it.",
    },
    {
      icon: Smartphone,
      title: "Senior-Friendly Design",
      description:
        "Large text, simple buttons, clear icons. Designed with seniors, not just for them.",
    },
    {
      icon: Clock,
      title: "Set It & Forget It",
      description:
        "Once installed, it works automatically. No daily check-ins or complicated settings.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full text-lg font-medium mb-6">
            <ShieldCheck className="w-5 h-5" />
            <span>Why Families Trust Us</span>
          </div>
          <h2 className="text-[#1E3A5F] mb-6">
            Protection That <span className="text-[#2563EB]">Actually Works</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Built by security experts, designed for families. Every feature exists 
            because real families asked for it.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{feature.title}</h3>
              <p className="text-[#475569] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
