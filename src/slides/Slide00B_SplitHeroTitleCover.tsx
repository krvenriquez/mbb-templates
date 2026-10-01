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
} from 'lucide-react';
import { EngagementMetadataModal } from '../components/EngagementMetadataModal';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: SPLIT-HERO ARCHITECTURAL TITLE COVER
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Flagship Board & Investor Presentations: When maximum visual gravitas and
 *    modern executive polish are required to command audience attention.
 * 2. High-Stakes M&A & Private Equity Readouts: Introducing major investment
 *    theses, commercial due diligence findings, or restructuring mandates.
 * 3. Public Thought Leadership & Whitepapers: Polished executive briefings intended
 *    for external distribution, media, or regulatory scrutiny.
 * 4. Corporate Offsite & Strategy Summits: Opening multi-day leadership retreats
 *    with a cohesive visual identity matching corporate branding.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Visual Balance (50/50 Split): Balance photographic emotional weight with
 *   crisp, uncluttered typography on the content side.
 * - Architectural Photography: Top-tier strategy firms (McKinsey, BCG, Bain)
 *   utilize abstract architectural photography (geometric glass facades, cantilevered
 *   atria, or panoramic city skylines) rather than literal stock photography.
 * - Client Co-Branding: Position the client organization name alongside or above
 *   the engagement team credentials to emphasize collaborative partnership.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide00B_SplitHeroTitleCover: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont, engagementInfo } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative w-full h-full bg-white text-neutral-900 flex overflow-hidden select-none"
      style={{ aspectRatio: '16/9' }}
    >
      {/* LEFT 45%: High-Contrast Architectural Hero Image Banner */}
      <div className="relative w-[45%] h-full bg-neutral-950 overflow-hidden shrink-0 flex flex-col justify-between p-8 sm:p-10">
        {/* Background Hero Image with Consulting Gradient Overlay */}
        <img
          src={engagementInfo.titleHeroImage}
          alt="Architecture Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105 transition-all duration-700 hover:scale-100"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40"
        />

        {/* Top Branding / Logo Container */}
        <div className="relative z-10 flex items-center justify-between">
          {engagementInfo.logoUrl ? (
            <div className="p-2 rounded bg-white/95 backdrop-blur-xs shadow-md max-w-[180px] max-h-12 flex items-center justify-center">
              <img
                src={engagementInfo.logoUrl}
                alt="Client or Firm Logo"
                className="max-h-9 max-w-full object-contain"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <div
                className="w-4 h-4 rounded-xs shadow-sm"
                style={{ backgroundColor: dominantColor.hex }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                {engagementInfo.firmName || '[CONSULTING PRACTICE]'}
              </span>
            </div>
          )}

          <span
            className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white shadow-xs"
            style={{ backgroundColor: dominantColor.hex }}
          >
            CONFIDENTIAL
          </span>
        </div>

        {/* Bottom Hero Annotation */}
        <div className="relative z-10 space-y-2 text-white/90">
          <div className="h-0.5 w-12 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
          <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
            {engagementInfo.engagementCode || 'ENGAGEMENT CODE: STR-2026-X'}
          </div>
          <div className="text-xs text-neutral-300 font-light max-w-xs leading-relaxed">
            Prepared for Executive Board Leadership & Transformation Steering Committee
          </div>
        </div>
      </div>

      {/* RIGHT 55%: Editorial Typography & Engagement Metadata */}
      <div className="flex-1 h-full p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden bg-white">
        {/* Top Bar with Quick Edit Action */}
        <div className="flex items-center justify-between shrink-0">
          <div
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold border"
            style={{
              backgroundColor: dominantColor.lightHex,
              borderColor: dominantColor.borderHex,
              color: dominantColor.hex,
            }}
          >
            <Briefcase size={12} />
            <span>STRATEGIC TRANSFORMATION MANDATE</span>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            title="Edit Client, Team, Date & Branding"
            className="no-print flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200 transition-colors cursor-pointer"
          >
            <Edit3 size={12} />
            <span>Edit Details</span>
          </button>
        </div>

        {/* Center Headline Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="my-auto py-4 max-w-xl"
        >
          <h1
            className={`${fontClass} text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold text-neutral-950 leading-[1.18] tracking-tight mb-4`}
          >
            {engagementInfo.deckTitle || '[Deck Title: Comprehensive Strategic Transformation Blueprint]'}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-sans leading-relaxed">
            {engagementInfo.deckSubtitle || '[Subtitle / Executive Scope: Enterprise Diagnostic, Operating Model Redesign, and Capital Allocation Roadmap]'}
          </p>

          <div className="mt-6 flex items-center gap-2">
            <div
              className="h-1 w-16 rounded-full"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <div className="h-1 w-6 rounded-full bg-neutral-200" />
            <div className="h-1 w-3 rounded-full bg-neutral-100" />
          </div>
        </motion.div>

        {/* Bottom Engagement Metadata Grid */}
        <div className="shrink-0 pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <div className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5 flex items-center gap-1">
              <Users size={11} />
              <span>Prepared For</span>
            </div>
            <div className="font-semibold text-neutral-900 truncate">
              {engagementInfo.clientName}
            </div>
            <div className="text-[11px] text-neutral-500 truncate">
              {engagementInfo.clientSubtitle}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5 flex items-center gap-1">
              <ShieldCheck size={11} />
              <span>Engagement Team</span>
            </div>
            <div className="font-semibold text-neutral-900 truncate">
              {engagementInfo.engagementTeam}
            </div>
            <div className="text-[11px] text-neutral-500 truncate">
              {engagementInfo.engagementPractice}
            </div>
          </div>

          <div className="sm:text-right flex flex-col sm:items-end justify-end">
            <div className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5 flex items-center gap-1">
              <Calendar size={11} />
              <span>Presentation Date</span>
            </div>
            <div className="font-semibold text-neutral-900 font-mono text-xs">
              {engagementInfo.presentationDate}
            </div>
            <div className="text-[10px] text-neutral-400 italic">
              Cover B • Slide 02 / {String(totalSlides).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      {/* Metadata Edit Modal */}
      <EngagementMetadataModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
