import React from 'react'
import { Box, Typography, Stack, Grid, Button, Paper} from '@mui/material'
import Photo from '../assets/Photo3.png'
import { grey } from '@mui/material/colors';
import BottomNav from './BottomNav';

const About = ({address} : any) => {
    
  return (
    <Grid 
        ref={address}
        id='about'
        container
        direction={'column'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        pt={10}
        width={'full'}
        maxWidth={'100vw'}
        minHeight={'100vh'}
        sx={{color: (theme) =>
            theme.palette.mode == 'light' ? `${grey[800]}` : '#fff',
        }}
        >
        <Typography variant='subtitle1'>My Intro</Typography>
        <Typography
         variant='h5'
         fontWeight={'bold'}
         sx={{
             backgroundImage: 'linear-gradient(to right bottom, #3f51b5, #42a5f5)',
             WebkitBackgroundClip: 'text',
             WebkitTextFillColor: 'transparent'
         }}
         >About Me</Typography>
         <Stack 
            direction={{md :'column', sm : 'column', lg : 'row'}} 
            spacing={4} width={'full'} 
            mt={3} 
            px={{xs : 5, sm : 5, md : 10}}>
            <Box 
                width={{xs : '200px',sm : '100%', md : '250px'}} 
                height={{xs : '200px',sm : '200px', md : '250px'}} 
                overflow={'hidden'}
                borderRadius={'15px'}
                display='flex'
                px={{xs : 5, sm : 1, md : 10}}
                justifyContent={'center'}
                >
                <img src={Photo} width='full' style={{borderRadius : '15px'}}/>
            </Box>
            <Stack
                 width={{md : '50vw', sm:'full'}}
                 px={{xs : 3, sm : 3, md : 6}}
                 py={1}
            >
                <Box px={{sm : 3, md : 6}} width={'full'} mt={2}>
                    <Typography variant='subtitle1'>I'm a Front-End Engineer who just graduated from Bootcamp at Alterra Academy. As Frontend Developer, I create web pages with UI/UX user Interface. I believe that every opportunity I get is very valuable. I participated in several projects using Javascript, Reactjs, Nextjs, Tailwindcss, and Bootstrap. Features that I have worked on include login, registration, Midtrans payment, cart feature, and so on. I trust that we should try hard to raise our level, that’s why I always want to learn and move even with a little change. I hope one day I can become a software engineer with a lot of knowledge and experience.</Typography>
                </Box>
                <Box px={6} mt={2}>
                    {/* <Button 
                        variant='contained' 
                        size='small' 
                        color='primary'
                        sx={{width : '150px', fontSize : '11px'}}
                        >Contact Me</Button> */}
                </Box>
            </Stack>
         </Stack>
    </Grid>
  )
}

export default About