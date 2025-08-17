import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#000000", color: "white", borderTop: "1px solid #262626" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Company Info */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  C
                </span>
              </div>
              <span style={{ fontSize: "22px", fontWeight: "700" }}>
                Cycls
              </span>
            </div>
            <p
              style={{
                color: "#a3a3a3",
                marginBottom: "32px",
                maxWidth: "400px",
                lineHeight: "1.7",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              The definitive platform for commercial AI agents. Transform your
              Python code into a scalable, monetizable business with a single
              decorator.
            </p>
            <Button
              size="lg"
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                padding: "14px 28px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Get Started for Free
              <ArrowRight size={20} />
            </Button>
          </div>

          {/* Product Links */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              Product
            </h3>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <li>
                <a
                  href="#features"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#developers"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#enterprise"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              Company
            </h3>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#a3a3a3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a3a3a3")
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #262626",
            marginTop: "64px",
            paddingTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p style={{ color: "#737373", fontSize: "15px", fontWeight: "400" }}>
            © 2024 Cycls. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            <a
              href="#"
              style={{
                color: "#737373",
                textDecoration: "none",
                fontSize: "15px",
                transition: "color 0.2s",
                fontWeight: "400",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#737373")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "#737373",
                textDecoration: "none",
                fontSize: "15px",
                transition: "color 0.2s",
                fontWeight: "400",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#737373")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
