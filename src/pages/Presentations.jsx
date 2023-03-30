import { Card, Container, Grid, IconButton, makeStyles } from '@material-ui/core'
import { CloudDownload } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme)=>{
    return{
        body:{
            marginTop: '10rem',
            height: '60rem'
        },
        gridItem:{
            height: 'auto',
            backgroundColor: 'transparent',
            position: 'relative',
            borderRadius: '1rem',



            
        },
        presentationCover:{
            width:'100%',
            objectFit: 'contain',
            borderRadius: 30,
            '&:hover':{
                opacity: 1
            }

        },
        downloadBtn:{
            position: 'absolute',
            bottom: 20,
            left:20,
            color: theme.palette.primary.main,
        }
    }

})
const presentations = [
    {
    Title: 'Zero To Rest By IT CENTRAL',
    Cover: 'Images/RestAPI-Presentation.png',
    Link: 'Docs/RestAPI_Presentation.pdf'
    }]
function Presentations() {
    const classes = useStyles()
  return (
    <div className={classes.body}>
      <Container>
        <Grid container spacing={3}>
            {presentations.map((presentation)=>{
                return(
                    
                    <Grid item md = {4} className = {classes.gridItem} key = {presentation.Title}>
                            <img className={classes.presentationCover} src={presentation.Cover} alt={presentation.Title} />
                            <a href={presentation.Link}>
                            <IconButton className={classes.downloadBtn}>
                                <CloudDownload style={{fontSize: '2rem', marginRight: '1rem'}}/>
                                <span>Download</span>
                            </IconButton >

                            </a>

                    </Grid>
                )

            })}
        </Grid>
      </Container>
    </div>
  )
}

export default Presentations
