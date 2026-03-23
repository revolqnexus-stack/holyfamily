"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Smile, 
  Microscope, 
  Activity, 
  Baby, 
  Scissors, 
  Scan, 
  ShieldCheck,
  HeartPulse,
  Syringe,
  ClipboardList
} from "lucide-react";

const specialties = [
  {
    title: "Endodontics",
    description: "Specialized in saving natural teeth with daily, expert painless root canal treatments (RCT) and pulp therapy.",
    icon: Microscope,
    highlights: ["Painless RCT", "Pulp Therapy", "Micro-surgery"]
  },
  {
    title: "Prosthodontics",
    description: "Lead expertise in dental restoration including metal-based partial dentures, crowns, bridges, and implants.",
    icon: Stethoscope,
    highlights: ["Implants", "Crowns", "Bridges", "Dentures"]
  },
  {
    title: "Implantology",
    description: "Advanced permanent tooth replacement using modern titanium or ceramic posts for a natural look and feel.",
    icon: Scan,
    highlights: ["Single Tooth", "Full Mouth", "Bone Grafting"]
  },
  {
    title: "Cosmetic Dentistry",
    description: "Smile makeovers with professional teeth whitening, bleaching, dental ceramics, and aesthetic contouring.",
    icon: Activity,
    highlights: ["Whitening", "Veneers", "Bleaching"]
  },
  {
    title: "Orthodontics",
    description: "Corrective alignment procedures for children and adults using modern braces and clear aligner systems.",
    icon: Smile,
    highlights: ["Braces", "Clear Aligners", "Invisalign"]
  },
  {
    title: "Paedodontics",
    description: "Gentle, specialized dental care designed specifically for children's oral health and preventive needs.",
    icon: Baby,
    highlights: ["Child Friendly", "Fluoride", "Prevention"]
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical interventions from routine extractions to complex maxillofacial procedures.",
    icon: Scissors,
    highlights: ["Extractions", "Wisdom Teeth", "Surgery"]
  },
  {
    title: "Periodontics",
    description: "Comprehensive care for gums and supporting structures, including bleeding gum and gum disease treatments.",
    icon: ShieldCheck,
    highlights: ["Gum Health", "Scaling", "Polishing"]
  },
  {
    title: "General Dentistry",
    description: "Routine oral health maintenance including professional extractions, fillings, and dental cleanings.",
    icon: Syringe,
    highlights: ["Extractions", "Fillings", "Scaling"]
  },
  {
    title: "Diagnostics",
    description: "In-house dental X-ray services and comprehensive specialist consultations for accurate treatment plans.",
    icon: ClipboardList,
    highlights: ["Digital X-Ray", "Consultation", "Planning"]
  }
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
          >
            Clinical Excellence. <br />
            <span className="italic text-primary">Specialist Care.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Guided by Dr. Bijo Kurian and Dr. Thara Maria Joseph, we provide a 
            comprehensive spectrum of 10 advanced dental specialties focused on 
            painless, patient-centric excellence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <spec.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">{spec.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {spec.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {spec.highlights.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary/50 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Emergency Card Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="xl:col-span-2 p-8 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-primary/20"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 animate-pulse">
              <HeartPulse className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">Emergency Care</h3>
              <p className="text-white/80 mb-6 leading-relaxed max-w-lg">
                Acute dental trauma or sudden-onset pain? Our specialists provide responsive emergency support during clinic working hours.
              </p>
              <a 
                href="tel:08071909299" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-bold hover:bg-secondary transition-all shadow-lg"
              >
                Call for Emergency
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
