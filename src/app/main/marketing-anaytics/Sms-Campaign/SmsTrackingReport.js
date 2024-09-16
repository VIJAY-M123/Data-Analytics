import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Counter from 'app/shared-components/Counter';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import MessageIcon from '@mui/icons-material/Message';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import ReactApexChart from 'react-apexcharts';
import * as yup from 'yup';
import { motion } from 'framer-motion';

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

export default function SmsTrackingReport() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const seriesdount = [44, 13, 6, 8, 13];

  const optionsdount = {
    chart: {
      width: 380,
      type: 'pie',
    },
    // title: {
    //   text: 'Message By Status',

    //   style: {
    //     color: 'var(--text-primary)',
    //   },
    // },
    stroke: {
      width: 0,
    },
    labels: ['Sent', 'Deliverd', 'Failed', 'Received', 'Accepted'],
    colors: ['#6f42c1', '#007bff', '#17a2b8', '#00cccc', '#adb2bd'],
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        colors: 'var(--text-primary)',
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  const seriesline = [
    {
      name: 'Desktops',
      data: [10, 41, 80, 10, 50, 80, 20, 40],
    },
  ];
  const optionsline = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: !1,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    // title: {
    //   text: 'Message Performance',
    //   align: 'left',
    //   style: {
    //     color: 'var(--text-primary)',
    //   },
    // },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [
        '01-02-2023',
        '01-03-2023',
        '01-04-2023',
        '01-05-2023',
        '01-06-2023',
        '01-07-2023',
        '01-08-2023',
        '01-09-2023',
      ],
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
      },
    },
  };

  const onSubmit = (data) => {
    console.log('data', data);
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
        <Grid item xs={12} md={6} lg={2.4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Messages</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={3000} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <MessageIcon sx={{ height: 40, width: 40 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={2.4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Inbound</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={300} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <MarkUnreadChatAltIcon sx={{ height: 40, width: 40 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={2.4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Outbound</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={100} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <SpeakerNotesOffIcon sx={{ height: 40, width: 40 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={2.4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Delivered</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={100} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <MarkChatReadIcon sx={{ height: 40, width: 40 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={2.4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Delivered</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={50} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <SmsFailedIcon sx={{ height: 40, width: 40 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            className="flex justify-center"
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Typography className="flex justify-center font-bold">Message By Status</Typography>
              <ReactApexChart
                options={optionsdount}
                series={seriesdount}
                type="donut"
                width={400}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Typography className="flex justify-start font-bold">Message Performance</Typography>
              <ReactApexChart options={optionsline} series={seriesline} type="line" height={290} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
