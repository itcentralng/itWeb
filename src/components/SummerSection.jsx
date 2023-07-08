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
              2023 Summer Bootcamp
            </Typography>
            <Typography variant="h1" className={classes.h1}>
              SUMMER BOOTCAMP
            </Typography>
            <Typography variant="p" className={classes.p}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
              impedit porro culpa nulla magnam quo alias praesentium, soluta at
              facilis totam voluptatibus similique. Esse qui itaque, veritatis
              soluta non aliquam! Unde quae quidem molestiae quo, placeat totam
              esse dolorem beatae eaque tempore quod aperiam est odio deleniti
              et natus omnis!
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
              {/* <img src="Images\IMG_20230111_161938.jpg" alt="" style={{objectFit: 'contain', height: '50vh', width: '50vw'}}/> */}
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default SummerSection;
