import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/css/form.css"
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../../src/features/user'
import registerReducer  from '../../src/features/register';
import 'react-toastify/dist/ReactToastify.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import '../styles/loader.css'
import "../styles/lazyload.css"
const store=configureStore({
  reducer: {
    user: userReducer,
    register:registerReducer,
    }
})
export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider> 
}
