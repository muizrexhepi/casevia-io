import React from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export enum DemoStatus {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}
