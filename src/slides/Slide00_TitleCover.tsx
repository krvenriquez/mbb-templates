import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  ShieldCheck,
  Calendar,
  Users,
  Briefcase,
  Edit3,
  Building,
} from 'lucide-react';
import { EngagementMetadataModal } from '../components/EngagementMetadataModal';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: CLASSIC CONSULTING EXECUTIVE TITLE COVER (COVER A)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Formal Executive Committee & Board of Directors Deliverables: The standard
 *    McKinsey / BCG / Bain title architecture with top firm branding and 3-column
 *    stakeholder metadata.
 * 2. Enterprise Strategy Readouts & Final Deliverables: Concluding multi-month
 *    strategic diagnostics, operating model redesigns, or commercial turnarounds.
 * 3. Client Co-Branded Publications: Establishing formal institutional parity
 *    between the consulting advisory firm and client leadership.
 * 4. Structured Workstream Readouts: Standardized kickoffs for individual transformation
 *    workstreams (Finance, Operations, Digital, HR).
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Action Title Rule: The deck title must explicitly reflect the strategic mandate,
 *   time horizon, and core value unlock rather than a generic heading.
 * - Tripartite Governance Metadata: Always include: (1) Client Organization & Audience,
 *   (2) Engagement Leadership & Practice, (3) Formal Date & Version Control.
 * - Confidentiality Markings: Ensure clear legal confidentiality indicators
 *   and engagement tracking codes are visible for compliance.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide00_TitleCover: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont, engagementInfo } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden select-none p-8 sm:p-12 md:p-14 lg:p-16"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Top Accent Brand Ribbon */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {engagementInfo.logoUrl ? (
            <div className="p-1 px-2 rounded bg-neutral-50 border border-neutral-200 max-h-10 flex items-center justify-center">
              <img
                src={engagementInfo.logoUrl}
                alt="Imported Logo"
                className="max-h-7 max-w-40 object-contain"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <div
                className="w-3.5 h-3.5 rounded-xs transition-colors duration-300 shadow-2xs"
                style={{ backgroundColor: dominantColor.hex }}
              />
              <span
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                style={{ color: dominantColor.hex }}
              >
                {engagementInfo.firmName || '[MANAGEMENT CONSULTING PRACTICE / FIRM NAME]'}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Edit Details Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            title="Edit Client, Team, Date & Branding"
            className="no-print flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200 transition-colors cursor-pointer mr-1"
          >
            <Edit3 size={12} />
            <span>Edit Details</span>
          </button>

          <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-neutral-200 text-neutral-500 bg-neutral-50">
            {engagementInfo.engagementCode || 'STR-2026-X'}
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white shadow-2xs"
            style={{ backgroundColor: dominantColor.hex }}
          >
            CONFIDENTIAL
          </span>
        </div>
      </div>

      {/* Main Title Block */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="my-auto max-w-4xl py-6"
      >
        <div
          className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold mb-4 border"
          style={{
            backgroundColor: dominantColor.lightHex,
            borderColor: dominantColor.borderHex,
            color: dominantColor.hex,
          }}
        >
          <Briefcase size={13} />
          <span>[STRATEGIC WORKSTREAM: EXECUTIVE BOARD PRESENTATION]</span>
        </div>

        <h1
          className={`${fontClass} text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-950 leading-[1.15] tracking-tight mb-4`}
        >
          {engagementInfo.deckTitle || '[Deck Title: Comprehensive Strategic Transformation & Value Creation Blueprint]'}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-3xl">
          {engagementInfo.deckSubtitle || '[Subtitle / Executive Scope: 3-Year Enterprise Diagnostic, Commercial Repositioning, Operating Model Redesign, and Capital Allocation Roadmap]'}
        </p>

        {/* Minimal Decorative Horizontal Bar & Subtle Architectural Thumbnail */}
        <div className="mt-8 flex items-center justify-between max-w-3xl">
          <div className="flex items-center gap-2">
            <div
              className="h-1 w-20 rounded-full transition-colors duration-300"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <div className="h-1 w-8 rounded-full bg-neutral-200" />
            <div className="h-1 w-4 rounded-full bg-neutral-100" />
          </div>

          {/* Placeholder Architectural Vignette */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span>Advisory Framework v1.0 Final</span>
          </div>
        </div>
      </motion.div>

      {/* Title Slide Footer Grid: Client, Authors, Date */}
      <div className="shrink-0 pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div>
          <div className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5 flex items-center gap-1.5">
            <Users size={12} />
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
          <div className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5 flex items-center gap-1.5">
            <ShieldCheck size={12} />
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
          <div className="text-[10px] uppercase font-bold text-neutral-400 mb-0.5 flex items-center gap-1.5">
            <Calendar size={12} />
            <span>Presentation Date</span>
          </div>
          <div className="font-semibold text-neutral-900 font-mono">
            {engagementInfo.presentationDate}
          </div>
          <div className="text-[10px] text-neutral-400 italic">
            Slide 01 / {String(totalSlides).padStart(2, '0')}
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

