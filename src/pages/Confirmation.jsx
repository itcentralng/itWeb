import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    confirmation: {
      // paddingTop: "10rem",
      display: "flex",
      alignItems: "center",
      height: "100vh",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "10rem",
        height: "120vh",
      },
    },
    icon: {
      height: "4.5rem",
      width: "4.5rem",
      borderRadius: "50%",
      backgroundColor: "#0070C029",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    gridContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column-reverse",
      },
    },
    moreInfo: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
  };
});
function Confirmation() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <main className={classes.confirmation}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item md={6} sm={12}>
            <div
              style={{ display: "flex", gap: "2rem", flexDirection: "column" }}
            >
              <Typography variant="h2">
                Thank You! <br /> your payment is confirmed.
              </Typography>
              <Typography variant="body1">
                You will receive your confirmation email soon <br /> with your
                confirmation details.
              </Typography>
            </div>
            <Grid container spacing={3} style={{ padding: "5rem 0rem" }}>
              <Grid item md={6} sm={12} className={classes.moreInfo}>
                <div className={classes.icon}>
                  <img src="./Images/pin.png" alt="" width="40%" />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "rgba(0,0,0,.3)",
                    }}
                  >
                    Office / BootCamp Address
                  </Typography>
                  <Typography variant="body2">
                    44A Isa Kaita Road, Kaduna, Nigeria
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.moreInfo}>
                <div className={classes.icon}>
                  <img src="./Images/telephone.png" alt="" width="40%" />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "rgba(0,0,0,.3)",
                    }}
                  >
                    Phone Number
                  </Typography>
                  <Typography variant="body2">(234) 808 888 5123</Typography>
                </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.moreInfo}>
                <div className={classes.icon}>
                  <img src="./Images/calendar.png" alt="" width="40%" />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "rgba(0,0,0,.3)",
                    }}
                  >
                    Start Date
                  </Typography>
                  <Typography variant="body2">1st August 2023</Typography>
                </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.moreInfo}>
                <div className={classes.icon}>
                  <img src="./Images/calendar.png" alt="" width="40%" />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "rgba(0,0,0,.3)",
                    }}
                  >
                    End Date
                  </Typography>
                  <Typography variant="body2">31st August 2023</Typography>
                </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.moreInfo}>
                <div className={classes.icon}>
                  <img src="./Images/clock.png" alt="" width="40%" />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "rgba(0,0,0,.3)",
                    }}
                  >
                    Start by
                  </Typography>
                  <Typography variant="body2">9:00AM(Mon-Fri)</Typography>
                </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.moreInfo}>
                <div className={classes.icon}>
                  <img src="./Images/clock.png" alt="" width="40%" />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "rgba(0,0,0,.3)",
                    }}
                  >
                    End by
                  </Typography>
                  <Typography variant="body2">4:00PM (Mon-Fri)</Typography>
                </div>
              </Grid>
            </Grid>
            <Grid
              item
              md={10}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#012A47",
                  color: "white",
                  width: "fit-content",
                  padding: "0.7rem 4.5rem",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  textTransform: "none",
                  height: "fit-content",
                  margin: "0 auto",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                GO BACK TO OUR WEBSITE
              </Button>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img src="./Images/confirmation.gif" width="100%" alt="" />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default Confirmation;
