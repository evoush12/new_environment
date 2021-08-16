import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from '../Home'
import About from '../About'

const router = () => {
  return (
    <>
    <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />

    </Switch>
    </BrowserRouter>
    </>
  )
}

export default router
