"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import ThankyouModal from "./ThankyouModal";
import axios from "axios";

interface WaitListModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Errors {
    fullName?: string;
    email?: string;
    phone?: string;
    program?: string;
}

export default function WaitListModal({
    isOpen,
    onClose,
}: WaitListModalProps) {
    const [loading, setLoading] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        program: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset";
        };

    }, [isOpen]);

    if (!isOpen) return null;

    const validate = () => {
        const newErrors: Errors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Please enter your full name";
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Name must be at least 3 characters";
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        const phoneRegex =
            /^[6-9]\d{9}$/;

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone =
                "Please enter a valid 10-digit phone number";
        }

        if (!formData.program) {
            newErrors.program =
                "Please select a program";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof Errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }

    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            console.log(formData);

            await axios.post("/api/join-waitlist", formData);
            setShowThankyou(true);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                program: "",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    };

    const inputStyles =
        "w-full h-10 rounded-full border border-white/10 bg-white/[0.03] px-4 text-white/80 placeholder/40 outline-none transition-all focus:border-[#232AFF] focus/[0.05]";

    return createPortal(
        <div className="fixed min-h-screen inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md p-4" onClick={onClose} >
            <div
                onClick={(e) =>
                    e.stopPropagation()
                }
                className="relative w-full max-w-[540px] rounded-[32px] border border-white/10 bg-[#151515] p-6 md shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >
                <button onClick={onClose} className="hover:cursor-pointer absolute right-5 top-5 text-white/50 transition hover:text-white" >
                    ✕
                </button>

                <div className="mb-6">
                    <div className="mb-4 inline-flex rounded-full border border-[#232AFF]/30 bg-[#232AFF]/10 px-3 py-1 text-xs font-medium text-[#6E73FF]">
                        EARLY ACCESS
                    </div>

                    <h2 className="text-3xl font-semibold text-white">
                        Join the MeritRise Waitlist
                    </h2>

                    <p className="mt-3 text-zinc-400">
                        Be among the first learners to
                        access AI-powered higher education
                        designed for ambitious learners.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={inputStyles}
                        />

                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={inputStyles}
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            maxLength={10}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className={inputStyles}
                        />

                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Program Interest
                        </label>

                        <select
                            name="program"
                            value={formData.program}
                            onChange={handleChange}
                            className={inputStyles}
                        >
                            <option disabled value="" className="text-black">
                                Select a Program
                            </option>

                            <option value="AI & Machine Learning" className="text-black">
                                AI & Machine Learning
                            </option>

                            <option value="Data Science" className="text-black">
                                Data Science
                            </option>

                            <option value="Business & Management" className="text-black">
                                Business & Management
                            </option>

                            <option value="Technology" className="text-black">
                                Technology
                            </option>

                            <option value="Finance" className="text-black">
                                Finance
                            </option>

                            <option value="Marketing" className="text-black">
                                Marketing
                            </option>

                            <option value="Not Sure Yet" className="text-black">
                                Not Sure Yet
                            </option>
                        </select>

                        {errors.program && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.program}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="hover:cursor-pointer h-12 w-full rounded-full bg-[#232AFF] font-medium text-white transition-all hover:bg-[#1c22f5] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading
                            ? "Submitting..."
                            : "Submit"}
                    </button>

                    <p className="text-center text-sm text-zinc-500">
                        Priority access • Launch updates •
                        Exclusive announcements
                    </p>
                </form>
            </div>

            <ThankyouModal
                isOpen={showThankyou}
                userType="student"
                onClose={() => {
                    setShowThankyou(false);
                    onClose();
                }}
            />
        </div>
        , document.body);
}