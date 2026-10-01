import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  Calendar,
  Users,
  Briefcase,
  ShieldCheck,
  Edit3,
  Building,
  Sparkles,
} from 'lucide-react';
import { EngagementMetadataModal } from '../components/EngagementMetadataModal';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: FULL-BLEED ARCHITECTURAL HERO TITLE COVER (COVER C)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Global Investor Days & Annual Shareholder Meetings: Commands maximum visual
 *    authority through panoramic architectural imagery and high-contrast typography.
 * 2. Mega-Merger & Transformational Acquisition Kickoffs: Imparts institutional
 *    scale and strategic gravitas for multi-billion dollar joint ventures.
 * 3. Vision 2030 / Long-Range Strategic Masterplans: Establishing an inspiring,
 *    forward-looking aesthetic for multi-year corporate roadmaps.
 * 4. Premium Executive Briefings: Designed for dark-room projection environments
 *    and ultra-high-definition executive displays.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Contrast & Readability: Ensure dark gradient scrims preserve minimum 7:1 contrast
 *   ratios across all headline and metadata typography.
 * - Glassmorphic Metadata Dock: Keep engagement metadata anchored in a disciplined,
 *   low-opacity bottom dock rather than floating haphazardly.
 * - Single Strategic Imperative: The headline must declare the overarching value unlock.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide00C_FullBleedHeroTitleCover: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont, engagementInfo } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fallback high-resolution architectural background
  const bgImage =
    engagementInfo.titleHeroImage ||
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';

  return (
    <div
      className="relative w-full h-full bg-neutral-950 text-white flex flex-col justify-between overflow-hidden select-none p-8 sm:p-12 md:p-14 lg:p-16"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Background Architectural Image with Multi-Layered Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Architectural Masterplan"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        {/* Deep Executive Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{ backgroundColor: dominantColor.hex }}
        />
      </div>

      {/* Top Bar: Brand, Logo & Modal Trigger */}
      <div className="relative z-10 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {engagementInfo.logoUrl ? (
            <div className="p-1.5 px-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 max-h-12 flex items-center justify-center">
              <img
                src={engagementInfo.logoUrl}
                alt="Client Logo"
                className="max-h-7 w-auto object-contain brightness-100"
              />
            </div>
          ) : (
            <div
              className="w-2.5 h-8 rounded-full"
              style={{ backgroundColor: dominantColor.hex }}
            />
          )}

          <div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-white/90">
              STRATEGIC ADVISORY & MANAGEMENT CONSULTING
            </span>
            <div className="text-[10px] text-white/60 font-mono flex items-center gap-2">
              <span>{engagementInfo.engagementPractice}</span>
              <span>•</span>
              <span>{engagementInfo.clientName}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold transition-all cursor-pointer shadow-lg"
        >
          <Edit3 size={13} />
          <span>Edit Cover Details</span>
        </button>
      </div>

      {/* Center: Hero Strategic Mandate & Typography */}
      <div className="relative z-10 my-auto py-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span>CONFIDENTIAL BOARD DELIVERABLE | {engagementInfo.engagementCode}</span>
          </div>

          <h1
            className={`${fontClass} text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.1]`}
          >
            {engagementInfo.deckTitle}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-200/90 font-sans max-w-3xl leading-relaxed">
            {engagementInfo.deckSubtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom: Frosted Glass Governance Metadata Dock */}
      <div className="relative z-10 shrink-0">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${dominantColor.hex}33` }}
            >
              <Building size={18} style={{ color: dominantColor.hex }} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">
                Client Organization
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white truncate block">
                {engagementInfo.clientName}
              </span>
              <span className="text-[10px] text-white/70 block truncate">
                {engagementInfo.clientSubtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Users size={18} className="text-white/80" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">
                Advisory Leadership
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white truncate block">
                {engagementInfo.engagementTeam}
              </span>
              <span className="text-[10px] text-white/70 block truncate">
                {engagementInfo.engagementPractice}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Calendar size={18} className="text-white/80" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">
                Presentation Date
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white block">
                {engagementInfo.presentationDate}
              </span>
              <span className="text-[10px] text-white/70 block font-mono">
                Version 3.2 Final Readout
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">
                Governance Classification
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white block">
                Strictly Confidential
              </span>
              <span className="text-[10px] text-white/70 block font-mono">
                {engagementInfo.engagementCode}
              </span>
            </div>
          </div>
        </div>
      </div>

      <EngagementMetadataModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
