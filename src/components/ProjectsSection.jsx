import React, { useState } from 'react'
import { ArrowUpRight, Sparkles, ExternalLink, X, CheckCircle, Smartphone, Layout, Layers, Users, Eye } from 'lucide-react'

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'Mobile App', 'Dashboard / Web', 'UX Case Study', 'Design System']

  const projects = [
    {
      id: 1,
      title: 'Aura — Mental Wellness & Habit Companion',
      category: 'Mobile App',
      tagline: 'Personalized mindfulness, mood tracking, and science-backed routine building.',
      stats: '4.8 App Rating · +62% User Retention',
      color: 'from-orange-500/20 to-amber-500/10',
      accentColor: '#FF5B26',
      badge: 'Featured Case Study',
      deliverables: ['iOS App Design', 'UX Research', 'Micro-Interactions', 'Interactive Prototype'],
      overview:
        'Conducted user interviews with 25+ university students and young professionals to design a serene, non-intrusive mental health tracking experience with intelligent gentle nudges.',
      problem:
        'Existing wellness apps felt overwhelmed by complex charts and repetitive notifications, leading to high drop-off within 7 days.',
      solution:
        'Designed an organic, glanceable mood interface with tactile haptic feedback, streak milestones, and custom audio reflection sessions.',
      metrics: ['+62% 30-day retention', '4.8/5 user satisfaction score', 'Featured in SID Design Showcase 2024'],
    },
    {
      id: 2,
      title: 'FinSync — Neobanking & Wealth Dashboard',
      category: 'Dashboard / Web',
      tagline: 'Real-time liquidity, automated portfolio rebalancing, and smart tax forecasting.',
      stats: '$2.4M Volume Tracked · 0.8s Task Completion',
      color: 'from-blue-600/20 to-indigo-600/10',
      accentColor: '#3B82F6',
      badge: 'Client Project',
      deliverables: ['Web Dashboard', 'Design System', 'Data Visualization', 'Dark Mode UI'],
      overview:
        'A comprehensive SaaS dashboard designed for high-net-worth freelance creators and SME founders to manage multi-currency incomes without financial clutter.',
      problem:
        'Freelancers faced disjointed financial spreadsheets, manual tax estimates, and cluttered legacy banking apps.',
      solution:
        'Constructed modular widgets with customizable dashboard grids, intelligent cash-flow runway alerts, and one-tap invoice generation.',
      metrics: ['68% reduction in monthly bookkeeping time', 'Adopted by 1,200+ early beta freelancers'],
    },
    {
      id: 3,
      title: 'LearnCraft — Collaborative EdTech for Designers',
      category: 'UX Case Study',
      tagline: 'Peer-to-peer design critique sessions, live Figma syncing, and mentorship matchmaking.',
      stats: 'Symbiosis Academic Project · 1st Place UI/UX Award',
      color: 'from-emerald-500/20 to-teal-500/10',
      accentColor: '#10B981',
      badge: 'Academic Capstone',
      deliverables: ['User Testing', 'Wireframing', 'Information Architecture', 'Figma Prototype'],
      overview:
        'Developed as an in-depth research capstone at Symbiosis Institute of Design to address the gap in constructive remote design critiques for design students.',
      problem:
        'Design students struggled to receive structured, contextual feedback on early wireframes outside scheduled classroom hours.',
      solution:
        'Built a real-time voice & canvas critique tool with timestamped feedback markers, rubric evaluation rubrics, and portfolio exports.',
      metrics: ['100% positive validation among SID student cohort', 'Top Honors at SID Design Innovation Gala'],
    },
    {
      id: 4,
      title: 'UrbanBite — Hyperlocal Food & Artisan Discovery',
      category: 'Mobile App',
      tagline: 'Direct-to-consumer gourmet street food discovery with real-time live kitchen tracker.',
      stats: '+45% Checkout Velocity',
      color: 'from-rose-500/20 to-pink-500/10',
      accentColor: '#F43F5E',
      badge: 'Freelance Deliverable',
      deliverables: ['Mobile UI', 'Design Tokens', 'User Journey Mapping'],
      overview:
        'Created for an artisanal cloud kitchen venture, streamlining the ordering process down to 3 intuitive taps.',
      problem:
        'High cart abandonment due to cluttered menus and ambiguous delivery timelines.',
      solution:
        'Re-engineered visual menu cards with high-fidelity food photography, dietary filter toggles, and lively progress animations.',
      metrics: ['45% boost in checkout completion', 'Average session time reduced from 4.2 mins to 1.8 mins'],
    },
    {
      id: 5,
      title: 'Nova UI — Scalable Multi-Brand Design System',
      category: 'Design System',
      tagline: '500+ atomic components, WCAG AAA accessibility, and automated variable tokens.',
      stats: '500+ Components · 100% WCAG AAA Compliant',
      color: 'from-purple-500/20 to-violet-500/10',
      accentColor: '#8B5CF6',
      badge: 'System Architecture',
      deliverables: ['Figma Variables', 'Component Library', 'Style Guide Documentation'],
      overview:
        'A comprehensive design system created to unify brand guidelines across iOS, Android, and Web platforms with strict accessibility standards.',
      problem:
        'Inconsistent UI components, lack of standardized color contrast, and sluggish handoff between design and front-end teams.',
      solution:
        'Architected semantic design tokens, auto-layout 5.0 components, component states (default, hover, focus, disabled), and clear markdown documentation.',
      metrics: ['4x faster prototyping turnaround for team designers', 'Zero accessibility contrast errors'],
    },
    {
      id: 6,
      title: 'EcoRoute — Smart Transit & Carbon Footprint Map',
      category: 'UX Case Study',
      tagline: 'Gamified urban commute routing that calculates and offsets daily transport emissions.',
      stats: 'Research & UX Concept',
      color: 'from-cyan-500/20 to-blue-500/10',
      accentColor: '#06B6D4',
      badge: 'Concept Study',
      deliverables: ['Contextual Inquiries', 'Service Blueprint', 'Interactive Prototype'],
      overview:
        'Explored urban transit patterns in Pune to incentivize eco-friendly metro, cycling, and electric bus rides through gamified eco-credits.',
      problem:
        'Commuters lack transparent visibility into how single-occupancy vehicle travel affects personal and community carbon output.',
      solution:
        'Integrated live multimodal route comparisons highlighting both time saved and carbon footprint reduced with rewards redeemable at local cafes.',
      metrics: ['88% user willingness to shift commute modes on test trials'],
    },
  ]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FBFBFB] relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5B26] tracking-wide mb-2">
              <span className="w-4 h-0.5 bg-[#FF5B26]"></span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight flex items-center gap-3">
              Featured Case Studies
              <Sparkles className="w-6 h-6 text-[#FF5B26] animate-pulse hidden sm:inline" />
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Project Visual Card Preview */}
                <div
                  className={`w-full h-52 sm:h-56 rounded-2xl bg-gradient-to-br ${project.color} border border-neutral-200/60 p-5 flex flex-col justify-between relative overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-300`}
                >
                  {/* Top Bar: Badge & Category */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-sm text-neutral-900 shadow-sm">
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-900/80 text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Visual Graphic Representation */}
                  <div className="flex items-center justify-center my-auto z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      {project.category === 'Mobile App' ? (
                        <Smartphone className="w-8 h-8 text-[#FF5B26]" />
                      ) : project.category === 'Design System' ? (
                        <Layers className="w-8 h-8 text-purple-600" />
                      ) : (
                        <Layout className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Stats Preview */}
                  <div className="flex items-center justify-between z-10 text-[11px] font-medium text-neutral-700 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/60">
                    <span>{project.stats}</span>
                    <span className="flex items-center gap-1 text-[#FF5B26] font-bold">
                      Explore <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-[#FF5B26] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>
              </div>

              {/* Tags & Action Arrow */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables.slice(0, 2).map((d) => (
                    <span
                      key={d}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-[11px] font-medium"
                    >
                      {d}
                    </span>
                  ))}
                  {project.deliverables.length > 2 && (
                    <span className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-500 text-[11px] font-medium">
                      +{project.deliverables.length - 2}
                    </span>
                  )}
                </div>

                <div className="w-9 h-9 rounded-full bg-neutral-100 group-hover:bg-[#FF5B26] text-neutral-700 group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Case Study Viewer */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl rounded-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-neutral-100 relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEEE8] text-[#FF5B26] text-xs font-bold mb-3">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                {selectedProject.title}
              </h3>

              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                {selectedProject.tagline}
              </p>

              {/* Deliverables Badges */}
              <div className="flex flex-wrap gap-2 my-5">
                {selectedProject.deliverables.map((del) => (
                  <span
                    key={del}
                    className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-xs font-semibold"
                  >
                    {del}
                  </span>
                ))}
              </div>

              {/* Case Study Details */}
              <div className="space-y-4 pt-4 border-t border-neutral-100 text-sm">
                <div>
                  <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider mb-1 text-[#FF5B26]">
                    Problem Statement
                  </h4>
                  <p className="text-neutral-700 leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider mb-1 text-[#FF5B26]">
                    UX & Design Solution
                  </h4>
                  <p className="text-neutral-700 leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider mb-2 text-[#FF5B26]">
                    Key Metrics & Impact
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-neutral-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">
                  Designed by Ketaki Haridas (SID)
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#262626] transition-all no-underline"
                >
                  Discuss Case Study
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
