import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactApexChart from 'react-apexcharts';
import Counter from 'app/shared-components/Counter';

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

const seriesstack = [
  {
    name: 'All Visitor',
    data: [7, 13, 30, 50, 70],
  },
  {
    name: 'Product View',
    data: [6, 20, 35, 55, 90],
  },
  {
    name: 'Add to Cart',
    data: [8, 25, 40, 60, 100],
  },
  {
    name: 'Visit Checkout',
    data: [8, 25, 40, 60, 100],
  },
  {
    name: 'Visit Purchase',
    data: [8, 25, 40, 60, 100],
  },
];
const optionsstack = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: !1,
    },
    zoom: {
      enabled: true,
    },
  },
  // title: {
  //   text: 'Top Converting Marketing Channels',
  //   style: {
  //     color: 'var(--text-primary)',
  //   },
  // },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: 'year',
    categories: ['2016', '2018', '2020', '2022', '2024'],
    labels: {
      style: {
        colors: 'var(--text-primary)',
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
      style: {
        colors: 'var(--text-primary)',
      },
      formatter(val) {
        return `${val} K`;
      },
    },
    // title: {
    //   text: 'Count of Product',
    // },
  },
  legend: {
    position: 'bottom',
    offsetY: 5,
    labels: {
      colors: 'var(--text-primary)',
    },
  },
  fill: {
    opacity: 1,
  },
};
export default function CustomerBehavior() {
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
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography className="font-bold">Shopping Behavior Analysis</Typography>
              <ReactApexChart options={optionsstack} series={seriesstack} type="bar" height={250} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography className="font-bold">All Visits Without</Typography>
                      <Typography className="font-bold">Shopping Activity</Typography>
                      <Typography className="font-bold" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={15678} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography className="font-bold">Visits Without</Typography>
                      <Typography className="font-bold">Add to Cart</Typography>
                      <Typography className="font-bold" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={166789} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography className="font-bold">Abandoned</Typography>
                      <Typography className="font-bold">Carts</Typography>
                      <Typography className="font-bold" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={10512} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography className="font-bold">Abandoned</Typography>
                      <Typography className="font-bold">Checkouts</Typography>
                      <Typography className="font-bold" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={3000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
