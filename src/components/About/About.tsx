import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              About <span className="text-accent-blue">Me</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Akrab dikenal sebagai <strong className="text-white">Firdo Radja</strong>, saya adalah seorang Seniman Visual dan Musisi. 
              Dengan latar belakang di dunia pertelevisian dan produksi konten digital, saya telah bekerja di balik layar untuk brand F&B ternama seperti 
              <span className="text-accent-blue"> Ayam Goreng Nelongso</span>, <span className="text-accent-blue">Chick N Bliss</span>, dan <span className="text-accent-blue">Geprek Kak Rose</span>.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Saat ini, saya berperan sebagai creative brain untuk konten <span className="text-white font-semibold">Warung Taburai by Praz Teguh</span>. 
              Selain visual, saya juga mengekspresikan seni melalui musik dengan album single <em className="text-white">"Perjalanan Cinta"</em>.
            </p>
            
            {/* Skills / Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border border-secondary bg-secondary/20 rounded-lg">
                <h3 className="text-2xl font-bold text-accent-red mb-1">5+ Years</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider">Experience</p>
              </div>
              <div className="p-4 border border-secondary bg-secondary/20 rounded-lg">
                <h3 className="text-2xl font-bold text-accent-blue mb-1">100+</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </div>

          {/* Image / Visual - Placeholder for now, maybe use a div with gradient or stylized generic image if no photo provided */}
          <div className="relative">
             <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary relative group">
                {/* Replace with actual image later */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/20 to-accent-blue/20 mix-blend-overlay"></div>
                <img 
                  src="https://placehold.co/600x800/1a1a1a/FFF?text=Firdo+Radja" 
                  alt="Firdo Radja" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-accent-blue/30 rounded-full"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent-red/30 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
