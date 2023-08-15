import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const actions = [
  { icon: <GitHubIcon />, name: 'GitHub' },
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{
      height: 320,
      transform: 'translateZ(0px)',
      flexGrow: 1
    }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}