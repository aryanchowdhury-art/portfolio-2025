import { Box, Container, Text, VStack } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box 
      py={8} 
      bg="gray.900" 
      borderTop="1px solid" 
      borderColor="whiteAlpha.300"
      textAlign="center"
    >
      <Container maxW="7xl">
        <VStack spacing={3}>
          <Text fontSize="lg" color="whiteAlpha.700">
            Crafted with ❤️ by{' '}
            <Text as="span" color="gold.400" fontWeight="bold" _hover={{ textShadow: '0 0 10px gold' }}>
              Aryan Kumar Chowdhury
            </Text>
          </Text>
          <Text fontSize="sm" color="whiteAlpha.500">
            © {new Date().getFullYear()} All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
