import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Card,
  Paper,
} from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

Aos.init()

const useStyles = makeStyles((theme) => {
  return {
    main: {
      height: "auto",
      backgroundColor: "rgba(0, 112, 192, 0.05)",
      marginBottom: "2rem",
      display: "flex",
      alignItems: "center",
      padding: "10rem 0",
    },
    h2: {
      fontSize: "3.6rem",
      fontWeight: 400,
      marginBottom: "2rem",
    },
    h3: {
      fontSize: "2.9rem",
      fontWeight: 600,
      marginBottom: "2rem",
      color: "black",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: "700",
    },
    p: {
      fontSize: "1.8rem",
      margin: "2.5rem 0rem",
    },
    image: {
      [theme.breakpoints.down("sm")]: {
        width: "100% !important",
        height: "100% !important",
      },
    },
    ourStory: {
      margin: "15rem 0rem",
    },

    leftborder: {
      width: ".5rem",
      height: "3.2rem",
      marginRight: ".7rem",
      backgroundColor: "rgba(0, 112, 192, 1)",
    },
    missionVision: {
      marginTop: "4rem",
    },
    coreValues: {
      backgroundColor: "rgba(0, 112, 192, 0.05)",
      height: "auto",
      padding: "5rem 0rem",
    },
    valueCard: {
      height: "50vh",
      padding: "0 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    },
    imageBox: {
      height: "8rem",
      width: "8rem",
      backgroundColor: "rgba(0, 112, 192, 1)",
      marginBottom: "2.5rem",
    },
  };
});
function AboutPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  const classes = useStyles();
  return (
    <body style={{ marginTop: "10rem" }}>
      <main className={classes.main}>
        <Container>
          <Grid container xs={12}>
            <Grid item xs={12} md={6}>
              <Grid item md={12}>
                <Typography variant="h2" className={classes.h2}>
                  Building the next generation.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                Our core mission at iT Central is nurturing and empowering the next generation of tech talents from Northern Nigeria.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                Through structured programs and mentorship, we cultivate diverse skill sets in aspiring developers, UI/UX designers, and engineers.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                Our approach involves hands-on training, fostering a culture of continuous learning, and providing invaluable experiences within a supportive community.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                We are a thriving hub for fostering innovative startups. We offer a platform where visionary entrepreneurs like yourself can transform groundbreaking ideas into viable businesses.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                Leveraging our network, resources, and strategic guidance, we facilitate the development, growth, and sustainability of tech-driven ventures, contributing to the evolution of Northern Nigeria as a burgeoning tech hotspot on the global map.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <img
                src="Images\IMG_20230111_161938.jpg"
                alt=""
                className={classes.image}
                style={{ objectFit: "contain", height: "85vh", width: "50vw" }}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
      <section
        className={classes.ourStory}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Container>
          <Grid container xs={12}>
            <Grid item xs={12} md={6}>
              <Grid item md={11}>
                <div style={{ display: "flex" }}>
                  <div className={classes.leftborder}></div>
                  <Typography variant="h3" className={classes.h3}>
                    How we work
                  </Typography>
                </div>
                <Typography variant="body1" className={classes.p}>
                  At our IT central, we believe in the power of collaboration
                  and strive to create an environment where diverse ideas and
                  perspectives come together to drive innovative solutions
                </Typography>
                <Typography variant="body1" className={classes.p}>
                  Our dedicated team is committed to staying ahead of the curve
                  and delivering cutting-edge technology that makes a tangible
                  impact on the world.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                  We are constantly pushing the boundaries and never settling
                  for the status quo, because we know that true progress is only
                  possible through relentless hard work and a passion for what
                  we do
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Card
                style={{
                  backgroundColor: "rgba(217, 217, 217, 1)",
                  height: "50vh",
                  borderRadius: "2.5rem",
                }}
                elevation={0}
              >
                <img
                  src="Images\IMG_20230111_162120.jpg"
                  alt=""
                  style={{
                    objectFit: "50%",
                    objectPosition: "top",
                    width: "100%",
                  }}
                />
                {/* <img src="Images\IMG_20230111_161938.jpg" alt="" style={{objectFit: 'contain', height: '50vh', width: '50vw'}}/> */}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section
        className={classes.missionVision}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Container>
          <Grid container xs={12}>
            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Grid item md={11}>
                <div style={{ display: "flex" }}>
                  <div className={classes.leftborder}></div>
                  <Typography variant="h3" className={classes.h3}>
                    Mission
                  </Typography>
                </div>
                <Typography variant="body1" className={classes.p}>
                  Our team of experienced developers and trainers work together
                  to provide end-to-end services for web and mobile
                  applications, and create beautiful and intuitive interfaces
                  that help our clients engage their users and drive
                  conversions.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                  We strive to build globally recognized software solutions and
                  train the next generation of tech leaders who will shape the
                  future of technology.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Grid item md={11}>
                <div style={{ display: "flex" }}>
                  <div className={classes.leftborder}></div>
                  <Typography variant="h3" className={classes.h3}>
                    Vision
                  </Typography>
                </div>
                <Typography variant="body1" className={classes.p}>
                  Our vision is to be the leading software development and
                  training company in the Northern region of Nigeria, recognized
                  for creating cutting-edge software solutions and training
                  programs that empower businesses and individuals to achieve
                  their goals.
                </Typography>
                <Typography variant="body1" className={classes.p}>
                  Through our efforts, we aim to put Northern Nigeria on the map
                  as a hub for innovative software development and tech talent.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.coreValues}>
        <Container>
          <Grid container md={12} spacing={3}>
            <Grid item md={4}>
              <Card
                className={classes.valueCard}
                elevation={0}
                style={{ backgroundColor: "transparent" }}
              >
                <Typography variant="h3" className={classes.h3}>
                  {" "}
                  Our Core Values
                </Typography>
                <Typography variant="body1" className={classes.p}>
                  {" "}
                  We believe that this first core value means something to us,
                  and to you. We are weee!
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                elevation={0}
                className={classes.valueCard}
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className={classes.imageBox}></div>
                <Typography variant="h4" className={classes.h4}>
                  {" "}
                  Core Value 1
                </Typography>
                <Typography variant="p" className={classes.p}>
                  We believe that this first core value means something to us,
                  and to you. We are weee!
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                elevation={0}
                className={classes.valueCard}
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <div className={classes.imageBox}></div>
                <Typography variant="h4" className={classes.h4}>
                  {" "}
                  Core Value 1
                </Typography>
                <Typography variant="p" className={classes.p}>
                  We believe that this first core value means something to us,
                  and to you. We are weee!
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                elevation={0}
                className={classes.valueCard}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className={classes.imageBox}></div>
                <Typography variant="h4" className={classes.h4}>
                  {" "}
                  Core Value 1
                </Typography>
                <Typography variant="p" className={classes.p}>
                  We believe that this first core value means something to us,
                  and to you. We are weee!
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                elevation={0}
                className={classes.valueCard}
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className={classes.imageBox}></div>
                <Typography variant="h4" className={classes.h4}>
                  {" "}
                  Core Value 1
                </Typography>
                <Typography variant="p" className={classes.p}>
                  We believe that this first core value means something to us,
                  and to you. We are weee!
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                elevation={0}
                className={classes.valueCard}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className={classes.imageBox}></div>
                <Typography variant="h4" className={classes.h4}>
                  {" "}
                  Core Value 1
                </Typography>
                <Typography variant="p" className={classes.p}>
                  We believe that this first core value means something to us,
                  and to you. We are weee!
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </body>
  );
}

export default AboutPage;
