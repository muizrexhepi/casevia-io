"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import FooterSection from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section>
      {/* Header */}
      <div className="text-center space-y-5 py-12 md:py-24 border-x max-w-6xl container">
        <h1 className="text-balance text-4xl font-semibold lg:text-5xl">
          Let's talk about <br />
          <span className="text-primary">your needs.</span>
        </h1>
        <p className="text-center text-muted-foreground max-w-lg mx-auto">
          Whether you need a custom plan, have questions, or want to see a
          demo—we're here to help you succeed.
        </p>
      </div>

      <Separator />

      {/* Main Content */}
      <div className="bg-muted border-x container max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-4 px-0 sm:px-4 p-4 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email Card */}
            <Card className="p-4 bg-background">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">Email us</h3>
                  <a
                    href="mailto:contact@casevia.io"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    contact@casevia.io
                  </a>
                  <p className="text-sm text-muted-foreground">
                    For general inquiries and sales
                  </p>
                </div>
              </div>
            </Card>

            {/* Support Card */}
            <Card className="p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">Support</h3>
                  <a
                    href="mailto:support@casevia.io"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    support@casevia.io
                  </a>
                  <p className="text-sm text-muted-foreground">
                    For technical support and help
                  </p>
                </div>
              </div>
            </Card>

            {/* Demo Card */}
            <Card className="p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold">Book a demo</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Schedule a personalized walkthrough
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link href="/demo">
                      Schedule demo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* What to Expect Card */}
            <Card className="p-6 bg-background">
              <h3 className="font-semibold mb-4">What to expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Response within 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Personalized consultation
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Custom pricing and solutions
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    No pressure, just answers
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <Card className="p-8 bg-background h-full">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Work email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company name
                  </Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Team Size */}
                {/* <div className="space-y-2">
                    <Label htmlFor="teamSize" className="text-sm font-medium">
                      Team size
                    </Label>
                    <Select
                      value={formData.teamSize}
                      onValueChange={(value) => handleChange("teamSize", value)}
                    >
                      <SelectTrigger id="teamSize" className="h-11">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 people</SelectItem>
                        <SelectItem value="6-20">6-20 people</SelectItem>
                        <SelectItem value="21-50">21-50 people</SelectItem>
                        <SelectItem value="51-200">51-200 people</SelectItem>
                        <SelectItem value="200+">200+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    How can we help?
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs, questions, or what you'd like to discuss..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="space-y-4">
                  <Button type="submit" size="lg" className="w-full">
                    Send message
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-foreground underline hover:no-underline"
                    >
                      privacy policy
                    </Link>
                    . We'll never share your information.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom CTA */}
      <div className="py-12 md:py-24 border-x container text-center space-y-5 max-w-6xl">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Start using Casevia today — it’s free forever, no credit card
          required.
        </p>
        <Button asChild size="lg">
          <Link href="/dashboard">
            Start for free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
