import { Box, Flex, Button, useDisclosure, IconButton, Stack, Link, Slide, VStack } from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import { FC } from 'react';

const Navbar: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="100%" 
      zIndex={20} 
      backdropFilter="blur(12px)" 
      bg="rgba(18, 18, 18, 0.6)" /* Glass effect */
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto" px={6}>
        {/* Logo */}
        <Link 
          href="#" 
          fontSize="2xl" 
          fontWeight="bold" 
          color="gold.400"
          _hover={{ color: "gold.300" }}
        >
          Aryan's Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <X /> : <Menu />}
          variant="ghost"
          color="gold.400"
          _hover={{ bg: "gray.800" }}
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
              _hover={{ color: "gold.400" }}
            >
              {item}
            </Link>
          ))}
        </Stack>
      </Flex>

      {/* Mobile Menu */}
      <Slide direction="top" in={isOpen} style={{ zIndex: 15 }}>
        <Box 
          display={{ base: isOpen ? "block" : "none", md: "none" }} 
          bg="rgba(18, 18, 18, 0.85)" /* Glass effect */
          backdropFilter="blur(12px)"
          pb={4}
        >
          <VStack spacing={4}>
            {["About", "Projects", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                fontSize="lg" 
                color="whiteAlpha.800" 
                _hover={{ color: "gold.400" }}
              >
                {item}
              </Link>
            ))}
            <Button 
              w="full" 
              variant="outline" 
              borderColor="gold.400"
              color="gold.400"
              _hover={{ bg: "gold.400", color: "black" }}
            >
            </Button>
          </VStack>
        </Box>
      </Slide>
    </Box>
  );
};

export default Navbar;
