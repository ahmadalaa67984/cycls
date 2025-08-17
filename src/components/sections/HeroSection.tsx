import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        padding: "120px 16px",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            lineHeight: "1.1",
            color: "#ffffff",
            marginBottom: "32px",
            letterSpacing: "-0.02em",
          }}
        >
          Go from AI Agent to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Business
          </span>
          . Instantly.
        </h1>
        <p
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            color: "#cbd5e1",
            maxWidth: "768px",
            margin: "0 auto 48px",
            lineHeight: "1.7",
            fontWeight: "400",
          }}
        >
          Cycls is the definitive platform for commercial AI agents. Our
          open-source framework and managed cloud transform your Python code
          into a scalable, monetizable business with a single decorator.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "48px",
          }}
        >
          <Button
            size="lg"
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "20px 40px",
              fontSize: "18px",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontWeight: "600",
              boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.4)",
            }}
          >
            Start Building for Free
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      {/* Abstract background elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            backgroundColor: "#1e40af",
            opacity: 0.1,
            filter: "blur(96px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            left: "-160px",
            width: "320px",
            height: "320px",
            borderRadius: "16px",
            backgroundColor: "#7c3aed",
            opacity: 0.1,
            filter: "blur(96px)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
