"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          intent: data.get("intent"),
          context: data.get("context"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-surface-container-low rounded-xl p-8 sticky top-32 border border-outline-variant/10 shadow-2xl shadow-black/20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 font-headline">
        <span className="material-symbols-outlined text-primary">bolt</span>
        Initiate Connection
      </h2>

      {status === "sent" ? (
        <div className="text-center py-12">
          <span
            className="material-symbols-outlined text-secondary text-5xl mb-4 block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <h3 className="text-xl font-bold mb-2 font-headline">Signal Received</h3>
          <p className="text-on-surface-variant text-sm">
            I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div>
            <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Identify Yourself
            </label>
            <input
              name="name"
              required
              className="w-full bg-surface-container-lowest border-none rounded-md px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary-container transition-all outline-none"
              placeholder="Name or Organization"
              type="text"
            />
          </div>
          <div>
            <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Your Email
            </label>
            <input
              name="email"
              required
              className="w-full bg-surface-container-lowest border-none rounded-md px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary-container transition-all outline-none"
              placeholder="you@company.com"
              type="email"
            />
          </div>
          <div>
            <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Your Intent
            </label>
            <select
              name="intent"
              className="w-full bg-surface-container-lowest border-none rounded-md px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary-container transition-all outline-none"
            >
              <option>General Inquiry</option>
              <option>Joint Build / Project</option>
              <option>Guest Posting</option>
              <option>Strategic Partnership</option>
            </select>
          </div>
          <div>
            <label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">
              Brief Context
            </label>
            <textarea
              name="context"
              required
              className="w-full bg-surface-container-lowest border-none rounded-md px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary-container transition-all resize-none outline-none"
              placeholder="What are we building?"
              rows={4}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-primary-container text-on-primary-container font-bold py-4 rounded-md flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all group disabled:opacity-50"
          >
            <span>{status === "sending" ? "Sending..." : "Send Signal"}</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </button>
          {status === "error" && (
            <p className="text-error text-sm text-center">
              Something went wrong. Please try again or reach out directly on social.
            </p>
          )}
        </form>
      )}

      <div className="pt-8 border-t border-outline-variant/10">
        <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-6 text-center">
          Elsewhere
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            className="flex items-center justify-center gap-2 py-3 bg-surface-container-highest rounded-lg border border-outline-variant/20 hover:bg-surface-bright transition-colors group"
            href="https://x.com/SangamGella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-base group-hover:text-[#1DA1F2] transition-colors">
              alternate_email
            </span>
            <span className="text-sm font-medium">Twitter</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 py-3 bg-surface-container-highest rounded-lg border border-outline-variant/20 hover:bg-surface-bright transition-colors group"
            href="https://www.linkedin.com/in/gella-sangamesh-gupta-a35b5b1b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-base group-hover:text-[#0A66C2] transition-colors">
              share
            </span>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
