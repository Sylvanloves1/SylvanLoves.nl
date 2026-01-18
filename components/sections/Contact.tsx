"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitState("success");
        reset();
        setTimeout(() => setSubmitState("idle"), 5000);
      } else {
        setSubmitState("error");
        setTimeout(() => setSubmitState("idle"), 5000);
      }
    } catch (error) {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-surface/30 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated opacity-50 pointer-events-none" />

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
                <span className="text-muted-foreground">{"POST "}</span>
                /api/contact
              </h2>
              <p className="text-muted-foreground font-mono text-sm">
                {"/* Let's build something amazing together */"}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <FadeIn delay={0.1} className="lg:col-span-2">
                <div className="bg-surface border border-border rounded-lg p-6">
                  {/* API Request Header */}
                  <div className="font-mono text-sm text-muted-foreground mb-6">
                    <p>POST /api/contact HTTP/1.1</p>
                    <p>Content-Type: application/json</p>
                    <p className="text-muted-foreground/50">{"{"}</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pl-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        <span className="text-secondary">&quot;name&quot;</span>
                        <span className="text-muted-foreground">:</span>
                      </label>
                      <Input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-mono">
                          {"// "}{errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        <span className="text-secondary">&quot;email&quot;</span>
                        <span className="text-muted-foreground">:</span>
                      </label>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-mono">
                          {"// "}{errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        <span className="text-secondary">&quot;message&quot;</span>
                        <span className="text-muted-foreground">:</span>
                      </label>
                      <Textarea
                        {...register("message")}
                        placeholder="Your message..."
                        rows={5}
                        className="w-full"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500 font-mono">
                          {"// "}{errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Closing Brace and Submit */}
                    <div className="pt-4">
                      <p className="font-mono text-sm text-muted-foreground/50 mb-4">{"}"}</p>
                      <Button
                        type="submit"
                        disabled={submitState === "loading"}
                        className="w-full sm:w-auto"
                      >
                        {submitState === "loading" ? (
                          <>Sending...</>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Success/Error Messages */}
                    {submitState === "success" && (
                      <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-500">
                        <CheckCircle className="h-5 w-5" />
                        <span className="text-sm font-mono">
                          {"// Message sent successfully!"}
                        </span>
                      </div>
                    )}

                    {submitState === "error" && (
                      <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-500">
                        <AlertCircle className="h-5 w-5" />
                        <span className="text-sm font-mono">
                          {"// Error sending message. Please try again."}
                        </span>
                      </div>
                    )}
                  </form>
                </div>
              </FadeIn>

              {/* Alternative Contact Methods */}
              <FadeIn delay={0.2} className="lg:col-span-1">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground mb-4 font-mono">
                    {"// Alternative ways to reach me"}
                  </h3>

                  <a
                    href={SOCIAL_LINKS.email}
                    className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        Email
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Connect with me
                      </p>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
