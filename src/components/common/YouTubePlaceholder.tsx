import React from 'react';

interface YouTubePlaceholderProps {
  aspectRatio?: 'video' | 'square';
  className?: string;
  label?: string;
}

/**
 * Renders a blank space placeholder in place of a YouTube video link or thumbnail,
 * as per project specification.
 */
export const YouTubePlaceholder: React.FC<YouTubePlaceholderProps> = ({
  aspectRatio = 'square',
  className = '',
  label = 'Hospital Video Feature'
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-900/5 border border-slate-200/80 rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none ${
        aspectRatio === 'square' ? 'aspect-square max-w-md mx-auto' : 'aspect-video w-full'
      } ${className}`}
      aria-label={label}
    >
      {/* Blank square space with subtle minimalistic watermark */}
      <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-sm border border-slate-200 flex items-center justify-center mb-3">
        <div className="w-8 h-8 rounded-lg bg-slate-200/60" />
      </div>
      <p className="text-xs font-medium text-slate-400 tracking-wide uppercase">
        {label}
      </p>
      <div className="mt-2 text-[11px] text-slate-400 max-w-xs">
        Clinical documentary and patient recovery narrative placeholder
      </div>
    </div>
  );
};
