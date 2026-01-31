declare global {
  interface Window {
    Calendly: any;
  }
}

export const openCalendly = (
  url: string = 'https://calendly.com/rankflow-contact/30min',
  params?: { name?: string; email?: string }
) => {
  let finalUrl = url;
  if (params) {
    const searchParams = new URLSearchParams();
    if (params.name) searchParams.append('name', params.name);
    if (params.email) searchParams.append('email', params.email);
    const queryString = searchParams.toString();
    if (queryString) {
      finalUrl += (finalUrl.includes('?') ? '&' : '?') + queryString;
    }
  }

  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: finalUrl });
  } else {
    console.error('Calendly script not loaded');
    window.open(finalUrl, '_blank');
  }
};
