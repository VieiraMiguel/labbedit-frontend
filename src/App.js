import { Router } from "./routes";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles'

const App = () => {

  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  )
}

export default App