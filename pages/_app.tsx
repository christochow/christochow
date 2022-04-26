import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
  typography: {
    fontFamily: '"Courier New",Courier,monospace',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "rgb(158, 166, 175)",
          backgroundColor: "transaprent",
        }
      }
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
