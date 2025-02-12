import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <Box id="contact" py={20} bg="gray.800">
      <Container maxW="7xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">
              Get in Touch
              <Text as="span" color="gold.400">.</Text>
            </Heading>
            <Text color="whiteAlpha.800" maxW="2xl">
              Let's connect! Reach out through any of the platforms below.
            </Text>
          </VStack>

          <HStack spacing={6}>
            <IconButton
              as="a"
              href="https://github.com/yourprofile"
              target="_blank"
              aria-label="GitHub"
              icon={<Github />}
              variant="ghost"
              fontSize="24px"
              _hover={{ color: 'gold.400' }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/aryanchowdhury"
              target="_blank"
              aria-label="LinkedIn"
              icon={<Linkedin />}
              variant="ghost"
              fontSize="24px"
              _hover={{ color: 'gold.400' }}
            />
            <IconButton
              as="a"
              href="https://x.com/aryankchowdhury"
              target="_blank"
              aria-label="Twitter"
              icon={<Twitter />}
              variant="ghost"
              fontSize="24px"
              _hover={{ color: 'gold.400' }}
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
