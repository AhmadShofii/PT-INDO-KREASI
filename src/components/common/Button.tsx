import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'copper' | 'outline' | 'ghost' | 'sage';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  children,
  icon,
  iconRight,
  className = '',
  disabled,
  onClick,
  ...props
}) => {
  const { themeMode, playPixelSound } = useTheme();

  const isMinecraft = themeMode === 'minecraft';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (isMinecraft) {
      playPixelSound('click');
    }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A36E53] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  };

  const modernVariantStyles = {
    primary: 'bg-[#1F3040] text-white hover:bg-[#2A4259] active:bg-[#162330] shadow-xs',
    copper: 'bg-[#A36E53] text-white hover:bg-[#8D5C43] active:bg-[#784E38] shadow-xs',
    outline: 'border border-[#E2E4E0] bg-white text-[#24303A] hover:bg-[#F7F5F0] hover:border-[#76847B] active:bg-[#EFF2F0]',
    ghost: 'text-[#24303A] hover:bg-[#F7F5F0] active:bg-[#EFF2F0]',
    sage: 'bg-[#76847B] text-white hover:bg-[#626F67] active:bg-[#535E57] shadow-xs'
  };

  // Minecraft pixelated button overrides
  const mcStyles = isMinecraft
    ? variant === 'copper'
      ? 'mc-btn-gold text-xs uppercase tracking-wider'
      : 'mc-btn text-xs uppercase tracking-wider'
    : modernVariantStyles[variant];

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${mcStyles} ${className}`;

  if (asLink && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClass}
        onClick={handleClick}
        whileHover={!isMinecraft ? { y: -1 } : undefined}
        whileTap={{ scale: 0.98 }}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClass}
      disabled={disabled}
      onClick={handleClick}
      whileHover={!isMinecraft ? { y: -1 } : undefined}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </motion.button>
  );
};
