import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Building2, Shield, Globe } from "lucide-react";

const EnterpriseSection: React.FC = () => {
  const features = [
    {
      icon: <Building2 size={28} color="#60a5fa" />,
      title: "Startup Ready",
      description: "Complete business-in-a-box solution",
      iconBg: "#1e3a8a",
    },
    {
      icon: <Shield size={28} color="#34d399" />,
      title: "Enterprise Security",
      description: "Sovereign managed cloud in Dammam",
      iconBg: "#064e3b",
    },
    {
      icon: <Globe size={28} color="#c084fc" />,
      title: "Global Scale",
      description: "Built for the Kingdom and beyond",
      iconBg: "#581c87",
    },
  ];

  return (
    <section
      id="enterprise"
      style={{
        padding: "120px 16px",
        backgroundColor: "#1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div style={{ order: 2 }}>
            <div
              style={{
                backgroundColor: "#1f1f1f",
                borderRadius: "24px",
                padding: "48px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                border: "1px solid #262626",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        backgroundColor: feature.iconBg,
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "#ffffff",
                          marginBottom: "8px",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          color: "#a3a3a3",
                          fontSize: "16px",
                          lineHeight: "1.5",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ order: 1 }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "#ffffff",
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}
            >
              A Complete{" "}
              <span style={{ color: "#3b82f6" }}>Commercial Engine</span>
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: "#cbd5e1",
                marginBottom: "40px",
                lineHeight: "1.7",
                fontWeight: "400",
              }}
            >
              Cycls is more than a tool; it's an economic engine. For startups,
              we provide a complete business-in-a-box, handling users, payments,
              and infrastructure so you can focus on your product. For
              enterprises, our sovereign managed cloud, hosted in Dammam, offers
              a flexible, enterprise-ready platform to build foundational AI
              capabilities within the Kingdom.
            </p>
            <Button
              size="lg"
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "16px 32px",
                borderRadius: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "none",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Contact Sales
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
