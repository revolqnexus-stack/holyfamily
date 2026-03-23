"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, CheckCircle } from "lucide-react";

export default function Practitioner() {
  return (
    <section id="practitioner" className="py-24 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]"
        >
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1e59816?q=80&w=2070&auto=format&fit=crop" 
            alt="Dr. Thara Maria Joseph" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <h3 className="text-3xl font-serif text-white mb-2">Dr. Thara Maria Joseph</h3>
            <p className="text-white/80 font-medium">BDS, MDS (Prosthodontics & Implantology)</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Lead Dentist
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-8">
            Expertise built over <br />
            <span className="italic text-primary">13 clinical years.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Registered with the Kerala State Dental Council (Reg. 11153), 
            Dr. Joseph brings advanced prosthodontic mastery from the University of Calicut 
            to the community of Kuravilangad. Her philosophy centers on patient-centric care 
            where precision meets compassion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary w-6 h-6" />
              </div>
              <div>
                <div className="font-medium">University of Calicut</div>
                <div className="text-sm text-muted-foreground">BDS Graduate, 2013</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-primary w-6 h-6" />
              </div>
              <div>
                <div className="font-medium">Kerala State Council</div>
                <div className="text-sm text-muted-foreground">Reg. No. 11153</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-muted/50 rounded-2xl border border-border/50">
              <p className="italic text-foreground mb-4 font-serif text-lg">
                "We believe every patient deserves a smile that is not just functional, but a true reflection of their confidence."
              </p>
              <div className="text-sm font-bold text-primary uppercase tracking-widest">
                Dr. Thara Maria Joseph
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
