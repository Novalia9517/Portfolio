import React from 'react'
import {Stack, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Stack 
        height={200} 
        width={'full'}
        sx={{
            backgroundImage: 'linear-gradient(to right bottom, #3f51b5, #42a5f5)',
            bottom : '0',
            color : 'white',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            position : 'relative'
        }}
        >
        <Typography variant='h4'>Novalia</Typography>
        <Typography variant='h5'>Website Portfolio</Typography>
        <Typography variant='subtitle2'>Built With Typescript, React, Vite and MaterialUI</Typography>
    </Stack>
  )
}

export default Footer