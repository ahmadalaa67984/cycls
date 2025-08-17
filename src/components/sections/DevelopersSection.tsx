import React from "react";
import { Button } from "../ui/button";
import { BookOpen } from "lucide-react";

const DevelopersSection: React.FC = () => {
  return (
    <section
      id="developers"
      style={{
        padding: "120px 16px",
        backgroundColor: "#111111",
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
          <div>
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
              A Zero-Config Dream for{" "}
              <span style={{ color: "#3b82f6" }}>Builders</span>
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
              Cycls is built by developers, for developers. Our open-source core
              gives you ultimate flexibility, while our zero-config philosophy
              removes all the boilerplate. The Python SDK is all you need to
              learn. With perfect dev/prod parity, what you build locally is
              exactly what scales globally on our serverless infrastructure.
            </p>
            <Button
              variant="outline"
              size="lg"
              style={{
                border: "2px solid #3b82f6",
                color: "#3b82f6",
                backgroundColor: "transparent",
                padding: "16px 32px",
                borderRadius: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              <BookOpen size={20} />
              Read the Docs
            </Button>
          </div>

          <div
            style={{
              backgroundColor: "#000000",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
              border: "1px solid #262626",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#ef4444",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#f59e0b",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  color: "#34d399",
                  fontFamily: "monospace",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                <div>from cycls import agent</div>
                <div style={{ marginTop: "12px" }}>@agent</div>
                <div style={{ marginTop: "12px" }}>
                  def my_ai_agent(prompt: str):
                </div>
                <div style={{ marginTop: "12px", marginLeft: "20px" }}>
                  # Your AI logic here
                </div>
                <div style={{ marginTop: "12px", marginLeft: "20px" }}>
                  return response
                </div>
                <div style={{ marginTop: "24px", color: "#737373" }}>
                  # That's it! Deploy with:
                </div>
                <div style={{ color: "#60a5fa" }}>cycls deploy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
