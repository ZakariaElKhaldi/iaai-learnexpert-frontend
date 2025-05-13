"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
// Import NextUI components from our client wrapper
import { Button, Card, CardBody, CardFooter } from '@/components/client-components';

// --- Data Definitions (Moved outside component) ---

// Define the Feature type
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string; // Tailwind gradient classes
}

// Define a TechnologyItem type
interface TechnologyItem {
  name: string;
  icon: string; // Emoji or potentially an icon component key
  color: string; // Tailwind CSS classes for styling
}

// --- SVG Icons (Extracted for clarity) ---
// It's often better to put these in separate files (e.g., ./icons/ExpertLedIcon.tsx)
// For brevity here, they are defined as simple functional components.

const ExpertLedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6.75H7.75C6.23122 6.75 5 7.98122 5 9.5V18.25C5 19.7688 6.23122 21 7.75 21H16.25C17.7688 21 19 19.7688 19 18.25V9.5C19 7.98122 17.7688 6.75 16.25 6.75H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V4.75C9 4.19772 9.44772 3.75 10 3.75H14C14.5523 3.75 15 4.19772 15 4.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 16.25H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12.25H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ConsultationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 6.5C16.5 7.05228 16.0523 7.5 15.5 7.5C14.9477 7.5 14.5 7.05228 14.5 6.5C14.5 5.94772 14.9477 5.5 15.5 5.5C16.0523 5.5 16.5 5.94772 16.5 6.5Z" fill="currentColor"/>
      <path d="M18.5 6.5C18.5 8.15685 17.1569 9.5 15.5 9.5C13.8431 9.5 12.5 8.15685 12.5 6.5C12.5 4.84315 13.8431 3.5 15.5 3.5C17.1569 3.5 18.5 4.84315 18.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 13.5C9.5 14.0523 9.05228 14.5 8.5 14.5C7.94772 14.5 7.5 14.0523 7.5 13.5C7.5 12.9477 7.94772 12.5 8.5 12.5C9.05228 12.5 9.5 12.9477 9.5 13.5Z" fill="currentColor"/>
      <path d="M11.5 13.5C11.5 15.1569 10.1569 16.5 8.5 16.5C6.84315 16.5 5.5 15.1569 5.5 13.5C5.5 11.8431 6.84315 10.5 8.5 10.5C10.1569 10.5 11.5 11.8431 11.5 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5817 12.9572C13.4162 12.4618 11.8515 12.5471 10.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5 18.5C21.5 19.6046 20.6046 20.5 19.5 20.5H4.5C3.39543 20.5 2.5 19.6046 2.5 18.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InteractiveProjectsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 6.5C3.5 4.84315 4.84315 3.5 6.5 3.5H17.5C19.1569 3.5 20.5 4.84315 20.5 6.5V17.5C20.5 19.1569 19.1569 20.5 17.5 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5V6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 9.5L9.5 12L7 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 15.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CareerAdvancementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 8.5L18.5 12.5L14.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.5 12.5H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 20.5V3.5C3.5 3.5 9.5 3.5 12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PeerCommunityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 7.5C13.5 8.05228 13.0523 8.5 12.5 8.5C11.9477 8.5 11.5 8.05228 11.5 7.5C11.5 6.94772 11.9477 6.5 12.5 6.5C13.0523 6.5 13.5 6.94772 13.5 7.5Z" fill="currentColor"/>
    <path d="M15.5 7.5C15.5 9.15685 14.1569 10.5 12.5 10.5C10.8431 10.5 9.5 9.15685 9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 17.5C7.5 14.7386 9.73858 12.5 12.5 12.5C15.2614 12.5 17.5 14.7386 17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.75 14.5C19.8567 14.928 21.25 16.1176 21.25 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.25 14.5C5.14331 14.928 3.75 16.1176 3.75 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CertificationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 16.5V20.5L15.5 18.5L18.5 20.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z" fill="currentColor"/>
    <path d="M18.5 10.5C18.5 12.9853 16.4853 15 14 15C11.5147 15 9.5 12.9853 9.5 10.5C9.5 8.01472 11.5147 6 14 6C16.4853 6 18.5 8.01472 18.5 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V18.5C3.5 19.6046 4.39543 20.5 5.5 20.5H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- Static Data (Defined outside component) ---
const featuresData: Feature[] = [
  {
    title: "Expert-Led Courses",
    description: "Learn from industry veterans with courses designed for practical skill development and real-world application.",
    icon: <ExpertLedIcon />,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    title: "1-on-1 Consultations",
    description: "Get personalized guidance and feedback from experienced professionals through direct, one-on-one consultation sessions.",
    icon: <ConsultationIcon />,
    accent: "from-purple-600 to-pink-600",
  },
  {
    title: "Interactive Projects",
    description: "Build real-world projects with guided exercises that reinforce learning and create portfolio-worthy examples of your skills.",
    icon: <InteractiveProjectsIcon />,
    accent: "from-emerald-600 to-teal-600",
  },
  {
    title: "Career Advancement",
    description: "Access specialized tracks and guidance to help you navigate your career path and achieve your professional goals.",
    icon: <CareerAdvancementIcon />,
    accent: "from-amber-600 to-orange-600",
  },
  {
    title: "Peer Community",
    description: "Connect with like-minded professionals, share insights, collaborate on projects, and expand your network.",
    icon: <PeerCommunityIcon />,
    accent: "from-red-600 to-rose-600",
  },
  {
    title: "Certification",
    description: "Earn recognized credentials that validate your skills to employers and highlight your expertise in specific domains.",
    icon: <CertificationIcon />,
    accent: "from-cyan-600 to-blue-600",
  },
];

const techStackData: TechnologyItem[] = [
    { name: "Web", icon: "🌐", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "JavaScript", icon: "⚡", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { name: "React", icon: "⚛️", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
    { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "AWS", icon: "☁️", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "Data Science", icon: "📊", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "DevOps", icon: "🔄", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
    { name: "Machine Learning", icon: "🧠", color: "bg-pink-100 text-pink-800 border-pink-200" },
];

const statsData = [
    { value: "12K+", label: "Active Learners", icon: "👨‍💻" },
    { value: "250+", label: "Expert-Led Courses", icon: "📚" },
    { value: "95%", label: "Career Advancement", icon: "📈" },
    { value: "24/7", label: "Community Support", icon: "🌐" }
];

const learningPathSteps = [
    { step: "01", title: "Skill Assessment", description: "Identify your strengths and areas for growth" },
    { step: "02", title: "Personalized Learning Path", description: "Customized curriculum based on your goals" },
    { step: "03", title: "Hands-on Practice", description: "Apply concepts through real-world projects" },
    { step: "04", title: "Expert Feedback", description: "Receive guidance from industry professionals" }
];

// --- Framer Motion Variants ---
const sectionFadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const sectionFadeInDelay = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay }
  },
});

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation of children
      delayChildren: 0.2, // Small delay before children start animating
    },
  },
};

const gridItemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const statsItemVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" }
  }
});

// --- Component ---
export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      <div aria-hidden="true" className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionFadeInDelay(0)}
            viewport={{ once: true, amount: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium border border-indigo-200/50">
              <span aria-hidden="true" className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
              Learning Platform Features
            </span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={sectionFadeInDelay(0.1)}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 mb-6"
          >
            Comprehensive Learning Experience
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionFadeInDelay(0.2)}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              LearnExpert provides a complete ecosystem for your technical growth with features
              designed to accelerate your learning and career.
            </p>
            
            {/* Add visual separator */}
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-8 mb-4"></div>
            
            {/* Add platform highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-2">
              {[
                { label: "Expert-Led", icon: "👨‍🏫" }, 
                { label: "Industry-Aligned", icon: "🏢" }, 
                { label: "Project-Based", icon: "🛠️" }, 
                { label: "Community-Driven", icon: "👥" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-700 font-medium"
                >
                  <span className="mr-2 text-xl" aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Learning path visual - improved with more creative layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionFadeIn}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto mb-28" // Wider container and more bottom margin
        >
          <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Replace simple gradient border with more interesting visual element */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="p-8 md:p-10">
              {/* Improved heading section with visual distinction */}
              <div className="text-center mb-12">
                <div className="inline-block p-2 bg-indigo-50 rounded-lg mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
                    <path d="M3 7.8L12 3L21 7.8M3 7.8V16.2L12 21L21 16.2V7.8M3 7.8L12 12L21 7.8M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Your Learning Journey</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                  Our platform guides you through a structured learning path that combines theoretical knowledge
                  with hands-on practice to ensure mastery of complex technical concepts.
                </p>
              </div>
              
              {/* Reimagined learning journey with more visual focus */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Learning steps - visual timeline */}
                <div className="relative">
                  {/* Connect line between steps */}
                  <div className="absolute left-5 top-5 bottom-5 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded hidden md:block"></div>
                  
                  <div className="space-y-10">
                    {learningPathSteps.map((item, index) => (
                      <motion.div 
                        key={item.step} 
                        className="flex items-start relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-md z-10">
                          {item.step}
                        </div>
                        <div className="ml-5 bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
                          <p className="text-gray-600 mt-1">{item.description}</p>
                          
                          {/* Add relevant icon for each step */}
                          <div className="flex justify-end">
                            {index === 0 && <span className="text-2xl opacity-70">🔍</span>}
                            {index === 1 && <span className="text-2xl opacity-70">📝</span>}
                            {index === 2 && <span className="text-2xl opacity-70">💻</span>}
                            {index === 3 && <span className="text-2xl opacity-70">🔄</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Right side graphic - more interesting visual */}
                <div className="relative order-first lg:order-last">
                  {/* Decorative background element */}
                  <div aria-hidden="true" className="absolute -inset-4 bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-2xl -z-10 transform rotate-3"></div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <div className="bg-gray-800 h-10 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="ml-4 text-xs text-gray-300">learning-journey.learnexpert.com</div>
                    </div>
                    
                    <Image
                      src="/assets/learning-path.png"
                      alt="Diagram illustrating the four steps of the Learning Expert learning journey"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    
                    {/* Add interactive elements overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-indigo-600/90 rounded-full flex items-center justify-center cursor-pointer" 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add floating decorative elements */}
          <div aria-hidden="true" className="absolute top-1/4 -right-20 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl"></div>
          <div aria-hidden="true" className="absolute bottom-1/4 -left-20 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Feature cards - Using staggered layout with improved visuals */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-1.5 rounded-full text-sm font-medium text-indigo-800 inline-block mb-2">
              Key Platform Features
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Everything You Need to Succeed</h3>
          </div>
          
          {/* Staggered feature layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Background decorative elements */}
            <div aria-hidden="true" className="absolute left-1/4 top-20 w-72 h-72 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-xl opacity-70 -z-10"></div>
            <div aria-hidden="true" className="absolute right-1/4 bottom-20 w-72 h-72 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full blur-xl opacity-70 -z-10"></div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {featuresData.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`h-full ${index === 0 ? 'md:translate-y-12' : ''} ${index === 2 ? 'md:translate-y-8' : ''} ${index === 3 ? 'md:-translate-y-8' : ''} ${index === 5 ? 'md:-translate-y-12' : ''}`}
                  variants={gridItemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
                >
                  <Card
                    className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-none overflow-hidden h-full group"
                    isPressable
                    radius="lg"
                  >
                    {/* Colorful top border */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${feature.accent}`}></div>
                    
                    <CardBody className="p-6 md:p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.accent} text-white mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardBody>
                    <CardFooter className="pb-6 px-8 pt-0 flex justify-between items-center">
                      <Button
                        as="span"
                        variant="light"
                        color="primary"
                        className="text-sm px-0 font-medium"
                        size="sm"
                        endContent={<ArrowRightIcon />}
                      >
                        Learn more
                      </Button>
                      
                      {/* Feature number badge */}
                      <span className="text-xs font-semibold text-gray-400">0{index + 1}</span>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* View all features button */}
            <div className="text-center mt-12">
              <Button
                className="bg-white border border-gray-200 text-indigo-600 px-8 py-6 shadow-sm hover:shadow-md transition-shadow font-medium"
                radius="full"
                endContent={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              >
                View All Platform Features
              </Button>
            </div>
          </div>
        </div>

        {/* Technology Tracks - Reimagined as interactive showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionFadeIn}
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-6xl mx-auto mb-24"
        >
          {/* Background pattern - dotted grid */}
          <div aria-hidden="true" className="absolute inset-0 bg-indigo-50 rounded-3xl -z-10"></div>
          <div aria-hidden="true" className="absolute inset-0 bg-grid-indigo-500/[0.03] bg-[length:20px_20px] -z-10"></div>
          
          {/* Content container */}
          <div className="p-8 md:p-12">
            {/* Two-column layout for large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left column - section info */}
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-4">
                  <span className="mr-1">💪</span> In-Demand Skills
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Master Today&apos;s Most Valuable Technology Skills
                </h3>
                <p className="text-gray-600 mb-6">
                  Our platform offers comprehensive learning paths across today&apos;s most in-demand technology domains. 
                  Select your area of interest and start your journey to mastery.
                </p>
                
                <div className="hidden lg:block">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Expert-curated learning paths</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Industry-aligned curriculum</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Hands-on projects in every track</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    size="lg"
                    className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium"
                    radius="full"
                    endContent={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    }
                  >
                    Explore All Technologies
                  </Button>
                </div>
              </div>
              
              {/* Right column - tech cards */}
              <div className="relative">
                {/* Tech stack grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {techStackData.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.03,
                        transition: { type: "spring", stiffness: 300, damping: 10 }
                      }}
                      className="group"
                    >
                      <div className={`${tech.color} border p-5 rounded-xl transition-all duration-300 hover:shadow-md group-hover:border-indigo-300`}>
                        <div className="flex flex-col items-center text-center">
                          <span className="text-3xl mb-3" aria-hidden="true">{tech.icon}</span>
                          <span className="font-semibold">{tech.name}</span>
                          
                          {/* Subtle indication of courses count */}
                          <span className="text-xs mt-1.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            {/* These are fictional counts - replace with actual data */}
                            {index === 0 ? '12 courses' : 
                             index === 1 ? '18 courses' : 
                             index === 2 ? '15 courses' : 
                             index === 3 ? '10 courses' : 
                             index === 4 ? '8 courses' : 
                             index === 5 ? '14 courses' : 
                             index === 6 ? '9 courses' : '7 courses'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative element */}
                <div aria-hidden="true" className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full blur-xl opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics section - Redesigned with visual impact */}
        <div className="mb-24 relative">
          {/* Large background numbers for visual interest */}
          <div aria-hidden="true" className="absolute inset-0 flex justify-between items-center overflow-hidden -z-10">
            <div className="text-[20rem] font-bold text-indigo-50 leading-none opacity-80 -ml-20">12K</div>
            <div className="text-[12rem] font-bold text-indigo-50 leading-none opacity-70 -mr-16 transform rotate-12">+</div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The Numbers Speak for Themselves</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers through 
              our comprehensive learning platform.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItemVariants(index)}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`text-center md:border-r md:last:border-r-0 border-indigo-100 md:px-8 ${index < 2 ? 'md:pb-6' : 'md:pt-6'}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl mb-5">
                      <span aria-hidden="true">{stat.icon}</span>
                    </div>
                    <h4 className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">{stat.value}</h4>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Call to action inside stats */}
            <div className="flex justify-center mt-12">
              <Button 
                size="lg"
                className="bg-white text-indigo-600 px-8 py-6 shadow-md hover:shadow-lg transition-shadow font-medium"
                radius="full"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionFadeIn}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.01]">
            <div className="px-6 py-12 md:py-16 relative z-10">
              {/* Inner content animation container */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Inherits from parent, but fine here
                transition={{ staggerChildren: 0.15 }}
                className="max-w-3xl mx-auto text-center"
              >
                <motion.h3
                  variants={sectionFadeInDelay(0)} // Use simple fade-in for children
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                >
                  Ready to accelerate your technical career?
                </motion.h3>
                <motion.p
                  variants={sectionFadeInDelay(0.1)}
                  className="text-white/90 text-lg mb-8"
                >
                  Join thousands of professionals who are advancing their careers through our comprehensive platform.
                </motion.p>
                <motion.div
                  variants={sectionFadeInDelay(0.2)}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-white text-indigo-700 font-semibold shadow-lg hover:bg-opacity-95 transition-all"
                    // Add potential navigation link here e.g. as={Link} href="/signup"
                  >
                    Get Started Free
                  </Button>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="text-white border-white/40 hover:bg-white/10 transition-all font-medium"
                     // Add potential navigation link here e.g. as={Link} href="/demo"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div aria-hidden="true" className="absolute top-0 left-0 w-full h-full opacity-15 mix-blend-overlay overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-purple-400 to-transparent rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-tr from-indigo-400 to-transparent rounded-full transform rotate-45"></div>
                <div className="absolute -bottom-20 right-1/3 w-48 h-48 bg-gradient-to-tl from-pink-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Social proof */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by teams at</p>
          <div className="flex justify-center items-center flex-wrap gap-6 opacity-70">
            {["Google", "Microsoft", "Amazon", "Meta", "IBM"].map((company, i) => (
              <div key={i} className="text-gray-600 font-semibold">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}