import { Typography } from '@mui/material';
import { selectModule } from 'app/store/agencySlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  const module = useSelector(selectModule);
  const handleOffice = () => {
    navigate('/find-office');
  };

  const handleTracking = () => {
    navigate('/tracking');
  };

  function getContentToRender(Key) {
    switch (Key) {
      case 'LTR':
        return (
          <>
            <Typography
              className="text-[50px] flex justify-center items-center uppercase font-['roman']"
              color="#201652"
            >
              Welcome
            </Typography>
            <Typography
              className="text-[16px] font-bold flex justify-center items-center font-['roman']"
              color="#201652"
            >
              TO OUR
            </Typography>
            <Typography className="flex justify-center items-center">
              <img className="w-1/3" src="assets/images/logo/logo-shalx-text.svg" alt="logo" />
            </Typography>
          </>
        );

      case 'CRM':
        return (
          <>
            <Typography
              className="text-[50px] flex justify-center items-center uppercase font-['roman']"
              color="#F28E1D"
            >
              Welcome
            </Typography>
            <Typography
              className="text-[16px] font-bold flex justify-center items-center font-['roman']"
              color="#F28E1D"
            >
              TO OUR
            </Typography>
            <Typography className="flex justify-center items-center">
              <img className="w-1/3" src="assets/images/logo/logo-crm-text.svg" alt="logo" />
            </Typography>
          </>
        );

      case 'LOGISTICS':
        return (
          <>
            <Typography
              className="text-[50px] flex justify-center items-center uppercase font-['roman']"
              color="#F28E1D"
            >
              Welcome
            </Typography>
            <Typography
              className="text-[16px] font-bold flex justify-center items-center font-['roman']"
              color="#F28E1D"
            >
              TO OUR
            </Typography>
            <Typography className="flex justify-center items-center">
              <img className="w-1/3" src="assets/images/logo/logo-zealit-text.svg" alt="logo" />
            </Typography>
          </>
        );

      case 'DEPOT':
        return (
          <>
            <Typography
              className="text-[50px] flex justify-center items-center uppercase font-['roman']"
              color="#F28E1D"
            >
              Welcome
            </Typography>
            <Typography
              className="text-[16px] font-bold flex justify-center items-center font-['roman']"
              color="#F28E1D"
            >
              TO OUR
            </Typography>
            <Typography className="flex justify-center items-center">
              <img className="w-1/3" src="assets/images/logo/logo-zealit-text.svg" alt="logo" />
            </Typography>
          </>
        );

      default:
        return (
          <>
            {/* <Typography
              className="text-[50px] flex justify-center items-center uppercase font-['roman']"
              color="#201652"
            >
              Welcome
            </Typography>
            <Typography
              className="text-[16px] font-bold flex justify-center items-center font-['roman']"
              color="#201652"
            >
              TO OUR
            </Typography>
            <Typography className="flex justify-center items-center">
              <img className="w-1/3" src="assets/images/logo/ltr.svg" alt="logo" />
            </Typography> */}
          </>
        );
    }
  }

  const image = getContentToRender(module?.upa_project_name);
  return (
    <div className="h-full bg-gray-100 flex flex-col justify-center items-center bg-cover bg-center">
      <img
        src="assets/images/image/home.png"
        height={500}
        width={500}
        alt="home.png"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
}

export default WelcomePage;
