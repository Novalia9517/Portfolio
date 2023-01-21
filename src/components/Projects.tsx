import React, {useState} from 'react'
import { Grid, Paper, Typography, Box, Stack} from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Eobozz from '../assets/eobozz-home.png'
import MovieApp from '../assets/movie2.png'
import Airbnb from '../assets/airbnb.png'
import Cstylfer from '../assets/cstylfer.png'

const steps = [
    {
        label: 'EO-Bozz',
        linkGithub : 'https://github.com/Alta-Capstone-Grup2/Frontend',
        linkDeploy : '',
        description: `EO-Bozz is an application that provides EO (Event Organizer) services with various choices, and verified and clear reviews of the activities that the EO has handled. The technologies at frontend side we use was ReactJS, Tailwindcss, DaisyUI, YUP and sweetalert.`,
        Image : Eobozz
    },
    {
      label: 'CStylfer',
      linkGithub : '',
      linkDeploy : '',
      description:
        'Build Beautiful CSS Faster than Clicking. We help you to got beautiful ui with super fast CSS code, dont waste your time to think about how to make beautiful UI with boring CSS code',
        Image : Cstylfer
    },
    {
      label: 'KB-Type',
      linkGithub : '',
      linkDeploy : '',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
        Image : MovieApp
    },
    {
      label: 'Movie App',
      linkGithub : '',
      linkDeploy : '',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
        Image : MovieApp
    },
    {
      label: 'Airbnb Clone',
      linkGithub : '',
      linkDeploy : '',
      description: `Airbnb Clone Project is a website that provides hotels or homestays for rent when people are on vacation. The feature that I cloned was creating boards, lists, and cards. The technologies at the frontend side we use was NextJS, Tailwindcss, and DaisyUI. See the source on Github.`,
        Image : Airbnb
    },
    {
      label: 'Alterra Dashboard',
      linkGithub : '',
      linkDeploy : '',
      description: `Alterra dashboard is a project for cloning the Altera dashboard website. The feature that I create is a list feature, and cards. The technologies at the frontend side we use was ReactJS, Tailwindcss, and DaisyUI.`,
        Image : Airbnb
    },
  ];

const cards = [
    {
        icon : <LocalLibraryIcon color='primary'/>,
        title : 'Learning',
        body : 'Alterra Academy as On of best bootcamp platform',
    },
    {
        icon :  <LocalLibraryIcon color='primary'/>,
        title : 'Learning',
        body : 'Alterra Academy as On of best bootcamp platform',
    },
    {
        icon :  <LocalLibraryIcon color='primary'/>,
        title : 'Learning',
        body : 'Alterra Academy as On of best bootcamp platform',
    },
]

const Projects = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  return (
    <Grid 
        id='projects'
        container
        direction={'column'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        pt={10}
        width={'full'}
        maxWidth={'100%'}
        minHeight={'100vh'}
        sx={{ color : grey[800]}}
        >
        <Typography variant='subtitle1' fontWeight='semibold'>My Service</Typography>
        <Typography
            variant='h5'
            fontWeight={'bold'}
            style={{
                backgroundImage: 'linear-gradient(to right bottom, #3f51b5, #42a5f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
            >My Projects
        </Typography>
        <Box sx={{ maxWidth: '100%', width: '60%', flexGrow: 1, mt: 3, height : '60vh'}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography color='primary' fontWeight={'bold'}>{steps[activeStep].label}</Typography>
      </Paper>
      <Stack
        justifyContent="center"
        alignItems={'center'}
        width={'full'} 
        height={400} 
        direction='column'
        spacing={2}
        overflow={'auto'}
        sx={{
            border : '1px solid #3f51b5', 
            backgroundImage : 'linear-gradient(to right bottom, #3f51b5, #42a5f5)'
            }}>
                <Grid item  
                    display={'flex'}
                    justifyContent="center"
                    sx={{ height: 250, maxWidth: 400, width: '100%', p: 2 , color : 'white'}}>
                    <Box
                        component="img"
                        height={250}
                        sx={{
                            display: 'block',
                            overflow: 'hidden',
                        }}
                        src={steps[activeStep].Image}
                        alt={steps[activeStep].label}
                        />
                    </Grid>
                <Grid item
                    overflow={'auto'}
                    sx={{ 
                        height: 200, 
                        // maxWidth: 400, 
                        width: '100%', 
                        p: 2 , 
                        color : 'white', 
                        textAlign : 'center'}}>
                    <Typography variant='h5'>{steps[activeStep].label} </Typography>
                    {steps[activeStep].description}
                </Grid>
      </Stack>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Grid>
  )
}

export default Projects