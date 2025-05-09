import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import HiImage from "../assets/images/Carrots.jpg";
import CustomButton from "../Buttons/CustomButton";
import Akhil1 from '../assets/myImages/Akhil.jpg'
import Akhil2 from '../assets/myImages/IMG_20240130_140711.jpg'
import Akhil3 from '../assets/myImages//IMG_20250117_154300.jpg'
import Akhil4 from '../assets/myImages/IMG_20250117_170358.jpg'

const HeroSection = styled(Box)({
  textAlign: "center",
  padding: "80px 20px",
  backgroundColor: "#f8f9fa",
});

const TeamCard = ({ name, role, img }) => (
  <Card sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
    <Avatar src={img} sx={{ width: 100, height: 100, margin: "auto" }} />
    <CardContent>
      <Typography variant="h6" fontWeight={600}>{name}</Typography>
      <Typography variant="body2" color="text.secondary">{role}</Typography>
    </CardContent>
  </Card>
);

const About = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "About Us - Terminal Wizard";
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h3" fontWeight={700}>About Us</Typography>
        <Typography variant="subtitle1" color="text.secondary">Who we are & what we do</Typography>
      </HeroSection>

      {/* Our Story */}
      <Box sx={{ textAlign: "center", py: 5, px: 3 }}>
        <Typography variant="h4" fontWeight={600}>Our Story</Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mt: 2 }}>
          We are a creative agency with a passion for design and innovation. Our team is dedicated to delivering high-quality work that speaks for itself.
        </Typography>
        <Box component="img" src={HiImage} sx={{ width: "100%", maxWidth: 500, mt: 3 }} />
      </Box>

      {/* Team Section */}
      <Box sx={{ textAlign: "center", py: 5, px: 3 }}>
        <Typography variant="h4" fontWeight={600}>All Members</Typography>
        <Grid container spacing={3} sx={{ mt: 3, justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={3}><TeamCard name="Akhil John" role="Designer" img={Akhil1} /></Grid>
          <Grid item xs={12} sm={6} md={3}><TeamCard name="Akhil John" role="Developer" img={Akhil2} /></Grid>
          <Grid item xs={12} sm={6} md={3}><TeamCard name="Akhil John" role="Photographer" img={Akhil3} /></Grid>
          <Grid item xs={12} sm={6} md={3}><TeamCard name="Akhil John" role="Marketer" img={Akhil4} /></Grid>
        </Grid>
      </Box>

      {/* Join Us Section */}
      <Box sx={{ textAlign: "center", py: 5, px: 3, backgroundColor: "#f1f1f1" }}>
        <Typography variant="h5" fontWeight={600}>Do you want to be a part of our team?</Typography>
        <CustomButton variant="contained" sx={{ mt: 2, backgroundColor: "#ffcc00" }}>Join Now</CustomButton>
      </Box>

      {/* Statistics Section with CountUp */}
      <Box ref={ref} sx={{ py: 5, px: 3, textAlign: "center" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h4" fontWeight={700}>
                {inView && <CountUp start={0} end={50} duration={2} />}
              </Typography>
              <Typography variant="body2">Projects Completed</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h4" fontWeight={700}>
                {inView && <CountUp start={0} end={30} duration={2} />}
              </Typography>
              <Typography variant="body2">Happy Clients</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h4" fontWeight={700}>
                {inView && <CountUp start={0} end={200} duration={2} />}
              </Typography>
              <Typography variant="body2">Cups of Coffee</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;