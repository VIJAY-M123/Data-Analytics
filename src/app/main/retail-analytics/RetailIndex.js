import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Sentimental from './Sentimental';
import CustomerReport from './CustomerReport';
import CustomerBehavior from './CustomerBehavior';
import CustomerValue from './CustomerValue';
import SupplyPerformance from './SupplyPerformance';
import SpendAnalysis from './SpendAnalysis';

export default function RetailIndex() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-24">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Retail Analytics" value="1" />
              <Tab label="Customer Report" value="2" />
              <Tab label="Customer Behavior" value="3" />
              <Tab label="Customer LifeTime Value" value="4" />
              <Tab label="Supply Performance" value="5" />
              <Tab label="Spend Analysis Overview" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Sentimental />
          </TabPanel>
          <TabPanel value="2">
            <CustomerReport />
          </TabPanel>
          <TabPanel value="3">
            <CustomerBehavior />
          </TabPanel>
          <TabPanel value="4">
            <CustomerValue />
          </TabPanel>
          <TabPanel value="5">
            <SupplyPerformance />
          </TabPanel>
          <TabPanel value="6">
            <SpendAnalysis />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
