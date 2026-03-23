"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle, Info } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 ivory-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-10 leading-[1.1]">
              In the heart of <br />
              <span className="italic text-primary underline underline-offset-8">Kuravilangad.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Find us at Central Junction, directly opposite Hotel Sanyo and 
              near the Kuravilangad bus station. Our clinic serves as a regional 
              specialist hub for the Kottayam district.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Our Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    1st Floor, Chennanparambil Building, <br />
                    Central Junction, Kuravilangad, <br />
                    Kottayam, Kerala - 686633
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Connect with Us</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For appointments and specialist inquiries:
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link 
                      href="tel:08071909299" 
                      className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                    >
                      +91 80 7190 9299 (Ext. 033)
                    </Link>
                    <Link 
                      href="https://wa.me/918071909299" 
                      className="text-primary font-bold hover:underline flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Opening Hours</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Monday – Saturday: <br />
                    09:00 AM – 07:00 PM <br />
                    <span className="text-destructive font-medium mt-1 inline-block italic">Closed on Sundays</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/5 border border-primary/10 rounded-2xl flex items-start gap-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-foreground font-medium mb-1">Affordable Specialist Care</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Initial specialist consultation fee is approximately ₹150. We are listed on Practo and Justdial for easy scheduling.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group mt-12 lg:mt-0"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] group-hover:bg-primary/10 transition-colors duration-500" />
            
            <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-6 sm:mb-8">Quick Inquiry</h3>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
              Have a question for our specialists? Leave your details and we'll get back to you shortly.
            </p>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-foreground px-1 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/50 border border-border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-foreground px-1 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/50 border border-border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-foreground px-1 uppercase tracking-wider">Treatment Interest</label>
                <select className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/50 border border-border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-sm sm:text-base">
                  <option>Root Canal Treatment (RCT)</option>
                  <option>Dental Implants</option>
                  <option>Crowns & Bridges</option>
                  <option>Cosmetic Dentistry</option>
                  <option>General Checkup</option>
                  <option>Paediatric Care</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-foreground px-1 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can our specialists help you today?" 
                  className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/50 border border-border rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm sm:text-base"
                />
              </div>
              
              <button className="w-full py-4 sm:py-5 bg-primary text-white rounded-xl sm:rounded-2xl font-bold hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20">
                Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
