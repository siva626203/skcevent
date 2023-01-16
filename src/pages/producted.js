import {BrowserRouter as Navigate, Route } from 'react-router-dom'
const PrivateRoutes = (element,...rest) => {
  let Rendercomponent=element;
return (
    <Route {...rest}
    render={props=>{
      return true ? (
        <Rendercomponent {...props}/>
      ):(
        <Navigate
        to={{pathname:'/login'}}/>
      ) 
    }}
    />
  )
}
export default PrivateRoutes;