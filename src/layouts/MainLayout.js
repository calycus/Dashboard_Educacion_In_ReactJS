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

import Dashboard_General from '../Dashboard_General';
import Dashboard_General_prueba from '../Dashboard_General';
import { Link } from 'react-router-dom';

const drawerWidth = 260;

export default function PermanentDrawerLeft({ children }) {
  const [expandedPanel, setExpandedPanel] = useState(false);

  /* const handleAccordionChange = (panel) => (isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  }; */

  return (
    <Box sx={{ display: 'flex' }}>
      {<Drawer
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
          <ListItemButton>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary="FACULTADES" />
          </ListItemButton>
            <ListItemButton to='/'>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Dashboard General" />
            </ListItemButton>

          <Accordion expanded sx={{ boxShadow: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Fenomesnos Academicos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              
                <ListItemButton onClick={() => setExpandedPanel(false)} to="/general_prueba">
                  <ListItemIcon>
                    <Send />
                  </ListItemIcon>
                  <ListItemText primary="Tasa de Retencion" />
                </ListItemButton>

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
            </AccordionDetails>
          </Accordion>
        </List>
      </Drawer>}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {
          children
        }
      </Box>
    </Box>
  );
}
