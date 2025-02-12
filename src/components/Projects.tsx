import { Box, Container, Grid, Heading, Text, VStack, Image, LinkBox, LinkOverlay, Divider } from '@chakra-ui/react';
import { FC } from 'react';

import ecomImage from '../images/premium_photo-1683288706157-9913483dffc8.png';
import taskImage from '../images/photo-1521931961826-fe48677230a5.png';
import socialMediaImage from '../images/photo-1519389950473-47ba0277781c.png';
import questionGenImage from '../images/premium_photo-1725985758416-618e34ef5616.png';
import workoutImage from '../images/photo-1434596922112-19c563067271.png';
import spamMLImage from '../images/premium_photo-1677094310956-7f88ae5f5c6b.png';

const Projects: FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform built with React and Node.js.',
      image: ecomImage,
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A productivity app helping teams organize and track their projects.',
      image: taskImage,
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management and monitoring.',
      image: socialMediaImage,
      link: '#',
    },
    {
      title: 'Questions Generator Based on Available Questions',
      description: 'Led a team to create an optimized question generator using APIs.',
      image: questionGenImage,
      link: '#',
    },
    {
      title: 'Workout Planner App (SPA with WPA)',
      description: 'Built a scalable full-stack exercise planner with 10,000+ user support.',
      image: workoutImage,
      link: '#',
    },
    {
      title: 'Machine Learning System for Spam Call & Mail Detection',
      description: 'Developed an ML-based spam detection system with 95% accuracy.',
      image: spamMLImage,
      link: '#',
    },
  ];

  const githubProjects = [
    {
      title: 'Spam Detection using Naive Bayes',
      link: 'https://github.com/aryanchowdhury-art/Spam-detection-using-naive-Bayes-classifiers',
    },
    {
      title: 'Python IDE & CMD Framework',
      link: 'https://github.com/aryanchowdhury-art/simple-framework-which-consist-of-python-ide-and-cmd-line',
    },
    {
      title: 'Notepad using Tkinter',
      link: 'https://github.com/aryanchowdhury-art/notepad_using_tkinter',
    },
    {
      title: 'Chatbot using TensorFlow',
      link: 'https://github.com/aryanchowdhury-art/chatbot-using-tensorflow',
    },
    {
      title: 'Neural Network using PyTorch',
      link: 'https://github.com/aryanchowdhury-art/neural-network-using-pytrorch',
    },
    {
      title: 'Plant Guessing using Keras & TensorFlow',
      link: 'https://github.com/aryanchowdhury-art/plant-guessing-using-keras-and-tensorflow',
    },
    {
      title: 'Image Classification & Object Detection',
      link: 'https://github.com/aryanchowdhury-art/-Image-Classification-and-Object-Detection-using-Convolutional-Neural-Networks',
    },
    {
      title: 'Face Detection with Age Estimation',
      link: 'https://github.com/aryanchowdhury-art/face-detection-with-age',
    },
  ];

  return (
    <Box id="projects" py={20} bg="gray.900">
      <Container maxW="7xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">
              My Projects<Text as="span" color="gold.400">.</Text>
            </Heading>
            <Text color="whiteAlpha.800" maxW="2xl">
              Here are some of my recent projects showcasing my expertise in web development and design.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
            {projects.map((project, index) => (
              <LinkBox
                key={index}
                as="article"
                overflow="hidden"
                borderRadius="xl"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                _hover={{ borderColor: 'gold.400', transform: 'translateY(-4px)' }}
                transition="all 0.3s"
              >
                <Image src={project.image} alt={project.title} w="full" h="200px" objectFit="cover" />
                <VStack p={6} align="start" spacing={3}>
                  <LinkOverlay href={project.link} isExternal>
                    <Heading size="md">{project.title}</Heading>
                  </LinkOverlay>
                  <Text color="whiteAlpha.800">{project.description}</Text>
                </VStack>
              </LinkBox>
            ))}
          </Grid>

          <Divider borderColor="whiteAlpha.400" my={10} />
          
          <VStack spacing={4} textAlign="center">
            <Heading size="lg">GitHub Available Projects</Heading>
            <Text color="whiteAlpha.800">Explore more of my open-source projects on GitHub.</Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {githubProjects.map((project, index) => (
              <LinkBox
                key={index}
                p={4}
                borderRadius="md"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                _hover={{ borderColor: 'gold.400', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <LinkOverlay href={project.link} isExternal>
                  <Text fontSize="lg" fontWeight="bold" color="gold.400">{project.title}</Text>
                </LinkOverlay>
              </LinkBox>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
