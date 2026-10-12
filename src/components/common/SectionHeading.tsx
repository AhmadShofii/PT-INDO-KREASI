import React from 'react';

export interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 md:mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {kicker && (
        <p className="text-xs font-semibold tracking-wider uppercase text-[#A36E53] mb-2 font-mono">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F3040] leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#5C6B77] leading-relaxed max-w-prose">
          {subtitle}
        </p>
      )}
    </div>
  );
};
