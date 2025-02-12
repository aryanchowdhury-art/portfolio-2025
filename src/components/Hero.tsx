import { 
  Heading, 
  Text, 
  useBreakpointValue, 
  ResponsiveValue, 
  Box, 
  Container, 
  VStack, 
  Button 
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { motion, Transition } from 'framer-motion';

const Hero: React.FC = () => {
  const textAlign: ResponsiveValue<React.CSSProperties['textAlign']> | undefined = useBreakpointValue({ base: 'center', md: 'left' });

  return (
    <Box
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, black, gray.900)"
      position="relative"
      overflow="hidden"
      pt={20}
    >
      {/* Subtle Floating Light Effect */}
      <Box 
        position="absolute" 
        top="10%" 
        left="50%" 
        transform="translateX(-50%)" 
        width="200px" 
        height="200px" 
        bg="gold.300" 
        filter="blur(100px)" 
        opacity={0.2} 
      />

      <Container maxW="7xl">
        <VStack 
          align={['center', 'center', 'flex-start']} 
          spacing={6} 
          w="full" 
          maxW="2xl"
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 } as Transition}
        >
          <Text color="gold.400" fontWeight="semibold" fontSize="xl">
            Welcome to my world
          </Text>
          
          <Heading
            as={motion.h1}
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            textAlign={textAlign}
            lineHeight="1.2"
            color="white"
          >
            Hi, I'm{' '}
            <Text as="span" color="gold.400">
              Aryan Chowdhury.
            </Text>
          </Heading>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="whiteAlpha.800"
            textAlign={textAlign}
            maxW="xl"
            as={motion.p}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full-stack developer crafting high-performance, elegant web experiences.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="yellow"
            size="lg"
            fontSize="lg"
            px={8}
            py={6}
            as={motion.button}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)" }}
            transition="0.3s"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's work together
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
