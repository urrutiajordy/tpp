import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ListUser from './components/ListUser';
import SliderMenu from './components/Sidebar';
import Header from './components/Header';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    stylegrid:{
        borderWidth: 1,
        borderRightColor: "#C9C9C9",
        borderRight: "solid",
    }
}));

function Dashboard(props:any) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item md={3}>
                <SliderMenu />
                </Grid>
                <Grid item md={9}>
                <Header />
                <ListUser />
                </Grid>
            </Grid>            
        </div>
    )
}


export default Dashboard;
