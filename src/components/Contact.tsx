'use client';

import { useEffect, useRef, useState } from 'react';
import { revealStagger } from '@/lib/scrollReveal';

const Contact = () => {
  const containerRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    revealStagger(containerRef.current, '.field-group');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with formspree or custom backend
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-xl mx-auto">
      <p className="eyebrow mb-10">06 &mdash; Write to Me</p>

      <form ref={containerRef} onSubmit={handleSubmit} className="space-y-10">
        <div className="field-group">
          <label htmlFor="name" className="text-xs uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="field-underline w-full text-ink placeholder-muted/60"
            placeholder="Your name"
          />
        </div>

        <div className="field-group">
          <label htmlFor="email" className="text-xs uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="field-underline w-full text-ink placeholder-muted/60"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="field-group">
          <label
            htmlFor="message"
            className="text-xs uppercase tracking-wide text-muted"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="field-underline w-full text-ink placeholder-muted/60 resize-none"
            placeholder="Tell me about your project or just say hello..."
          />
        </div>

        <div className="field-group">
          <button
            type="submit"
            className="w-full bg-ink text-paper py-4 font-serif text-lg tracking-wide hover:bg-accent transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
