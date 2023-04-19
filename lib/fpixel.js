export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  window.fbq("track", "pageview");
};
export const event = (name, option = {}) => {
  window.fbq("track", name, option);
};
