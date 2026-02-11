import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'music' | 'gallery'>('video');
  const [filter, setFilter] = useState<'all' | 'chick-n-bliss' | 'geprek-kak-rose' | 'warung-taburai'>('all');

  // ... existing videos and music arrays ...
  const videos = [
    // Chick N Bliss
    { title: "Chick N Bliss - Reel 1", category: "Chick N Bliss", url: "https://www.instagram.com/reel/DMMrZC8pt2V/embed" },
    { title: "Chick N Bliss - Reel 2", category: "Chick N Bliss", url: "https://www.instagram.com/reel/DM7osNozky0/embed" },
    { title: "Chick N Bliss - Reel 3", category: "Chick N Bliss", url: "https://www.instagram.com/reel/DNzvs_YQMRa/embed" },
    { title: "Chick N Bliss - Reel 4", category: "Chick N Bliss", url: "https://www.instagram.com/reel/DNP25znx0Xm/embed" },
    { title: "Chick N Bliss - Reel 5", category: "Chick N Bliss", url: "https://www.instagram.com/reel/DPxboj4lHhW/embed" },
    
    // Geprek Kak Rose
    { title: "Geprek Kak Rose - Reel 1", category: "Geprek Kak Rose", url: "https://www.instagram.com/reel/DRRarMwAtVP/embed" },
    { title: "Geprek Kak Rose - Reel 2", category: "Geprek Kak Rose", url: "https://www.instagram.com/reel/DRi6VDuCdNi/embed" },
    { title: "Geprek Kak Rose - Reel 3", category: "Geprek Kak Rose", url: "https://www.instagram.com/reel/DQVf-j-Ec-Y/embed" },
    { title: "Geprek Kak Rose - Reel 4", category: "Geprek Kak Rose", url: "https://www.instagram.com/reel/DQx4cBfkc_w/embed" },

    // Warung Taburai
    { title: "Warung Taburai - Reel 1", category: "Warung Taburai", url: "https://www.instagram.com/reel/DSESyEvAGP8/embed" },
    { title: "Warung Taburai - Reel 2", category: "Warung Taburai", url: "https://www.instagram.com/reel/DSKMf9_lbzS/embed" },
    { title: "Warung Taburai - Reel 3", category: "Warung Taburai", url: "https://www.instagram.com/reel/DSHt9jGEbeu/embed" },
    { title: "Warung Taburai - Reel 4", category: "Warung Taburai", url: "https://www.instagram.com/reel/DSW0-d8lNCb/embed" },
    { title: "Warung Taburai - Reel 5", category: "Warung Taburai", url: "https://www.instagram.com/reel/DSjtY20j7hE/embed" },
  ];

  const music = [
    { title: "Perjalanan Cinta", type: "Single Album", platform: "Spotify", url: "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT" }, 
  ];

  const galleryImages = [
    "/assets/gallery/WhatsApp Image 2024-07-16 at 17.35.27_ffd35529.jpg",
    "/assets/gallery/WhatsApp Image 2024-07-16 at 17.35.29_75bf22b4.jpg",
    "/assets/gallery/WhatsApp Image 2024-07-16 at 17.35.29_c556a5f7.jpg",
    "/assets/gallery/WhatsApp Image 2024-07-16 at 17.35.30_4481f108.jpg",
    "/assets/gallery/WhatsApp Image 2024-07-16 at 19.04.21_9af1c1ee.jpg",
    "/assets/gallery/WhatsApp Image 2024-07-16 at 19.06.52_225c433d.jpg",
    "/assets/gallery/WhatsApp Image 2024-07-16 at 19.10.01_4e644b65.jpg",
  ];

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(v => v.category.toLowerCase().replace(/ /g, '-') === filter);

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected <span className="text-accent-blue">Works</span></h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 mb-8">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeTab === 'video' ? 'bg-accent-blue border-accent-blue text-black font-bold' : 'border-gray-600 text-text-muted hover:border-accent-blue hover:text-white'}`}
            >
              Video Editing
            </button>
            <button
              onClick={() => setActiveTab('music')}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeTab === 'music' ? 'bg-accent-red border-accent-red text-white font-bold' : 'border-gray-600 text-text-muted hover:border-accent-red hover:text-white'}`}
            >
              Music Artist
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeTab === 'gallery' ? 'bg-white border-white text-black font-bold' : 'border-gray-600 text-text-muted hover:border-white hover:text-white'}`}
            >
              Gallery
            </button>
          </div>

          {activeTab === 'gallery' && (
             <div className="mb-8">
                <a 
                  href="/assets/cv/CV M. Rohwandi Zenka F.pdf" 
                  download
                  className="inline-flex items-center px-6 py-3 bg-accent-blue/10 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 rounded-lg group"
                >
                  <FaDownload className="mr-2 group-hover:animate-bounce" />
                  Download CV
                </a>
             </div>
          )}

          {/* Sub-filters for Videos */}
          {activeTab === 'video' && (
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button onClick={() => setFilter('all')} className={`text-sm tracking-widest uppercase hover:text-accent-blue transition-colors ${filter === 'all' ? 'text-accent-blue font-bold' : 'text-text-muted'}`}>All</button>
              <button onClick={() => setFilter('chick-n-bliss')} className={`text-sm tracking-widest uppercase hover:text-accent-blue transition-colors ${filter === 'chick-n-bliss' ? 'text-accent-blue font-bold' : 'text-text-muted'}`}>Chick N Bliss</button>
              <button onClick={() => setFilter('geprek-kak-rose')} className={`text-sm tracking-widest uppercase hover:text-accent-blue transition-colors ${filter === 'geprek-kak-rose' ? 'text-accent-blue font-bold' : 'text-text-muted'}`}>Geprek Kak Rose</button>
              <button onClick={() => setFilter('warung-taburai')} className={`text-sm tracking-widest uppercase hover:text-accent-blue transition-colors ${filter === 'warung-taburai' ? 'text-accent-blue font-bold' : 'text-text-muted'}`}>Warung Taburai</button>
            </div>
          )}
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab + filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={
              activeTab === 'video' ? "grid md:grid-cols-2 lg:grid-cols-4 gap-6" :
              activeTab === 'gallery' ? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" :
              "grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            }
          >
            {activeTab === 'video' ? (
              filteredVideos.map((item, index) => (
                <div key={index} className="group relative bg-primary rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-accent-blue/50 transition-colors">
                  <div className="aspect-[9/16] bg-black relative">
                    <iframe 
                      src={item.url} 
                      title={item.title} 
                      className="w-full h-full object-cover" 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <span className="text-xs text-accent-blue uppercase tracking-widest block mb-1">{item.category}</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors truncate">{item.title}</h3>
                  </div>
                </div>
              ))
            ) : activeTab === 'gallery' ? (
               galleryImages.map((src, index) => (
                  <div key={index} className="break-inside-avoid rounded-xl overflow-hidden border border-gray-800 hover:border-white/50 transition-all duration-300 shadow-lg group">
                     <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
               ))
            ) : (
              music.map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-primary rounded-xl border border-gray-800 hover:border-accent-red/50 transition-colors">
                  <div className="min-w-[6rem] h-24 bg-gray-800 rounded-lg flex items-center justify-center text-text-muted">
                    <span className="text-xs">Album Art</span>
                  </div>
                  <div>
                    <span className="text-xs text-accent-red uppercase tracking-widest">{item.type}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
                    <a href="#" className="inline-block mt-3 text-sm text-green-500 hover:underline">Listen on {item.platform}</a>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
