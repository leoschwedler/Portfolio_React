import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview, event } from "@/lib/analytics";

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Rastrear mudança de página
    pageview(location.pathname + location.search);
  }, [location]);

  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    event({ action, category, label, value });
  };

  const trackContact = (method: string) => {
    trackEvent("contact", "engagement", method);
  };

  const trackProjectView = (projectName: string) => {
    trackEvent("project_view", "engagement", projectName);
  };

  const trackSocialClick = (platform: string) => {
    trackEvent("social_click", "engagement", platform);
  };

  const trackDownload = (fileType: string) => {
    trackEvent("download", "engagement", fileType);
  };

  return {
    trackEvent,
    trackContact,
    trackProjectView,
    trackSocialClick,
    trackDownload,
  };
};
