declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

/**
 * Opens the Cal.com popup calendar for the 15-min booking slot.
 * The Cal.com embed script must be initialised (via getCalApi) before calling this.
 */
export const openCal = () => {
  if (typeof window !== "undefined" && window.Cal) {
    window.Cal("modal", {
      calLink: "rankflow-c2nadw/15min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
    });
  } else {
    // Fallback – open in new tab
    window.open("https://cal.com/rankflow-c2nadw/15min", "_blank");
  }
};
