import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useLoading } from '../LoadingContext';
import SciencePic from '../assets/images/science.jpg'
import SportsPic from '../assets/images/sports.jpg'
import ArtPic from '../assets/images/art.jpg'
import CulturalPic from '../assets/images/cultural.jpg'
import TechPic from '../assets/images/tech.jpg'

const Events = () => {
  const { loading, setLoading } = useLoading();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating a delay for loading
    return () => clearTimeout(timer);
  }, [setLoading]);



  const eventsData = [
    {
      id: 1,
      name: 'Science Fair',
      date: '2023-04-15',
      organizer: 'Science Department',
      details: 'A showcase of student projects and experiments.',
      image: SciencePic,
    },
    {
      id: 2,
      name: 'Sports Day',
      date: '2023-05-20',
      organizer: 'Sports Committee',
      details: 'Annual sports event with various games and competitions.',
      image: SportsPic,
    },
    {
      id: 3,
      name: 'Cultural Fest',
      date: '2023-06-10',
      organizer: 'Cultural Club',
      details: 'A celebration of cultural diversity with performances.',
      image: CulturalPic,
    },
    {
      id: 4,
      name: 'Art Exhibition',
      date: '2023-07-05',
      organizer: 'Art Department',
      details: 'Display of students’ artwork and creative projects.',
      image: ArtPic,
    },
    {
      id: 5,
      name: 'Tech Symposium',
      date: '2023-08-18',
      organizer: 'IT Department',
      details: 'Seminars and workshops on the latest in technology.',
      image: TechPic,
    },
  ];

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return null; // Prevent rendering if loading

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Events
      </Typography>

      <TextField
        label="Search Events"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card sx={{ backgroundColor: '#f0f4ff', boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>{event.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {event.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Organizer: {event.organizer}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {event.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Events;
