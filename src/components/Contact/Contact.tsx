import React from 'react';
import { FaInstagram, FaSpotify, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-primary border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
          Let's <span className="text-accent-blue">Collaborate</span>
        </h2>
        <p className="text-text-muted text-lg mb-12">
          Open for video editing projects, music production, or creative consultation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a href="mailto:contact@firdoradja.com" className="p-8 bg-secondary/30 rounded-xl border border-gray-800 hover:border-accent-blue transition-all group">
            <FaEnvelope size={32} className="mx-auto text-accent-blue mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
            <p className="text-text-muted">contact@firdoradja.com</p>
          </a>
          <a href="https://wa.me/6289678273336" className="p-8 bg-secondary/30 rounded-xl border border-gray-800 hover:border-green-500 transition-all group">
            <FaWhatsapp size={32} className="mx-auto text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-text-muted">+62 896 7827 3336</p>
          </a>
        </div>

        <div className="flex justify-center space-x-8 text-text-muted">
           <a href="https://www.instagram.com/firdo_radjaa?igsh=MWdvb2FpbXdtZmNweg%3D%3D&utm_source=qr" className="hover:text-accent-red hover:scale-110 transition-all"><FaInstagram size={28} /></a>
           <a href="https://open.spotify.com/artist/2291437937144?si=3461e60800624955&nd=1&dlsi=019214721a944678" className="hover:text-green-500 hover:scale-110 transition-all"><FaSpotify size={28} /></a>
           <a href="https://www.youtube.com/@firdoradja" className="hover:text-red-600 hover:scale-110 transition-all"><FaYoutube size={28} /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
