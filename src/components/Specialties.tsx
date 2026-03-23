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
  ShieldCheck 
} from "lucide-react";

const specialties = [
  {
    title: "Prosthodontics",
    description: "Specialized in tooth restoration and replacement, including crowns, bridges, and advanced implants.",
    icon: Stethoscope,
    highlights: ["Implants", "Crowns", "Bridges", "Dentures"]
  },
  {
    title: "Endodontics",
    description: "Expert daily root canal treatments (RCT) focused on saving teeth with painless precision.",
    icon: Microscope,
    highlights: ["Painless RCT", "Pulp Therapy", "Micro-surgery"]
  },
  {
    title: "Implantology",
    description: "Permanent, aesthetic solutions for tooth replacement using modern titanium or ceramic posts.",
    icon: Scan,
    highlights: ["Single Tooth", "Full Mouth", "Bone Grafting"]
  },
  {
    title: "Orthodontics",
    description: "Correcting tooth alignment and bite issues for children and adults with modern appliances.",
    icon: Smile,
    highlights: ["Braces", "Clear Aligners", "Invisalign"]
  },
  {
    title: "Paedodontics",
    description: "Gentle, specialized dental care designed specifically for children's oral health.",
    icon: Baby,
    highlights: ["Child Friendly", "Fluoride", "Prevention"]
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical interventions from extractions to complex maxillofacial procedures.",
    icon: Scissors,
    highlights: ["Extractions", "Wisdom Teeth", "Surgery"]
  },
  {
    title: "Periodontics",
    description: "Comprehensive care for gums and supporting structures, preventing gum diseases.",
    icon: ShieldCheck,
    highlights: ["Gum Health", "Scaling", "Polishing"]
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhancing the beauty of your smile with whitening, bleaching, and aesthetic contouring.",
    icon: Activity,
    highlights: ["Whitening", "Veneers", "Bleaching"]
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
            Guided by Dr. Thara Maria Joseph, we provide a comprehensive spectrum of 
            advanced dental procedures with a focus on patient comfort and clinical precision.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <spec.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">{spec.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {spec.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {spec.highlights.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary/50 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
