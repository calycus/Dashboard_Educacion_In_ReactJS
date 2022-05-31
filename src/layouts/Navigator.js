import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Send, Drafts } from '@mui/icons-material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SwitchDrawer from '../router/SwitchDrawer';
import {
  BrowserRouter, Link, matchPath, useLocation
} from 'react-router-dom';



const drawerWidth = 260;

export default function PermanentDrawerLeft() {
  const [expandedPanel, setExpandedPanel] = useState(false);
  const sampleLocation = useLocation();

  let drawerComp = "";
  if (sampleLocation.pathname != "/") {
    drawerComp =
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton to="/">
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary="FACULTADES" />
          </ListItemButton>
          <Link to="/general">
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Dashboard General" />
            </ListItemButton>
          </Link>


          <Accordion expanded sx={{ boxShadow: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Fenomesnos Academicos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link to="/general_prueba">
                <Accordion
                  onClick={() => setExpandedPanel(false)}
                  sx={{ boxShadow: 'none' }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ListItemIcon>
                      <Send />
                    </ListItemIcon>
                    <Typography>Tasa de Retencion</Typography>
                  </AccordionSummary>
                </Accordion>
              </Link>
              <Link to="/general_prueba">
                <Accordion
                  expanded={expandedPanel === 'panelTRP'}
                  /* onChange={handleAccordionChange('panelTRP')} */
                  onChange={(e, expanded) => setExpandedPanel(expanded ? 'panelTRP' : false)}
                  sx={{ boxShadow: 'none' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ListItemIcon>
                      <Send />
                    </ListItemIcon>
                    <Typography>Tasa de Repitencia</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary="Predicción" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary="MetaData" />
                    </ListItemButton>
                  </AccordionDetails>
                </Accordion>
              </Link>
              <Link to="/general_prueba">
                <Accordion
                  expanded={expandedPanel === 'panelTDS'}
                  /* onChange={handleAccordionChange('panelTDS')} */
                  onChange={(e, expanded) => setExpandedPanel(expanded ? 'panelTDS' : false)}
                  sx={{ boxShadow: 'none' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ListItemIcon>
                      <Send />
                    </ListItemIcon>
                    <Typography>Tasa de Desercion</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary="Por Materia" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary="MetaData" />
                    </ListItemButton>
                  </AccordionDetails>
                </Accordion>
              </Link>
            </AccordionDetails>
          </Accordion>
        </List>
      </Drawer>
  }
  return (
    <Box sx={{ display: 'flex' }}>
      {drawerComp}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <SwitchDrawer />
      </Box>
    </Box>
  );
}

