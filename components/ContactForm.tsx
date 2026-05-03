import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { services } from 'data/services';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FormData {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
    data: FormData;
    status: FormStatus;
    errors: Partial<FormData>;
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validateForm(data: FormData): Partial<FormData> {
    const errors: Partial<FormData> = {};

    if (!data.name.trim()) {
        errors.name = 'Name is required.';
    }

    if (!data.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!data.projectType) {
        errors.projectType = 'Please select a project type.';
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters.';
    }

    return errors;
}

// ─── Animation variants ───────────────────────────────────────────────────────

const FIELD_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.6,
            ease: FIELD_EASE,
        },
    }),
};

// ─── Field wrapper ────────────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <p className="mt-1.5 text-xs text-[#ff4d29] font-mono tracking-wide">
            {message}
        </p>
    );
}

// ─── Shared input class ───────────────────────────────────────────────────────

const inputBase =
    "w-full bg-transparent border-b border-white/15 py-4 text-white placeholder:text-white/30 text-base font-['Syne'] focus:outline-none focus:border-white/60 transition-colors duration-300";

// ─── ContactForm ──────────────────────────────────────────────────────────────

export function ContactForm() {
    const [state, setState] = useState<FormState>({
        data: { name: '', email: '', projectType: '', message: '' },
        status: 'idle',
        errors: {},
    });

    const { data, status, errors } = state;

    function setField<K extends keyof FormData>(key: K, value: FormData[K]) {
        setState((prev) => ({
            ...prev,
            data: { ...prev.data, [key]: value },
            // Clear individual field error on change
            errors: { ...prev.errors, [key]: undefined },
        }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const validationErrors = validateForm(data);
        if (Object.keys(validationErrors).length > 0) {
            setState((prev) => ({ ...prev, errors: validationErrors }));
            return;
        }

        setState((prev) => ({ ...prev, status: 'sending' }));

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Server error');

            setState({
                data: { name: '', email: '', projectType: '', message: '' },
                status: 'success',
                errors: {},
            });
        } catch {
            setState((prev) => ({ ...prev, status: 'error' }));
        }
    }

    // ── Success state ─────────────────────────────────────────────────────────
    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 py-16"
            >
                <span className="text-[#ff4d29] text-4xl">✓</span>
                <p className="font-['Syne'] font-bold text-white text-xl md:text-2xl">
                    Message sent.
                </p>
                <p className="text-white/50 text-base leading-relaxed">
                    I'll get back to you within 24 hours.
                </p>
            </motion.div>
        );
    }

    const isSending = status === 'sending';

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-0">

            {/* Name */}
            <motion.div custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Your name"
                    value={data.name}
                    onChange={(e) => setField('name', e.target.value)}
                    disabled={isSending}
                    className={inputBase}
                />
                <FieldError message={errors.name} />
                <div className="pb-8" />
            </motion.div>

            {/* Email */}
            <motion.div custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Your email"
                    value={data.email}
                    onChange={(e) => setField('email', e.target.value)}
                    disabled={isSending}
                    className={inputBase}
                />
                <FieldError message={errors.email} />
                <div className="pb-8" />
            </motion.div>

            {/* Project Type */}
            <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
                    Project Type
                </label>
                <select
                    value={data.projectType}
                    onChange={(e) => setField('projectType', e.target.value)}
                    disabled={isSending}
                    className={`${inputBase} cursor-pointer appearance-none bg-[#0d0d0d] pr-8`}
                >
                    <option value="" disabled>Select a project type</option>
                    {services.map((service) => (
                        <option key={service.slug} value={service.title}>
                            {service.title}
                        </option>
                    ))}
                    <option value="Other">Other</option>
                </select>
                <FieldError message={errors.projectType} />
                <div className="pb-8" />
            </motion.div>

            {/* Message */}
            <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
                    Message
                </label>
                <textarea
                    rows={5}
                    placeholder="Describe your project or challenge"
                    value={data.message}
                    onChange={(e) => setField('message', e.target.value)}
                    disabled={isSending}
                    className={`${inputBase} resize-none`}
                />
                <FieldError message={errors.message} />
                <div className="pb-10" />
            </motion.div>

            {/* Error banner */}
            {status === 'error' && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 text-sm text-[#ff4d29] font-mono"
                >
                    Something went wrong. Please try again or email me directly.
                </motion.p>
            )}

            {/* Submit */}
            <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <button
                    type="submit"
                    disabled={isSending}
                    className="relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full overflow-hidden group hover:scale-105 active:scale-95 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.08)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {/* Accent fill on hover */}
                    <div className="absolute inset-0 bg-[#ff4d29] scale-y-0 origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 rounded-full" />

                    <span className="relative z-10 font-['Syne'] font-bold text-sm md:text-base tracking-[0.08em] uppercase">
                        {isSending ? 'Sending…' : 'Send Message'}
                    </span>

                    {/* Arrow icon */}
                    {!isSending && (
                        <svg
                            width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            className="relative z-10 transition-transform duration-[600ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    )}
                </button>
            </motion.div>

        </form>
    );
}

export default ContactForm;
