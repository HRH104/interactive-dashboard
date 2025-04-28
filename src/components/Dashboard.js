import React, { useState } from 'react';
import ChartComponent from './ChartComponent';
import { 
  Container, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Button, 
  Grid 
} from '@mui/material';
// If you want to integrate real data fetching later, import your service:
// import { getLiveChartData } from '../services/dataService';

const Dashboard = () => {
  // Define two static datasets.
  const dataset1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales 2024',
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }],
  };

  const dataset2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue 2024',
      data: [50, 20, 30, 70, 90, 40],
      fill: false,
      borderColor: 'rgb(153, 102, 255)',
    }],
  };

  const [selectedDataset, setSelectedDataset] = useState('sales');
  const [chartData, setChartData] = useState(dataset1);

  // Update the chart data based on dropdown selection.
  const handleDatasetChange = (event) => {
    const dataset = event.target.value;
    setSelectedDataset(dataset);
    if (dataset === 'sales') {
      setChartData(dataset1);
    } else if (dataset === 'revenue') {
      setChartData(dataset2);
    }
  };

  // Simulate fetching live data (random values) when the button is pressed.
  const handleFetchLiveData = async () => {
    // If integrating real API data, you could do something like:
    // const liveData = await getLiveChartData();
    // if (liveData) { setChartData(liveData); setSelectedDataset('live'); }

    // For now, simulate live data:
    const liveData = {
      labels: ['July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Live Data',
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
      }]
    };
    setChartData(liveData);
    setSelectedDataset('live');
  };

  return (
    <Container style={{ padding: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        Interactive Dashboard
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <FormControl variant="outlined" style={{ minWidth: 200 }}>
            <InputLabel id="dataset-select-label">Select Dataset</InputLabel>
            <Select
              labelId="dataset-select-label"
              id="dataset-select"
              value={selectedDataset}
              onChange={handleDatasetChange}
              label="Select Dataset"
            >
              <MenuItem value="sales">Sales 2024</MenuItem>
              <MenuItem value="revenue">Revenue 2024</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleFetchLiveData}
          >
            Fetch Live Data
          </Button>
        </Grid>
      </Grid>
      <ChartComponent data={chartData} />
    </Container>
  );
};

export default Dashboard;
