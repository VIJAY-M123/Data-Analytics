import RetailIndex from './RetailIndex';

const RetailConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'retail/sentimental',
      element: <RetailIndex />,
    },
  ],
};

export default RetailConfig;
