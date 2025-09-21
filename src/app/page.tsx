import Navbar from './home/partials/navbar';
import HeroSection from './home/partials/hero';
import ServiceSection from './home/partials/service';
import AboutSection from './home/partials/about';
import SkillsSection from './home/partials/skills';
import WorkingSection from './home/partials/working';
import ExperienceSection from './home/partials/experience';
import PortfolioSection from './home/partials/portfolio';
import TestimonialsSection from './home/partials/testimonials';
import FAQSection from './home/partials/faq';
import ContactSection from './home/partials/contact';
import Footer from './home/partials/footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SkillsSection />
      <WorkingSection />
      <ExperienceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
