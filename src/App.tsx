/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  Zap, 
  Clock, 
  Users, 
  ArrowRight, 
  Star, 
  Gift, 
  BookOpen, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "917975379678";

const courses = [
  {
    id: 'basic',
    name: 'BASIC',
    price: '399',
    features: [
      'Basics of AI',
      'Introduction to LLMs',
      'Prompt fundamentals'
    ],
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20buy%20the%20Basic%20AI%20course%20for%20399`,
    popular: false
  },
  {
    id: 'standard',
    name: 'STANDARD',
    price: '799',
    features: [
      'Everything in Basic',
      '5 AI categories',
      'LLM tools list'
    ],
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20buy%20the%20Standard%20AI%20course%20for%20799`,
    popular: false
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '999',
    features: [
      'Everything in Standard',
      '10 AI categories',
      '4-week roadmap',
      'Progress tracker',
      'Tools reference'
    ],
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20buy%20the%20Premium%20AI%20course%20for%20999`,
    popular: true
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Freelancer",
    content: "This course changed my workflow. I'm now using AI tools daily to finish projects 3x faster. Best ₹999 I ever spent!",
    avatar: "https://picsum.photos/seed/rahul/100/100"
  },
  {
    name: "Priya Patel",
    role: "Student",
    content: "The roadmap is so clear. I had zero coding knowledge but now I feel like an AI pro. Highly recommended for beginners.",
    avatar: "https://picsum.photos/seed/priya/100/100"
  },
  {
    name: "Ankit Verma",
    role: "Marketing Executive",
    content: "The prompt guide alone is worth the price. My content creation speed has skyrocketed. Simple and effective.",
    avatar: "https://picsum.photos/seed/ankit/100/100"
  }
];

const roadmap = [
  { week: "Week 1", title: "AI Basics", desc: "Understanding the core concepts and how AI works." },
  { week: "Week 2", title: "AI Tools", desc: "Mastering the top tools for productivity and creativity." },
  { week: "Week 3", title: "Advanced LLMs", desc: "Deep dive into ChatGPT, Claude, and advanced prompting." },
  { week: "Week 4", title: "Real-world usage", desc: "Applying everything to build projects and save time." }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">AI<span className="text-blue-500">Mastery</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Why AI', 'Courses', 'Roadmap', 'Testimonials'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020617] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Why AI', 'Courses', 'Roadmap', 'Testimonials'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-2xl font-display font-bold text-white"
                >
                  {item}
                </button>
              ))}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="bg-blue-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-500/20"
              >
                Start Learning Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Clock className="w-3.5 h-3.5" /> Limited seats available
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Master AI Tools & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">LLMs in 30 Days</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              No coding required. Learn AI step-by-step and start using powerful tools to automate your life and career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20start%20learning%20AI%20now!`}
                className="group relative w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Start Learning Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
              <button 
                onClick={() => scrollToSection('courses')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all"
              >
                View Courses
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
              <span className="text-sm font-bold tracking-widest uppercase">ChatGPT</span>
              <span className="text-sm font-bold tracking-widest uppercase">Midjourney</span>
              <span className="text-sm font-bold tracking-widest uppercase">Claude</span>
              <span className="text-sm font-bold tracking-widest uppercase">Gemini</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why AI Section */}
      <section id="why-ai" className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Why Learn AI Now?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The world is changing fast. Don't get left behind in the AI revolution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8 text-blue-500" />, title: "AI is the Future", desc: "Every industry is being disrupted. AI skills are no longer optional." },
              { icon: <Zap className="w-8 h-8 text-indigo-500" />, title: "Save Time", desc: "Automate boring tasks and finish 8 hours of work in just 2 hours." },
              { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: "High Income Skill", desc: "AI experts are in high demand. Command higher salaries and fees." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Choose Your Path</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Affordable, high-quality AI education for everyone.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {courses.map((course) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 ${
                  course.popular 
                    ? 'bg-blue-600/10 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-10' 
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-lg">
                    Most Popular • Best Value
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-sm font-black tracking-[0.2em] uppercase mb-4 ${course.popular ? 'text-blue-400' : 'text-slate-500'}`}>
                    {course.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-bold text-white">₹{course.price}</span>
                    <span className="text-slate-500 text-sm">/one-time</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${course.popular ? 'text-blue-400' : 'text-slate-500'}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl text-center font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    course.popular 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Buy Now <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Everything You Need to <br />
                <span className="text-blue-500">Succeed with AI</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Learn AI in 30 days", desc: "A structured, fast-paced curriculum designed for busy people." },
                  { title: "No coding required", desc: "Focus on tools and strategies, not complex programming." },
                  { title: "Beginner friendly", desc: "We start from the absolute basics and build up." },
                  { title: "Real-world tools", desc: "Learn tools you can actually use in your job or business today." },
                  { title: "Lifetime access", desc: "Buy once, keep the knowledge and resources forever." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
              <div className="relative p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/ai-tech/800/600" 
                  alt="AI Technology" 
                  className="rounded-2xl w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Users className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Join 5,000+ Students</p>
                      <p className="text-slate-400 text-xs">Start your journey today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Your 30-Day Roadmap</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A step-by-step guide to becoming an AI power user.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block" />
            
            <div className="space-y-12">
              {roadmap.map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-2 block">{step.week}</span>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/40 shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">What Our Students Say</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed flex-grow">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Gift className="w-64 h-64" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                  Exclusive Bonuses
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get Extra Resources Worth ₹4,999 for FREE</h2>
                <p className="text-blue-100 text-lg mb-8">Enroll in any course today and get these bonuses instantly.</p>
                
                <div className="space-y-4">
                  {[
                    { icon: <BookOpen className="w-5 h-5" />, text: "Free AI tools list (100+ tools)" },
                    { icon: <Zap className="w-5 h-5" />, text: "Custom AI Templates for business" },
                    { icon: <MessageCircle className="w-5 h-5" />, text: "Ultimate Prompt Engineering Guide" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full max-w-sm p-8 rounded-3xl bg-white text-[#020617] shadow-2xl"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Limited Time Offer</h3>
                    <p className="text-slate-500 text-sm mb-6">Bonuses expire in:</p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {['02', '14', '55'].map((val, i) => (
                        <div key={i} className="bg-slate-100 p-3 rounded-xl">
                          <span className="text-2xl font-bold block">{val}</span>
                          <span className="text-[10px] uppercase font-bold text-slate-400">{['Hrs', 'Min', 'Sec'][i]}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20the%20AI%20course%20with%20all%20bonuses!`}
                      className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all"
                    >
                      Claim My Bonuses Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">Start Your AI Journey Today</h2>
          <p className="text-xl text-slate-400 mb-12">Don't wait for the future to happen to you. Build it with AI.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20start%20my%20AI%20journey%20today!`}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-green-600/20 active:scale-95"
          >
            <MessageCircle className="w-6 h-6 fill-current" /> Message on WhatsApp Now
          </a>
          <p className="mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> 100% Secure Payment via WhatsApp
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-blue-500 w-6 h-6 fill-current" />
            <span className="text-lg font-display font-bold text-white">AI Mastery</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 AI Mastery Course. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-600/40 group"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-[#020617] px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Need help? Chat with us!
        </span>
      </motion.a>
    </div>
  );
}
