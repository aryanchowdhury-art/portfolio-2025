import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;