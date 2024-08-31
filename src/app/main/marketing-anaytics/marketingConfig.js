import CallCampaignIndex from './Call-Campaign/CallCampaignIndex';
import EmailAnalyticsIndex from './Email-Analytics/EmailAnalyticsIndex';

const MarketingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'marketing/email-analytics',
      element: <EmailAnalyticsIndex />,
    },
    {
      path: 'marketing/call-analytics',
      element: <CallCampaignIndex />,
    },
  ],
};

export default MarketingConfig;
