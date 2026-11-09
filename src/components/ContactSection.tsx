"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacts" className="py-20 bg-[#FFF7EE] border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold mb-3">
            <Phone className="w-3.5 h-3.5 text-orange-600" />
            <span>Get in Touch & Table Reservations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-3">
            Contact Saravanas Pure Veg
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Have a question, feedback, or looking to reserve a family dining table or catering? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-linear-to-br from-orange-600 to-amber-700 text-white rounded-3xl p-5 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 border-2 border-white rounded p-0.5 flex items-center justify-center bg-white/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight">Saravanas</span>
              </div>

              <h3 className="text-xl font-bold mb-3">Pure Veg Restaurant & Catering</h3>
              <p className="text-orange-100 text-sm leading-relaxed mb-8">
                Experience authentic Tamil Nadu delicacies prepared strictly under sacred vegetarian principles.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200 uppercase font-semibold">Phone Inquiries & Orders</p>
                    <a href="tel:+919840012345" className="text-base font-bold hover:underline">
                      +91 98400 12345 / +91 44 2841 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200 uppercase font-semibold">Dining Hours</p>
                    <p className="text-sm font-semibold">Mon – Sun: 7:00 AM – 11:00 PM</p>
                    <p className="text-xs text-orange-100/80">Breakfast, Lunch, Tiffin & Dinner</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200 uppercase font-semibold">Restaurant Location</p>
                    <p className="text-sm font-semibold">124 Gandhi Road, Near Temple Square</p>
                    <p className="text-xs text-orange-100/80">Valet Parking Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-orange-200 uppercase font-semibold">Email</p>
                    <a href="mailto:contact@saravanasveg.com" className="text-sm font-semibold hover:underline">
                      contact@saravanasveg.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/20 text-xs text-orange-200">
              🌱 Certified 100% Pure Vegetarian Kitchen
            </div>
          </div>

          {/* Contact / Reservation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-10 border border-orange-200 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Send a Message or Reserve a Table
            </h3>
            <p className="text-stone-600 text-sm mb-6">
              Fill out this quick form and our hospitality manager will confirm within 15 minutes.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold">Thank you for reaching out!</p>
                  <p className="text-xs text-emerald-700">We have received your message and will call you back shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-stone-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 00000"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-stone-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Request Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-stone-50/50">
                      <option>Table Reservation (Family/Dining)</option>
                      <option>Outdoor Catering & Events</option>
                      <option>Takeaway / Bulk Order</option>
                      <option>General Inquiry / Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Guests / Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4 Guests, Tonight 8 PM"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-stone-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us any special seating preferences or dietary notes..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-stone-50/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
