import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Counter from 'app/shared-components/Counter';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import TtyIcon from '@mui/icons-material/Tty';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import * as yup from 'yup';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
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

export default function CallTrackingReport() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const totalCallSeries = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100],
    },
  ];
  const totalCallOption = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: !1,
      },
    },
    // title: {
    //   text: 'Total calls',
    //   align: 'center',

    //   style: {
    //     color: 'var(--text-primary)',
    //   },
    // },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      title: {
        text: 'Calls',
        // style: {
        //   color: 'var(--text-primary)',
        // },
      },
      categories: [
        'Paid',
        'Organic',
        'Direct',
        'Social',
        'Newsletter',
        'External-Ref',
        'Internal_Ref',
        'Referral',
      ],
      labels: {
        // style: {
        //   colors: 'var(--text-primary)',
        // },
      },
    },
    yaxis: {
      title: {
        text: 'Source',
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
  };

  const distributionSeries = [44, 13, 20, 30, 23, 40, 18.3];

  const distributionOption = {
    chart: {
      width: 380,
      type: 'pie',
    },
    // title: {
    //   text: 'Call Distribution',
    //   align: 'center',

    //   style: {
    //     color: 'var(--text-primary)',
    //   },
    // },
    stroke: {
      width: 0,
    },
    labels: [
      'Paid',
      'Organic',
      'Direct',
      'Social',
      'Newsletter',
      'External-Ref',
      'Internal_Ref',
      'Referral',
    ],
    colors: ['#007bff', '#17a2b8', '#00cccc', '#adb2bd', '#553293', '#00d390', '#ca9270'],
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
                  <Typography>Ans Call Rate</Typography>
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
                  <Typography>Aband Calls Rate</Typography>
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
                  <Typography>Aband Calls Rate</Typography>
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
        <Grid item xs={12} md={6}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Typography className="font-bold">Total Calls</Typography>
              <ReactApexChart
                options={totalCallOption}
                series={totalCallSeries}
                type="bar"
                height={310}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            className="flex justify-center"
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Typography className="font-bold">Call Distribution</Typography>
              <ReactApexChart
                options={distributionOption}
                series={distributionSeries}
                type="donut"
                width={430}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
