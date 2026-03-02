"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-[#1E3A5F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Shield Icon */}
          <div className="w-20 h-20 bg-[#10B981] rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-white mb-6">
            Don&apos;t Wait Until It&apos;s <span className="text-[#F59E0B]">Too Late</span>
          </h2>

          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Every 12 seconds, a senior loses money to a scam. Every time your parent&apos;s 
            phone rings with an unknown number, it could be the one that costs them 
            their savings. Start protecting them today.
          </p>

          {/* Urgency Stats */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <div className="flex items-center gap-3 text-white justify-center">
              <Clock className="w-6 h-6 text-[#F59E0B]" />
              <span className="text-lg">Setup takes only 5 minutes</span>
            </div>
            <div className="flex items-center gap-3 text-white justify-center">
              <Phone className="w-6 h-6 text-[#10B981]" />
              <span className="text-lg">Protection starts immediately</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-xl px-10 py-6 bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-[#10B981]/25"
            >
              Start 14-Day Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-10 py-6 border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              Call 1-800-DONT-CLICK
            </Button>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-[#64748B]">
            No credit card required • 30-day money back guarantee • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
