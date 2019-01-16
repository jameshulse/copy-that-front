export const GA_TRACKING_ID = 'UA-122265749-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/contact.js
export const event = ({ action, category, label, value }) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
};

/*
 * Example of how to log an event anywhere in the app:
 *
 * gtag.event({
 *   action: 'submit_form',
 *   category: 'Contact',
 *   label,
 * });
 */
