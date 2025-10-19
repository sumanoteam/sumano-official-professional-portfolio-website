import React from 'react';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  outlineColor?: 'ctaBlue' | 'navy' | 'primary';
}

interface ButtonAsButtonProps extends BaseButtonProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLinkProps extends BaseButtonProps {
  as: 'a' | React.ComponentType<any>;
  to?: string;
  href?: string;
  type?: never;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  outlineColor = 'ctaBlue',
  ...props
}) => {
  // Base button classes with unified styling
  const baseClasses = `
    inline-flex items-center justify-center
    font-poppins font-semibold
    rounded-xl
    transition-all duration-300 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    relative overflow-hidden
    tracking-wide
  `;

  // Variant-specific classes with unified primary system
  const variantClasses = {
    primary: `
      btn-primary
    `,
    secondary: `
      bg-gradient-to-r from-brand-primary to-brand-primary-hover
      text-white
      shadow-md hover:shadow-lg
      hover:-translate-y-1 hover:brightness-110
    `,
    accent: `
      bg-gradient-to-r from-brand-accent to-brand-accent-success
      text-brand-text
      shadow-md hover:shadow-lg
      hover:-translate-y-1 hover:brightness-110
      hover:shadow-success
    `,
    outline: `
      btn-outline
    `,
    success: `
      bg-gradient-to-r from-brand-accent to-brand-accent-success
      text-brand-text
      shadow-md hover:shadow-lg
      hover:-translate-y-1 hover:brightness-110
      hover:shadow-success
    `,
    warning: `
      bg-gradient-to-r from-brand-warning to-orange-600
      text-white
      shadow-md hover:shadow-lg
      hover:-translate-y-1 hover:brightness-110
    `,
    error: `
      bg-gradient-to-r from-brand-error to-red-600
      text-white
      shadow-md hover:shadow-lg
      hover:-translate-y-1 hover:brightness-110
    `
  };

  // Size-specific classes with unified primary system
  const sizeClasses = {
    sm: variant === 'primary' ? 'btn-sm' : 'px-4 py-2 text-sm sm:px-4 md:px-5',
    md: variant === 'primary' ? '' : 'px-4 py-3 text-base sm:px-6 md:px-8',
    lg: variant === 'primary' ? 'btn-lg' : 'px-6 py-4 text-lg sm:px-8 md:px-10'
  };

  // Outline color variants
  const outlineColorClasses = {
    ctaBlue: 'hover:text-brand-cta-blue',
    navy: 'hover:text-brand-navy',
    primary: 'hover:text-brand-primary'
  };

  const outlineColorClass = variant === 'outline' ? outlineColorClasses[outlineColor] : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${outlineColorClass} ${className}`.trim();

  if (props.as === 'a' || (props.as && props.as !== 'button')) {
    const { as: Component, to, href, ...restProps } = props as ButtonAsLinkProps;
    const linkProps = to ? { to } : { href };
    
    return (
      <Component
        className={classes}
        {...linkProps}
        {...restProps}
      >
        {children}
      </Component>
    );
  }

  const { type = 'button', onClick, ...restProps } = props as ButtonAsButtonProps;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};