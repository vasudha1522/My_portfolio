export const profile = {
  name: 'Vasudha Kalyani',
  fullName: 'Tripuraneni Vasudha Kalyani',
  location: 'Bangalore, Karnataka, India',
  email: 'vasudhatripuraneni15@gmail.com',
  phoneDisplay: '+91-9032956651',
  phoneHref: 'tel:+919032956651',
  linkedinUrl: '', // TODO: add verified profile URL
  githubUrl: '', // TODO: add verified profile URL
  resumeUrl: '', // Add only when the correct PDF is in public assets
  profileImage: '/images/vasudha-profile.jpg',
}

export const navItems = [
  { label: 'Home', id: 'home' }, { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' }, { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' }, { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

export const projects = [
  {
    slug: 'education-text-to-image', title: 'AI Text-to-Image Generator for Education',
    description: 'A Stable Diffusion application for generating age-appropriate educational illustrations.',
    technologies: ['Stable Diffusion', 'LoRA', 'Python', 'OpenCV', 'Flask', 'spaCy', 'T5'],
    highlights: ['Built a LoRA fine-tuning pipeline using a custom 400-image dataset.', 'Combined Flask, spaCy, and T5 for NLP-based prompt processing.', 'Used OpenCV for image post-processing and refinement.'],
    githubUrl: '', demoUrl: '',
  },
  {
    slug: 'face-recognition-attendance', title: 'Face Recognition Attendance System',
    description: 'A real-time attendance system using computer vision and deep learning.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Docker', 'AWS EC2', 'Haar Cascade'],
    highlights: ['Developed a face recognition workflow using TensorFlow, OpenCV, and Haar Cascade.', 'Evaluated recognition under varying lighting conditions.', 'Dockerized and deployed on AWS EC2; associated research was published as a peer-reviewed paper.'],
    githubUrl: '', demoUrl: '',
  },
  {
    slug: 'careerpilot-ai', title: 'CareerPilot AI',
    description: 'An AI-powered career platform for resume analysis and personalized job recommendations.',
    technologies: ['React', 'FastAPI', 'MySQL', 'LangChain', 'GPT-4o-mini', 'Gemini', 'Docker', 'Vercel', 'Render', 'GitHub Actions'],
    highlights: ['Integrated GPT-4o-mini and Gemini with an LLM fallback.', 'Built resume parsing, job-description matching, and RAG-based recommendations.', 'Used Docker, Vercel, Render, and GitHub Actions CI/CD.'],
    githubUrl: '', demoUrl: '',
  },
  {
    slug: 'project-dna', title: 'Project DNA',
    description: 'A RAG-based tool for understanding GitHub repositories and project documentation.',
    technologies: ['React', 'FastAPI', 'MongoDB', 'LangChain', 'OpenAI', 'Qdrant'],
    highlights: ['Indexed repositories and documents in Qdrant.', 'Implemented embeddings and semantic retrieval.', 'Enabled context-aware chat and document question answering.'],
    githubUrl: '', demoUrl: '',
  },
]

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'Java'] },
  { title: 'AI / ML', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'LangChain', 'RAG'] },
  { title: 'Web, Backend & Tools', skills: ['HTML', 'CSS', 'JavaScript', 'Flask', 'FastAPI', 'Postman', 'Git', 'GitHub'] },
  { title: 'Databases & Vector Search', skills: ['MySQL', 'MongoDB', 'Qdrant'] },
  { title: 'Core Computer Science', skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Networking'] },
  { title: 'Professional Skills', skills: ['Problem Solving', 'Communication', 'Troubleshooting', 'Team Collaboration'] },
]

export const certifications = [
  { name: 'DevOps, DataOps, MLOps', issuer: 'Duke University', credentialUrl: '' },
  { name: 'Introduction to Agile Development and Scrum', issuer: 'IBM', credentialUrl: '' },
  { name: 'Generative AI Professional', issuer: 'Oracle', year: '2025', credentialUrl: '' },
  { name: 'Machine Learning with Python', issuer: 'IBM', credentialUrl: '' },
]

export const validExternalUrl = (url: string) => /^https:\/\//i.test(url)
