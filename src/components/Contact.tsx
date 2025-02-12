import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Smartphone 
} from 'lucide-react';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <Box id="contact" py={24} bg="gray.900" color="white">
      <Container maxW="5xl">
        <VStack spacing={10} textAlign="center">
          {/* Header Section */}
          <VStack spacing={4}>
            <Heading size="2xl" fontWeight="bold">
              Let's Connect
              <Text as="span" color="gold.400">.</Text>
            </Heading>
            <Text color="whiteAlpha.700" fontSize="lg" maxW="3xl">
              Whether it's for collaboration, opportunities, or just a friendly chat—I'm happy to connect!
            </Text>
          </VStack>

          {/* Social Icons */}
          <HStack spacing={6}>
            <IconButton
              as="a"
              href="https://github.com/yourprofile"
              target="_blank"
              aria-label="GitHub"
              icon={<Github size={28} />}
              variant="ghost"
              _hover={{ color: 'gold.400', transform: 'scale(1.2)', transition: '0.3s' }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/aryanchowdhury"
              target="_blank"
              aria-label="LinkedIn"
              icon={<Linkedin size={28} />}
              variant="ghost"
              _hover={{ color: 'gold.400', transform: 'scale(1.2)', transition: '0.3s' }}
            />
            <IconButton
              as="a"
              href="https://x.com/aryankchowdhury"
              target="_blank"
              aria-label="Twitter"
              icon={<Twitter size={28} />}
              variant="ghost"
              _hover={{ color: 'gold.400', transform: 'scale(1.2)', transition: '0.3s' }}
            />
            <IconButton
              as="a"
              href="https://wa.me/7075395094"
              target="_blank"
              aria-label="WhatsApp"
              icon={<Smartphone size={28} />}
              variant="ghost"
              _hover={{ color: '#25D366', transform: 'scale(1.2)', transition: '0.3s' }}
            />
            <IconButton
              as="a"
              href="tel:7075395094"
              aria-label="Signal"
              icon={<MessageCircle size={28} />}
              variant="ghost"
              _hover={{ color: '#3A76F0', transform: 'scale(1.2)', transition: '0.3s' }}
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
