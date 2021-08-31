import React from 'react'
import Header from "./components/Header"
import "./App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import Post from "./pages/Post"

const App = () => {
  return (
    <Router > {/* basename="/clarusway"  forceRefresh */}
      
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/about" component= {About} />
        <Route path="/profile" component= {Profile} />
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={Post} />
        <Route component ={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
