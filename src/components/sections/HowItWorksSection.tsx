import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Code, Cloud, DollarSign } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Code size={40} color="#60a5fa" />,
      title: "Write Your Agent",
      description:
        "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
      iconBg: "#1e3a8a",
    },
    {
      icon: <Cloud size={40} color="#34d399" />,
      title: "Deploy Instantly",
      description:
        "Add our @cycls.agent decorator to your function. Cycls packages your agent into a full-stack, serverless app with a pre-built frontend and API.",
      iconBg: "#064e3b",
    },
    {
      icon: <DollarSign size={40} color="#c084fc" />,
      title: "Monetize Immediately",
      description:
        "Launch your subscription business in minutes. Cycls comes with a built-in user pool and monetization.",
      iconBg: "#581c87",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 16px",
        backgroundColor: "#1a1a1a",
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
              letterSpacing: "-0.01em",
            }}
          >
            From Code to Customer in{" "}
            <span style={{ color: "#3b82f6" }}>Three Steps</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {steps.map((step, index) => (
            <Card
              key={index}
              style={{
                textAlign: "center",
                border: "1px solid #262626",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#1f1f1f",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <CardHeader style={{ padding: "40px 32px 24px" }}>
                <div
                  style={{
                    margin: "0 auto",
                    width: "80px",
                    height: "80px",
                    backgroundColor: step.iconBg,
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  {step.icon}
                </div>
                <CardTitle
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#ffffff",
                  }}
                >
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent style={{ padding: "0 32px 40px" }}>
                <CardDescription
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#a3a3a3",
                  }}
                >
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
