import Inventory from './Inventory-Optimization/Inventory';
import SupplierAnalysis from './Inventory-Optimization/SupplierAnalysis';

const LogisticConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'logistic/inventory',
      element: <Inventory />,
    },
    {
      path: 'logistic/supplier',
      element: <SupplierAnalysis/>,
    },
  ],
};

export default LogisticConfig;
