"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Building2, 
  Stethoscope, 
  Wrench, 
  Users,
  Camera,
  Search
} from "lucide-react";

const categories = [
  { id: 'facility', label: 'Clinic & Facility', icon: Building2 },
  { id: 'procedures', label: 'Services & Procedures', icon: Stethoscope },
  { id: 'equipment', label: 'Equipment', icon: Wrench },
  { id: 'team', label: 'Team', icon: Users },
];

const galleryItems = {
  facility: [
    { label: 'Reception Area', desc: 'Warm boutique welcoming' },
    { label: 'Waiting Room', desc: 'Premium comfort for patients' },
    { label: 'Treatment Room', desc: 'Sterile specialist suite' },
    { label: 'Sterilization Area', desc: 'Highest hygiene standards' },
    { label: 'X-ray Room', desc: 'In-house diagnostics' },
    { label: 'Clinic Exterior', desc: 'Central Junction Landmark' },
  ],
  procedures: [
    { label: 'Root Canal Setup', desc: 'Painless Endodontic focus' },
    { label: 'Dental Implant Process', desc: 'Permanent restorations' },
    { label: 'Crown Fitting', desc: 'Prosthodontic precision' },
    { label: 'Whitening Procedure', desc: 'Cosmetic excellence' },
    { label: 'Orthodontic Treatment', desc: 'Alignment correction' },
    { label: 'Scaling & Cleaning', desc: 'Preventive care' },
  ],
  equipment: [
    { label: 'Dental Chair', desc: 'Ergonomic patient comfort' },
    { label: 'X-ray Machine', desc: 'Digital apical assessment' },
    { label: 'Sterilization Unit', desc: 'Modern autoclave system' },
    { label: 'Instrument Tray', desc: 'Precision clinical tools' },
  ],
  team: [
    { label: 'Dr. Bijo Kurian', desc: 'BDS, MDS (Endodontist)' },
    { label: 'Dr. Thara Maria Joseph', desc: 'BDS, MDS (Prosthodontist)' },
    { label: 'Dr. Rahul', desc: 'Associate Dentist' },
  ],
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('facility');

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
          >
            A Glimpse into <br />
            <span className="italic text-primary">Our Care.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Explore our state-of-the-art facility, specialized equipment, and meet the team 
            dedicated to your smile.
          </motion.p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar pb-4 sm:pb-0 mb-12">
          <div className="flex gap-2 p-2 bg-muted/50 rounded-[2rem] mx-auto min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 outline-none ${
                  activeTab === cat.id 
                  ? 'text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {galleryItems[activeTab as keyof typeof galleryItems].map((item, idx) => (
              <motion.div
                key={`${activeTab}-${item.label}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative glass-card rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                {/* Placeholder Image Design */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                   <div className="flex flex-col items-center gap-3 text-muted-foreground/40 group-hover:text-primary/40 transition-colors">
                      <Camera className="w-12 h-12 stroke-[1px]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Clinic Gallery</span>
                   </div>
                </div>
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white text-xl font-serif mb-1">{item.label}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                    <div className="mt-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
