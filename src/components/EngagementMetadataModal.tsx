import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Image as ImageIcon,
  Building,
  Users,
  Calendar,
  FileText,
  Trash2,
  Check,
  RotateCcw,
  Sparkles,
  Layers,
} from 'lucide-react';
import {
  useDeckTheme,
  HERO_IMAGE_PRESETS,
  TitleVariantType,
} from '../context/ThemeContext';

interface EngagementMetadataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EngagementMetadataModal: React.FC<EngagementMetadataModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    dominantColor,
    engagementInfo,
    updateEngagementInfo,
    setLogoUrl,
    setTitleHeroImage,
    setTitleVariant,
    resetEngagementInfo,
  } = useDeckTheme();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'branding' | 'layout'>('details');
  const [customLogoUrl, setCustomLogoUrl] = useState<string>('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert('File size exceeds 3MB limit. Please upload a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setLogoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setLogoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn no-print">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-white"
              style={{ backgroundColor: dominantColor.hex }}
            >
              <FileText size={16} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900">
                Engagement & Title Customization
              </h2>
              <p className="text-xs text-neutral-500">
                Update client metadata, authors, date, logos, and title slide aesthetics
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
          >
            <X size={18} />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-neutral-200 bg-white flex gap-6 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'details'
                ? 'border-neutral-900 text-neutral-950 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Users size={14} />
            <span>Client & Team</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('branding')}
            className={`py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'branding'
                ? 'border-neutral-900 text-neutral-950 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Building size={14} />
            <span>Logo & Imagery</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('layout')}
            className={`py-2.5 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'layout'
                ? 'border-neutral-900 text-neutral-950 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Layers size={14} />
            <span>Title Slide Variant</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="px-6 py-5 overflow-y-auto flex-1 space-y-5 text-xs text-neutral-700">
          {activeTab === 'details' && (
            <div className="space-y-4">
              {/* Client Organization */}
              <div>
                <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                  Client Organization Name
                </label>
                <input
                  type="text"
                  value={engagementInfo.clientName}
                  onChange={(e) => updateEngagementInfo({ clientName: e.target.value })}
                  placeholder="e.g. Apex Global Industries, Inc."
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                />
              </div>

              {/* Client Committee / Audience */}
              <div>
                <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                  Client Audience / Subtitle
                </label>
                <input
                  type="text"
                  value={engagementInfo.clientSubtitle}
                  onChange={(e) => updateEngagementInfo({ clientSubtitle: e.target.value })}
                  placeholder="e.g. Board of Directors & Executive Steering Committee"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Engagement Team */}
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                    Engagement Team / Authors
                  </label>
                  <input
                    type="text"
                    value={engagementInfo.engagementTeam}
                    onChange={(e) => updateEngagementInfo({ engagementTeam: e.target.value })}
                    placeholder="e.g. Lead Partner & Engagement Director"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                  />
                </div>

                {/* Presentation Date */}
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                    Presentation Date
                  </label>
                  <input
                    type="text"
                    value={engagementInfo.presentationDate}
                    onChange={(e) => updateEngagementInfo({ presentationDate: e.target.value })}
                    placeholder="e.g. October 15, 2026"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Practice Area */}
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                    Practice / Office
                  </label>
                  <input
                    type="text"
                    value={engagementInfo.engagementPractice}
                    onChange={(e) => updateEngagementInfo({ engagementPractice: e.target.value })}
                    placeholder="e.g. Strategy & Corporate Finance Practice"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                  />
                </div>

                {/* Engagement Code */}
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                    Engagement Code
                  </label>
                  <input
                    type="text"
                    value={engagementInfo.engagementCode}
                    onChange={(e) => updateEngagementInfo({ engagementCode: e.target.value })}
                    placeholder="e.g. STR-2026-X"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                  />
                </div>
              </div>

              {/* Title & Subtitle Override */}
              <div className="pt-2 border-t border-neutral-200 space-y-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                    Presentation Deck Title
                  </label>
                  <input
                    type="text"
                    value={engagementInfo.deckTitle}
                    onChange={(e) => updateEngagementInfo({ deckTitle: e.target.value })}
                    placeholder="Strategic Transformation Blueprint"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                    Presentation Deck Subtitle
                  </label>
                  <textarea
                    rows={2}
                    value={engagementInfo.deckSubtitle}
                    onChange={(e) => updateEngagementInfo({ deckSubtitle: e.target.value })}
                    placeholder="3-Year Enterprise Diagnostic and Execution Roadmap"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'branding' && (
            <div className="space-y-5">
              {/* Firm Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                  Consulting Firm / Advisory Practice Name
                </label>
                <input
                  type="text"
                  value={engagementInfo.firmName}
                  onChange={(e) => updateEngagementInfo({ firmName: e.target.value })}
                  placeholder="e.g. MCKINSEY & COMPANY / BOSTON CONSULTING GROUP / BAIN & COMPANY"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-neutral-800 text-xs"
                />
              </div>

              {/* Logo Import Section */}
              <div className="p-4 rounded-lg border border-neutral-200 bg-neutral-50/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                      Firm or Client Logo
                    </h4>
                    <p className="text-[11px] text-neutral-500">
                      Upload an SVG or PNG logo (transparent background recommended)
                    </p>
                  </div>
                  {engagementInfo.logoUrl && (
                    <button
                      type="button"
                      onClick={() => setLogoUrl(null)}
                      className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <Trash2 size={13} />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                {/* Drag and drop upload box */}
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                    engagementInfo.logoUrl
                      ? 'border-neutral-300 bg-white'
                      : 'border-neutral-300 hover:border-neutral-400 bg-white hover:bg-neutral-50'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/svg+xml,image/png,image/jpeg,image/webp"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  {engagementInfo.logoUrl ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-2 border border-neutral-200 rounded-md bg-white shadow-2xs max-h-16 flex items-center justify-center">
                        <img
                          src={engagementInfo.logoUrl}
                          alt="Imported logo preview"
                          className="max-h-12 max-w-48 object-contain"
                        />
                      </div>
                      <span className="text-[11px] text-neutral-500">
                        Click or drag to replace logo
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5 py-2">
                      <Upload size={20} className="text-neutral-400" />
                      <span className="text-xs font-semibold text-neutral-700">
                        Click to upload logo or drag and drop
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        SVG, PNG, JPG (max 3MB)
                      </span>
                    </div>
                  )}
                </div>

                {/* Or enter Logo URL */}
                <div className="flex gap-2 items-center pt-1">
                  <input
                    type="url"
                    value={customLogoUrl}
                    onChange={(e) => setCustomLogoUrl(e.target.value)}
                    placeholder="Or paste external image URL..."
                    className="flex-1 px-3 py-1.5 border border-neutral-300 rounded-md text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (customLogoUrl.trim()) {
                        setLogoUrl(customLogoUrl.trim());
                        setCustomLogoUrl('');
                      }
                    }}
                    disabled={!customLogoUrl.trim()}
                    className="px-3 py-1.5 bg-neutral-900 text-white rounded-md text-xs font-semibold disabled:opacity-40 cursor-pointer hover:bg-neutral-800"
                  >
                    Apply URL
                  </button>
                </div>
              </div>

              {/* Title Hero Image Placeholders */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    Hero Architecture Image (for Split & Banner covers)
                  </label>
                  <span className="text-[11px] text-neutral-500">
                    4 High-Res Presets Available
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {HERO_IMAGE_PRESETS.map((preset) => {
                    const isSelected = engagementInfo.titleHeroImage === preset.url;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setTitleHeroImage(preset.url)}
                        className={`group relative rounded-lg overflow-hidden border-2 text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-neutral-950 shadow-md ring-2 ring-neutral-900/10'
                            : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <img
                          src={preset.thumbnail}
                          alt={preset.name}
                          className="w-full h-16 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-1.5 bg-white">
                          <div className="text-[10px] font-bold text-neutral-900 truncate">
                            {preset.name}
                          </div>
                        </div>
                        {isSelected && (
                          <div
                            className="absolute top-1 right-1 w-4 h-4 rounded-full text-white flex items-center justify-center shadow-xs"
                            style={{ backgroundColor: dominantColor.hex }}
                          >
                            <Check size={10} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'layout' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-600">
                Choose the design archetype for your title slide. You can also view both variations in the slide deck sequence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 1. Classic Corporate */}
                <button
                  type="button"
                  onClick={() => setTitleVariant('classic')}
                  className={`p-3 rounded-lg border-2 text-left transition-all cursor-pointer flex flex-col justify-between h-36 ${
                    engagementInfo.titleVariant === 'classic'
                      ? 'border-neutral-950 bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-neutral-900">Classic Clean</span>
                      {engagementInfo.titleVariant === 'classic' && (
                        <Check size={14} className="text-neutral-900" />
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      Standard McKinsey/BCG editorial white cover with top brand bar and 3-column metadata footer.
                    </p>
                  </div>
                  <div className="h-6 w-full border border-neutral-200 rounded bg-white p-1 flex flex-col justify-between">
                    <div className="h-1 w-1/3 rounded-xs" style={{ backgroundColor: dominantColor.hex }} />
                    <div className="h-1 w-3/4 bg-neutral-200 rounded-xs" />
                  </div>
                </button>

                {/* 2. Split Hero Image */}
                <button
                  type="button"
                  onClick={() => setTitleVariant('split-hero')}
                  className={`p-3 rounded-lg border-2 text-left transition-all cursor-pointer flex flex-col justify-between h-36 ${
                    engagementInfo.titleVariant === 'split-hero'
                      ? 'border-neutral-950 bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-neutral-900">Split Hero Banner</span>
                      {engagementInfo.titleVariant === 'split-hero' && (
                        <Check size={14} className="text-neutral-900" />
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      Modern 50/50 split layout with architectural hero photography on the left and typography on the right.
                    </p>
                  </div>
                  <div className="h-6 w-full border border-neutral-200 rounded bg-white flex overflow-hidden">
                    <div className="w-1/2 h-full bg-neutral-700" />
                    <div className="w-1/2 h-full p-1 flex flex-col justify-between bg-white">
                      <div className="h-1 w-3/4 rounded-xs" style={{ backgroundColor: dominantColor.hex }} />
                      <div className="h-1 w-1/2 bg-neutral-200 rounded-xs" />
                    </div>
                  </div>
                </button>

                {/* 3. Modern Executive Minimal */}
                <button
                  type="button"
                  onClick={() => setTitleVariant('modern-minimal')}
                  className={`p-3 rounded-lg border-2 text-left transition-all cursor-pointer flex flex-col justify-between h-36 ${
                    engagementInfo.titleVariant === 'modern-minimal'
                      ? 'border-neutral-950 bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-neutral-900">Minimalist Dark</span>
                      {engagementInfo.titleVariant === 'modern-minimal' && (
                        <Check size={14} className="text-neutral-900" />
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      High-contrast slate/navy dark background for C-suite evening sessions and confidential board offsites.
                    </p>
                  </div>
                  <div className="h-6 w-full border border-neutral-800 rounded bg-neutral-900 p-1 flex flex-col justify-between">
                    <div className="h-1 w-1/4 rounded-xs" style={{ backgroundColor: dominantColor.hex }} />
                    <div className="h-1 w-2/3 bg-neutral-600 rounded-xs" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={resetEngagementInfo}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Reset to Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white rounded-md transition-all shadow-xs cursor-pointer hover:brightness-110"
            style={{ backgroundColor: dominantColor.hex }}
          >
            Done & Apply
          </button>
        </div>
      </div>
    </div>
  );
};
