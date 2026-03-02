"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "My mom almost sent $5,000 to a 'grandchild' scammer. This app caught it immediately. I can't thank you enough.",
      author: "Sarah M.",
      role: "Daughter, protecting her mother",
      rating: 5,
    },
    {
      quote:
        "Finally, something that's actually easy for Dad to use. The big buttons and clear alerts make all the difference.",
      author: "Michael T.",
      role: "Son, protecting his father",
      rating: 5,
    },
    {
      quote:
        "I was getting 10+ scam calls a day. Now I don't even hear my phone ring unless it's real. Life-changing.",
      author: "Dorothy K.",
      role: "User, 74 years old",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#D97706] px-4 py-2 rounded-full text-lg font-medium mb-6">
            <Star className="w-5 h-5 fill-current" />
            <span>What Families Say</span>
          </div>
          <h2 className="text-[#1E3A5F] mb-6">
            Real Protection, <span className="text-[#10B981]">Real Stories</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Join thousands of families who sleep better knowing their loved ones are protected.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i }}
              className="bg-[#F8FAFC] rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2">
                <Quote className="w-12 h-12 text-[#2563EB]/20 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-6 h-6 text-[#F59E0B] fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-[#1E293B] leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#2563EB] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#1E3A5F] text-lg">{testimonial.author}</p>
                  <p className="text-[#64748B]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "10,000+", label: "Families Protected" },
            { value: "500K+", label: "Scams Blocked" },
            { value: "4.9/5", label: "App Store Rating" },
            { value: "$2.1M+", label: "Fraud Prevented" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-[#2563EB]">{stat.value}</p>
              <p className="text-lg text-[#475569] mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
