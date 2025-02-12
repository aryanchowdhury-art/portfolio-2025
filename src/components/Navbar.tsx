import { 
  Box, Flex, Button, useDisclosure, IconButton, Stack, Link, VStack, ScaleFade 
} from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import { FC } from 'react';

const Navbar: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="100%" 
      zIndex={50} 
      backdropFilter="blur(15px)" 
      bg="rgba(18, 18, 18, 0.5)" 
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto" px={6}>
        {/* Logo */}
        <Link 
          href="#" 
          fontSize="2xl" 
          fontWeight="bold" 
          color="gold.300"
          textShadow="0px 0px 8px rgba(255, 215, 0, 0.7)"
          _hover={{ color: "gold.500" }}
        >
          Aryan's Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <X size={28} /> : <Menu size={28} />}
          variant="ghost"
          color="gold.300"
          _hover={{ bg: "gray.700" }}
          aria-label="Toggle Navigation"
        />

        {/* Desktop Navigation */}
        <Stack 
          direction="row" 
          display={{ base: "none", md: "flex" }} 
          spacing={8} 
          alignItems="center"
        >
          {["About", "Projects", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              fontSize="lg" 
              fontWeight="medium" 
              color="whiteAlpha.800" 
              transition="all 0.3s"
              _hover={{ color: "gold.300", transform: "scale(1.1)" }}
            >
              {item}
            </Link>
          ))}
        </Stack>
      </Flex>

      {/* Animated Mobile Menu (Dropdown) */}
      <ScaleFade in={isOpen} initialScale={0.9}>
        <Box 
          position="absolute" 
          top="100%" 
          right="1rem"
          w="220px"
          bg="rgba(18, 18, 18, 0.85)"
          backdropFilter="blur(15px)"
          border="1px solid rgba(255, 255, 255, 0.2)"
          boxShadow="0px 4px 12px rgba(255, 215, 0, 0.5)"
          borderRadius="lg"
          p={4}
          zIndex={50}
        >
          <VStack spacing={4} align="stretch">
            {["About", "Projects", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                fontSize="lg" 
                fontWeight="medium"
                color="gold.300"
                textAlign="center"
                _hover={{ color: "gold.500", transform: "scale(1.05)" }}
                transition="all 0.3s"
                onClick={onToggle} /* Close menu on click */
              >
                {item}
              </Link>
            ))}
            {/* Call-to-Action Button */}
            <Button 
              w="full"
              colorScheme="yellow"
              variant="solid"
              fontWeight="bold"
              _hover={{ bg: "gold.500", transform: "scale(1.05)" }}
              transition="all 0.3s"
            >
              Let's Work Together
            </Button>
          </VStack>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default Navbar;
