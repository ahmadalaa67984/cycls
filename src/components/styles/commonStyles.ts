export const commonStyles = {
  // Layout
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },

  // Typography
  h1: {
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
    fontWeight: "800",
    lineHeight: "1.1",
    color: "#ffffff",
    marginBottom: "32px",
    letterSpacing: "-0.02em",
  },

  h2: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "700",
    lineHeight: "1.2",
    color: "#ffffff",
    marginBottom: "32px",
    letterSpacing: "-0.01em",
  },

  h3: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "8px",
  },

  bodyLarge: {
    fontSize: "20px",
    color: "#cbd5e1",
    lineHeight: "1.7",
    fontWeight: "400",
  },

  bodyMedium: {
    fontSize: "16px",
    color: "#a3a3a3",
    lineHeight: "1.6",
  },

  // Sections
  section: {
    padding: "120px 16px",
  },

  sectionCenter: {
    textAlign: "center" as const,
    marginBottom: "80px",
  },

  // Cards
  card: {
    textAlign: "center" as const,
    border: "1px solid #262626",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#1f1f1f",
    borderRadius: "20px",
    overflow: "hidden",
  },

  // Buttons
  primaryButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex" as const,
    alignItems: "center" as const,
    gap: "12px",
    fontWeight: "600",
  },

  outlineButton: {
    border: "2px solid #3b82f6",
    color: "#3b82f6",
    backgroundColor: "transparent",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex" as const,
    alignItems: "center" as const,
    gap: "12px",
    fontWeight: "600",
  },

  // Grid layouts
  gridTwoCol: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "64px",
    alignItems: "center",
  },

  gridThreeCol: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
  },

  // Icon containers
  iconContainer: {
    flexShrink: 0,
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },

  largeIconContainer: {
    margin: "0 auto",
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    marginBottom: "24px",
  },

  // Colors
  colors: {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    background: {
      primary: "#0a0a0a",
      secondary: "#111111",
      tertiary: "#1a1a1a",
      card: "#1f1f1f",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a3a3a3",
      muted: "#737373",
    },
    border: "#262626",
  },
};
