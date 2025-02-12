import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    gold: {
      50: '#FFF9E5',
      100: '#FFE9B3',
      200: '#FFD980',
      300: '#FFC94D',
      400: '#FFB91A',
      500: '#E6A100',
      600: '#B37E00',
      700: '#805A00',
      800: '#4D3600',
      900: '#1A1200',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'whiteAlpha.900',
      },
    },
  },
  components: {
    Button: {
      variants: {
        gold: {
          bg: 'gold.400',
          color: 'gray.900',
          _hover: {
            bg: 'gold.500',
          },
        },
      },
    },
  },
});

export default theme;