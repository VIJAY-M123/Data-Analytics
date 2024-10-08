import { Button, Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import * as yup from 'yup';
import DraftsIcon from '@mui/icons-material/Drafts';
import Counter from 'app/shared-components/Counter';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import MailLockIcon from '@mui/icons-material/MailLock';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactApexChart from 'react-apexcharts';
import { motion } from 'framer-motion';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import { useSelector } from 'react-redux';

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

export default function EmailAnalytics() {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const clickSeries = [
    {
      name: 'Click Rate',
      data: [33, 44, 55, 57, 56, 61, 30, 23, 18, 45, 46, 24],
    },
  ];
  const clickOption = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: !1,
      },
    },
    colors: ['#6026c5'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    // title:{
    // text:"Click Details",
    // style:{
    //          color:"white"
    //     }
    // },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'oct',
        'Nev',
        'Dec',
      ],
      labels: {
        // style: {
        //   colors: 'var(--text-primary)',
        // },
      },
    },
    yaxis: {
      title: {
        text: 'Clicks',

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
    fill: {
      type: 'gradient',

      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: '#239df9',
            opacity: 1,
          },

          {
            offset: 100,
            color: '#fff',
            opacity: 1,
          },
        ],
      },
    },
    tooltip: {
      y: {
        formatter(val) {
          return `₹ ${val} %`;
        },
      },
    },
  };

  const openSeries = [
    {
      name: 'Open Rate',
      data: [33, 44, 55, 57, 56, 61, 30, 23, 18, 45, 46, 24],
    },
  ];

  const openOption = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: !1,
      },
    },
    // title:{
    //     text:"Open Details",
    //     style:{
    //         color:"white"
    //     }
    // },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#2bc7b2'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'oct',
        'Nev',
        'Dec',
      ],
      labels: {
        // style: {
        //   colors: 'var(--text-primary)',
        // },
      },
    },
    yaxis: {
      title: {
        text: 'Opens',
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
    fill: {
      type: 'gradient',

      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: '#2bc7b2',
            opacity: 1,
          },

          {
            offset: 100,
            color: '#fff',
            opacity: 1,
          },
        ],
      },
    },
    tooltip: {
      y: {
        formatter(val) {
          return `₹ ${val} %`;
        },
      },
    },
  };

  const onSubmit = (data) => {
    console.log('Data', data);
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
              color="secondary"
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
                  <Typography>Recipients</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={1165} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <ContactMailIcon sx={{ height: 45, width: 45 }} />
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
                  <Typography>Replies</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={16} />
                  </Typography>
                </div>
                <div className="flex items-center">
                  <QuickreplyIcon sx={{ height: 50, width: 50 }} />
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
                  <Typography>Open Rate</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={318} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <DraftsIcon sx={{ height: 50, width: 50 }} />
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
                  <Typography>Click Rate</Typography>
                  <Typography className="font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={12} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <TouchAppIcon sx={{ height: 50, width: 50 }} />
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
                    transition={{ duration: 0.5, bounceDamping: 0 }}
                  >
                    <CardContent>
                      <div className="flex w-full gap-6">
                        <div className="w-full">
                          <Typography>Bounces</Typography>
                          <Typography className="font-bold" sx={{ fontSize: 30 }}>
                            <Counter from={0} to={119} />
                            {/* <span>(36.4%)</span> */}
                          </Typography>
                        </div>
                        <div className="flex items-center">
                          <MoveToInboxIcon sx={{ height: 50, width: 50 }} />
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
                    transition={{ duration: 0.5, bounceDamping: 0 }}
                  >
                    <CardContent>
                      <div className="flex w-full gap-6">
                        <div className="w-full">
                          <Typography>UnSubscribed</Typography>
                          <Typography className="font-bold" sx={{ fontSize: 30 }}>
                            <Counter from={0} to={42} />
                            {/* <span>(36.4%)</span> */}
                          </Typography>
                        </div>
                        <div className="flex items-center">
                          <UnsubscribeIcon sx={{ height: 50, width: 50 }} />
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
                    transition={{ duration: 0.5, bounceDamping: 0 }}
                  >
                    <CardContent>
                      <div className="flex w-full gap-6">
                        <div className="w-full">
                          <Typography>Block</Typography>
                          <Typography className="font-bold" sx={{ fontSize: 30 }}>
                            <Counter from={0} to={70} />
                            {/* <span>(36.4%)</span> */}
                          </Typography>
                        </div>
                        <div className="flex items-center">
                          <MailLockIcon sx={{ height: 50, width: 50 }} />
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
                transition={{ duration: 0.5, bounceDamping: 0 }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                      <Typography className="font-bold">Main Campaign Report</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className="flex gap-6 justify-end">
                      <Button
                        sx={{
                          minHeight: '20px',
                          maxHeight: '20px',
                          fontSize: '10px',
                        }}
                        variant="contained"
                        className="rounded-md"
                        color="secondary"
                      >
                        This Year
                      </Button>
                      
                      <Button
                        sx={{
                          minHeight: '20px',
                          maxHeight: '20px',
                          fontSize: '10px',
                        }}
                        variant="contained"
                        className="rounded-md"
                        color="secondary"
                      >
                        Last Year
                      </Button>
                    </Grid>
                  </Grid>

                  <ReactApexChart
                    options={openOption}
                    series={openSeries}
                    type="bar"
                    height={130}
                  />
                  <ReactApexChart
                    options={clickOption}
                    series={clickSeries}
                    type="bar"
                    height={130}
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
