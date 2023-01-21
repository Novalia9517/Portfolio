import React, { useState } from 'react'
import {
    Box,
    Toolbar,
    Typography,
    IconButton,
    ToggleButtonGroup,
    ToggleButton,
    Tooltip, Tabs, Tab
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Stack } from '@mui/system';

const BottomNav = () => {
  const [active, setActive] = useState<string | null>('home')

  const handleChange = (
      _event : React.MouseEvent<HTMLElement>,
      updateActive : string | null
  ) => {
      setActive(updateActive)
      console.log(active)
  }

  return (
    <Box sx={{ flexGrow: 1 }} position='fixed' left={{xs : '20%', sm : '30%', md : '30%', lg : '43%'}} bottom='0' pb={2}>
      <Box 
        display={'flex'}
        justifyContent={'center'}
        sx={{background : 'transparent'}} >
        <Stack>
            <ToggleButtonGroup
                aria-label='linking'
                value={active}
                onChange={handleChange}
                color='primary'
                size='small'
                orientation='horizontal'
                exclusive
                sx={{
                    border : '2px solid #64b5f6',
                    borderRadius : '25px',
                    backgroundColor : '#e8eaf6'
                    
                }}
                >
                <ToggleButton  value='home' aria-label='home' href='#home' sx={{borderRadius : '25px 0 0 25px',background : '#e8eaf6'}}>
                  <Tooltip title="Go To Home" placement="top">
                    <HomeIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton value='about' aria-label='about' href='#about' sx={{ background : '#e8eaf6'}}>
                  <Tooltip title="Go To About" placement="top">
                    <AssignmentIndIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton value='project' aria-label='project' href='#skills' sx={{ background : '#e8eaf6'}}>
                  <Tooltip title="Go To Project" placement="top">
                    <AssignmentTurnedInIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton value='experience' aria-label='experience' href='#projects' sx={{ background : '#e8eaf6'}}>
                  <Tooltip title="Go To Experience" placement="top">
                    <LocalOfferIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton value='offering' aria-label='offering' href='#services' sx={{ background : '#e8eaf6'}}>
                  <Tooltip title="Go To Offering" placement="top">
                    <WorkIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton value='contact' aria-label='contact' href='#contact' sx={{borderRadius : '0 25px 25px 0', background : '#e8eaf6'}}>
                  <Tooltip title="Go To Contact" placement="top">
                    <ContactMailIcon/>
                    </Tooltip>
                  </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
      </Box>
    </Box>
  )
}

export default BottomNav