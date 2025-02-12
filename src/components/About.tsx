import { Box, Container, Heading, Text, VStack, Icon, SimpleGrid, List, ListItem, Flex, Progress } from '@chakra-ui/react';
import { Code, Server, Brain, Database, Github as Git, Award, Layout, Zap } from 'lucide-react';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

const About: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, years: 4 },
        { name: 'Java', level: 90, years: 3 },
        { name: 'TypeScript', level: 92, years: 3 },
        { name: 'JavaScript', level: 95, years: 4 },
        { name: 'C++', level: 85, years: 2 },
      ],
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: [
        { name: 'React (Hooks)', level: 95, years: 3 },
        { name: 'Angular', level: 88, years: 2 },
        { name: 'Next.js', level: 85, years: 1 },
        { name: 'Three.js', level: 80, years: 1 },
        { name: 'HTML/CSS/SCSS', level: 95, years: 4 },
        { name: 'Pug', level: 85, years: 2 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 92, years: 3 },
        { name: 'Express.js', level: 90, years: 3 },
        { name: 'MongoDB', level: 88, years: 2 },
        { name: 'RESTful APIs', level: 95, years: 3 },
        { name: 'Django', level: 85, years: 2 },
        { name: 'Flask', level: 88, years: 2 },
      ],
    },
    {
      icon: Database,
      title: 'Database & API',
      skills: [
        { name: 'SQL', level: 90, years: 3 },
        { name: 'NoSQL (MongoDB)', level: 88, years: 2 },
        { name: 'RESTful API', level: 95, years: 3 },
        { name: 'JWT Auth', level: 92, years: 2 },
        { name: 'HTTP/CRUD', level: 95, years: 3 },
      ],
    },
    {
      icon: Brain,
      title: 'ML & AI',
      skills: [
        { name: 'TensorFlow', level: 88, years: 2 },
        { name: 'Sklearn', level: 90, years: 2 },
        { name: 'PySpark', level: 85, years: 1 },
        { name: 'Hadoop', level: 82, years: 1 },
        { name: 'Hugging Face', level: 85, years: 1 },
      ],
    },
    {
      icon: Git,
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 95, years: 4 },
        { name: 'npm', level: 92, years: 3 },
        { name: 'Docker', level: 85, years: 1 },
        { name: 'Postman', level: 90, years: 3 },
        { name: 'Excel', level: 88, years: 3 },
        { name: 'Tableau', level: 85, years: 2 },
      ],
    },
  ];

  const projects = [
    {
      icon: Layout,
      title: 'AryanApp - Offline Video Player',
      description: 'Mobile application for offline video playback with scroll-based video switching.',
      tech: 'React Native, Node.js, MongoDB',
    },
    {
      icon: Brain,
      title: 'AI-Powered Question Generator',
      description: 'Led team development of API-based question generator, improving response time by 30%.',
      tech: 'JavaScript, RESTful API, Postman',
    },
    {
      icon: Zap,
      title: 'Workout Planner App',
      description: 'Full-stack exercise planning app handling 10,000+ users with minimal downtime.',
      tech: 'Python, Django, React, Express, TensorFlow',
    },
    {
      icon: Server,
      title: 'Spam Detection System',
      description: 'ML system achieving 95% accuracy in detecting spam calls and emails.',
      tech: 'Python, TensorFlow, Sklearn, React',
    },
  ];

  const achievements = [
    'Best Project Award in AI & ML for Spam Detection System',
    'Developed scalable Workout Planner handling 10,000+ users',
    'Led and mentored team for Questions Generator project',
    'Advanced expertise in GPU Coding (CUDA)',
    'Custom Operating System Development experience',
  ];

  return (
    <Box id="about" py={20} bg="gray.800" position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="-50%"
        left="-20%"
        width="140%"
        height="200%"
        transform="rotate(-12deg)"
        bg="radial-gradient(ellipse at center, rgba(255,185,26,0.03) 0%, transparent 70%)"
        pointerEvents="none"
      />
      
      <Container maxW="7xl" position="relative">
        <VStack spacing={20} ref={ref}>
          <VStack
            spacing={6}
            textAlign="center"
            opacity={inView ? 1 : 0}
            transform={inView ? 'translateY(0)' : 'translateY(20px)'}
            transition="all 1s ease-out"
          >
            <Heading
              size="2xl"
              bgGradient="linear(to-r, gold.400, gold.300)"
              bgClip="text"
              letterSpacing="tight"
            >
              About Me
              <Text as="span" color="gold.400">.</Text>
            </Heading>
            <Text color="whiteAlpha.900" maxW="2xl" fontSize="lg" lineHeight="tall">
              I'm a versatile full-stack developer with expertise in AI/ML, specializing in building scalable applications
              that deliver exceptional user experiences. My passion lies in creating innovative solutions using cutting-edge technologies.
            </Text>
          </VStack>

          <VStack spacing={12} w="full">
            <Heading
              size="xl"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'gold.400',
                borderRadius: 'full',
              }}
            >
              Technical Expertise
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
              {skillCategories.map((category, index) => (
                <Box
                  key={index}
                  p={8}
                  bg="gray.900"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  position="relative"
                  transition="all 0.3s"
                  opacity={inView ? 1 : 0}
                  transform={inView ? 'translateY(0)' : 'translateY(20px)'}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  _hover={{
                    transform: 'translateY(-4px)',
                    borderColor: 'gold.400',
                    boxShadow: '0 4px 20px rgba(255,185,26,0.1)',
                    _after: {
                      opacity: 1,
                    },
                  }}
                >
                  <VStack align="start" spacing={6} position="relative" zIndex={1}>
                    <Flex align="center" gap={4}>
                      <Flex
                        align="center"
                        justify="center"
                        w={14}
                        h={14}
                        borderRadius="xl"
                        bg="rgba(255,185,26,0.1)"
                      >
                        <Icon as={category.icon} boxSize={7} color="gold.400" />
                      </Flex>
                      <Heading size="lg" color="gold.400">{category.title}</Heading>
                    </Flex>
                    <List spacing={4} w="full">
                      {category.skills.map((skill, skillIndex) => (
                        <ListItem
                          key={skillIndex}
                          color="whiteAlpha.900"
                        >
                          <Flex direction="column" gap={2}>
                            <Flex justify="space-between" align="center">
                              <Flex align="center" gap={2}>
                                <Text fontWeight="medium">{skill.name}</Text>
                                <Text color="gold.400" fontSize="sm">
                                  {skill.years} {skill.years === 1 ? 'year' : 'years'}
                                </Text>
                              </Flex>
                              <Text color="gold.400" fontWeight="bold">{skill.level}%</Text>
                            </Flex>
                            <Box position="relative">
                              <Progress
                                value={inView ? skill.level : 0}
                                size="sm"
                                colorScheme="gold"
                                borderRadius="full"
                                bg="whiteAlpha.100"
                                transition="all 1s ease-out"
                                transitionDelay={`${skillIndex * 0.1}s`}
                                isAnimated
                                hasStripe
                              />
                              <Box
                                position="absolute"
                                top="50%"
                                left={`${skill.level}%`}
                                transform="translate(-50%, -50%)"
                                width="3px"
                                height="12px"
                                bg="gold.400"
                                borderRadius="full"
                                opacity={0.5}
                              />
                            </Box>
                          </Flex>
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          <VStack spacing={12} w="full">
            <Heading
              size="xl"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'gold.400',
                borderRadius: 'full',
              }}
            >
              Featured Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {projects.map((project, index) => (
                <Box
                  key={index}
                  p={6}
                  bg="gray.900"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  position="relative"
                  transition="all 0.3s"
                  opacity={inView ? 1 : 0}
                  transform={inView ? 'translateY(0)' : 'translateY(20px)'}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  _hover={{
                    transform: 'translateY(-4px)',
                    borderColor: 'gold.400',
                    boxShadow: '0 4px 20px rgba(255,185,26,0.1)',
                    _after: {
                      opacity: 1,
                    },
                  }}
                >
                  <VStack align="start" spacing={4} position="relative" zIndex={1}>
                    <Flex
                      align="center"
                      justify="center"
                      w={12}
                      h={12}
                      borderRadius="xl"
                      bg="rgba(255,185,26,0.1)"
                    >
                      <Icon as={project.icon} boxSize={6} color="gold.400" />
                    </Flex>
                    <Heading size="md" color="gold.400">{project.title}</Heading>
                    <Text color="whiteAlpha.900">{project.description}</Text>
                    <Text color="whiteAlpha.700" fontSize="sm" fontFamily="mono">
                      {project.tech}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          <VStack spacing={12} w="full">
            <Heading
              size="xl"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'gold.400',
                borderRadius: 'full',
              }}
            >
              Key Achievements
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {achievements.map((achievement, index) => (
                <Box
                  key={index}
                  p={6}
                  bg="gray.900"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  position="relative"
                  transition="all 0.3s"
                  opacity={inView ? 1 : 0}
                  transform={inView ? 'translateY(0)' : 'translateY(20px)'}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  _hover={{
                    transform: 'translateY(-4px)',
                    borderColor: 'gold.400',
                    boxShadow: '0 4px 20px rgba(255,185,26,0.1)',
                    _after: {
                      opacity: 1,
                    },
                  }}
                >
                  <Flex gap={4} position="relative" zIndex={1}>
                    <Flex
                      align="center"
                      justify="center"
                      w={10}
                      h={10}
                      borderRadius="lg"
                      bg="rgba(255,185,26,0.1)"
                      flexShrink={0}
                    >
                      <Icon as={Award} color="gold.400" boxSize={5} />
                    </Flex>
                    <Text color="whiteAlpha.900" fontSize="lg">{achievement}</Text>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;