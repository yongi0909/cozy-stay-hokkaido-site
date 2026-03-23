"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

type FormState = "idle" | "submitting" | "success" | "error";

export default function EnContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMessage(json.error ?? "Failed to send your message. Please try again.");
        setFormState("error");
      } else {
        setFormState("success");
      }
    } catch {
      setErrorMessage("A connection error occurred. Please wait a moment and try again.");
      setFormState("error");
    }
  };

  return (
    <>
      {/* Photo Page Header */}
      <div className="relative w-full h-52 sm:h-64 lg:h-80 overflow-hidden">
        <Image
          src="/images/contact-top.jpg"
          alt="Contact"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-900/55" />
        <div className="absolute inset-0 flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-gold-400 text-xs tracking-[0.35em] uppercase font-sans mb-3">
              CONTACT
            </p>
            <h1
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl lg:text-4xl font-semibold tracking-wide"
            >
              Contact
            </h1>
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xl font-sans">
              We welcome inquiries from financial institutions, business partners, and other professional contacts.
            </p>
            <div className="mt-5 w-12 h-px bg-gold-400" />
          </div>
        </div>
      </div>

      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SectionTitle label="CONTACT INFO" title="Contact Information" />
              <div className="mt-8 space-y-7">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 text-gold-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-sans mb-0.5 tracking-wide">Phone</p>
                    <a
                      href="tel:011-555-3951"
                      className="text-navy-800 text-base font-medium font-sans hover:text-navy-600 transition-colors"
                    >
                      011-555-3951
                    </a>
                    <p className="text-gray-400 text-xs font-sans mt-0.5">Weekdays 9:00–18:00 (JST)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 text-gold-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-sans mb-0.5 tracking-wide">Email</p>
                    <a
                      href="mailto:contact@cozystayhokkaido.jp"
                      className="text-navy-800 text-sm font-medium font-sans hover:text-navy-600 transition-colors break-all"
                    >
                      contact@cozystayhokkaido.jp
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 text-gold-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-sans mb-0.5 tracking-wide">Address</p>
                    <p className="text-navy-800 text-sm font-sans leading-relaxed">
                      3-15-202, Nishi 4-chome,<br />
                      Minami 9-jo, Chuo-ku,<br />
                      Sapporo, Hokkaido 064-0809
                    </p>
                    <p className="text-gray-400 text-xs font-sans mt-1">
                      COZY STAY HOKKAIDO Co., Ltd.
                    </p>
                  </div>
                </div>

                {/* Company quick info */}
                <div className="pt-6 border-t border-cream-200">
                  <p className="text-xs text-gray-400 font-sans mb-3 tracking-wide">Company Info</p>
                  <dl className="space-y-2 text-xs font-sans">
                    <div className="flex gap-3">
                      <dt className="text-gray-400 w-28 flex-shrink-0">Representative Director</dt>
                      <dd className="text-gray-700">Yongi Nishihara</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-gray-400 w-28 flex-shrink-0">Established</dt>
                      <dd className="text-gray-700">June 23, 2025</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-gray-400 w-28 flex-shrink-0">Capital</dt>
                      <dd className="text-gray-700">JPY 3,000,000</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionTitle label="INQUIRY FORM" title="Inquiry Form" />

              {formState === "success" ? (
                <div className="mt-10 bg-cream-50 border border-cream-200 p-10 text-center">
                  <svg
                    className="w-10 h-10 text-gold-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p
                    style={{ fontFamily: "var(--font-serif)" }}
                    className="text-navy-800 text-lg font-semibold mb-3"
                  >
                    Message Sent
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-sans">
                    Thank you for your inquiry.<br />
                    A member of our team will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="ABC Corporation / XYZ Bank"
                      />
                    </div>
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        Name <span className="text-red-400 ml-1">Required</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="+81-11-555-3951"
                      />
                    </div>
                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        Email Address <span className="text-red-400 ml-1">Required</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                        placeholder="example@company.com"
                      />
                    </div>
                    {/* Category */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        Inquiry Type
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors"
                      >
                        <option value="">Please select</option>
                        <option value="partner">Business Partnership</option>
                        <option value="property">Property / Facility Inquiry</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-navy-800 font-sans mb-1.5 tracking-wide">
                        Message <span className="text-red-400 ml-1">Required</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-gray-800 font-sans focus:outline-none focus:border-navy-400 focus:bg-white transition-colors resize-none"
                        placeholder="Please enter your message."
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {formState === "error" && (
                    <p className="text-red-500 text-sm font-sans bg-red-50 border border-red-200 px-4 py-3">
                      {errorMessage}
                    </p>
                  )}

                  {/* Privacy checkbox */}
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" required className="mt-0.5 accent-navy-800" />
                    <label htmlFor="privacy" className="text-xs text-gray-500 font-sans leading-relaxed">
                      I agree to the{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="text-navy-600 underline underline-offset-2 hover:text-navy-800 transition-colors"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and consent to the handling of my personal information.<br />
                      The information submitted through this form will only be used for the purpose of responding to your inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full sm:w-auto px-10 py-4 bg-navy-800 text-white text-sm font-medium tracking-wider hover:bg-navy-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-sans"
                  >
                    {formState === "submitting" ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
