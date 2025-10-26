'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contactPage');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const subjectOptions = [
    { value: 'partnership', label: t('form.partnership') },
    { value: 'institutional', label: t('form.institutional') },
    { value: 'ultency', label: t('form.ultency') },
    { value: 'general', label: t('form.general') },
    { value: 'support', label: t('form.support') },
  ];

  const handleSubjectSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
    setDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
          url: window.location.href
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-gray-50 rounded p-8 shadow-sm">
      <h2 className="text-h2 font-bold text-gray-900 mb-6">{t('form.title')}</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">We received your inquiry, we'll be in touch with you soon.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">There was an error sending your message. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-body font-medium text-gray-900 mb-2">
            {t('form.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
            placeholder={t('form.namePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-body font-medium text-gray-900 mb-2">
            {t('form.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
            placeholder={t('form.emailPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-body font-medium text-gray-900 mb-2">
            {t('form.company')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
            placeholder={t('form.companyPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-body font-medium text-gray-900 mb-2">
            {t('form.subject')} *
          </label>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors bg-white border border-gray-200 hover:border-gray-300 rounded"
            >
              <span>
                {formData.subject 
                  ? subjectOptions.find(option => option.value === formData.subject)?.label 
                  : t('form.selectSubject')
                }
              </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded border border-gray-200 shadow-md">
                <div className="p-2">
                  {subjectOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSubjectSelect(option.value)}
                      className="w-full flex items-center justify-between px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                    >
                      <span>{option.label}</span>
                      {formData.subject === option.value && (
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-body font-medium text-gray-900 mb-2">
            {t('form.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all resize-none"
            placeholder={t('form.messagePlaceholder')}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : t('form.submit')}
        </button>
      </form>
    </div>
  );
}
