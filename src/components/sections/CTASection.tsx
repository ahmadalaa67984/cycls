import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section
      style={{
        padding: "120px 16px",
        background: "linear-gradient(135deg, #1e3a8a 0%, #581c87 100%)",
      }}
    >
      <div
        style={{ maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            lineHeight: "1.2",
            color: "white",
            marginBottom: "32px",
            letterSpacing: "-0.01em",
          }}
        >
          Ready to Launch Your AI Business?
        </h2>
        <p
          style={{
            fontSize: "20px",
            color: "#bfdbfe",
            marginBottom: "48px",
            lineHeight: "1.7",
            fontWeight: "400",
          }}
        >
          Join thousands of developers who are already building the future of AI
          commerce with Cycls.
        </p>
        <Button
          size="lg"
          style={{
            backgroundColor: "white",
            color: "#1e3a8a",
            padding: "20px 40px",
            fontSize: "18px",
            borderRadius: "12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            border: "none",
            margin: "0 auto",
            fontWeight: "600",
            boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          Get Started for Free
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
