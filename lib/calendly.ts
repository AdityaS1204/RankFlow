declare global {
  interface Window {
    Calendly: any;
  }
}

export const openCalendly = (url: string = 'https://calendly.com/rankflow-contact/30min') => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
  } else {
    console.error('Calendly script not loaded');
    window.open(url, '_blank');
  }
};
