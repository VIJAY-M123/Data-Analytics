import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import Counter from 'app/shared-components/Counter';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import TtyIcon from '@mui/icons-material/Tty';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import * as yup from 'yup';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import ReactApexChart from 'react-apexcharts';
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

export default function CallCampaignReport() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const seriesdount = [44, 13];

  const optionsdount = {
    chart: {
      width: 380,
      type: 'pie',
    },
    // title: {
    //   text: 'Call Status',
    //   align: 'center',

    //   style: {
    //     color: 'var(--text-primary)',
    //   },
    // },
    stroke: {
      width: 0,
    },
    labels: ['Answered', 'Missed'],
    colors: ['#00cccc', '#adb2bd'],
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
    legend: {
      display: true,
      position: 'bottom',
      // labels: {
      //   colors: 'var(--text-primary)',
      // },
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

  const callCategorySeries = [
    {
      name: 'Total Calls',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: 'Abandoned Calls',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ];

  const callCategoryOption = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: !1,
      },
    },
    stroke: {
      width: [0, 4],
    },
    // title: {
    //   text: 'Call Categories',
    //   style: {
    //     color: 'var(--text-primary)',
    //   },
    // },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      '01 Jan 2001',
      '02 Jan 2001',
      '03 Jan 2001',
      '04 Jan 2001',
      '05 Jan 2001',
      '06 Jan 2001',
      '07 Jan 2001',
      '08 Jan 2001',
      '09 Jan 2001',
      '10 Jan 2001',
      '11 Jan 2001',
      '12 Jan 2001',
    ],
    legend: {
      display: true,
      position: 'bottom',
      // labels: {
      //   colors: 'var(--text-primary)',
      // },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        // style: {
        //   colors: 'var(--text-primary)',
        // },
      },
    },

    yaxis: [
      {
        title: {
          text: 'Total Calls',
          // style: {
          //   color: 'var(--text-primary)',
          // },
        },
        labels: {
          // style: {
          //   colors: 'var(--text-primary)',
          // },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Abandoned Calls',
          // style: {
          //   color: 'var(--text-primary)',
          // },
        },
        labels: {
          // style: {
          //   colors: 'var(--text-primary)',
          // },
        },
      },
    ],
  };

  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <div className="">
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
              className="rounded-md"
              type="submit"
              color='secondary'
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
                  <Typography>Call Volume Rate</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={80} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <TtyIcon sx={{ height: 45, width: 45 }} />
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
                  <Typography>Answered Call Rate</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={40} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <ContactPhoneIcon sx={{ height: 45, width: 45 }} />
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
                  <Typography>Missed Calls Rate</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={30} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <PhoneMissedIcon sx={{ height: 45, width: 45 }} />
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
                  <Typography>Abandoned Calls Rate</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={10} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <PhoneDisabledIcon sx={{ height: 45, width: 45 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
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
                          <Typography>Call Duration Rate</Typography>
                          <Typography className="font-bold" sx={{ fontSize: 30 }}>
                            <Counter from={0} to={20} />
                            {/* <span>(36.4%)</span> */}
                          </Typography>
                        </div>
                        <div className="flex items-center">
                          <PhoneForwardedIcon sx={{ height: 45, width: 45 }} />
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
                          <Typography>Call Routing Data Rate</Typography>
                          <Typography className="font-bold" sx={{ fontSize: 30 }}>
                            <Counter from={0} to={18} />
                            {/* <span>(36.4%)</span> */}
                          </Typography>
                        </div>
                        <div className="flex items-center">
                          <SwapCallsIcon sx={{ height: 45, width: 45 }} />
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
                          <Typography>Call center efficiency Rate</Typography>
                          <Typography className="font-bold" sx={{ fontSize: 30 }}>
                            <Counter from={0} to={30} />
                            {/* <span>(36.4%)</span> */}
                          </Typography>
                        </div>
                        <div className="flex items-center">
                          <HubIcon sx={{ height: 45, width: 45 }} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card
                className="flex justify-center items-center h-[350px]"
                component={motion.div}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, bounceDamping: 0 }}
              >
                <CardContent>
                  <Typography className="flex justify-center font-bold">Call Status</Typography>
                  <ReactApexChart
                    options={optionsdount}
                    series={seriesdount}
                    type="donut"
                    width={350}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                component={motion.div}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, bounceDamping: 0 }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography className="font-bold">Call Categories</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className="flex gap-6 justify-end">
                      <Button
                        sx={{
                          minHeight: '20px',
                          maxHeight: '20px',
                          fontSize: '10px',
                        }}
                        variant="contained"
                        className="rounded-md"
                          color='secondary'
                      >
                        This Month
                      </Button>
                      <Button
                        sx={{
                          minHeight: '20px',
                          maxHeight: '20px',
                          fontSize: '10px',
                        }}
                        variant="contained"
                        className="rounded-md"
                          color='secondary'
                      >
                        Last Month
                      </Button>
                    </Grid>
                  </Grid>
                  <ReactApexChart
                    options={callCategoryOption}
                    series={callCategorySeries}
                    type="line"
                    height={275}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
