import ReactGA from 'react-ga4';

// Retrieve the Google Analytics 4 Measurement ID from environment variables
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initializes Google Analytics 4.
 * Performs safe check for the existence of the measurement ID to avoid crashes in non-configured environments.
 */
export const initGA = () => {
  if (!measurementId) {
    console.warn('GA4: VITE_GA_MEASUREMENT_ID is missing. Analytics tracking is disabled.');
    return;
  }
  
  try {
    ReactGA.initialize(measurementId);
    console.log('GA4: Google Analytics 4 successfully initialized.');
  } catch (error) {
    console.error('GA4: Failed to initialize Google Analytics 4:', error);
  }
};

/**
 * Tracks a page view manually.
 * @param {string} [path] - The URL path to track (defaults to current window pathname).
 * @param {string} [title] - The page title to track (defaults to current document title).
 */
export const trackPageView = (path = window.location.pathname, title = document.title) => {
  if (!measurementId) return;
  
  try {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title
    });
    console.log(`GA4: Tracked PageView for "${path}"`);
  } catch (error) {
    console.error('GA4: Failed to track page view:', error);
  }
};

/**
 * Tracks a custom event.
 * @param {Object} eventData - Event data details.
 * @param {string} eventData.category - The category of the event (e.g. 'Engagement', 'Social', 'Form').
 * @param {string} eventData.action - The specific action taken (e.g. 'click_join_early_access').
 * @param {string} [eventData.label] - Optional descriptive label (e.g. 'Hero CTA').
 * @param {number} [eventData.value] - Optional numeric value.
 */
export const trackEvent = ({ category, action, label, value }) => {
  if (!measurementId) return;
  
  try {
    ReactGA.event({
      category,
      action,
      label,
      value
    });
    console.log(`GA4: Tracked Event - Category: "${category}" | Action: "${action}" | Label: "${label || ''}"`);
  } catch (error) {
    console.error('GA4: Failed to track custom event:', error);
  }
};
