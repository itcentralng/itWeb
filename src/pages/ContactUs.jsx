import {Container, FormControl, FormHelperText, FormLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Button from '../components/Button'

const useStyles = makeStyles({
    contactus:{
        height: '90rem',
        background: "#0070C00D",
        display: 'flex',
        alignItems: 'center',
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
                            Smaller message that is longer than  and wee wee wee wee the above wahala...                
                        </Typography>
                    </div>

                </Grid>
                <Grid item lg = {6}>
                    <Grid container lg = {12} spacing = {2}>
                        <Grid item lg = {6} xs = {12}>
                            <form>
                            <FormControl fullWidth>
                                    <FormLabel className={classes.form}>Your Name</FormLabel>
                                    <TextField InputProps={{
                                    style: { fontSize: '1.4rem' }
                                    }} variant='outlined'></TextField>
                                </FormControl>
                            </form>

                        </Grid>
                        <Grid item lg = {6} xs = {12}>
                            <form>
                            <FormControl fullWidth>
                                    <FormLabel className={classes.form}>Your Email</FormLabel>
                                    <TextField InputProps={{
                                    style: { fontSize: '1.4rem' }
                                    }} variant='outlined'></TextField>
                                </FormControl>
                            </form>

                        </Grid>
                        <Grid item lg = {6} xs = {12}>
                            <form>
                                <FormControl fullWidth>
                                    <FormLabel className={classes.form}>Your Phone Number</FormLabel>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    variant='outlined'
                                    inputProps={{
                                        style: {fontSize:'1.4rem'}
                                    }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>

                        </Grid>
                        <Grid item lg = {6} xs = {12}>
                            <form>
                                <FormControl fullWidth>
                                    <FormLabel className={classes.form}>Your Phone Number</FormLabel>
                                    <TextField InputProps={{
                                        style: { fontSize: '1.4rem' }
                                        }} fullWidth variant='outlined'>
                                    </TextField>
                                </FormControl>
                            </form>

                        </Grid>
                        <Grid item lg = {12}xs = {12}>
                            <form>
                                <FormControl fullWidth>
                                    <FormLabel className={classes.form}>Details</FormLabel>
                                    <TextField InputProps={{
                                        style: { fontSize: '1.4rem' }
                                        }} fullWidth variant='outlined' multiline rows={10}>
                                    </TextField>
                                </FormControl>
                            </form>
                        </Grid>
                        <Button style={`button-blue ${classes.button}`} text = 'Send'/>
                    </Grid>
                    {/* <Button variant='contained' style={{padding: ' 0.7rem 4.5rem', fontSize: '1.9rem'}} color='primary'>SEND</Button> */}
                </Grid>
            </Grid>
                
        
        </div>

    </div>
  )
}

export default ContactUs
