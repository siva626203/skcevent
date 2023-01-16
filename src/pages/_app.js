import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/css/form.css"
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../../src/features/user'
import registerReducer  from '../../src/features/register';
const store=configureStore({
  reducer: {
    user: userReducer,
    register:registerReducer,
    }
})
export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider> 
}
