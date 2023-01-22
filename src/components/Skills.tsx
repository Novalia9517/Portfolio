import React from 'react'
import { Grid, Typography, Paper, Box} from '@mui/material'
import { grey } from '@mui/material/colors';
import VerifiedIcon from '@mui/icons-material/Verified';

const Skills = ({address} : any) => {
    const Datas = [
        {
            title : 'HTML',
            description : 'basic'
        },
        {
            title : 'CSS',
            description : 'basic'
        },
        {
            title : 'Javascript',
            description : 'basic'
        },
        {
            title : 'Typescript',
            description : 'basic'
        },
        {
            title : 'ReactJS',
            description : 'basic'
        },
        {
            title : 'TailwindCSS',
            description : 'basic'
        },
        {
            title : 'ChackraUI',
            description : 'basic'
        },
        {
            title : 'Material UI',
            description : 'basic'
        },
        {
            title : 'Axios',
            description : 'basic'
        },
    ]
  return (
    <Grid 
        ref={address}
        id={'skills'}
        mt={5}
        container
        direction={'column'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        pt={10}
        width={'full'}
        minHeight={'full'}
        // sx={{ color : grey[800]}}
        >
        <Typography variant='subtitle1' fontWeight='semibold'>My Skills</Typography>
        <Typography
            variant='h5'
            fontWeight={'bold'}
            sx={{
                backgroundImage: 'linear-gradient(to right bottom, #3f51b5, #42a5f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
            >My Skills
            </Typography>
       <Paper
            sx={{
            height: '60%',
            width: '50%',
            maxWidth: '100%',
            border : '1px solid #3f51b5',
            borderRadius : '15px',
            display:'flex',
            flexDirection : 'column',
            justifyContent:'flex-start',
            alignItems:'center',
            padding : '10px',
            marginTop : 4,
            paddingBottom : '15px',
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Typography 
                variant='h6' 
                fontWeight='semibold'
                style={{
                    backgroundImage: 'linear-gradient(to right bottom, #3f51b5, #42a5f5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
                >Frontend Developer</Typography>
                <Grid 
                    container 
                    direction={{sm : 'column', md : 'row'}} 
                    mt={3} px={2} 
                    rowSpacing={1} 
                    columnSpacing={2}>
                {Datas.map((item, i) => {
                    return (
                        <Grid 
                            key={i}
                            item xs={12} md={6}  container
                            direction={'row'}
                            justifyContent="flex-start"
                            alignItems="center">
                            <VerifiedIcon color='primary'/>
                            <Box ml={3}>
                                <Typography variant='subtitle1' fontWeight='semibold'>{item.title}</Typography>
                                <Typography variant='subtitle2'>{item. description}</Typography>
                            </Box>
                        </Grid>
                    )
                })
                }
                </Grid>
        </Paper>
     </Grid>

)}

export default Skills