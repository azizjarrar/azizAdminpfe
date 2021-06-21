import React, { Component } from "react";
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Nav from "./components/nav";
import Nav1 from"./components/dashboard/layout/nav"
import Login from "./components/login.component";
import Register from "./components/register.component";

import Profile from "./components/profile.component";
import Sidebar from'./components/dashboard/layout/sidenav'

import UpdateMetierComponent from './components/dashboard/metier/UpdateMetierComponent'
import ListMetierComponent from '../src/components/dashboard/metier/ListMetierComponent';
import CreateMetierComponent from '../src/components/dashboard/metier/CreateMetierComponent';
import ViewMetierComponent from '../src/components/dashboard/metier/ViewMetierComponent';

import UpdateSpecialiteComponent from './components/dashboard/specialite/UpdateSpecialiteComponent'
import ListSpecialiteComponent from '../src/components/dashboard/specialite/ListSpecialiteComponent';
import CreateSpecialiteComponent from '../src/components/dashboard/specialite/CreateSpecialiteComponent';
import ViewSpecialiteComponent from '../src/components/dashboard/specialite/ViewSpecialiteComponent';

import UpdateFaculteComponent from './components/dashboard/faculte/UpdateFaculteComponent'
import ListFaculteComponent from '../src/components/dashboard/faculte/ListFaculteComponent';
import CreateFaculteComponent from '../src/components/dashboard/faculte/CreateFaculteComponent';
import ViewFaculteComponent from '../src/components/dashboard/faculte/ViewFaculteComponent';
import Chart from '../src/components/dashboard/chart/chart'

import Comments from '../src/components/dashboard/comments/comments'
import ListeEtudiant from '../src/components/dashboard/ListeEtudiant/ListeEtudiant'
class App extends Component {
  constructor(props) {
    super(props);


    this.state = {

      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,

      });
    }
  }


  
    
    
    render(){
      const { currentUser } = this.state;

      if(currentUser){
          return (
              <Router>
                  <div className="cont">
                  <Nav1 />
                  <Sidebar></Sidebar>                         

                  <Switch>
                          <Route exact path = "/" component = {Chart}></Route>
                          <Route exact path = "/metiers" component = {ListMetierComponent}></Route>
                          <Route exact path = "/add-metier/:id" component = {CreateMetierComponent}></Route>
                          <Route exact path = "/view-metier/:id" component = {ViewMetierComponent}></Route>
                          <Route exact path = "/metiers" component = {ListMetierComponent}></Route>
                          <Route exact path = "/update-metier/:id" component = {UpdateMetierComponent}></Route> 
                          
                          <Route exact path = "/specialites" component = {ListSpecialiteComponent}></Route>
                          <Route exact path = "/add-specialite/:id" component = {CreateSpecialiteComponent}></Route>
                          <Route exact path = "/view-specialite/:id" component = {ViewSpecialiteComponent}></Route>
                          <Route exact path = "/specialites" component = {ListSpecialiteComponent}></Route>
                          <Route exact path = "/update-specialite/:id" component = {UpdateSpecialiteComponent}></Route> 
                         
                          <Route exact path = "/facultes" component = {ListFaculteComponent}></Route>
                          <Route exact path = "/add-faculte/:id" component = {CreateFaculteComponent}></Route>
                          <Route exact path = "/view-faculte/:id" component = {ViewFaculteComponent}></Route>
                          <Route exact path = "/facultes" component = {ListFaculteComponent}></Route>
                          <Route exact path = "/update-faculte/:id" component = {UpdateFaculteComponent}></Route> 
                          <Route exact path =  "/Profile" component={Profile}></Route>
                          <Route exact path =  "/Comments" component={Comments}></Route>
                          <Route exact path =  "/listeEtudiant" component={ListeEtudiant}></Route>


                  </Switch>
                  
                  </div>
              </Router>
            )
      }
      else{
          return (
              <Router>
                  <Nav />
                  
                  <Switch>
                      <Route path="/login" exact component={Login}></Route>
                      <Route path="/signup" component={Register}></Route>
                  </Switch>
                  
             
              </Router>
            )
      }
          
    }
  }
export default App;