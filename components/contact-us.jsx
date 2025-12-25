"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function ContactUsSection() {
  const workshopOptions = [
    "AI for Software Specification",
    "Lean-to Digital Transformation",
    "AI workflow for Business Process Optimization",
    "AI for Digital Content Creators",
    "AI for Data-Driven experience marketing",
    "AI in motion",
    "Others (Custom / Pricing)",
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    workshop: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" }); // "success" | "error" | ""

  const isValid =
    form.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()) &&
    form.workshop.trim().length > 0 &&
    form.message.trim().length > 0;
  const isEmailValid =
    form.email.trim().length === 0 ||
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim());

  const setField = (key, value) => {
    setStatus({ type: "", msg: "" });
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFieldChange = (key) => (e) => {
    setField(key, e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // ✅ clear message each submit attempt
    setStatus({ type: "", msg: "" });

    if (!isValid) {
      const nameOk = form.name.trim().length > 0;
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
        form.email.trim()
      );
      const workshopOk = form.workshop.trim().length > 0;
      const messageOk = form.message.trim().length > 0;

      let msg = "Please fill in all required fields.";
      if (!nameOk) msg = "Please enter your name.";
      else if (!emailOk) msg = "Please enter a valid email address.";
      else if (!workshopOk) msg = "Please select a workshop.";
      else if (!messageOk) msg = "Please enter a message.";

      setStatus({ type: "error", msg });
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send");

      // ✅ show success message
      setStatus({ type: "success", msg: "Sent! We’ll get back to you soon." });

      // ✅ reset form so user can send again right away
      setForm({ name: "", email: "", workshop: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact-us"
      className="relative py-12 overflow-hidden bg-gradient-to-b from-white via-[#E6EEFF] to-[#F7FAFF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-column layout */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-0">
          {/* ----------------------------------------- */}
          {/* LEFT — FORM */}
          {/* ----------------------------------------- */}
          <div className="py-10 pr-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Contact Us
            </h2>

            <p className="text-sm font-semibold sm:text-base text-slate-600 mb-6 max-w-md">
              Feel free to reach out any time.
            </p>

            <p className="text-xs sm:text-base text-slate-600 mb-8 max-w-md">
              Whether you’re interested in a workshop, need pricing details, or want a customized program for your team, <br /> we’ll get back to you as soon as we can.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleFieldChange("name")}
                  onInput={handleFieldChange("name")}
                  autoComplete="name"
                  required
                  className="w-full border-b border-slate-300 bg-transparent py-2 text-sm
                             focus:border-[#0B1C33] outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleFieldChange("email")}
                  onInput={handleFieldChange("email")}
                  autoComplete="email"
                  required
                  className="w-full border-b border-slate-300 bg-transparent py-2 text-sm
                             focus:border-[#0B1C33] outline-none"
                />
                {!isEmailValid && (
                  <p className="mt-2 text-xs text-red-700">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              {/* Workshop Dropdown (NEW) */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">
                  Workshop Interested In
                </label>

                <select
                  name="workshop"
                  value={form.workshop}
                  onChange={handleFieldChange("workshop")}
                  onInput={handleFieldChange("workshop")}
                  required
                  className="w-full border-b border-slate-300 bg-transparent py-2 text-sm
                             focus:border-[#0B1C33] outline-none"
                >
                  <option value="" disabled>
                    Select a workshop
                  </option>

                  {workshopOptions.map((w) => (
                    <option key={w} value={w} className="text-slate-900">
                      {w}
                    </option>
                  ))}
                </select>

                {/* tiny helper text (optional) */}
                <p className="mt-2 text-xs text-slate-500">
                  This helps us reply with the right info and schedule.
                </p>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Tell us a little about what you need…"
                  value={form.message}
                  onChange={handleFieldChange("message")}
                  onInput={handleFieldChange("message")}
                  required
                  className="w-full border-b border-slate-300 bg-transparent py-2 text-sm
                             resize-none focus:border-[#0B1C33] outline-none"
                />
              </div>

              {/* Status message */}
              {status.msg ? (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-emerald-700"
                      : "text-red-700"
                  }`}
                >
                  {status.msg}
                </p>
              ) : null}

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center px-10 py-3 rounded-full
                           text-sm font-semibold tracking-[0.18em] uppercase
                           bg-[#0B1C33] text-white hover:bg-slate-900 transition
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          {/* ----------------------------------------- */}
          {/* RIGHT — RECTANGLE BAR + NAVY PANEL */}
          {/* ----------------------------------------- */}
          <div className="relative flex items-stretch justify-end">
            {/* Blue rectangle behind the card */}
            <div
              className="
              absolute top-8 right-0
              h-[85%] w-8
              bg-cyan-400
              rounded-l-lg
            "
            />

            {/* Navy info panel */}
            <div
              className="
                relative bg-[#0B1C33] text-white px-10 py-12
                rounded-l-3xl flex flex-col justify-between
                w-[90%] md:w-[80%] lg:w-[70%]
                shadow-xl z-10 translate-x-[-1.5rem]
              "
            >
              {/* Accent squares */}
              <div className="absolute -top-3 left-10 h-6 w-6 bg-cyan-400 rounded-sm" />
              <div className="absolute -bottom-3 right-10 h-6 w-6 bg-cyan-400 rounded-sm" />

              <div>
                <h3 className="text-xl font-semibold mb-8">Info</h3>

                <div className="space-y-6 text-sm">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-cyan-300" />
                    <div>
                      <p className="text-xs uppercase text-slate-400">Email</p>
                      <p className="font-medium">
                        knowledgediscoverylab@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-cyan-300" />
                    <div>
                      <p className="text-xs uppercase text-slate-400">Phone</p>
                      <p className="font-medium">
                        081-9291891 <br /> 080-9636451
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">
                        Address
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed font-medium text-white">
                        82 Ramkhamhaeng 24 Alley, Lane 32, Hua Mak, Bang Kapi District, Bangkok 10240
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-cyan-300" />
                    <div>
                      <p className="text-xs uppercase text-slate-400">Hours</p>
                      <p className="font-medium">Mon – Fri, 09:00 – 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61585003467334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky-500 hover:text-sky-400 transition"
                  aria-label="Follow us on Facebook"
                >
                  <span>Follow us on</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                    <FaFacebookF className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
