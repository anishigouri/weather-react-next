import { lightTheme } from '@/styles'
import { globalStyles } from '@/styles/globals'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{ light: lightTheme, dark: 'dark' }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
