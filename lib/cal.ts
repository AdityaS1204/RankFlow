export const openCal = () => {
  const win = window as any;
  if (typeof window !== "undefined" && win.Cal) {
    win.Cal("modal", {
      calLink: "rankflow-c2nadw/15min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
    });
  } else {
    // Fallback – open in new tab
    window.open("https://cal.com/rankflow-c2nadw/15min", "_blank");
  }
};
