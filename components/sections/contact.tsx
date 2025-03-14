"use client";

import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface EmailRequest {
  from: string;
  to: string;
  subject: string;
  text: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const userEmail: EmailRequest = {
        from: 'contact@saikumarthota.live',
        to: formData.email,
        subject: 'Thank you for contacting me!',
        text: `Hi ${formData.name},\n\nThank you for reaching out. I will get back to you soon.\n\nBest regards,\nSaikumar Thota`
      };

      const adminEmail: EmailRequest = {
        from: 'contact@saikumarthota.live',
        to: 'contact@saikumarthota.live',
        subject: 'New Contact Form Submission',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      };

      const config = {
        headers: {
          'Authorization': `Bearer re_WNVD6yq7_PSdFSuLkqQhSzKsKwZBfoEkG`,
          'Content-Type': 'application/json'
        }
      };

      await Promise.all([
        axios.post('https://api.resend.com/v1/emails', userEmail, config),
        axios.post('https://api.resend.com/v1/emails', adminEmail, config)
      ]);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/80 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
            Get in Touch
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm always open to new opportunities and collaborations.
          Let's create something amazing together.
        </p>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 outline-none resize-none"
              required
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity py-6"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send className="h-5 w-5" />
                </motion.div>
              ) : (
                <>
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Me
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>

        {isSubmitted && (
          <motion.div 
            className="mt-6 flex items-center justify-center space-x-2 text-green-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="h-5 w-5" />
            <span>Thank you for your message! I'll get back to you soon.</span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactSection;