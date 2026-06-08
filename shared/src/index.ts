export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  initials: string;
}
