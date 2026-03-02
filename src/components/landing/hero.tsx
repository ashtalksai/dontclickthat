"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-[#F0F9FF] to-[#E0F2FE]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#059669] px-4 py-2 rounded-full text-lg font-medium mb-6"
            >
              <Shield className="w-5 h-5" />
              <span>Trusted by 10,000+ families</span>
            </motion.div>

            <h1 className="text-[#1E3A5F] mb-6">
              Stop Scams Before They{" "}
              <span className="text-[#2563EB]">Reach Your Parents</span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#475569] mb-8 leading-relaxed">
              AI-powered protection that screens emails, calls, and texts for
              your loved ones. Get instant alerts when threats are detected.
            </p>

            {/* Feature List */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              {["Email Protection", "Call Screening", "Family Dashboard"].map(
                (feature, i) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-lg text-[#1E293B]"
                  >
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-xl px-8 py-6 bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-[#10B981]/25"
              >
                Start 14-Day Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-8 py-6 border-2"
              >
                Watch How It Works
              </Button>
            </div>

            {/* Trust Line */}
            <p className="mt-6 text-[#64748B] text-lg">
              No credit card required • Cancel anytime • 5-minute setup
            </p>
          </motion.div>

          {/* Phone Mockup / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[300px] sm:w-[340px] h-[600px] sm:h-[680px] bg-[#1E3A5F] rounded-[3rem] p-3 shadow-2xl shadow-[#1E3A5F]/30">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-6">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-[#64748B]">9:41 AM</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-[#10B981] rounded-full" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-[#1E3A5F]">
                        Don&apos;t Click That
                      </span>
                    </div>

                    {/* Safety Score */}
                    <div className="bg-[#F0FDF4] rounded-2xl p-6 mb-6 text-center">
                      <p className="text-[#64748B] mb-2 text-lg">Your Safety Score</p>
                      <p className="text-6xl font-bold text-[#10B981]">98</p>
                      <p className="text-[#10B981] font-medium mt-1 text-lg">Protected</p>
                    </div>

                    {/* Alert Card */}
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2,
                      }}
                      className="bg-[#FEF2F2] border-2 border-[#DC2626] rounded-2xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">!</span>
                        </div>
                        <div>
                          <p className="font-bold text-[#DC2626] text-lg">Scam Blocked</p>
                          <p className="text-[#1E293B] text-base">
                            Suspicious email from &quot;IRS-Refund@...&quot;
                          </p>
                          <p className="text-[#64748B] text-sm mt-1">2 min ago</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                        <p className="text-3xl font-bold text-[#2563EB]">12</p>
                        <p className="text-[#64748B]">Blocked Today</p>
                      </div>
                      <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                        <p className="text-3xl font-bold text-[#10B981]">247</p>
                        <p className="text-[#64748B]">Total Blocked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Alert Bubble */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-32 bg-white rounded-2xl shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Mom is protected</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
