import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Box, Grid } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import backgroundImage from '../assets/back1.jpg'; // Ensure this path is correct

const theme = createTheme({
  palette: {
    primary: {
      main: '#00c853', // Color for the timeline dot and connectors
    },
    text: {
      primary: '#ffffff', // Text color
    },
  },
});

const milestones = [
  { date: 'Dec 2016', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Feb 2017', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Aug 2017', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Nov 2017', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Feb 2018', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Mar 2018', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Sep 2018', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Oct 2018', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  { date: 'Sep 2018', description: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },

];

const Roadmap = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          color: '#fff',
          minHeight: '100vh',
          padding: '40px',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
          Roadmap
        </Typography>
        <Typography variant="h6" component="h2" sx={{ marginBottom: '40px' }}>
          Our Strategy and Project Plan
        </Typography>
        <Grid container spacing={4}>
          {milestones.map((milestone, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" sx={{ transform: inView ? 'scale(1.2)' : 'scale(1)' }}>
                      <CheckCircleOutline />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                    <Box sx={{ padding: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                      <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                        {milestone.date}
                      </Typography>
                      <Typography variant="body2">{milestone.description}</Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Roadmap;
