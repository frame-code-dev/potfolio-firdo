import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background - Soft Blurred Gold Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
           <span className="block text-accent-blue/80 text-xs md:text-sm uppercase tracking-[0.4em] mb-4 drop-shadow-[0_0_8px_rgba(240,230,210,0.3)]">
             The Portfolio of
           </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white mb-8 tracking-tighter leading-none"
        >
          FIRDO<span className="text-white/20">RADJA</span>
        </motion.h1>

        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent mx-auto mb-8"></div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          <span className="text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Video Editor</span> 
          <span className="mx-4 text-accent-blue/60">•</span> 
          <span className="text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Music Artist</span>
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
           <p className="text-text-muted/60 text-sm italic font-serif max-w-md tracking-wider">
             "Merangkai, menyusun, dan menyunting gambar agar bisa selaras dengan keadaan."
           </p>
        </motion.div>

      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-accent-blue/30 to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: [-20, 80, 80] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/3 bg-accent-blue/80 blur-[1px]"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
