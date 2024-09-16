import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import BasicDatePicker from 'app/shared-components/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import Counter from 'app/shared-components/Counter';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import FunctionsIcon from '@mui/icons-material/Functions';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SavingsIcon from '@mui/icons-material/Savings';
import CastleIcon from '@mui/icons-material/Castle';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

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

export default function SpendAnalysis() {
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
                  <Typography>Total Spend</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    $ <Counter from={0} to={19} /> M
                  </Typography>
                </div>
                <div className="flex items-center">
                  <FunctionsIcon sx={{ height: 45, width: 45 }} />
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
                  <Typography>Procurement ROI</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={8} /> %
                  </Typography>
                </div>
                <div className="flex items-center">
                  <VolunteerActivismIcon sx={{ height: 50, width: 50, color: '#000000' }} />
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
                  <Typography>Spend Under Management</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={85} /> % {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <CastleIcon sx={{ height: 50, width: 50 }} />
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
                  <Typography>Savings</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={4} /> %{/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <SavingsIcon sx={{ height: 50, width: 50 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Total Suppliers</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={96} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <ManageAccountsIcon sx={{ height: 50, width: 50 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Purchase Orders</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={2052} />
                    {/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <ShoppingCartCheckoutIcon sx={{ height: 50, width: 50 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>Average PO</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={9} /> K{/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <FunctionsIcon sx={{ height: 50, width: 50 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            component={motion.div}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, bounceDamping: 0 }}
          >
            <CardContent>
              <div className="flex w-full gap-6">
                <div className="w-full">
                  <Typography>PO Cycle Time</Typography>
                  <Typography className="flex font-bold" sx={{ fontSize: 30 }}>
                    <Counter from={0} to={19} /> Hours{/* <span>(36.4%)</span> */}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <AvTimerIcon sx={{ height: 50, width: 50 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
