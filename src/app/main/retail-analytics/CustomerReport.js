import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import Counter from 'app/shared-components/Counter';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import ReactApexChart from 'react-apexcharts';

const schema = yup.object().shape({
  fromDate: yup
    .date()
    .nullable()
    .required('You must Select from Date')
    .typeError('You must enter a valid date')
    .max(new Date(), 'Future dates are not allowed'),
  toDate: yup
    .date()
    .nullable()
    .required('You must select to date')
    .typeError('You must enter a valid date')
    .test((value, ctx) => {
      const { fromDate } = ctx.parent;
      if (value && fromDate > value) {
        return ctx.createError({ message: 'End Date must be greater than Start Date' });
      }
      return true;
    }),
});
const defaultValues = {
  fromDate: null,
  toDate: null,
};

const salesSeries = [
  {
    name: 'This Year',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'Last Year',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const salesOptions = {
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: !1,
    },
  },
  colors: ['#d26be8', '#57aeef'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors: ['#d26be8', '#57aeef'],
  },
  xaxis: {
    type: 'year',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  // tooltip: {
  //   x: {
  //     format: 'dd/MM/yy HH:mm',
  //   },
  // },
};

export default function CustomerReport() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Data', data);
  };
  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="mb-12">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5.2}>
            <Typography variant="h6" className="font-bold mb-12">
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Controller
              name="fromDate"
              control={control}
              label="From Date"
              render={({ field }) => (
                <BasicDatePicker
                  field={field}
                  required
                  // disableFuture
                  className="mb-12"
                  label="From Date"
                  error={!!errors.fromDate}
                  helperText={errors.fromDate?.message}
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <Controller
              name="toDate"
              control={control}
              label="To Date"
              render={({ field }) => (
                <BasicDatePicker
                  field={field}
                  required
                  // disableFuture
                  className="mb-12"
                  label="To Date"
                  error={!!errors.toDate}
                  helperText={errors.toDate?.message}
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={2.8}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-15px',
            }}
          >
            <Button
              variant="contained"
              className="rounded-md bg-black text-white hover:bg-gray-500 hover:text-black"
              type="submit"
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card
                component={motion.div}
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, bounceDamping: 0 }}
              >
                <CardContent>
                  <div className="flex w-full gap-6">
                    <div className="w-full">
                      <Typography>All Customers</Typography>
                      <Typography className="font-bold" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={600405} />
                      </Typography>
                    </div>
                    <div className="flex items-center">
                      <GroupIcon sx={{ height: 45, width: 45 }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                component={motion.div}
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, bounceDamping: 0 }}
              >
                <CardContent>
                  <div className="flex w-full gap-6">
                    <div className="w-full">
                      <Typography>New Customers</Typography>
                      <Typography className="font-bold" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={51428} />
                      </Typography>
                    </div>
                    <div className="flex items-center">
                      <PersonAddIcon sx={{ height: 45, width: 45 }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                component={motion.div}
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, bounceDamping: 0 }}
              >
                <CardContent>
                  <div className="flex w-full gap-6">
                    <div className="w-full">
                      <Typography>Monthly Sales</Typography>
                      <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                        $ <Counter from={0} to={10000} />
                      </Typography>
                    </div>
                    <div className="flex items-center">
                      <MonetizationOnIcon sx={{ height: 45, width: 45 }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <Typography className="font-bold">Sales Forecast</Typography>
              <ReactApexChart
                options={salesOptions}
                series={salesSeries}
                type="area"
                height={280}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
