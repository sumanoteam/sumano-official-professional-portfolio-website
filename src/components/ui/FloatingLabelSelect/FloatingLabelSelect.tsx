import React, { useState } from 'react';

interface SelectOption {
  readonly value: string;
  readonly label: string;
}

interface FloatingLabelSelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: readonly SelectOption[];
  required?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
}

export const FloatingLabelSelect: React.FC<FloatingLabelSelectProps> = ({
  id,
  name,
  value,
  onChange,
  label,
  options,
  required = false,
  error,
  disabled = false,
  className = '',
  'aria-describedby': ariaDescribedby,
  'aria-invalid': ariaInvalid
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={`w-full border rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all duration-200 appearance-none bg-white ${
            error ? 'border-red-300' : 'border-gray-300'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
          aria-describedby={ariaDescribedby}
          aria-invalid={ariaInvalid}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            isFloating
              ? 'top-2 text-xs text-brand-orange font-medium'
              : 'top-4 text-sm text-gray-500'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
