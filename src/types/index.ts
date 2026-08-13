export interface SocialLink { label: string; url: string; }
export interface Profile { name: string; title: string; summary: string; experienceYears: string; email: string; phone?: string; linkedin: string; githubUsername: string; social: SocialLink[]; }
export interface Experience { company: string; role: string; start: string; end: string; location: string; employmentType: string; description: string; responsibilities: string[]; technologies: string[]; achievements: string[]; }
export interface Skill { name: string; description: string; }
export interface SkillCategory { name: string; description: string; skills: Skill[]; }
export interface Certification { name: string; issuer: string; issued: string; credentialId: string; verificationUrl?: string; }
export interface Project { title: string; category: string; description: string; problem: string; solution: string; architecture: string; technologies: string[]; features: string[]; github?: string; demo?: string; }
export interface Education { degree: string; institution: string; duration: string; major: string; achievements: string[]; }
