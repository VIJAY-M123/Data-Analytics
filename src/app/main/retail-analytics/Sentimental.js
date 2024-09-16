import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import Counter from 'app/shared-components/Counter';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import TransgenderIcon from '@mui/icons-material/Transgender';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReactApexChart from 'react-apexcharts';
import CommentIcon from '@mui/icons-material/Comment';

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
    name: 'Negative',
    data: [7, 13, 30, 50, 70],
  },
  {
    name: 'Neutral',
    data: [6, 20, 35, 55, 90],
  },
  {
    name: 'Positive',
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
      style: {
        colors: 'var(--text-primary)',
      },
      formatter(val) {
        return `${val} K`;
      },
    },
    title: {
      text: 'Count of Product',
    },
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

const productSeries = [
  {
    name: 'Positive',
    data: [44, 55, 41, 37],
  },
  {
    name: 'Neutral',
    data: [53, 32, 33, 52],
  },
  {
    name: 'Negative',
    data: [12, 17, 11, 9],
  },
];
const productOption = {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900,
          },
        },
      },
    },
  },
  stroke: {
    width: 0,
    colors: ['#fff'],
  },
  // title: {
  //   text: 'Social Values',
  //   style: {
  //     color: 'var(--text-primary)',
  //   },
  // },
  xaxis: {
    categories: ['Prod 1', 'Prod 2', 'Prod 3', 'Prod 4'],
    labels: {
      // formatter(val) {
      //   return `${val}K`;
      // },
      style: {
        colors: 'var(--text-primary)',
      },
    },
  },
  yaxis: {
    title: {
      text: '',
      style: {
        color: 'var(--text-primary)',
      },
    },
    labels: {
      style: {
        colors: 'var(--text-primary)',
      },
    },
  },
  tooltip: {
    y: {
      formatter(val) {
        return `${val}K`;
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'right',
    offsetX: -10,
    offsetY: 50,
    labels: {
      colors: 'var(--text-primary)',
    },
  },
};

export default function Sentimental() {
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
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Positive Comments</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={88405} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <ThumbUpAltIcon sx={{ height: 45, width: 45 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Negative Comments</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={10131} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <ThumbDownAltIcon sx={{ height: 50, width: 50, color: '#000000' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Neutral Comments</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={1464} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <TransgenderIcon sx={{ height: 50, width: 50 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>total Customers</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={70396} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <PeopleAltIcon sx={{ height: 50, width: 50 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
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
                      <Typography>total Comments</Typography>
                      <Typography className="flex font-bold w-full" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={10} /> K
                      </Typography>
                    </div>
                    <div className="flex items-center">
                      <CommentIcon sx={{ height: 50, width: 50 }} />
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
                      <Typography>Avg Negative Comments</Typography>
                      <Typography className="font-bold" sx={{ fontSize: 30 }}>
                        <Counter from={0} to={8575} />
                        {/* <span>(36.4%)</span> */}
                      </Typography>
                    </div>
                    <div className="flex items-center">
                      <ThumbDownAltIcon sx={{ height: 50, width: 50 }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Typography className="font-bold">Sentimental Analysis Overtime</Typography>
              <ReactApexChart options={optionsstack} series={seriesstack} type="bar" height={155} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Typography className="font-bold">Product Based on Sentiments</Typography>
              <ReactApexChart
                options={productOption}
                series={productSeries}
                type="bar"
                height={235}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
