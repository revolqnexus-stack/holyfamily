"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle, Star, Quote } from "lucide-react";

const doctors = [
  {
    name: "Dr. Bijo Kurian",
    role: "Co-founder & Chief Dental Surgeon",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    specialization: "Endodontics, Cosmetic & Conservative Dentistry",
    details: "MDS from NITTE University. Specialist in rotary endodontics, microscopic procedures, and biomimetic restorations. Awarded for best research papers in national conferences.",
    memberships: ["IDA", "CAESOK", "IACDE"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070&auto=format&fit=crop",
    quote: "Painless treatment is not just a promise, it's our clinical standard."
  },
  {
    name: "Dr. Thara Maria Joseph",
    role: "Co-founder & Lead Prosthodontist",
    qualifications: "BDS",
    specialization: "Prosthodontics, Implantology, Endodontics",
    details: "Alumna of Govt. Dental College Trivandrum (2012). 14 years of clinical mastery in complex restorations and patient-centric healthcare. Reg No. 11153.",
    memberships: ["KSDC Reg. 11153"],
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e59816?q=80&w=2070&auto=format&fit=crop",
    quote: "I am dedicated to simplifying complicated healthcare for every patient."
  },
  {
    name: "Dr. Rahul",
    role: "Associate Dentist",
    qualifications: "BDS",
    specialization: "General Dentistry & Patient Care",
    details: "Renowned for professional behavior and gentle patient interactions. Specializes in making patients feel comfortable through every step of their treatment.",
    memberships: [],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    quote: "Ensuring patient comfort is my primary goal in every procedure."
  }
];

export default function Practitioner() {
  return (
    <section id="practitioner" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            Clinical Leadership
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
          >
            Founded in 2017. <br />
            <span className="italic text-primary">Driven by Expertise.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Holy Family Dental Care was established in February 2017 by Dr. Bijo Kurian 
            and Dr. Thara Maria Joseph to bring world-class specialist dentistry to Kuravilangad.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {doctors.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Specialist</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white">{doc.name}</h3>
                  <p className="text-white/60 text-sm font-medium">{doc.role}</p>
                </div>
              </div>

              <div className="space-y-6 px-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{doc.qualifications}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">{doc.specialization}</div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {doc.details}
                </p>

                {doc.memberships.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {doc.memberships.map(m => (
                      <span key={m} className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-tight border border-border">
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-6 border-t border-border relative">
                  <Quote className="absolute -top-3 -left-2 w-6 h-6 text-primary/10 rotate-180" />
                  <p className="text-sm italic text-foreground font-serif leading-relaxed">
                    "{doc.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
