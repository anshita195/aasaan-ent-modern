import * as Sentry from "@sentry/nextjs";

export function initSentry() {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV,
      tracesSampleRate: 1.0,
      debug: false,
      replaysOnErrorSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      beforeSend(event) {
        // Filter out non-critical errors
        if (event.exception) {
          const error = event.exception.values?.[0];
          if (error?.type === 'ChunkLoadError' || 
              error?.value?.includes('Loading chunk') ||
              error?.value?.includes('Loading CSS chunk')) {
            return null;
          }
        }
        return event;
      },
    });
  }
}

export function captureAnalyticsEvent(eventName: string, properties?: Record<string, any>) {
  // Send to both GA4 and Umami
  if (typeof window !== 'undefined') {
    // GA4
    if (window.gtag) {
      window.gtag('event', eventName, {
        custom_parameter_1: 'ent_clinic_interaction',
        ...properties,
      });
    }
    
    // Umami
    if (window.umami) {
      window.umami.track(eventName, properties);
    }
  }
}

// Type declarations for global analytics
declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: any) => void;
    umami: {
      track: (eventName: string, properties?: Record<string, any>) => void;
    };
  }
}
