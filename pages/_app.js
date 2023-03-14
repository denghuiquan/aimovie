// import '@/styles/globals.css'
// pages/_app.js
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
// 这个的意义感觉不大，chakra-ui已经帮我们默认预设就是这个theme了
import theme from '@chakra-ui/theme'

theme.styles.global['*'] = { fontSize: '12px' }
// 除非希望修改默认颜色模式
theme.config.initialColorMode = 'dark'
// theme.config.useSystemColorMode = true

function App ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
