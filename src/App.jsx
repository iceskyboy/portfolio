import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Star,
  Facebook,
  Twitter,
  Dribbble,
  Github,
  Sparkles,
  Briefcase,
  Layers,
  PenTool,
  MonitorSmartphone,
  BarChart3,
  Search,
} from "lucide-react";
import profile from "./assets/profile.jpg";
import background from "./assets/background.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "services", label: "What I Do" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  
  { id: "contact", label: "Contact" },
];

const heroRoles = ["Full Stack Developer", "Tech Lead", "Frontend Engineer", "Backend Engineer"];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Team Members Led" },
  { value: "100%", label: "Commitment" },
];

const serviceIcons = [PenTool, MonitorSmartphone, Layers, Briefcase, BarChart3, Search];
const serviceTitles = [
  "Frontend Development",
  "Backend Development",
  "System Architecture",
  "Tech Leadership",
  "API Integration",
  "Performance Optimization",
];

const serviceDescriptions = [
  "Build responsive, modern, and high-performance user interfaces with React, Tailwind, and scalable component architecture.",
  "Develop secure APIs, business logic, authentication flows, and database-driven systems for production applications.",
  "Design maintainable application structure, clean code organization, and scalable technical solutions for growing products.",
  "Lead engineering teams, review code, mentor developers, and drive delivery with strong technical direction.",
  "Connect third-party services, payment gateways, internal tools, and external APIs into reliable workflows.",
  "Improve loading speed, rendering efficiency, database performance, and overall user experience across the stack.",
];

const services = serviceTitles.map((title, index) => ({
  title,
  text: serviceDescriptions[index],
  Icon: serviceIcons[index],
}));

const education = [
  { period: "2014 - 2018", title: "Bachelor in Computer Science", place: "University" },
  { period: "2018 - 2020", title: "Advanced Software Development", place: "Professional Training" },
  { period: "2021 - Present", title: "Continuous Learning", place: "Architecture, Leadership & Modern Web Stack" },
];

const experience = [
  {
    period: "2022 - Present",
    title: "Tech Lead & Senior Full Stack Developer",
    place: "Wing Bank",
    description:
      "Lead a cross-functional team to deliver corporate banking solutions including Loans, Internet Banking, Payroll Portal, and Digital Micro Applications. Architect scalable microservices using Java Spring (MVC/WebFlux) and Node/NestJS, and build modern UIs with React, Next.js, and Vue. Establish codebase standards, CI/CD (GitLab), and release processes. Drive code reviews, mentor engineers, and continuously improve system performance, reliability, and security across full banking platforms.",
  },
  {
    period: "2021 - 2022",
    title: "Team Lead & Senior Backend Developer",
    place: "Skybooking Co., Ltd",
    description:
      "Designed and implemented backend services and REST APIs for booking platforms using Java Spring. Integrated with React/Vue frontends, optimized database queries, and improved API performance. Led a small team, clarified requirements with stakeholders, and maintained CI/CD pipelines and production stability.",
  },
  {
    period: "2016 - 2021",
    title: "Full Stack Developer",
    place: "Balancika Cambodia Co., Ltd",
    description:
      "Developed end-to-end web applications using Java Spring and PHP Laravel. Built responsive UIs with HTML/CSS/JavaScript, jQuery, and AngularJS. Designed database schemas (MySQL/SQL Server), implemented authentication and business logic, and collaborated in Agile using Git, Jira, and Bitbucket.",
  },
];

const skills = [
  { label: "Java (Spring Boot, MVC, WebFlux, Microservices)", value: 95 },
  { label: "Node.js / NestJS / APIs", value: 92 },
  { label: "React / Next.js / Vue / Nuxt", value: 94 },
  { label: "PHP / Laravel", value: 85 },
  { label: "HTML / CSS / JavaScript / Angular", value: 93 },
  { label: "C# / .NET / VB.NET", value: 80 },
  { label: "Mobile (Flutter, SwiftUI)", value: 78 },
  { label: "Databases (MySQL, SQL Server, Oracle, PostgreSQL)", value: 90 },
  { label: "Cloud & DevOps (AWS EC2, Ubuntu)", value: 85 },
  { label: "Tools (Git, GitLab, Jira, Bitbucket)", value: 88 },
];

const portfolioFilters = ["All", "Frontend", "Backend", "Tech Lead"];

const portfolioItems = [
  {
    id: 1,
    category: "Frontend",
    title: "ERP",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    size: "large",
  },
  {
    id: 2,
    category: "Frontend",
    title: "HRM",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=900&q=80",
    size: "small",
  },
  {
    id: 3,
    category: "Backend",
    title: "Banking Frontend (Vue + Vuex)",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=900&q=80",
    size: "medium",
  },
  
];

const name = "Sambath Chy";
const email = "sambathchy.chy@gmail.com";
const phone1 = "(855) 069 297 800"
const phone2 = "(855) 012 395 808"
const address = "Phnom Penh, Cambodia"



function SectionHeading({ ghost, title, eyebrow }) {
  return (
    <div className="mb-16 text-center">
      <div className="relative inline-block max-w-full">
        <h2 className="select-none text-5xl font-bold uppercase tracking-[0.24em] text-slate-100 sm:text-7xl lg:text-8xl">
          {ghost}
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600">
              <Sparkles className="h-3.5 w-3.5" />
              {eyebrow}
            </div>
            <h3 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h3>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)]"
    >
      <span className="inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
        {item.period}
      </span>
      <h4 className="mt-5 text-2xl font-semibold text-slate-900">{item.title}</h4>
      <p className="mt-2 text-base font-medium text-rose-500">{item.place}</p>
      <p className="mt-4 leading-8 text-slate-600">
        {item.description || "Professional experience in software development, system design, and delivering scalable applications."}
      </p>
    </motion.div>
  );
}

function Sidebar({ scrollToSection, activeSection, mobile = false }) {
  return (
    <div
      className={`flex h-full flex-col ${
        mobile
          ? "bg-slate-950/95 p-6 text-white backdrop-blur-xl"
          : "fixed left-0 top-0 z-40 h-screen w-[280px] border-r border-white/5 bg-slate-950 px-7 py-10 text-white"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-[7px] border-slate-700 shadow-[0_0_0_8px_rgba(255,255,255,0.03)]">
          <img
            src={profile}
            alt={name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-wide">{name}</h2>
        <p className="mt-2 text-sm text-slate-400">Full Stack Developer · Tech Lead · Phnom Penh</p>
      </div>

      <div className="mt-8 flex justify-center gap-3 text-slate-300">
        {[Twitter, Facebook, Dribbble, Github].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <nav className="mt-10 flex flex-1 flex-col gap-1.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative overflow-hidden rounded-xl px-4 py-3 text-left text-[15px] font-medium transition ${
              activeSection === item.id
                ? "bg-white/10 text-emerald-400 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.22)]"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span
              className={`absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-emerald-500 transition ${
                activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-60"
              }`}
            />
            <span className="relative pl-3">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center text-sm text-slate-400">
        <p>Copyright © {new Date().getFullYear()} </p>
        <p>{name}</p>
        <p className="mt-1">All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default function SimonePortfolioClone() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [roleIndex, setRoleIndex] = useState(0);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }, 1900);
    return () => clearInterval(timer);
  }, []);

  

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <button
        className="fixed right-4 top-4 z-50 rounded-xl bg-slate-950 p-3 text-white shadow-2xl lg:hidden"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle Menu"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div className="hidden lg:block">
        <Sidebar scrollToSection={scrollToSection} activeSection={activeSection} />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="relative h-full w-[300px] max-w-[88vw]">
              <Sidebar scrollToSection={scrollToSection} activeSection={activeSection} mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="lg:ml-[280px]">
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center blur-[4px]"
            style={{
              backgroundImage: `url(${background})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-900/90" />
          <div className="absolute left-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[120px]" />
          <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

          <div className="relative px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                Full Stack Developer Portfolio
              </div>

              <h1 className="mt-8 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                {"Hi, I'm "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                 {name}
                </span>
              </h1>

              <div className="mt-6 min-h-[60px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={heroRoles[roleIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl font-light sm:text-4xl lg:text-5xl"
                  >
                    {"I build "}
                    <span className="text-emerald-400">{heroRoles[roleIndex]}</span>
                  </motion.p>
                </AnimatePresence>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build scalable products, lead engineering teams, and deliver modern frontend and backend solutions with strong focus on quality and performance.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-medium text-white shadow-xl transition hover:scale-105"
                >
                  Hire Me
                </button>

                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur transition hover:bg-white/10"
                >
                  View Projects
                </button>
              </div>
            </motion.div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
            aria-label="Scroll to About"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </section>

        <section id="about" className="relative px-6 py-24 sm:px-10 lg:px-16">
          <SectionHeading ghost="ABOUT ME" title="Know Me More" eyebrow="About" />

          <div className="grid gap-12 xl:grid-cols-[1.8fr_1fr] xl:items-start">
            <div>
              <h3 className="text-4xl font-semibold leading-tight text-slate-900">
                {"I'm "}
                <span className="text-emerald-500">{name},</span>
                {" a Full Stack Developer and Tech Lead"}
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                I am a Full Stack Developer and Tech Lead based in {address}. I work across frontend and backend development to build reliable, scalable, and user-focused digital products.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                My experience includes React application development, API and database design, architecture planning, team mentoring, code review, and delivering software that solves real business problems.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.06)]">
              {[
                ["Name", name],
                ["Email", email],                
                ["From", address],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-slate-200 py-4 text-base last:border-b-0">
                  <span className="font-semibold text-slate-900">{label}:</span>
                  <span className="text-slate-600">{value}</span>
                </div>
              ))}

              <button className="mt-8 rounded-full bg-emerald-500 px-8 py-4 text-white shadow-[0_12px_30px_rgba(16,185,129,0.28)] transition hover:-translate-y-0.5 hover:bg-emerald-600">
                <span className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download Resume
                </span>
              </button>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-slate-200 pt-12 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50 p-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
              >
                <div className="text-5xl font-semibold text-slate-900">{stat.value}</div>
                <div className="mt-3 text-base text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16">
          <SectionHeading ghost="SERVICES" title="What I Do?" eyebrow="Services" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.Icon;
              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 leading-8 text-slate-600">{service.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="resume" className="px-6 py-24 sm:px-10 lg:px-16">
          <SectionHeading ghost="SUMMARY" title="Resume" eyebrow="Summary" />
          <div className="grid gap-12 xl:grid-cols-2">
            <div>
              <h3 className="mb-8 text-3xl font-semibold text-slate-900">My Education</h3>
              <div className="space-y-6">
                {education.map((item) => (
                  <TimelineCard key={`${item.period}-${item.title}`} item={item} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-8 text-3xl font-semibold text-slate-900">My Experience</h3>
              <div className="space-y-6">
                {experience.map((item) => (
                  <TimelineCard key={`${item.period}-${item.title}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
            <h3 className="mb-8 text-3xl font-semibold text-slate-900">My Skills</h3>
            <div className="grid gap-x-10 gap-y-8 xl:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-medium text-slate-900">{skill.label}</span>
                    <span className="text-slate-700">{skill.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-full border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-900 hover:text-white">
                <span className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download CV
                </span>
              </button>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16">
          <SectionHeading ghost="PORTFOLIO" title="My Work" eyebrow="Portfolio" />
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.3)]"
                    : "bg-white text-slate-500 shadow-sm hover:bg-slate-900 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
            <AnimatePresence>
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group relative mb-6 block overflow-hidden rounded-3xl shadow-[0_15px_35px_rgba(15,23,42,0.08)]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                      item.size === "large" ? "h-[420px]" : item.size === "medium" ? "h-[340px]" : "h-[280px]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/0 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="translate-y-6 text-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur">
                        <ExternalLink className="h-6 w-6" />
                      </div>
                      <h4 className="mt-5 text-2xl font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-slate-200">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        

        <section id="contact" className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16">
          <SectionHeading ghost="CONTACT" title="Get in Touch" eyebrow="Contact" />
          <div className="grid gap-14 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
              <h3 className="text-3xl font-semibold">Let’s Connect</h3>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                {address}
              </p>

              <div className="mt-8 space-y-4 text-slate-200">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-400" /> {phone1}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-400" /> {phone2}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-400" /> {email}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-400" /> {address}
                </p>
              </div>

              <h4 className="mt-10 text-2xl font-semibold">Follow Me</h4>
              <div className="mt-5 flex gap-3 text-slate-300">
                {[Twitter, Facebook, Dribbble, Github].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_35px_rgba(15,23,42,0.06)] sm:p-10">
              <h3 className="text-2xl font-semibold text-slate-900">Available For</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Full Stack Web Development",
                  "Tech Lead / Team Leadership",
                  "Frontend Architecture",
                  "Backend API Development",
                  "System Design",
                  "Code Review & Mentoring",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-emerald-50 p-5 text-slate-700">
                <p className="font-semibold text-slate-900">Best way to reach me</p>
                <p className="mt-2 leading-7">
                  Contact me by phone or email for project discussion, technical leadership opportunities, or collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-slate-500 sm:px-10 lg:px-16">
          <p>Copyright © {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
