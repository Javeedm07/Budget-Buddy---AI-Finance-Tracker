export const darkTheme = {
  baseTheme: "dark",
  variables: {
    colorPrimary: "#3b82f6",
    colorBackground: "#111827",
    colorInputBackground: "#1f2937",
    colorInputText: "#ffffff",
    colorText: "#ffffff",
  },
  elements: {
    socialButtonsBlockButton: {
      backgroundColor: "#1f2937",
      borderColor: "#374151",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#374151",
      },
    },
    socialButtonsBlockButtonText: {
      color: "#ffffff",
    },
    socialButtonsProviderIcon: {
      filter: "brightness(0) invert(1)",
    },
    formFieldInputShowPasswordButton: {
      color: "#3b82f6",
      "&:hover": {
        color: "#2563eb",
      },
    },
    formButtonPrimary: {
      transition: "all 0.2s ease",
      backgroundColor: "#3b82f6",
      "&:hover": {
        backgroundColor: "#3b82f6",
        transform: "translateY(-1px)",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },
    userButtonPopoverCard: {
      backgroundColor: "#1f2937",
      color: "#ffffff",
      border: "1px solid #374151",
    },
    userButtonPopoverActionButton: {
      backgroundColor: "transparent",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#374151",
        color: "#ffffff",
      },
    },
    userButtonPopoverActionButtonIcon: {
      color: "#ffffff",
    },
    navbarButton: {
      color: "#ffffff",
    },
    navbarButtonText: {
      color: "#ffffff",
    },
    navbar: {
      "& button": {
        color: "#ffffff",
      },
      "& button[data-active='false']": {
        color: "#ffffff",
        "& span": {
          color: "#ffffff",
        },
      },
      "& button[data-active='true']": {
        color: "#3b82f6",
        "& span": {
          color: "#3b82f6",
        },
      },
    },
    pageScrollBox: {
      "& button": {
        color: "#ffffff",
      },
    },
  },
};
