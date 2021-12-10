import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const isLogin = localStorage.getItem('isLogin')
  console.log(`isLogin`, isLogin)
  console.log(`props-PrivateRoute`, props)
  return (
    <>
    
      {isLogin ? <Route exact component={props.component} path={props.path} /> : <Redirect to='/' />}
    
    </>
  )
}

export default PrivateRoute
