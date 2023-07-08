import {
  Button,
  Card,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    section: {
      backgroundColor: "#0070C00D",
      display: "flex",
      justifyContent: "center",
      padding: "5rem 0rem",
    },
    container: {
      width: "80vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    h1: {
      fontSize: "4.5rem",
      color: theme.palette.primary.dark,
      fontWeight: 700,
    },
    p: {
      fontSize: "1.8rem",
      color: theme.palette.primary.dark,
      fontWeight: 400,
    },
    summerBrief: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
    },
    icons: {
      display: "flex",
    },
    icon: {
      width: "4.2rem",
      height: "4.2rem",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "-1.2rem",
      // backgroundColor: theme.palette.primary.main,
      backgroundColor: "rgba(255,255,255,0.8)",
      boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
    },
  };
});
function SummerSection() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Grid container spacing={4}>
          <Grid item md={7} className={classes.summerBrief}>
            <Typography
              variant="h6"
              color="primary"
              style={{ fontWeight: "500" }}
            >
              2023 Teen Code Camp
            </Typography>
            <Typography variant="h1" className={classes.h1}>
              SUMMER BOOTCAMP
            </Typography>
            <Typography variant="p" className={classes.p}>
            Are you ready to ignite your child's passion for technology? Look no further than our exhilarating code camp! We invite you to join us this August for an unforgettable experience where your child will delve into the fascinating world of coding. Our program offers three exciting courses: Python, Web Design, and UX/UI. Each course is designed to empower students with valuable skills and knowledge while nurturing their creativity and problem-solving abilities. Don't miss this opportunity to discover the wonders of tech with us!
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#012A47",
                color: "white",
                width: "fit-content",
                padding: "0.7rem 4.5rem",
                fontSize: "1.6rem",
                textTransform: "none",
              }}
              onClick={() => {
                navigate("/summer-bootcamp");
              }}
            >
              Learn More
            </Button>
            <div className={classes.icons}>
              <div className={classes.icon}>
                <img
                  src="./Images/javascript-icon.png"
                  style={{ width: "50%" }}
                  alt=""
                />
              </div>
              <div className={classes.icon}>
                <img
                  src="./Images/figma-icon.png"
                  style={{ width: "40%" }}
                  alt=""
                />
              </div>
              <div className={classes.icon}>
                <img
                  src="./Images/python-icon.png"
                  style={{ width: "70%" }}
                  alt=""
                />
              </div>
              <div className={classes.icon}>
                <img
                  src="./Images/canva-icon.png"
                  style={{ width: "70%" }}
                  alt=""
                />
              </div>
            </div>
          </Grid>
          <Grid item md={5}>
            <Card
              style={{
                backgroundColor: "rgba(217, 217, 217, 1)",
                height: "100%",
                borderRadius: "2.5rem",
              }}
              elevation={0}
            >
              <img src="Images/summer-flyer.jpg" alt="" style={{objectFit: 'fill', height: '55vh', width: '35vw'}}/>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default SummerSection;
