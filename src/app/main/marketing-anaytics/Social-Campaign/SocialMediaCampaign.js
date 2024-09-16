import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import Counter from 'app/shared-components/Counter';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ImageIcon from '@mui/icons-material/Image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import CommentIcon from '@mui/icons-material/Comment';
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

export default function SocialMediaCampaign() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const seriesstack = [
    {
      name: 'Twitter',
      data: [44, 55, 41, 37, 22],
    },
    {
      name: 'Instagram',
      data: [53, 32, 33, 52, 13],
    },
    {
      name: 'LinkedIn',
      data: [12, 17, 11, 9, 15],
    },
    {
      name: 'Facebook',
      data: [9, 7, 5, 8, 6],
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
      categories: ['01-02-2023', '01-03-2023', '01-04-2023', '01-05-2023', '01-06-2023'],
      labels: {
        formatter(val) {
          return `${val}K`;
        },
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
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <TwitterIcon />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography className="font-bold">Twitter</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <PersonIcon />
                      </Typography>
                      <Typography className="flex justify-center">Followers</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={20000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <GroupAddIcon />
                      </Typography>
                      <Typography className="flex justify-center">New Followers</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={147} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <TwitterIcon />
                      </Typography>
                      <Typography className="flex justify-center">New Tweets</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={200} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <FavoriteIcon />
                      </Typography>
                      <Typography className="flex justify-center">Favorites</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={400} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <InstagramIcon />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography className="font-bold">Instagram</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <PersonIcon />
                      </Typography>
                      <Typography className="flex justify-center">Fans</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={20000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <GroupAddIcon />
                      </Typography>
                      <Typography className="flex justify-center">New Fans</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={147} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <ThumbUpIcon />
                      </Typography>
                      <Typography className="flex justify-center">Likes</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={200} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <ImageIcon />
                      </Typography>
                      <Typography className="flex justify-center">Post Reach</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={4000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <LinkedInIcon />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography className="font-bold">Linked In</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <PersonIcon />
                      </Typography>
                      <Typography className="flex justify-center">Followers</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={20000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <GroupAddIcon />
                      </Typography>
                      <Typography className="flex justify-center">New Followers</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={14} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <TouchAppIcon />
                      </Typography>
                      <Typography className="flex justify-center">Clicks</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={200} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <ThumbUpIcon />
                      </Typography>
                      <Typography className="flex justify-center">Likes</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={4000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <FacebookIcon />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography className="font-bold">Facebook</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <PersonIcon />
                      </Typography>
                      <Typography className="flex justify-center">Fans</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={20000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <GroupAddIcon />
                      </Typography>
                      <Typography className="flex justify-center">New Fans</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={14} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <ThumbUpIcon />
                      </Typography>
                      <Typography className="flex justify-center">Likes</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={200} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="flex justify-center">
                    <CardContent>
                      <Typography className="flex justify-center">
                        <CommentIcon />
                      </Typography>
                      <Typography className="flex justify-center">Commands</Typography>
                      <Typography className="flex justify-center font-bold">
                        <Counter from={0} to={4000} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <Typography className="font-bold">Social Values</Typography>
              <ReactApexChart options={optionsstack} series={seriesstack} type="bar" height={235} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
