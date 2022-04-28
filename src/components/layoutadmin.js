import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
/*import Button from './button'*/
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';


function generate(element) {
  return [0, 1, 2, 3].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function generate1button(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box  sx={{maxWidth: 800, height: "100%" }}> 
      <Grid sx={{maxWidth: 500, height: 700 }}container direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>     
        <Grid item xs={12} md={6}>    
            <List dense={dense}>
              {generate(
                <ListItem>
                  <Button variant="contained">Contained</Button>

                </ListItem>,
              )}
            </List>     
        </Grid>
      </Grid>

      Juan Farias
      <Grid   container direction="column-reverse" justifyContent="flex-end" alignItems="center" paddingBottom={1} >     
        <Grid   >    
            <List dense={dense}>
             
                
                <Button variant="contained">Cerrar Sesión</Button>
                
              
            </List>     
        </Grid>
      </Grid>
    </Box>
  );
}
