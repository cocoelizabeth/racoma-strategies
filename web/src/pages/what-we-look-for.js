import React from "react";
import HeroSection from "../components/whatWeLookFor/HeroSection";
import SEO from "../components/SEO";
import CriteriaLists from "../components/whatWeLookFor/CriteriaLists";
import ContactSection from "../components/homepage/ContactSection";

const WhatWeLookForPage = () => (
  <>
    <SEO title="What We Look For" />
    <HeroSection />
    <CriteriaLists />
    {/* <ContactSection /> */}
  </>
);

export default WhatWeLookForPage;
