import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import TopCategories from '../components/homepage/TopCategories';
import ContentSection from '../components/homepage/ContentSection';
import ContactSection from '../components/homepage/ContactSection';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HeroSection />
    <ContentSection />
    <ContactSection />
{/*     
      <FeaturedBlogs />
      <TopCategories /> */}
    
  </>
);

export default IndexPage;
