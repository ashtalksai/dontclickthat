"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Phone, Mail, MessageSquare } from "lucide-react";

export function Problem() {
  const stats = [
    { value: "$2.4B", label: "Lost to elder fraud in 2024" },
    { value: "300%", label: "Increase since 2020" },
    { value: "5x", label: "More likely for seniors to fall victim" },
  ];

  const scamTypes = [
    {
      icon: Mail,
      title: "Phishing Emails",
      description: "Fake IRS, bank, and tech support emails designed to steal personal information",
      color: "#DC2626",
    },
    {
      icon: Phone,
      title: "Scam Calls",
      description: "Impersonators claiming to be from Social Security, Medicare, or law enforcement",
      color: "#F59E0B",
    },
    {
      icon: MessageSquare,
      title: "Text Message Scams",
      description: "Urgent messages about package deliveries, account problems, or lottery wins",
      color: "#2563EB",
    },
  ];

  return (
    <section className="py-24 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/20 text-[#FCA5A5] px-4 py-2 rounded-full text-lg font-medium mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span>The Problem</span>
          </div>
          <h2 className="text-white mb-6">
            Elder Fraud Is <span className="text-[#F59E0B]">Out of Control</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Scammers specifically target seniors because they&apos;re trusting, less tech-savvy, 
            and often have retirement savings. The problem is getting worse every year.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center"
            >
              <p className="text-5xl sm:text-6xl font-bold text-[#F59E0B] mb-3">
                {stat.value}
              </p>
              <p className="text-xl text-white">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scam Types */}
        <div className="grid md:grid-cols-3 gap-8">
          {scamTypes.map((scam, i) => (
            <motion.div
              key={scam.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${scam.color}15` }}
              >
                <scam.icon className="w-8 h-8" style={{ color: scam.color }} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{scam.title}</h3>
              <p className="text-lg text-[#475569] leading-relaxed">{scam.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-[#94A3B8]">
            <span className="text-white font-semibold">Every 12 seconds</span>, a senior 
            falls victim to a scam. Is your loved one protected?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
