import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
}

const SeoHead: React.FC<SeoProps> = ({ 
  title = "Firdo Radja - Video Editor & Music Artist", 
  description = "Professional video editor and music artist. Portfolio of Firdo Radja.",
  image = "/images/og-image.jpg"
}) => {
  const siteUrl = "https://firdoradja.com"; // Replace with actual URL

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteUrl + image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteUrl + image} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Firdo Radja",
          "url": siteUrl,
          "image": siteUrl + image,
          "sameAs": [
            "https://www.instagram.com/firdoradja",
            "https://www.youtube.com/channel/UC...",
            "https://open.spotify.com/artist/..."
          ],
          "jobTitle": ["Video Editor", "Music Artist"],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default SeoHead;
