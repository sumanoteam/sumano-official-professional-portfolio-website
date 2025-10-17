import React, { useState } from 'react';

interface FloatingLabelInputProps {
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  label,
  placeholder,
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
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full border rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all duration-200 ${
            error ? 'border-red-300' : 'border-gray-300'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
          aria-describedby={ariaDescribedby}
          aria-invalid={ariaInvalid}
        />
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
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
