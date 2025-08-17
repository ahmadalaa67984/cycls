import React from "react";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid #262626",
        backgroundColor: "rgba(10, 10, 10, 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          height: "72px",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{ color: "white", fontWeight: "700", fontSize: "20px" }}
            >
              C
            </span>
          </div>
          <span
            style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff" }}
          >
            Cycls
          </span>
        </div>

        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "32px",
          }}
          className="hidden md:flex"
        >
          <a
            href="#features"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#a3a3a3",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a3a3a3")}
          >
            Features
          </a>
          <a
            href="#developers"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#a3a3a3",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a3a3a3")}
          >
            Developers
          </a>
          <a
            href="#enterprise"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#a3a3a3",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a3a3a3")}
          >
            Enterprise
          </a>
          <a
            href="#docs"
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#a3a3a3",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a3a3a3")}
          >
            Docs
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            variant="ghost"
            size="sm"
            style={{
              backgroundColor: "transparent",
              color: "#a3a3a3",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Sign In
          </Button>
          <Button
            size="sm"
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
