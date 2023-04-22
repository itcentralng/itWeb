import { Container, Grid, Typography,makeStyles, Card, Paper, IconButton } from '@material-ui/core'
import { Height, LinkedIn, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme)=>{
  return{
    main: {
      height: 'auto',
      backgroundColor:'rgba(0, 112, 192, 0.05)',
      marginBottom: '2rem',
      display:'flex',
      alignItems: 'center',
      padding: '10rem 0'

    },
    h2:{
      fontSize:'3.6rem',
      fontWeight: 400,
      marginBottom:'2rem'
    },
    quote:{
      fontSize:'3.6rem',
      fontWeight: 500,
      marginBottom:'2rem',
      textAlign:"center"
    },
    h3:{
      fontSize:'2.9rem',
      fontWeight: 600,
      marginBottom:'2rem',
      color: 'black'
    },
    h4:{
      fontSize:'2rem',
      fontWeight: '700'
    },
    p:{
      fontSize: '1.8rem',
      margin: '2.5rem 0rem'
    },
    image:{
      [theme.breakpoints.down('sm')]:{
        width: '100% !important',
        height: '100% !important'

      }
    },
    ourStory:{
      margin: '15rem 0rem',
    
    },

    leftborder:{
      width:'.5rem',
      height: '3.2rem',
      marginRight:'.7rem',
      backgroundColor:'rgba(0, 112, 192, 1)'
    },
    missionVision:{
      marginTop: '4rem'
    },
    coreValues:{
      backgroundColor:'rgba(0, 112, 192, 0.05)',
      height: 'auto',
      padding:'5rem 0rem'
    },
    valueCard:{
      height: '50vh', 
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    },
    imageBox:{
      height:'8rem',
      width: '8rem',
      backgroundColor: 'rgba(0, 112, 192, 1)',
      marginBottom: '2.5rem'
    },
  
}

})


function Person() {

  const [person, setPerson] = useState({})

  let { id } = useParams()

  const people = [
    {
      id: 'nasirumustapha',
      image: 'https://dhfspace.fra1.digitaloceanspaces.com/dhfspace/nasirphoto.JPG',
      name: 'Nasiru Mustapha',
      quote: "\"I'm on a mission to help build the next generation!\"",
      about: [
        "I have a passion for using technology to solve real-world problems and drive business growth. With over 7 years of experience in software development and a track record of delivering successful projects for clients in various industries, I am skilled in leading teams and managing all aspects of software development, from ideation to deployment.",
        "My leadership and technical expertise have been instrumental in building iT Central into a respected software development company in Nigeria, and I am committed to continuing to drive innovation and growth for our clients. I am also dedicated to training young software developers, to help build the next generation of tech leaders in Nigeria. Connect with me to learn more about how iT Central can help your business thrive."
      ],
      socials: [
        {
          icon:"linkedin",
          link:"https://linkedin.com/in/nasirumustapha"
        },
        {
          icon:"twitter",
          link:"https://twitter.com/nasirms_"
        }
      ]
    }]

  useEffect(() => {
    Aos.init()

    setPerson(people.find((person)=> person.id==id));
  }, [])

  const classes = useStyles()
  return (
    <body style={{marginTop:"10rem"}}>
      <main className={classes.main}>
        <Container>
            <Grid container xs = {12}>
              <Grid item xs = {12} md = {6}>
                <Grid item md = {12}>
                  <Typography variant = 'h2' className={classes.quote}>{person.quote}</Typography>
                  {
                    person?.about?.map(field=>
                      <Typography variant = 'body1' className= {classes.p}>{field}</Typography>
                      )
                  }

                  {
                    person?.socials?.map(social=>
                      <a href={social.link} target='_blank'>
                        {social.icon === 'twitter' &&
                          <IconButton color='primary'>
                          <Twitter/>
                        </IconButton>
                        }
                        {social.icon === 'linkedin' &&
                          <IconButton color='primary'>
                          <LinkedIn/>
                        </IconButton>
                        }
                      </a>
                      )
                  }
                  
                </Grid>
              </Grid>
              <Grid item md = {6}>
                <img src={person.image} alt={person.name}  className={classes.image} style={{objectFit: 'contain', height: '50vh', width: '50vw'}}/>
              </Grid>
            </Grid>

        </Container>
      </main>

    </body>
  )
} 

export default Person
