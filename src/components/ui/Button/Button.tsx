import React from 'react';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
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
  ...props
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    outline: 'btn-outline'
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (props.as === 'a' || (props.as && props.as !== 'button')) {
    const { as: Component, to, href, ...restProps } = props as ButtonAsLinkProps;
    const linkProps = to ? { to } : { href };
    
    return (
      <Component
        className={classes}
        disabled={disabled}
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

