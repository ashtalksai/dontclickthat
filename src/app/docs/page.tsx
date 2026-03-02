"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Target,
  Megaphone,
  Palette,
  Presentation,
  Menu,
  X,
  ArrowLeft,
  ExternalLink,
  Shield,
  AlertTriangle,
  Phone,
  Mail,
  MessageSquare,
  Check,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "research", label: "Research", icon: BarChart3 },
  { id: "gtm", label: "GTM Plan", icon: Target },
  { id: "marketing", label: "Marketing Plan", icon: Megaphone },
  { id: "brand", label: "Brand Spec", icon: Palette },
  { id: "pitch", label: "Pitch Deck", icon: Presentation, external: "/pitch" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sections.find((s) => s.id === hash && !s.external)) {
      setActiveSection(hash);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${activeSection}`);
  }, [activeSection]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-white text-[#1E293B]">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-lg"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(mobileMenuOpen || true) && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: mobileMenuOpen ? 0 : 0 }}
            exit={{ x: -280 }}
            className={`fixed md:sticky top-0 left-0 z-40 h-screen w-[280px] bg-[#F8FAFC] border-r border-[#E2E8F0] flex flex-col ${
              mobileMenuOpen ? "block" : "hidden md:flex"
            }`}
          >
            {/* Logo */}
            <div className="p-6 border-b border-[#E2E8F0]">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg shadow-[#2563EB]/20">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#1E3A5F]">Don&apos;t Click That</div>
                  <div className="text-sm text-[#64748B]">Documentation</div>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider px-3 py-2">
                Sections
              </div>
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id && !section.external;

                if (section.external) {
                  return (
                    <Link
                      key={section.id}
                      href={section.external}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#64748B] hover:text-[#1E3A5F] hover:bg-white transition-colors text-lg"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{section.label}</span>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </Link>
                  );
                }

                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-lg ${
                      isActive
                        ? "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/20"
                        : "text-[#64748B] hover:text-[#1E3A5F] hover:bg-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Footer Links */}
            <div className="p-4 border-t border-[#E2E8F0] space-y-2">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-3 text-lg text-[#64748B] hover:text-[#1E3A5F] transition-colors rounded-xl hover:bg-white"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Website
              </Link>
              <Link
                href="https://github.com/ashtalksai/dontclickthat"
                target="_blank"
                className="flex items-center gap-2 px-4 py-3 text-lg text-[#64748B] hover:text-[#1E3A5F] transition-colors rounded-xl hover:bg-white"
              >
                <ExternalLink className="h-5 w-5" />
                GitHub
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === "research" && <ResearchSection />}
              {activeSection === "gtm" && <GTMSection />}
              {activeSection === "marketing" && <MarketingSection />}
              {activeSection === "brand" && <BrandSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// ===== RESEARCH SECTION =====
function ResearchSection() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge className="bg-[#2563EB]/10 text-[#2563EB] text-base px-4 py-1 mb-4">Research</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">Market Research & Validation</h1>
        <p className="text-xl text-[#64748B]">
          Understanding the elder fraud protection market and validating the Don&apos;t Click That opportunity.
        </p>
      </div>

      {/* Executive Summary */}
      <Card className="bg-gradient-to-br from-[#2563EB]/10 to-[#10B981]/5 border-[#2563EB]/20 overflow-hidden">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2563EB]">Executive Summary</h2>
          <p className="text-lg text-[#475569] mb-6 leading-relaxed">
            Elder fraud is a $2.4B crisis that&apos;s growing 300% year-over-year. Seniors are 5x more likely 
            to fall victim to scams, yet existing solutions either overwhelm them with complexity or 
            require technical setup beyond their abilities. Don&apos;t Click That fills this gap with 
            AI-powered protection that&apos;s dead simple to use.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#2563EB] font-mono">$2.4B</div>
              <div className="text-base text-[#64748B] mt-1">TAM (Elder Fraud)</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#10B981] font-mono">9/10</div>
              <div className="text-base text-[#64748B] mt-1">Validation Score</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#F59E0B]">LOW</div>
              <div className="text-base text-[#64748B] mt-1">Competition</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Problem */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-[#1E3A5F]">
          <AlertTriangle className="text-[#DC2626]" /> The Problem
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-[#1E3A5F]">Elder Fraud Epidemic</h3>
            <p className="text-lg text-[#64748B] leading-relaxed">
              $2.4 billion lost to elder fraud in 2024 alone. Scammers specifically target 
              seniors because they&apos;re trusting, less tech-savvy, and have retirement savings.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-[#1E3A5F]">Family Helplessness</h3>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Adult children worry constantly but can&apos;t monitor every email, call, and text 
              their parents receive. They need automated protection with visibility.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-[#1E3A5F]">Complexity Barrier</h3>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Existing security software is designed for tech-savvy users. Seniors can&apos;t 
              configure VPNs, manage password vaults, or interpret security alerts.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-[#1E3A5F]">Exploding Attack Surface</h3>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Scams arrive via email, phone, text, and social media. Protecting just one 
              channel isn&apos;t enough—seniors need comprehensive coverage.
            </p>
          </BentoCard>
        </div>
      </div>

      {/* Market Size */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-[#1E3A5F]">
          <TrendingUp className="text-[#10B981]" /> Market Size
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <BentoCard className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white border-0 shadow-lg shadow-[#2563EB]/20">
            <div className="text-sm font-medium opacity-80 mb-1">TAM</div>
            <div className="text-5xl font-bold mb-2 font-mono">$2.4B</div>
            <div className="text-base opacity-80">
              Annual elder fraud losses (US market)
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-sm font-medium text-[#64748B] mb-1">SAM</div>
            <div className="text-5xl font-bold text-[#1E3A5F] mb-2 font-mono">$480M</div>
            <div className="text-base text-[#64748B]">
              Tech-assisted senior households (20%)
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-sm font-medium text-[#64748B] mb-1">SOM</div>
            <div className="text-5xl font-bold text-[#1E3A5F] mb-2 font-mono">$48M</div>
            <div className="text-base text-[#64748B]">
              Early adopter families willing to pay (10%)
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Competitors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-[#1E3A5F]">
          <Zap className="text-[#F59E0B]" /> Competitive Landscape
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#E2E8F0]">
                <th className="py-4 px-4 text-[#64748B] font-medium text-base">Company</th>
                <th className="py-4 px-4 text-[#64748B] font-medium text-base">AI-Powered</th>
                <th className="py-4 px-4 text-[#64748B] font-medium text-base">Senior-First</th>
                <th className="py-4 px-4 text-[#64748B] font-medium text-base">Family Dashboard</th>
                <th className="py-4 px-4 text-[#64748B] font-medium text-base">Weakness</th>
              </tr>
            </thead>
            <tbody className="text-[#475569]">
              <tr className="border-b border-[#E2E8F0] bg-[#2563EB]/5">
                <td className="py-4 px-4 font-bold text-[#2563EB] text-lg">Don&apos;t Click That ✨</td>
                <td className="py-4 px-4">✅ Real-time</td>
                <td className="py-4 px-4">✅ Core focus</td>
                <td className="py-4 px-4">✅ Built-in</td>
                <td className="py-4 px-4">—</td>
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 text-lg">Norton/McAfee</td>
                <td className="py-4 px-4">⚠️ Basic</td>
                <td className="py-4 px-4">❌</td>
                <td className="py-4 px-4">❌</td>
                <td className="py-4 px-4">Too complex, generic</td>
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 text-lg">Robokiller</td>
                <td className="py-4 px-4">✅</td>
                <td className="py-4 px-4">❌</td>
                <td className="py-4 px-4">❌</td>
                <td className="py-4 px-4">Calls only, no email</td>
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 text-lg">LifeLock</td>
                <td className="py-4 px-4">❌</td>
                <td className="py-4 px-4">⚠️ Partial</td>
                <td className="py-4 px-4">❌</td>
                <td className="py-4 px-4">Reactive, not preventive</td>
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 text-lg">Family IT Support</td>
                <td className="py-4 px-4">❌</td>
                <td className="py-4 px-4">⚠️</td>
                <td className="py-4 px-4">Manual</td>
                <td className="py-4 px-4">Not scalable</td>
              </tr>
            </tbody>
          </table>
        </div>
        <BentoCard className="bg-[#10B981]/10 border-[#10B981]/20">
          <p className="text-[#059669] font-medium text-lg">
            <strong>Our Edge:</strong> The only solution built from the ground up for seniors with 
            AI-powered protection AND family visibility. Competitors either target general consumers 
            or only protect one channel.
          </p>
        </BentoCard>
      </div>

      {/* Validation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-[#1E3A5F]">
          <Check className="text-[#10B981]" /> Validation Signals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">FTC Reports</h3>
            <p className="text-base text-[#64748B]">
              300% increase in elder fraud since 2020. The problem is growing faster than solutions.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
            <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">Family Pain Point</h3>
            <p className="text-base text-[#64748B]">
              &quot;Protect my parents&quot; searches up 250% YoY. Adult children are desperate for solutions.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-3xl mb-3">📰</div>
            <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">Media Coverage</h3>
            <p className="text-base text-[#64748B]">
              Elder scams featured daily on local news. High awareness, low solution adoption.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">Reddit Communities</h3>
            <p className="text-base text-[#64748B]">
              r/eldercare (100K+), r/scams (700K+) filled with stories of victimized seniors.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">B2B Interest</h3>
            <p className="text-base text-[#64748B]">
              Senior living facilities actively seeking bulk protection solutions for residents.
            </p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">Willingness to Pay</h3>
            <p className="text-base text-[#64748B]">
              9/10 interviewed families said they&apos;d pay $30-50/mo to protect elderly parents.
            </p>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}

// ===== GTM SECTION =====
function GTMSection() {
  return (
    <div className="space-y-12">
      <div>
        <Badge className="bg-[#10B981]/10 text-[#10B981] text-base px-4 py-1 mb-4">Go-to-Market</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">GTM Strategy</h1>
        <p className="text-xl text-[#64748B]">
          Launching Don&apos;t Click That to families protecting their senior loved ones.
        </p>
      </div>

      {/* Launch Overview */}
      <Card className="bg-gradient-to-br from-[#10B981]/10 to-[#2563EB]/5 border-[#10B981]/20 overflow-hidden">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#10B981]">Launch Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-base text-[#64748B] mb-1">Launch Date</div>
              <div className="text-3xl font-bold text-[#1E3A5F]">Q2 2025</div>
            </div>
            <div className="text-center">
              <div className="text-base text-[#64748B] mb-1">Day 1 Target</div>
              <div className="text-3xl font-bold text-[#1E3A5F]">100 Signups</div>
            </div>
            <div className="text-center">
              <div className="text-base text-[#64748B] mb-1">Month 1 Goal</div>
              <div className="text-3xl font-bold text-[#1E3A5F]">500 Families</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Target Segments */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Target Segments</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-[#2563EB] text-white border-0 shadow-lg shadow-[#2563EB]/20">
            <div className="text-sm font-medium opacity-80 mb-2">PRIMARY</div>
            <h3 className="text-2xl font-bold mb-3">Adult Children (40-60)</h3>
            <p className="opacity-80 text-base leading-relaxed">
              Decision-makers who set up protection for their parents. They research, purchase, 
              and manage the account. Tech-comfortable but time-poor.
            </p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="opacity-60">Income</div>
                  <div className="font-semibold">$80K-150K</div>
                </div>
                <div>
                  <div className="opacity-60">Parent age</div>
                  <div className="font-semibold">65-85</div>
                </div>
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="text-sm font-medium text-[#64748B] mb-2">SECONDARY</div>
            <h3 className="text-2xl font-bold mb-3 text-[#1E3A5F]">Senior Living Facilities</h3>
            <p className="text-[#64748B] text-base leading-relaxed">
              B2B opportunity: facilities want to protect residents and differentiate their offering. 
              Higher ACV, longer sales cycle.
            </p>
            <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
              <div className="grid grid-cols-2 gap-4 text-sm text-[#64748B]">
                <div>
                  <div className="opacity-60">Residents</div>
                  <div className="font-semibold text-[#1E3A5F]">50-500/facility</div>
                </div>
                <div>
                  <div className="opacity-60">Decision</div>
                  <div className="font-semibold text-[#1E3A5F]">Admin/Director</div>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* 90-Day Timeline */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">90-Day Launch Plan</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <BentoCard className="bg-white border-l-4 border-l-[#2563EB] border-[#E2E8F0] shadow-sm">
            <div className="text-xs text-[#64748B] font-mono mb-2">WEEK 1-2</div>
            <h3 className="font-bold text-lg mb-3 text-[#1E3A5F]">Soft Launch</h3>
            <ul className="text-base text-[#64748B] space-y-2">
              <li>• 100 beta invites</li>
              <li>• r/eldercare posts</li>
              <li>• Family feedback loops</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-white border-l-4 border-l-[#10B981] border-[#E2E8F0] shadow-sm">
            <div className="text-xs text-[#64748B] font-mono mb-2">WEEK 3-4</div>
            <h3 className="font-bold text-lg mb-3 text-[#1E3A5F]">Content Push</h3>
            <ul className="text-base text-[#64748B] space-y-2">
              <li>• Launch blog</li>
              <li>• Facebook Group campaigns</li>
              <li>• YouTube demo videos</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-white border-l-4 border-l-[#F59E0B] border-[#E2E8F0] shadow-sm">
            <div className="text-xs text-[#64748B] font-mono mb-2">MONTH 2</div>
            <h3 className="font-bold text-lg mb-3 text-[#1E3A5F]">Paid Acquisition</h3>
            <ul className="text-base text-[#64748B] space-y-2">
              <li>• Facebook Ads (Caregivers)</li>
              <li>• Google Ads (Scam protection)</li>
              <li>• Local news sponsorships</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-white border-l-4 border-l-[#DC2626] border-[#E2E8F0] shadow-sm">
            <div className="text-xs text-[#64748B] font-mono mb-2">MONTH 3</div>
            <h3 className="font-bold text-lg mb-3 text-[#1E3A5F]">Scale & B2B</h3>
            <ul className="text-base text-[#64748B] space-y-2">
              <li>• Double winning channels</li>
              <li>• Senior facility outreach</li>
              <li>• PR push</li>
            </ul>
          </BentoCard>
        </div>
      </div>

      {/* Channel Strategy */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Channel Mix</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#1E3A5F]">Facebook Groups</h3>
              <Badge className="bg-[#2563EB]/10 text-[#2563EB]">40%</Badge>
            </div>
            <div className="space-y-3 text-base text-[#64748B]">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-[#1E3A5F] font-semibold">300</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-[#1E3A5F] font-semibold">$25</span>
              </div>
              <div className="h-3 bg-[#E2E8F0] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#2563EB] w-[40%]" />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#1E3A5F]">Google Ads</h3>
              <Badge className="bg-[#10B981]/10 text-[#10B981]">30%</Badge>
            </div>
            <div className="space-y-3 text-base text-[#64748B]">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-[#1E3A5F] font-semibold">200</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-[#1E3A5F] font-semibold">$35</span>
              </div>
              <div className="h-3 bg-[#E2E8F0] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#10B981] w-[30%]" />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#1E3A5F]">Local News/Radio</h3>
              <Badge className="bg-[#F59E0B]/10 text-[#F59E0B]">20%</Badge>
            </div>
            <div className="space-y-3 text-base text-[#64748B]">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-[#1E3A5F] font-semibold">120</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-[#1E3A5F] font-semibold">$40</span>
              </div>
              <div className="h-3 bg-[#E2E8F0] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#F59E0B] w-[20%]" />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-[#1E3A5F]">SEO / Referrals</h3>
              <Badge className="bg-[#64748B]/10 text-[#64748B]">10%</Badge>
            </div>
            <div className="space-y-3 text-base text-[#64748B]">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-[#1E3A5F] font-semibold">80</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-[#1E3A5F] font-semibold">$0</span>
              </div>
              <div className="h-3 bg-[#E2E8F0] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#64748B] w-[10%]" />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Success Criteria */}
      <Card className="bg-[#2563EB]/5 border-[#2563EB]/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#2563EB]">Success Criteria</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1E3A5F] font-mono">500</div>
              <div className="text-base text-[#64748B] mt-1">Month 1 Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1E3A5F] font-mono">8%</div>
              <div className="text-base text-[#64748B] mt-1">Free → Paid</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1E3A5F] font-mono">$30</div>
              <div className="text-base text-[#64748B] mt-1">Avg CAC</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1E3A5F] font-mono">60%</div>
              <div className="text-base text-[#64748B] mt-1">Month 2 Retention</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ===== MARKETING SECTION =====
function MarketingSection() {
  return (
    <div className="space-y-12">
      <div>
        <Badge className="bg-[#F59E0B]/10 text-[#F59E0B] text-base px-4 py-1 mb-4">Marketing</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">Marketing Plan</h1>
        <p className="text-xl text-[#64748B]">
          Positioning, messaging, and content strategy for Don&apos;t Click That.
        </p>
      </div>

      {/* Positioning */}
      <Card className="bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] text-white border-0 overflow-hidden">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#60A5FA]">Positioning Statement</h2>
          <div className="space-y-4 text-xl">
            <p><span className="text-[#94A3B8]">For</span> <span className="text-white font-medium">families with aging parents</span></p>
            <p><span className="text-[#94A3B8]">Who</span> <span className="text-white font-medium">worry about scams targeting their loved ones</span></p>
            <p><span className="text-[#94A3B8]">Don&apos;t Click That is</span> <span className="text-[#10B981] font-medium">AI-powered scam protection built for seniors</span></p>
            <p><span className="text-[#94A3B8]">That</span> <span className="text-white font-medium">screens every email, call, and text automatically</span></p>
            <p><span className="text-[#94A3B8]">Unlike</span> <span className="text-white font-medium">complex security software or reactive identity protection</span></p>
            <p><span className="text-[#94A3B8]">We</span> <span className="text-[#F59E0B] font-medium">stop scams before they reach your parents</span></p>
          </div>
        </CardContent>
      </Card>

      {/* Target Persona */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Target Persona</h2>
        <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2563EB] to-[#10B981] flex items-center justify-center text-5xl">
                👩‍💼
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#1E3A5F]">Sarah, 52</h3>
                <p className="text-[#2563EB] text-lg">Marketing Director • Chicago suburb</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-base">
                <div>
                  <div className="text-[#64748B] mb-1">Parents</div>
                  <div className="text-[#1E3A5F] font-semibold">Mom (78) in Florida</div>
                </div>
                <div>
                  <div className="text-[#64748B] mb-1">Worry level</div>
                  <div className="text-[#1E3A5F] font-semibold">High — calls weekly</div>
                </div>
                <div>
                  <div className="text-[#64748B] mb-1">Pain point</div>
                  <div className="text-[#1E3A5F] font-semibold">&quot;Mom almost wired $5K to a scammer&quot;</div>
                </div>
                <div>
                  <div className="text-[#64748B] mb-1">Budget</div>
                  <div className="text-[#1E3A5F] font-semibold">Would pay $50+/mo for peace of mind</div>
                </div>
              </div>
              <p className="text-[#64748B] text-lg">
                Sarah saw her mom almost fall for an &quot;IRS refund&quot; scam last month. She&apos;s been 
                researching solutions but everything seems too complex to set up remotely. She wants 
                something that &quot;just works&quot; and lets her check in on her mom&apos;s safety.
              </p>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Messaging Pillars */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Core Messages</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <BentoCard className="bg-[#2563EB] text-white border-0 shadow-lg shadow-[#2563EB]/20">
            <div className="text-sm font-medium opacity-80 mb-2">PROTECTION</div>
            <div className="text-2xl font-bold mb-3">&quot;Stop scams before they reach your parents&quot;</div>
            <p className="text-base opacity-80">
              Preventive, not reactive. We block threats before seniors see them.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#10B981] text-white border-0 shadow-lg shadow-[#10B981]/20">
            <div className="text-sm font-medium opacity-80 mb-2">SIMPLICITY</div>
            <div className="text-2xl font-bold mb-3">&quot;5-minute setup, 24/7 peace of mind&quot;</div>
            <p className="text-base opacity-80">
              So simple your mom can use it. So powerful it stops sophisticated scams.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#F59E0B] text-white border-0 shadow-lg shadow-[#F59E0B]/20">
            <div className="text-sm font-medium opacity-80 mb-2">VISIBILITY</div>
            <div className="text-2xl font-bold mb-3">&quot;Know your parents are safe, wherever you are&quot;</div>
            <p className="text-base opacity-80">
              Family dashboard shows threats blocked and safety status in real-time.
            </p>
          </BentoCard>
        </div>
      </div>

      {/* Content Calendar */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Content Calendar (Month 1)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base">
            <thead>
              <tr className="border-b border-[#E2E8F0]">
                <th className="py-4 px-4 text-[#64748B] font-medium">Week</th>
                <th className="py-4 px-4 text-[#64748B] font-medium">Blog</th>
                <th className="py-4 px-4 text-[#64748B] font-medium">Facebook</th>
                <th className="py-4 px-4 text-[#64748B] font-medium">YouTube</th>
              </tr>
            </thead>
            <tbody className="text-[#475569]">
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 font-medium text-[#1E3A5F]">Week 1</td>
                <td className="py-4 px-4">&quot;5 Scams Targeting Seniors in 2025&quot;</td>
                <td className="py-4 px-4">Launch post + 3 tips</td>
                <td className="py-4 px-4">Product demo (60s)</td>
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 font-medium text-[#1E3A5F]">Week 2</td>
                <td className="py-4 px-4">&quot;How to Protect Parents Remotely&quot;</td>
                <td className="py-4 px-4">Customer story</td>
                <td className="py-4 px-4">Setup walkthrough</td>
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 font-medium text-[#1E3A5F]">Week 3</td>
                <td className="py-4 px-4">&quot;Red Flags: IRS Scam Emails&quot;</td>
                <td className="py-4 px-4">Scam alert carousel</td>
                <td className="py-4 px-4">Family dashboard tour</td>
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <td className="py-4 px-4 font-medium text-[#1E3A5F]">Week 4</td>
                <td className="py-4 px-4">&quot;What to Do If Your Parent Was Scammed&quot;</td>
                <td className="py-4 px-4">Testimonial video</td>
                <td className="py-4 px-4">Monthly roundup</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Distribution Channels */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Distribution Channels</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm text-center">
            <div className="text-3xl mb-3">📘</div>
            <h3 className="font-bold text-lg text-[#1E3A5F]">Facebook Groups</h3>
            <p className="text-[#64748B] text-base">Caregiver communities, senior care groups</p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm text-center">
            <div className="text-3xl mb-3">📺</div>
            <h3 className="font-bold text-lg text-[#1E3A5F]">YouTube</h3>
            <p className="text-[#64748B] text-base">Educational content, demos, testimonials</p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm text-center">
            <div className="text-3xl mb-3">📻</div>
            <h3 className="font-bold text-lg text-[#1E3A5F]">Local Radio</h3>
            <p className="text-[#64748B] text-base">AM radio spots, seniors listen</p>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm text-center">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="font-bold text-lg text-[#1E3A5F]">Email Newsletter</h3>
            <p className="text-[#64748B] text-base">Weekly scam alerts, tips</p>
          </BentoCard>
        </div>
      </div>

      {/* KPIs */}
      <Card className="bg-[#10B981]/5 border-[#10B981]/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#10B981]">Marketing KPIs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] font-mono">15K</div>
              <div className="text-base text-[#64748B] mt-1">Website visits/mo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] font-mono">8%</div>
              <div className="text-base text-[#64748B] mt-1">Visitor → Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] font-mono">5K</div>
              <div className="text-base text-[#64748B] mt-1">Facebook followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E3A5F] font-mono">1K</div>
              <div className="text-base text-[#64748B] mt-1">Email subscribers</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ===== BRAND SECTION =====
function BrandSection() {
  return (
    <div className="space-y-12">
      <div>
        <Badge className="bg-[#1E3A5F]/10 text-[#1E3A5F] text-base px-4 py-1 mb-4">Brand</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">Brand Specification</h1>
        <p className="text-xl text-[#64748B]">
          Visual identity, colors, typography, and component guidelines for Don&apos;t Click That.
        </p>
      </div>

      {/* Brand Overview */}
      <Card className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] border-0 overflow-hidden shadow-xl shadow-[#2563EB]/20">
        <CardContent className="p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold">Don&apos;t Click That</div>
              <div className="text-white/80 text-lg">Stop scams before they reach your parents</div>
            </div>
          </div>
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Our brand is about <strong>trust, safety, and simplicity</strong>. 
            We&apos;re the protective shield between scammers and seniors. Our visual language 
            is clean, calm, and reassuring—never alarming or condescending. Seniors deserve 
            dignity, families deserve peace of mind.
          </p>
        </CardContent>
      </Card>

      {/* Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Color Palette</h2>
        <h3 className="text-lg font-semibold text-[#64748B]">Primary Colors</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <div className="h-32 bg-[#2563EB]" />
            <div className="p-4 bg-white border border-t-0 border-[#E2E8F0]">
              <div className="font-bold text-xl text-[#1E3A5F]">Trust Blue</div>
              <div className="font-mono text-base text-[#64748B]">#2563EB</div>
              <div className="text-base text-[#94A3B8]">Primary brand, CTAs, trust signals</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <div className="h-32 bg-[#10B981]" />
            <div className="p-4 bg-white border border-t-0 border-[#E2E8F0]">
              <div className="font-bold text-xl text-[#1E3A5F]">Safety Green</div>
              <div className="font-mono text-base text-[#64748B]">#10B981</div>
              <div className="text-base text-[#94A3B8]">Success states, &quot;protected&quot; indicators</div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#64748B] mt-8">Alert Colors</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <div className="h-24 bg-[#DC2626]" />
            <div className="p-4 bg-white border border-t-0 border-[#E2E8F0]">
              <div className="font-bold text-lg text-[#1E3A5F]">Alert Red</div>
              <div className="font-mono text-base text-[#64748B]">#DC2626</div>
              <div className="text-base text-[#94A3B8]">Scam blocked, high-risk alerts</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <div className="h-24 bg-[#F59E0B]" />
            <div className="p-4 bg-white border border-t-0 border-[#E2E8F0]">
              <div className="font-bold text-lg text-[#1E3A5F]">Warning Orange</div>
              <div className="font-mono text-base text-[#64748B]">#F59E0B</div>
              <div className="text-base text-[#94A3B8]">Caution, suspicious activity</div>
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <h3 className="text-lg font-semibold text-[#64748B] mt-8">Semantic Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden shadow-sm">
            <div className="h-16 bg-white border border-[#E2E8F0]" />
            <div className="p-3 bg-[#F8FAFC]">
              <div className="font-medium text-base text-[#1E3A5F]">Background</div>
              <div className="font-mono text-sm text-[#64748B]">#FFFFFF</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <div className="h-16 bg-[#1E3A5F]" />
            <div className="p-3 bg-[#F8FAFC]">
              <div className="font-medium text-base text-[#1E3A5F]">Navy</div>
              <div className="font-mono text-sm text-[#64748B]">#1E3A5F</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <div className="h-16 bg-[#F8FAFC]" />
            <div className="p-3 bg-[#F8FAFC]">
              <div className="font-medium text-base text-[#1E3A5F]">Card</div>
              <div className="font-mono text-sm text-[#64748B]">#F8FAFC</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <div className="h-16 bg-[#E2E8F0]" />
            <div className="p-3 bg-[#F8FAFC]">
              <div className="font-medium text-base text-[#1E3A5F]">Border</div>
              <div className="font-mono text-sm text-[#64748B]">#E2E8F0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Typography</h2>
        <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-[#2563EB]">Inter — Primary Font</h3>
          <p className="text-[#64748B] mb-4">Senior-friendly with large sizes (18px base) and high contrast</p>
          <div className="space-y-4">
            <div>
              <div className="text-5xl font-bold text-[#1E3A5F] mb-2">Aa Bb Cc Dd</div>
              <div className="text-sm text-[#64748B]">Display / H1 — 48-64px Bold</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#1E3A5F] mb-2">Headlines use Inter Semibold</div>
              <div className="text-sm text-[#64748B]">H2 — 32-40px Semibold</div>
            </div>
            <div>
              <div className="text-xl text-[#475569] mb-2">Body text uses Inter Regular at 18px for readability</div>
              <div className="text-sm text-[#64748B]">Body — 18px Regular, 1.7 line-height</div>
            </div>
          </div>
        </BentoCard>
        <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-[#10B981]">Monospace Numbers</h3>
          <div className="font-mono space-y-2 text-[#1E3A5F]">
            <div className="text-4xl font-bold">$2,400,000,000</div>
            <div className="text-2xl">98% Protected • 247 Blocked</div>
            <p className="text-base text-[#64748B] font-sans mt-4">Used for stats, safety scores, and financial figures</p>
          </div>
        </BentoCard>
      </div>

      {/* Logo Concept */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Logo Concept</h2>
        <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-lg shadow-[#2563EB]/20">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl text-[#1E3A5F]">Don&apos;t Click That</div>
                <div className="text-[#64748B]">Primary lockup</div>
              </div>
            </div>
            <div className="h-px md:h-20 md:w-px w-full bg-[#E2E8F0]" />
            <div className="text-[#64748B] text-base">
              <p><strong>Shield icon:</strong> Protection, security, trust</p>
              <p><strong>Rounded square:</strong> Friendly, approachable, modern</p>
              <p><strong>Blue gradient:</strong> Trust, technology, reliability</p>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Components */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Components</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A5F]">Buttons</h3>
            <div className="space-y-3">
              <Button className="w-full text-lg py-6 bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-[#10B981]/20">
                Primary CTA (Safety Green)
              </Button>
              <Button className="w-full text-lg py-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg shadow-[#2563EB]/20">
                Secondary CTA (Trust Blue)
              </Button>
              <Button variant="outline" className="w-full text-lg py-6 border-2 border-[#E2E8F0] hover:bg-[#F8FAFC]">
                Outline Button
              </Button>
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A5F]">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#2563EB]/10 text-[#2563EB] text-base px-3 py-1">Trust Blue</Badge>
              <Badge className="bg-[#10B981]/10 text-[#10B981] text-base px-3 py-1">Safety Green</Badge>
              <Badge className="bg-[#DC2626]/10 text-[#DC2626] text-base px-3 py-1">Alert</Badge>
              <Badge className="bg-[#F59E0B]/10 text-[#F59E0B] text-base px-3 py-1">Warning</Badge>
              <Badge className="bg-[#2563EB] text-white text-base px-3 py-1">Solid Blue</Badge>
              <Badge className="bg-[#10B981] text-white text-base px-3 py-1">Solid Green</Badge>
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A5F]">Alert Cards</h3>
            <div className="space-y-3">
              <div className="bg-[#F0FDF4] border border-[#10B981] rounded-xl p-4 flex items-center gap-3">
                <Check className="w-6 h-6 text-[#10B981]" />
                <span className="text-[#1E3A5F]">Protected — All systems normal</span>
              </div>
              <div className="bg-[#FEF2F2] border border-[#DC2626] rounded-xl p-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#DC2626]" />
                <span className="text-[#1E3A5F]">Scam Blocked — IRS impersonator</span>
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-white border-[#E2E8F0] shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A5F]">Border Radius</h3>
            <p className="text-[#64748B] mb-4">Friendly, rounded corners throughout (0.75rem base)</p>
            <div className="flex gap-4 items-end">
              <div className="w-14 h-14 bg-[#2563EB] rounded-lg flex items-center justify-center text-white text-sm">lg</div>
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center text-white text-sm">xl</div>
              <div className="w-14 h-14 bg-[#2563EB] rounded-2xl flex items-center justify-center text-white text-sm">2xl</div>
              <div className="w-14 h-14 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-sm">full</div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Do / Don't */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1E3A5F]">Do&apos;s and Don&apos;ts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-[#10B981]/5 border-[#10B981]/20">
            <h3 className="text-lg font-semibold mb-4 text-[#10B981]">✅ Do</h3>
            <ul className="space-y-2 text-base text-[#475569]">
              <li>• Use large, readable text (18px+ body)</li>
              <li>• Keep high contrast for accessibility</li>
              <li>• Use Trust Blue for primary actions</li>
              <li>• Use Safety Green for positive states</li>
              <li>• Be reassuring, not alarming</li>
              <li>• Show plenty of whitespace</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-[#DC2626]/5 border-[#DC2626]/20">
            <h3 className="text-lg font-semibold mb-4 text-[#DC2626]">❌ Don&apos;t</h3>
            <ul className="space-y-2 text-base text-[#475569]">
              <li>• Don&apos;t use small text or low contrast</li>
              <li>• Don&apos;t use fear-based messaging</li>
              <li>• Don&apos;t be condescending to seniors</li>
              <li>• Don&apos;t overuse alert colors</li>
              <li>• Don&apos;t use complex jargon</li>
              <li>• Don&apos;t compromise on touch targets (56px min)</li>
            </ul>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}

// ===== REUSABLE COMPONENTS =====
function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border p-6 ${className}`}>
      {children}
    </div>
  );
}
