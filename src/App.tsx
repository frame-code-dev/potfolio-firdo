import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import SeoHead from './components/SEO/SeoHead';

function App() {
  return (
    <Layout>
      <SeoHead />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default App;
