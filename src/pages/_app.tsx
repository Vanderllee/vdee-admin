import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProvider } from '../data/context/AppContext';
import { AuthProvider } from '../data/context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider loading={false}>
      <AppProvider>

        <Component {...pageProps} />

      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
