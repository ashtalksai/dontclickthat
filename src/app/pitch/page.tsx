'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  XCircle,
  Users,
  DollarSign,
  Target,
  LineChart,
  Map,
  Calendar,
  UserCircle,
  HandCoins,
  Mail,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageSquare
} from 'lucide-react'

// Slide components
function CoverSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6">
            <Shield className="w-14 h-14 text-white" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-4"
        >
          Don&apos;t Click That
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-primary font-medium mb-8"
        >
          AI Scam Protection for Seniors
        </motion.p>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          &quot;Protecting the people you love from the scams they can&apos;t see coming.&quot;
        </motion.p>
      </div>
    </div>
  )
}

function ProblemSlide() {
  const stats = [
    { value: '$2.4B', label: 'Lost to elder fraud annually', icon: DollarSign },
    { value: '1 in 6', label: 'Seniors fall victim each year', icon: Users },
    { value: '$50K', label: 'Average loss per victim', icon: AlertTriangle },
    { value: '54M', label: 'Adult children managing aging parents', icon: Users },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-primary">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/70">The Problem</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Elder Fraud Is a $2.4 Billion Crisis
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur rounded-xl p-6 border-l-4 border-secondary"
        >
          <p className="text-xl text-white italic">
            &quot;My mom lost $8,000 to a fake IRS email. I had no idea until it was too late.&quot;
          </p>
          <p className="text-white/70 mt-2">— Real family testimonial</p>
        </motion.div>
      </div>
    </div>
  )
}

function WhyNowSlide() {
  const trends = [
    {
      icon: Zap,
      title: 'AI-Powered Scams',
      description: 'ChatGPT makes phishing emails indistinguishable from real ones',
    },
    {
      icon: Users,
      title: 'Aging Boom',
      description: '10,000 Baby Boomers turn 65 every day until 2030',
    },
    {
      icon: Phone,
      title: 'Digital Seniors',
      description: '73% of seniors use smartphones — more attack surface than ever',
    },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Timing</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          The Perfect Storm
        </h2>
        <p className="text-xl text-muted-foreground mb-12">Three trends converging in 2025</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trends.map((trend, i) => (
            <motion.div
              key={trend.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <trend.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{trend.title}</h3>
              <p className="text-muted-foreground">{trend.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-center text-primary font-medium"
        >
          Seniors are online. Scammers are smarter. Traditional protection isn&apos;t enough.
        </motion.p>
      </div>
    </div>
  )
}

function SolutionSlide() {
  const steps = [
    { num: '1', title: 'Connect', description: 'Family member installs in 10 minutes' },
    { num: '2', title: 'Screen', description: 'AI analyzes every message for scam patterns' },
    { num: '3', title: 'Protect', description: 'Suspicious messages flagged; family dashboard shows threats' },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-secondary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">The Solution</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          AI That Watches Out, So You Don&apos;t Have To
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          24/7 scam protection that screens emails, texts, and calls <strong>before</strong> they reach your loved ones.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <span className="inline-block bg-secondary/10 text-secondary px-6 py-3 rounded-full text-lg font-medium">
            Prevention, not reaction.
          </span>
        </motion.div>
      </div>
    </div>
  )
}

function WhyDifferentSlide() {
  const features = [
    { name: 'Stops phishing emails', competitors: [true, false, false], us: true },
    { name: 'Screens text messages', competitors: [false, false, false], us: true },
    { name: 'Detects scam calls', competitors: [false, false, false], us: true },
    { name: 'Family dashboard', competitors: [false, false, false], us: true },
    { name: 'Real-time protection', competitors: [false, false, false], us: true },
    { name: 'Privacy-first design', competitors: [false, false, true], us: true },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Differentiation</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          The Only Solution That Does All Three
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-4 text-lg font-medium text-muted-foreground">Feature</th>
                <th className="p-4 text-lg font-medium text-muted-foreground text-center">Email Filters</th>
                <th className="p-4 text-lg font-medium text-muted-foreground text-center">Identity Monitor</th>
                <th className="p-4 text-lg font-medium text-muted-foreground text-center">Advisors</th>
                <th className="p-4 text-lg font-bold text-primary text-center bg-primary/5 rounded-t-xl">Don&apos;t Click That</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <motion.tr
                  key={feature.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="border-t border-border"
                >
                  <td className="p-4 text-foreground font-medium">{feature.name}</td>
                  {feature.competitors.map((has, j) => (
                    <td key={j} className="p-4 text-center">
                      {has ? (
                        <CheckCircle2 className="w-6 h-6 text-muted-foreground mx-auto" />
                      ) : (
                        <XCircle className="w-6 h-6 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                  ))}
                  <td className="p-4 text-center bg-primary/5">
                    <CheckCircle2 className="w-6 h-6 text-secondary mx-auto" />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-center text-primary font-medium mt-8"
        >
          We prevent the attack. Others alert you after the damage.
        </motion.p>
      </div>
    </div>
  )
}

function MarketSlide() {
  const markets = [
    { label: 'TAM', value: '$2.4B', description: '54M families × $39/mo potential', color: 'bg-primary' },
    { label: 'SAM', value: '$600M', description: '15M families seeking elder care', color: 'bg-primary/70' },
    { label: 'SOM', value: '$2.3M', description: '5,000 customers Year 1', color: 'bg-secondary' },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-primary">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <LineChart className="w-5 h-5 text-white" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/70">Market Size</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          A $2.4B Problem (And Growing)
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {markets.map((market, i) => (
            <motion.div
              key={market.label}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="bg-white/10 backdrop-blur rounded-xl p-8 text-center"
            >
              <div className={`w-20 h-20 ${market.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold">{market.label}</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{market.value}</div>
              <p className="text-white/80">{market.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Adjacent Markets</h3>
            <ul className="text-white/80 space-y-2">
              <li>• Corporate employee benefit: +$500M</li>
              <li>• International expansion: +$1.2B</li>
            </ul>
          </div>
          <div className="bg-secondary/20 backdrop-blur rounded-xl p-6 border-2 border-secondary">
            <h3 className="text-xl font-bold text-white mb-2">Growth Rate</h3>
            <p className="text-white/80">Elder fraud growing <span className="text-secondary font-bold">25%+ annually</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function BusinessModelSlide() {
  const projections = [
    { milestone: 'Month 3', customers: '200', mrr: '$7,800', arr: '$93,600' },
    { milestone: 'Month 6', customers: '500', mrr: '$19,500', arr: '$234,000' },
    { milestone: 'Year 1', customers: '2,000', mrr: '$78,000', arr: '$936,000' },
    { milestone: 'Year 2', customers: '5,000', mrr: '$195,000', arr: '$2.34M' },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Business Model</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Simple, Scalable, High-Margin SaaS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-muted-foreground mb-1">Monthly</h3>
            <div className="text-4xl font-bold text-foreground mb-2">$39<span className="text-lg font-normal text-muted-foreground">/family</span></div>
            <p className="text-sm text-muted-foreground">Covers entire household</p>
          </div>
          
          <div className="bg-primary text-white rounded-xl p-6 relative">
            <span className="absolute -top-3 left-6 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
            <h3 className="font-semibold opacity-80 mb-1">Annual</h3>
            <div className="text-4xl font-bold mb-2">$390<span className="text-lg font-normal opacity-80">/year</span></div>
            <p className="text-sm opacity-80">Save $78 annually</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-muted-foreground mb-1">Advisor Referral</h3>
            <div className="text-4xl font-bold text-foreground mb-2">20%<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
            <p className="text-sm text-muted-foreground">$7.80 recurring commission</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary">11.7x</div>
            <div className="text-sm text-muted-foreground">LTV:CAC</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">Gross Margin</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary">$1,404</div>
            <div className="text-sm text-muted-foreground">LTV (36mo)</div>
          </div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="overflow-x-auto bg-muted/30 rounded-xl p-4"
        >
          <table className="w-full">
            <thead>
              <tr className="text-left text-muted-foreground text-sm">
                <th className="p-2">Milestone</th>
                <th className="p-2 text-center">Customers</th>
                <th className="p-2 text-center">MRR</th>
                <th className="p-2 text-center">ARR</th>
              </tr>
            </thead>
            <tbody>
              {projections.map((row) => (
                <tr key={row.milestone} className="border-t border-border">
                  <td className="p-2 font-medium">{row.milestone}</td>
                  <td className="p-2 text-center">{row.customers}</td>
                  <td className="p-2 text-center text-primary font-medium">{row.mrr}</td>
                  <td className="p-2 text-center font-bold">{row.arr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  )
}

function TractionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-secondary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Traction</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Early Proof of Concept
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Current Status</h3>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground">Product LIVE</div>
                  <div className="text-muted-foreground">dontclickthat.ashketing.com</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
                <Users className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground">Beta Users</div>
                  <div className="text-muted-foreground">Families testing</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground">Advisor Interest</div>
                  <div className="text-muted-foreground">12 signed up for partnership info</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Social Proof</h3>
            <div className="bg-primary text-white rounded-xl p-8">
              <p className="text-xl italic mb-4">
                &quot;My dad clicks everything. With Don&apos;t Click That, I finally sleep at night knowing he&apos;s protected.&quot;
              </p>
              <p className="text-white/80">— Sarah M., 42, New York</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">99.7%</div>
                <div className="text-sm text-muted-foreground">Detection accuracy</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-secondary">&lt;3s</div>
                <div className="text-sm text-muted-foreground">Analysis time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function GTMSlide() {
  const channels = [
    {
      icon: Users,
      title: 'Financial Advisors',
      percentage: '30%',
      description: 'RIAs protect client AUM, 20% referral commission',
      target: '100 partnerships by Month 6',
      color: 'bg-primary',
    },
    {
      icon: MessageSquare,
      title: 'Organic Community',
      percentage: '40%',
      description: 'Reddit, Facebook, YouTube content',
      target: '2.3M combined reach',
      color: 'bg-secondary',
    },
    {
      icon: Target,
      title: 'Paid Acquisition',
      percentage: '30%',
      description: 'Google Ads, Facebook, podcasts',
      target: 'CAC < $150',
      color: 'bg-chart-3',
    },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Map className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Go-to-Market</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Three-Pronged Distribution
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className={`w-14 h-14 ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                <channel.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{channel.percentage}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{channel.title}</h3>
              <p className="text-muted-foreground mb-4">{channel.description}</p>
              <div className="text-sm text-primary font-medium">Target: {channel.target}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-muted/50 rounded-xl p-6"
        >
          <h3 className="font-bold text-foreground mb-4">Timeline</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <div className="font-medium">Month 1-3</div>
                <div className="text-muted-foreground">Organic + advisor (validate PMF)</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <div className="font-medium">Month 4-6</div>
                <div className="text-muted-foreground">Scale paid (CAC &lt; $150)</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <div className="font-medium">Month 7-12</div>
                <div className="text-muted-foreground">AARP, Pill Pack partnerships</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function CompetitionSlide() {
  const competitors = [
    { name: 'Norton/McAfee', weakness: 'Rules-based, email only' },
    { name: 'LifeLock', weakness: 'Alerts after fraud, doesn\'t prevent' },
    { name: 'Truecaller', weakness: 'Calls only, no AI explanation' },
    { name: 'Gmail Filters', weakness: 'Catches spam, not social engineering' },
  ]
  
  const moats = [
    { title: 'Multi-channel', desc: 'Email + SMS + calls' },
    { title: 'AI-first', desc: 'Adapts to new tactics' },
    { title: 'Family dashboard', desc: 'Privacy-respecting visibility' },
    { title: 'Education layer', desc: 'Explains WHY it\'s a scam' },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-primary">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/70">Competition</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          We Own a Blue Ocean
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">The Field</h3>
            <div className="space-y-3">
              {competitors.map((comp) => (
                <div key={comp.name} className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center gap-4">
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">{comp.name}</div>
                    <div className="text-sm text-white/70">{comp.weakness}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Moat</h3>
            <div className="space-y-3">
              {moats.map((moat) => (
                <div key={moat.title} className="bg-secondary/20 border border-secondary rounded-xl p-4 flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">{moat.title}</div>
                    <div className="text-sm text-white/70">{moat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function RoadmapSlide() {
  const quarters = [
    {
      q: 'Q1 2025',
      title: 'Foundation',
      items: ['Launch MVP', '3 advisor partnerships', '200 paying customers'],
    },
    {
      q: 'Q2 2025',
      title: 'Scale',
      items: ['Add call screening', 'Family dashboard app', '1,000 customers'],
    },
    {
      q: 'Q3 2025',
      title: 'Distribution',
      items: ['AARP partnership', 'White-label for advisors', 'Canada/UK pilot'],
    },
    {
      q: 'Q4 2025',
      title: 'Evolution',
      items: ['AI learning from corrections', 'Scam education module', 'Care platform integrations'],
    },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Roadmap</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          What&apos;s Next
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {quarters.map((quarter, i) => (
            <motion.div
              key={quarter.q}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="text-sm font-bold text-primary mb-1">{quarter.q}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{quarter.title}</h3>
                <ul className="space-y-2">
                  {quarter.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i < quarters.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <UserCircle className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">The Team</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Built by People Who&apos;ve Been There
        </h2>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 max-w-lg mx-auto mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <UserCircle className="w-16 h-16 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Ash Hatef</h3>
          <p className="text-primary font-medium mb-4">Founder & Builder</p>
          <p className="text-muted-foreground text-lg italic">
            &quot;My grandmother lost money to a scam. I built this so no one else has to go through that.&quot;
          </p>
        </motion.div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground"
        >
          Currently bootstrapped. Fundraising to build full-time team.
        </motion.p>
      </div>
    </div>
  )
}

function AskSlide() {
  const useFunds = [
    { label: 'Product', pct: 40, color: 'bg-primary' },
    { label: 'Marketing', pct: 30, color: 'bg-secondary' },
    { label: 'Team', pct: 20, color: 'bg-chart-3' },
    { label: 'Operations', pct: 10, color: 'bg-chart-5' },
  ]
  
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-primary">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <HandCoins className="w-5 h-5 text-white" />
          </span>
          <span className="text-sm uppercase tracking-widest text-white/70">The Ask</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Join Us in Protecting 54 Million Families
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">$500K Seed Round</h3>
            <div className="space-y-4">
              {useFunds.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded ${item.color}`} />
                  <div className="flex-1 text-white">{item.label}</div>
                  <div className="text-white font-bold">{item.pct}%</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-secondary/20 border border-secondary rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">18-Month Milestones</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                5,000 paying customers ($195K MRR)
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                100 financial advisor partnerships
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                Breakeven on unit economics
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                Positioned for Series A ($3-5M)
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl text-white text-center font-medium"
        >
          Let&apos;s protect the people who protected us.
        </motion.p>
      </div>
    </div>
  )
}

function ContactSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-6">
            <Shield className="w-14 h-14 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-xl text-foreground">hello@chimestream.com</span>
          </div>
          <a 
            href="https://dontclickthat.ashketing.com" 
            target="_blank"
            className="block bg-primary text-white rounded-xl p-6 text-xl font-medium hover:bg-primary/90 transition"
          >
            dontclickthat.ashketing.com
          </a>
        </motion.div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-primary font-medium"
        >
          Because clicking costs more than $39.
        </motion.p>
      </div>
    </div>
  )
}

// Main pitch deck component
const slides = [
  { id: 1, component: <CoverSlide /> },
  { id: 2, component: <ProblemSlide /> },
  { id: 3, component: <WhyNowSlide /> },
  { id: 4, component: <SolutionSlide /> },
  { id: 5, component: <WhyDifferentSlide /> },
  { id: 6, component: <MarketSlide /> },
  { id: 7, component: <BusinessModelSlide /> },
  { id: 8, component: <TractionSlide /> },
  { id: 9, component: <GTMSlide /> },
  { id: 10, component: <CompetitionSlide /> },
  { id: 11, component: <RoadmapSlide /> },
  { id: 12, component: <TeamSlide /> },
  { id: 13, component: <AskSlide /> },
  { id: 14, component: <ContactSlide /> },
]

export default function PitchDeck() {
  const [current, setCurrent] = useState(0)
  
  const goNext = useCallback(() => {
    setCurrent(c => Math.min(c + 1, slides.length - 1))
  }, [])
  
  const goPrev = useCallback(() => {
    setCurrent(c => Math.max(c - 1, 0))
  }, [])
  
  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])
  
  // Touch swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      const diff = touchStartX - touchEndX
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext()
        else goPrev()
      }
    }
    
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-background">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="h-full w-full"
        >
          {slides[current].component}
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows - large for seniors */}
      <button
        onClick={goPrev}
        disabled={current === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-card/80 backdrop-blur border border-border rounded-full flex items-center justify-center hover:bg-card transition disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-foreground" />
      </button>
      
      <button
        onClick={goNext}
        disabled={current === slides.length - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-card/80 backdrop-blur border border-border rounded-full flex items-center justify-center hover:bg-card transition disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-foreground" />
      </button>
      
      {/* Progress dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full border border-border">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      
      {/* Slide counter */}
      <div className="fixed top-6 right-6 bg-card/80 backdrop-blur px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground">
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
