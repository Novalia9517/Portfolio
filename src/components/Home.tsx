import { Typography, ButtonGroup, Button, Box, Grid, IconButton, Divider, Tooltip, Stack, Backdrop, Modal, Fade } from '@mui/material'
import React, {useState, useRef} from 'react'
import { purple, grey } from '@mui/material/colors';
import Photo from '../assets/photo1.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MouseIcon from '@mui/icons-material/Mouse';

const buttons = [
    <Tooltip key={'linkedin'} title ='Go to Novalia.s Linkedin'><IconButton color='primary' key="one" href='https://www.linkedin.com/in/nova-lia-53b911261/'><LinkedInIcon/></IconButton></Tooltip>,
    <Tooltip key={'github'} title ='Go to Novalia.s Github'><IconButton color='primary' key="two" href='https://github.com/Novalia9517'><GitHubIcon/></IconButton></Tooltip>,
    <Box
        key={'line'}
        mt={2}
        width={'2px'}
        height={'100px'}
        visibility={{md : 'visible', sm : 'hidden', xs : 'hidden'}}
        sx={{
            backgroundImage: 'linear-gradient(to right bottom, #42a5f5,  #3f51b5)',
        }}
        >
        </Box>
  ];
const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #3f51b5',
        boxShadow: 24,
        borderRadius : '10px',
        p: 4,
        color : ' #3f51b5'
    };

const Home = ({address} : any) => {
    const [open, setOpen] = useState(false)
    // const home = useRef(null)

  return (
    <Stack 
        ref={address}
        id='home'
        direction={'row'}
        width={'full'}
        maxHeight={'100vh'}
        display={'flex'}
        justifyContent={'start'}
        px={10}
        py={5}
        >
        <Stack 
            direction={{ md : 'row', sm : 'column', xs : 'column'}}
            display={'flex'}
            justifyContent="space-between"
            alignItems="center"
            width={'100%'}
            height={'100%'}
            px={{md : 10 }}
            pt={2}
            >
            <Box>
                <Stack
                    height={'full'}
                    justifyContent={'center'}
                    direction={{ md : 'column', sm : 'row', xs : 'row'}} 
                    spacing={1}
                    alignItems='center'
                    >
                    {buttons}
                </Stack>
            </Box>
            <Box
                flexDirection="column"
                display={'flex'}
                justifyContent="center"
                alignItems="center"
                width={'full'}
                height={'full'}
                sx={{color: (theme) =>
                    theme.palette.mode == 'light' ? `${grey[800]}` : '#fff',
                }}
                >
                <Typography variant='h5'>Hello, I`m</Typography>
                <Typography
                    variant='h3'
                    fontWeight={'bold'}
                    style={{
                        backgroundImage: 'linear-gradient(to right bottom, #3f51b5, #42a5f5)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >Novalia</Typography>
                <Typography variant='h6'>Front-end Engineer</Typography>

                <Stack spacing={4} direction='row' mt={2}>
                    <Button variant={'outlined'} size='small' color={'primary'} onClick={() => setOpen(true)}>Download CV</Button>
                    <Button variant={'contained'} size='small' color="primary" href={'#about'}>About Me</Button>
                </Stack>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={() => setOpen(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <Box sx={style} width={{md : 400, xs : '70%', sm : '60%'}}>
                        <Typography id="transition-modal-title" variant="h5" component="h2">
                        Choose Type of CV You need
                        </Typography>
                        <Typography id="transition-modal-title" variant="body2" component="p" mt={3}>
                        ATS Version is for CV which ATS friendly. And Creative version for creative CV with colors.
                        </Typography>
                        <Stack spacing={4} direction='row' mt={3}>
                            <Button 
                                variant={'outlined'} 
                                size='small' color={'primary'} 
                                href='https://drive.google.com/uc?export=download&id=1PXOV4EpQScBCzzP6HunNwdgy7oQeArxu'
                                sx={{textAlign : 'center'}}
                                >ATS Version</Button>
                            <Button 
                                variant={'outlined'} 
                                size='small' 
                                color="primary" 
                                href='https://drive.google.com/uc?export=download&id=1PXOV4EpQScBCzzP6HunNwdgy7oQeArxu'
                                sx={{textAlign : 'center'}}
                                >Creative Version</Button>
                        </Stack>
                    </Box>
                    </Fade>
                </Modal>
                <Box
                    mt={2}
                    width={'200px'}
                    height={'300px'}
                    sx={{
                        backgroundImage: 'linear-gradient(to right bottom, #64b5f6,  #5e35b1)',
                        borderRadius : '100px 100px 0 0',
                        overflow : 'hidden'
                    }}
                    >
                    <img src={Photo} width='200px'/>
                </Box>
            </Box>
            <Stack  
                direction={'column'}
                width={'20px'}
                height={'full'}
                justifyContent='center'
                alignItems={'center'}
                spacing={6}
                visibility={{md : 'visible', sm : 'hidden', xs : 'hidden'}}
                >
                <IconButton color='primary'><MouseIcon/></IconButton>
                <Typography 
                    color='primary' 
                    variant='subtitle2'
                    sx={{
                        transform : 'rotateZ(270deg)',
                        width : '200px'
                    }}
                    >Scrolling Down For More</Typography>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Home