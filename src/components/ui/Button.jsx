import React from 'react';
import { cn } from '../../lib/utils';

// Size variants
const sizeClasses = {
  sm: 'text-sm px-4 py-2 h-10',
  md: 'text-base px-6 py-2.5 h-12',
  lg: 'text-lg px-8 py-3 h-14',
  xl: 'text-xl px-10 py-3.5 h-16',
};

// Variant styles with unique hover effects
const variantClasses = {
  primary: `
    bg-primary text-white 
    relative overflow-hidden 
    before:absolute before:inset-0 before:bg-white/10 
    before:opacity-0 hover:before:opacity-100
    before:transition-opacity before:duration-300
    hover:shadow-lg hover:shadow-primary/30
    transform hover:-translate-y-0.5 active:translate-y-0
    transition-all duration-300
  `,
  secondary: `
    bg-transparent border-2 border-primary text-primary 
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-primary/5 
    before:opacity-0 hover:before:opacity-100
    before:transition-all before:duration-500
    hover:shadow-md hover:shadow-primary/20
    hover:bg-primary/5
    transform hover:scale-[1.02] active:scale-100
    transition-all duration-300
  `,
  ghost: `
    bg-transparent text-white/90
    hover:bg-white/5 hover:text-white
    border border-transparent
    hover:border-white/10
    transition-all duration-300
  `,
  gradient: `
    bg-gradient-to-r from-primary to-secondary text-white
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:to-secondary/0
    hover:before:from-primary/10 hover:before:to-secondary/10
    before:transition-all before:duration-500
    hover:shadow-lg hover:shadow-primary/30
    transform hover:-translate-y-0.5 active:translate-y-0
    transition-all duration-300
  `,
};

const Button = React.forwardRef(
  (
    {
      children,
      className = '',
      size = 'md',
      variant = 'primary',
      fullWidth = false,
      icon: Icon,
      iconPosition = 'right',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center cursor-pointer rounded-full font-medium',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50',
      'disabled:opacity-50 disabled:pointer-events-none',
      'relative overflow-hidden',
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && 'w-full',
      className
    );

    return (
      <button ref={ref} className={baseClasses} disabled={isLoading} {...props}>
        {/* Hover effect layer */}
        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {Icon && iconPosition === 'left' && (
            <Icon className={cn('w-5 h-5', children && 'mr-2')} />
          )}

          {isLoading ? (
            <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            children
          )}

          {Icon && iconPosition === 'right' && (
            <Icon className={cn('w-5 h-5', children && 'ml-2')} />
          )}
        </span>

        {/* Active state effect */}
        <span className="absolute inset-0 bg-black/5 opacity-0 active:opacity-100 transition-opacity" />
      </button>
    );
  }
);

// Export primary and secondary button variants for convenience
export const PrimaryButton = ({ className, ...props }) => (
  <Button variant="primary" className={className} {...props} />
);

export const SecondaryButton = ({ className, ...props }) => (
  <Button variant="secondary" className={cn('group', className)} {...props} />
);

Button.displayName = 'Button';

export default Button;