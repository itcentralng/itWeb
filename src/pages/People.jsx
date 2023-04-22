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
            width:'80%',
            objectFit: 'fill',
            borderRadius: 100,
            '&:hover':{
                opacity: 1
            }

        },
        downloadBtn:{
            position: 'absolute',
            bottom: 20,
            left:20,
            color: theme.palette.primary.main,
        },
        personName:{
            fontSize:'3.6rem',
            fontWeight: 400,
            marginBottom:'2rem'
        }
    }

})
const people = [
    {
    name: 'Nasiru Mustapha',
    image: 'https://dhfspace.fra1.digitaloceanspaces.com/dhfspace/nasirphoto.JPG',
    id: 'nasirumustapha',
    link: '/people/nasirumustapha',
    }]
function People() {
    const classes = useStyles()
  return (
    <div className={classes.body}>
      <Container>
        <Grid container spacing={3}>
            {people.map((person)=>{
                return(
                    
                    <a href={person.link}>
                    <Grid item md = {4} className = {classes.gridItem} key = {person.name}>
                            <img className={classes.presentationCover} src={person.image} alt={person.name} />

                    </Grid>
                    </a>
                )

            })}
        </Grid>
      </Container>
    </div>
  )
}

export default People
