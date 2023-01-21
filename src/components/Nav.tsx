import React, { useState } from 'react'
import { 
    Typography, 
    Grid,
    Box,
    AppBar,
    Toolbar,
    IconButton
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode';

const Nav = () => {
    const [mode, setMode] = useState('light')
    const handleClick =() => {
        mode == 'light' ? setMode('dark') : setMode('light')
    }

    console.log(mode)
  return (
    <Box width={'full'} sx={{ flexGrow: 1, background : '#e8eaf6'}} position={'sticky'} top={'0'} >
      <Box 
        px={16}
        sx={{background : '#e8eaf6'}} >
        <Toolbar
        sx={{ display : 'flex', 
        justifyContent : 'space-between',
        background : '#e8eaf6'
        }}>
          <Typography 
            variant='h5'
            fontWeight={'bold'}
            style={{
                backgroundImage: 'linear-gradient(to right bottom, #3f51b5, #42a5f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
            >Novalia</Typography>

            <IconButton
                value={mode} 
                aria-label="website-mode" 
                onClick={handleClick}
                >
                <LightModeIcon color='info'/>
            </IconButton>
        </Toolbar>
      </Box>
    </Box>
  )
}

export default Nav