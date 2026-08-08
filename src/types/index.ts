export interface Major {
  id: string;
  name: string;
  abbreviation: string;
  departmentId: string;
  description: string;
  competencies: string[];
  careerProspects: string[];
  icon: string;
}

export interface Department {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  image: string;
  majors: Major[];
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  departmentId: string;
  image: string;
  modelUrl?: string;
}

export interface AlumniProfile {
  id: string;
  name: string;
  graduationYear: number;
  major: string;
  company: string;
  position: string;
  photo: string;
  testimonial: string;
}

export interface IndustryPartner {
  id: string;
  name: string;
  logo: string;
  type: "MoU" | "PKL" | "Rekrutmen";
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: number;
  level: "Kota" | "Provinsi" | "Nasional" | "Internasional";
  major: string;
  description: string;
}

export interface BLUDProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  department: string;
  category: string;
  available: boolean;
}

export interface BKKJob {
  id: string;
  company: string;
  position: string;
  location: string;
  salaryRange: string;
  deadline: string;
  requirements: string[];
  type: "Full-time" | "Magang" | "PKL";
  logo: string;
}

export interface PPDBTimeline {
  id: string;
  step: number;
  title: string;
  description: string;
  dateRange: string;
  status: "Selesai" | "Berlangsung" | "Mendatang";
}

export interface PPDBTrack {
  id: string;
  name: string;
  description: string;
  quota: number;
  requirements: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface Extracurricular {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  icon: string;
}

export interface ExtracurricularCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}
