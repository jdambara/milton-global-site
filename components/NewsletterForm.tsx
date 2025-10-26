'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  locale: string;
  translations: {
    title: string;
    description: string;
    emailPlaceholder: string;
    subscribeButton: string;
    subscribingButton: string;
    successTitle: string;
    successMessage: string;
    errorRequired: string;
    errorGeneric: string;
    thankYou: string;
  };
}

export default function NewsletterForm({ locale, translations }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage(translations.errorRequired);
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          locale,
          url: window.location.href,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        setMessage(translations.thankYou);
      } else {
        setMessage(data.error || translations.errorGeneric);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage(translations.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-h3 font-bold text-white mb-2">
          {translations.successTitle}
        </h3>
        <p className="text-gray-200">
          {translations.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={translations.emailPlaceholder}
          className="flex-1 px-4 py-3 rounded-[4px] border-0 text-gray-900 focus:ring-2 focus:ring-brand-red outline-none transition-all duration-200"
          disabled={isSubmitting}
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-[#FE0100] text-white rounded-[4px] font-semibold hover:bg-[#E93B46] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? translations.subscribingButton : translations.subscribeButton}
        </button>
      </div>
      
      {message && (
        <div className={`text-center text-sm ${
          isSuccess ? 'text-green-200' : 'text-red-200'
        }`}>
          {message}
        </div>
      )}
    </form>
  );
}
