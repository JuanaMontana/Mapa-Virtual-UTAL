import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Headercito from '../components/header';
import Listita from '../components/layoutadmin'
import Mapita from '../img/mapa.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A202' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function menuusuario() {
    return (



        <Grid sx={{ height: 800, flexGrow: 1 }}>

            <Headercito></Headercito>
            <Grid container spacing={2}>
                <Grid item xs={3}>

                    <Item sx={{ height: 800 }} >
                        <Listita></Listita>
                    </Item>
                </Grid>

                <Grid item xs={9}>
                    <Item sx={{ height: 800 }}>
                        <img src={Mapita} style={{ width: 680, height: "auto" }} />

                    </Item>

                </Grid>
            </Grid>
        </Grid>
    );
}