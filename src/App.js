import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './util/AuthRoute';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeObject from './util/theme';
import Navbar from './components/Navbar'
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import jwtDecode from 'jwt-decode';


const theme = createMuiTheme(themeObject);

//to decode the token install libary: npm install --save jwt-decode
let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login'
    authenticated = false;
  } 
  else {
    authenticated = true;
  } 
}

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
                <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
              </Switch>
            </div>
          </Router>
      </MuiThemeProvider>
    );
  }
}
export default App;