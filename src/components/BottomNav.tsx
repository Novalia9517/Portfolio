import React, { useState, useRef } from 'react'
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
// import {Link} from 'react-scroll'
// import * as Scroll from 'react-scroll';

const BottomNav = ({home, about, projects, skills, services, certificate, onClick} : any) => {
  const [active, setActive] = useState<string | null>('home')

  const handleChange = (
      _event : React.MouseEvent<HTMLElement>,
      updateActive : string | null
  ) => {
      setActive(updateActive)
  }

  return (
    <Box 
      sx={{ flexGrow: 1 }} 
      position='fixed'
      left={'0'}
      right={'0'}
      bottom='0'
      margin={'0 auto'} 
      pb={2}>
      <Box 
        display={'flex'}
        justifyContent={'center'}
        sx={{background : 'transparent'}} 
        >
        <Stack>
            <ToggleButtonGroup
                aria-label='linking'
                value={active}
                onChange={handleChange}
                color='primary'
                size='small'
                orientation={'horizontal'}
                exclusive
                sx={{
                    border : '2px solid #64b5f6',
                    borderRadius : '25px',
                    backgroundColor : 'rgba( 134, 187, 228, 0.4 )',
                    backdropFilter: `blur( 16.5px )`
                }}
                >
                <ToggleButton  
                  value='home' 
                  aria-label='home' 
                  onClick={() => onClick(home)}
                  sx={{borderRadius : '25px 0 0 25px'}}>
                  <Tooltip title="Go To Home" placement="top">
                    <HomeIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton 
                  value='about' 
                  aria-label='about' 
                  onClick={() => onClick(about)}
                  sx={{}}>
                  <Tooltip title="Go To About" placement="top">
                    <AssignmentIndIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton 
                   value='projects' 
                   aria-label='projects' 
                   onClick={() => onClick(projects)}
                   sx={{}}>
                  <Tooltip title="Go To Project" placement="top">
                    <AssignmentTurnedInIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton 
                 value='skills' 
                 aria-label='skills' 
                 onClick={() => onClick(skills)}
                 sx={{}}>
                  <Tooltip title="Go To Experience" placement="top">
                    <LocalOfferIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton 
                 value='services' 
                  aria-label='services' 
                  onClick={() => onClick(services)}
                  sx={{}}>
                  <Tooltip title="Go To Offering" placement="top">
                    <WorkIcon/>
                    </Tooltip>
                  </ToggleButton>
                <ToggleButton 
                 value='certificate' 
                 aria-label='certificate' 
                 onClick={() => onClick(certificate)}
                 sx={{borderRadius : '0 25px 25px 0'}}>
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