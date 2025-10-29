"use client";

import { useState } from "react";
import { getSectionLabelColor } from "@/lib/sectionColors";

interface CTASectionProps {
  colorIndex: number;
  data: {
    label?: string;
    title: string;
    text: string;
    button_text: string;
    redirect_url: string;
    form_fields: {
      hear_about_options: Array<{ value: string; label: string }>;
      position_options: Array<{ value: string; label: string }>;
      company_size_options: Array<{ value: string; label: string }>;
      industry_options: Array<{ value: string; label: string }>;
      goal_options: Array<{ value: string; label: string }>;
      timeline_options: Array<{ value: string; label: string }>;
      labels: {
        name: string;
        email: string;
        phone: string;
        company: string;
        hear_about: string;
        position: string;
        use_case: string;
      };
      placeholders: {
        name: string;
        email: string;
        phone: string;
        company: string;
        use_case: string;
      };
      company_size_label: string;
      industry_label: string;
      goal_label: string;
      timeline_label: string;
      criticality_label: string;
      criticality_min: number;
      criticality_max: number;
      criticality_description: string;
      feedback_opt_in_label: string;
      privacy_text: string;
      privacy_notice: string;
    };
  };
}

export default function CTASection({ colorIndex, data }: CTASectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    useCase: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          position: formData.position,
          useCase: formData.useCase,
          source: "beta_signup_form",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  return (
    <section
      id="cta_section"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Side - Title and Text */}
          <div>
            {data.label && (
              <p
                className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide"
                style={{ color: getSectionLabelColor(colorIndex) }}>
                {data.label}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
              {data.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300">
              {data.text}
            </p>
          </div>

          {/* Right Side - Form */}
          <div>
            {isSubmitted ? (
              <div className="w-full border border-slate-800 rounded-lg p-6 sm:p-8 lg:p-12 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Thanks for signing up!
                </h3>
                <p className="text-sm sm:text-base text-slate-300">
                  We&apos;ll be in touch soon with beta access details.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full border-0 sm:border sm:border-slate-800 rounded-none sm:rounded-lg p-0 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2">
                    {data.form_fields.labels.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-slate-700"
                    placeholder={data.form_fields.placeholders.name}
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2">
                    {data.form_fields.labels.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-slate-700"
                    placeholder={data.form_fields.placeholders.email}
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-slate-300 mb-2">
                    {data.form_fields.labels.position} *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-slate-700">
                    {data.form_fields.position_options.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-slate-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="useCase"
                    className="block text-sm font-medium text-slate-300 mb-2">
                    {data.form_fields.labels.use_case} *
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    rows={4}
                    required
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-slate-700 resize-none"
                    placeholder={data.form_fields.placeholders.use_case}
                  />
                </div>

                <div className="mb-4 sm:mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      required
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 bg-transparent border border-slate-800 rounded focus:outline-none focus:ring-1 focus:ring-slate-700"
                    />
                    <span className="text-sm text-slate-300">
                      {data.form_fields.privacy_text} *
                    </span>
                  </label>
                </div>

                <div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 border rounded-lg"
                  style={{
                    backgroundColor: "rgb(30, 30, 30)",
                    borderColor: "rgb(51, 65, 85)",
                  }}>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-300">Privacy Notice:</strong>{" "}
                    {data.form_fields.privacy_notice}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 font-medium rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#3b82f6", color: "white" }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting)
                      e.currentTarget.style.backgroundColor = "#2563eb";
                  }}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3b82f6")
                  }>
                  {isSubmitting ? "Submitting..." : data.button_text}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
