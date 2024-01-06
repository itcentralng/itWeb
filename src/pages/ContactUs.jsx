import {Container, FormControl, FormHelperText, FormLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography, withStyles } from '@material-ui/core'
import { ArrowDownward, ArrowDropDown, Delete, ExpandMore } from '@material-ui/icons'
import React from 'react'
import Button from '../components/Button'

const CustomSelect = withStyles({
    icon: {
      fontSize: "30px",
    },
  })(Select);


const useStyles = makeStyles((theme) =>{
    return{
        contactus:{
            height: '90rem',
            background: "#0070C00D",
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]:{
                padding: '10rem 0'
            }
            // paddingTop:'9rem'
        },
        form:{
            fontSize: '1.4rem',
            marginBottom: '1em',
            fontWeight:600,
            color:"black"
        },
        button:{
            margin: "30px 8px"
    
        },
        container:{
            width: '80vw',
            margin: 'auto'
        }
    

    }
})


function ContactUs() {
    const classes = useStyles()
  return (
    <div className={classes.contactus}>
        <div className={classes.container}>
            <Grid container lg= {12}>
                <Grid item lg = {6}>
                    <div className={classes.writings}>
                        <Typography 
                        variant='h1'
                        style={{ fontWeight: '400', fontSize:'4rem' }}
                        >
                            Love to hear from you, <br />
                            Get in Touch <span><img src="/Images/wave.png" height = '50rem' width = '50rem'alt="" /></span>
                        </Typography>
                        <Typography style={{fontSize: '1.8rem'}}>
                            We are always ready to help with your queries.
                        </Typography>
                    </div>

                </Grid>
                <Grid item lg = {6}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelI2WeD0F_KtFqwIULuM32tj4-5AEEpTz0z1aAfqcGvFTBbg/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Grid>
                </Grid>
                
        
        </div>

    </div>
  )
}

export default ContactUs
