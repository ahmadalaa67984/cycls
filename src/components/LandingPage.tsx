import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  DevelopersSection,
  EnterpriseSection,
  CTASection,
} from "./sections";

const LandingPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
      <Header />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <DevelopersSection />
      <EnterpriseSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
