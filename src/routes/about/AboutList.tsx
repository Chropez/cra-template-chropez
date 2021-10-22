import React, { FC } from 'react';
import { Check } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Paper } from '@mui/material';

const AboutList: FC = () => (
  <Paper>
    <List>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="Typescript" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="Material UI" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="Styled Components" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="Redux + Redux Toolkit + RTK query" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="React router" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="Using the official CRA pwa-typescript template" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="Scalable folder structure" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Check color="success" />
        </ListItemIcon>
        <ListItemText primary="Ready to use dog picture with counter!" />
      </ListItem>
    </List>
  </Paper>
);

export default AboutList;
