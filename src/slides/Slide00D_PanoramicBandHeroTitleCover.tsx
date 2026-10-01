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
 * SLIDE TEMPLATE: PANORAMIC BAND HERO TITLE COVER (COVER D)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Balanced Editorial & Photographic Executive Readouts: Combining the gravitas
 *    of modern corporate architecture with pristine, high-contrast white-canvas readability.
 * 2. Strategic Portfolio Reviews & Transformation Milestones: Delivering quarterly
 *    board updates with clear visual branding and spacious typography.
 * 3. Commercial Due Diligence & M&A Strategy Memos: Structured for investment committees
 *    who demand immediately scannable client, lead partner, and confidentiality credentials.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide00D_PanoramicBandHeroTitleCover: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont, engagementInfo } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroImage =
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop';

  return (
    <div
      className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden select-none"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Top 44%: Panoramic Architectural Hero Banner */}
      <div className="relative w-full h-[44%] bg-neutral-900 overflow-hidden shrink-0">
        <img
          src={heroImage}
          alt="Panoramic Corporate Atrium"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Subtle Vignette & Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-neutral-900/40" />

        {/* Top Header Floating Over Banner */}
        <div className="absolute top-0 inset-x-0 p-6 sm:p-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {engagementInfo.logoUrl ? (
              <div className="p-1 px-2.5 rounded bg-white/10 backdrop-blur-md border border-white/20 max-h-9 flex items-center">
                <img
                  src={engagementInfo.logoUrl}
                  alt="Client Logo"
                  className="max-h-6 w-auto object-contain brightness-100"
                />
              </div>
            ) : (
              <div
                className="w-2.5 h-6 rounded-full"
                style={{ backgroundColor: dominantColor.hex }}
              />
            )}
            <span className="text-[11px] font-mono font-bold tracking-widest text-white/90 uppercase">
              {engagementInfo.clientName} | {engagementInfo.engagementPractice}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
          >
            <Edit3 size={12} />
            <span>Edit Cover Details</span>
          </button>
        </div>

        {/* Floating Accent Line at Bottom of Banner */}
        <div
          className="absolute bottom-0 inset-x-0 h-1"
          style={{ backgroundColor: dominantColor.hex }}
        />
      </div>

      {/* Bottom 56%: Editorial White Content Area */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-2 max-w-4xl"
        >
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded"
              style={{
                backgroundColor: dominantColor.lightHex,
                color: dominantColor.hex,
              }}
            >
              EXECUTIVE STEERING COMMITTEE READOUT
            </span>
            <span className="text-xs text-neutral-400 font-mono">•</span>
            <span className="text-xs font-mono text-neutral-500">
              {engagementInfo.engagementCode}
            </span>
          </div>

          <h1
            className={`${fontClass} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-[1.15]`}
          >
            {engagementInfo.deckTitle}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-3xl leading-relaxed">
            {engagementInfo.deckSubtitle}
          </p>
        </motion.div>

        {/* 3-Column Structured Metadata Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-200 shrink-0">
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: dominantColor.lightHex }}
            >
              <Building size={16} style={{ color: dominantColor.hex }} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                Target Organization
              </span>
              <span className="text-xs font-bold text-neutral-900 block">
                {engagementInfo.clientName}
              </span>
              <span className="text-[11px] text-neutral-500 block">
                {engagementInfo.clientSubtitle}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: dominantColor.lightHex }}
            >
              <Users size={16} style={{ color: dominantColor.hex }} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                Advisory Engagement Team
              </span>
              <span className="text-xs font-bold text-neutral-900 block">
                {engagementInfo.engagementTeam}
              </span>
              <span className="text-[11px] text-neutral-500 block">
                {engagementInfo.engagementPractice}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center shrink-0"
              style={{ backgroundColor: dominantColor.lightHex }}
            >
              <Calendar size={16} style={{ color: dominantColor.hex }} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider block">
                Date & Version Control
              </span>
              <span className="text-xs font-bold text-neutral-900 block">
                {engagementInfo.presentationDate}
              </span>
              <span className="text-[11px] text-neutral-500 font-mono block">
                Strictly Confidential
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
