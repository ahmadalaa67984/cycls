import React from "react";
import { Zap, Users, DollarSign } from "lucide-react";

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Zap size={28} color="#f87171" />,
      title: "Infrastructure Complexity",
      description: "Servers, scaling, monitoring, and deployment headaches",
    },
    {
      icon: <Users size={28} color="#f87171" />,
      title: "User Management",
      description: "Authentication, user databases, and access control",
    },
    {
      icon: <DollarSign size={28} color="#f87171" />,
      title: "Payment Integration",
      description: "Stripe setup, subscription management, and billing",
    },
  ];

  const solutions = [
    "Zero infrastructure setup",
    "Built-in user management",
    "Instant payment processing",
    "Pre-built frontend & API",
  ];

  return (
    <section
      id="features"
      style={{
        padding: "120px 16px",
        backgroundColor: "#111111",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
            The Gap Between a Brilliant Agent and a Viable Business is{" "}
            <span style={{ color: "#f87171" }}>Immense</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
              color: "#cbd5e1",
              maxWidth: "768px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: "400",
            }}
          >
            You've built a powerful AI agent. But turning it into a real,
            commercial product is a maze of infrastructure, frontend
            boilerplate, authentication, and payment integrations. This friction
            kills speed and innovation. Cycls is the platform designed to close
            that gap instantly.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {problems.map((problem, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#450a0a",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {problem.icon}
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
                    {problem.title}
                  </h3>
                  <p
                    style={{
                      color: "#a3a3a3",
                      lineHeight: "1.6",
                      fontSize: "16px",
                    }}
                  >
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                borderRadius: "24px",
                padding: "48px",
                color: "white",
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "24px",
                }}
              >
                With Cycls
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {solutions.map((solution, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <span style={{ fontSize: "18px", fontWeight: "500" }}>
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
