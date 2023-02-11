import { Container, Grid, Typography,makeStyles, Card, Paper } from '@material-ui/core'
import { Height } from '@material-ui/icons'
import React from 'react'

const useStyles =makeStyles({
  main: {
    height: '70vh',
    backgroundColor:'rgba(0, 112, 192, 0.05)',
    marginBottom: '2rem',
    display:'flex',
    alignItems: 'center'
  },
  h2:{
    fontSize:'3.6rem',
    fontWeight: 400,
    marginBottom:'2rem'
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
  }

})

function AboutPage() {
  const classes = useStyles()
  return (
    <body style={{marginTop:"10rem"}}>
      <main className={classes.main}>
        <Container>
            <Grid container xs = {12}>
              <Grid item xs = {12} md = {6}>
                <Grid item md = {12}>
                  <Typography variant = 'h2' className={classes.h2}>Place holder message will be placed here and blah blah</Typography>
                  <Typography variant = 'body1' className= {classes.p}>Smaller message that is longer than  and wee wee wee wee the above wahala...</Typography>

                </Grid>
              </Grid>
              <Grid item md = {6}>
              </Grid>
            </Grid>

        </Container>
      </main>
      <section className={classes.ourStory}>
        <Container>
            <Grid container xs = {12}>
              <Grid item xs = {12} md = {6}>
                <Grid item md = {11}>
                  <div style={{display:'flex'}}>
                    <div className={classes.leftborder}></div>
                    <Typography variant='h3' className={classes.h3}> Our Story</Typography>
                  </div>
                  <Typography variant='body1' className={classes.p}>
                    Lorem ipsum is a something i just plan on putting here until content arrives and we are happy with it. Since 2020, we have been doing something amazing. so let’s continue
                  </Typography>
                    <Typography variant='body1' className={classes.p}>
                      With Extra message maybe on our training information could go here. Number of certified graduates, number of trainers and stuff                  
                    </Typography>
                </Grid>
              </Grid>
              <Grid item md = {6}>
                  <Card radiu style={{backgroundColor: 'rgba(217, 217, 217, 1)', height: '50vh', borderRadius: '2.5rem'}}elevation = {0}/>
              </Grid>
            </Grid>

        </Container>

      </section>
      <section className={classes.missionVision}>
        <Container>
            <Grid container xs = {12}>
              <Grid item xs = {12} md = {6}>
                <Grid item md = {11}>
                  <div style={{display:'flex'}}>
                    <div className={classes.leftborder}></div>
                    <Typography variant='h3' className={classes.h3}>Mission</Typography>
                  </div>
                  <Typography variant='body1' className={classes.p}>
                  Our misson is to be like a townhall, different, from Bala Blu, Blu Lu, Bulaba so that everyone can ignite businesses. We change the way organizations develop their employees and every person at iT Central has a role to play in doing so!.                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs = {12} md = {6}>
                <Grid item md = {11}>
                  <div style={{display:'flex'}}>
                    <div className={classes.leftborder}></div>
                    <Typography variant='h3' className={classes.h3}>Vision</Typography>
                  </div>
                  <Typography variant='body1' className={classes.p}>
                    As a something in a downhall that just so happens to be different from Bala Blu, Blu Lu, Bulaba, iT Central responds to the needs of emerging founders. By offering Power and Skills, a combination of soft and hard skills, we are able to help grow companies in which the demand for reskilling and upskilling continues to increase.
                  </Typography>  
                </Grid>
              </Grid>
            </Grid>
        </Container>
      </section>
      <section className= {classes.coreValues}>
        <Container>
          <Grid container md = {12} spacing = {3}>

            <Grid item md = {4}>
              <Card className={classes.valueCard} elevation = {0} style = {{backgroundColor: 'transparent'}}>
                <Typography  variant = 'h3'className={classes.h3}> Our Core Values</Typography>
                <Typography  variant = 'body1'className={classes.p}> We believe that this first core value means something to us, and to you. We are weee!</Typography>
              </Card>

            </Grid>
            <Grid item md ={4}>
              <Card elevation={0} className={classes.valueCard}>
                <div className={classes.imageBox}></div>
                <Typography variant='h4' className={classes.h4}> Core Value 1</Typography>
                <Typography variant='p' className={classes.p}>We believe that this first core value means something to us, and to you. We are weee!</Typography>
              </Card>         
            </Grid>
            <Grid item md = {4}>
              <Card elevation={0} className={classes.valueCard}>
                <div className={classes.imageBox}></div>
                <Typography variant='h4' className={classes.h4}> Core Value 1</Typography>
                <Typography variant='p' className={classes.p}>We believe that this first core value means something to us, and to you. We are weee!</Typography>
              </Card>
            </Grid>
            <Grid item md = {4}>
              <Card elevation={0} className={classes.valueCard}>
                <div className={classes.imageBox}></div>
                <Typography variant='h4' className={classes.h4}> Core Value 1</Typography>
                <Typography variant='p' className={classes.p}>We believe that this first core value means something to us, and to you. We are weee!</Typography>
              </Card>
            </Grid>
            <Grid item md = {4}>
              <Card elevation={0} className={classes.valueCard}>
                <div className={classes.imageBox}></div>
                <Typography variant='h4' className={classes.h4}> Core Value 1</Typography>
                <Typography variant='p' className={classes.p}>We believe that this first core value means something to us, and to you. We are weee!</Typography>
              </Card>
            </Grid>
            <Grid item md = {4}>
              <Card elevation={0} className={classes.valueCard}>
                <div className={classes.imageBox}></div>
                <Typography variant='h4' className={classes.h4}> Core Value 1</Typography>
                <Typography variant='p' className={classes.p}>We believe that this first core value means something to us, and to you. We are weee!</Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>

      </section>

    </body>
  )
}

export default AboutPage
