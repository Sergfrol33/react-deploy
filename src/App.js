  import React, {useEffect} from 'react';
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import {Redirect, Switch, withRouter, Route, BrowserRouter} from "react-router-dom";
  import Login from "./components/Login/Login";
  import {connect, Provider} from "react-redux";
  import {compose} from "redux";
  import {initializeApp} from "./Redux/AppReducer";
  import {Preloader} from "./components/Common/Prealoder/Preloader";
  import store from "./Redux/ReduxStore";
  import {withSuspense} from "./hoc/withSuspense";
  import NavbarContainer from "./components/Navbar/NavbarContainer";
  import NewsContainer from "./components/News/NewsContainer";
  import Settings from "./components/Settings/Settings";
  const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
  const DialogueContainer = React.lazy(() => import("./components/Dialogues/DialogueContainer"));
  const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));


  const App = (props) => {
      useEffect(() =>{
        props.initializeApp();
      });
      if (!props.initialized){
          return <Preloader/>
      }
      return (
          <div className='app-wrapper'>
              {!props.auth ? null : <NavbarContainer/>}
              <div className='app-wrapper-content'>
                  <Switch>
                      <Route exact path='/'
                             render={()=> <Redirect to={'/profile'}/>}
                      />
                      <Route path='/dialogues'
                             render={withSuspense(DialogueContainer)}
                      />
                      <Route path='/profile/:userId?'
                             render={withSuspense(ProfileContainer)}
                      />
                      <Route path='/news' component={NewsContainer}/>

                      <Route exact path='/users'
                             render={withSuspense(UsersContainer)}
                      />
                      <Route path='/login'
                             render={() => <Login/>}
                      />
                      <Route path = '/settings' render = {() => <Settings/>}/>
                      <Route path='*'
                             render={() => <div>404 NOT FOUND</div>}
                      />
                  </Switch>
              </div>
          </div>

      );
  }

/*
  class App extends React.Component {
      catchAllUnhandledError = (promiseRejectionEvent) =>{
          alert('promiseRejectionEvent');
          console.error(promiseRejectionEvent);
      }
      componentDidMount() {
          this.props.initializeApp();
          window.addEventListener('unhandledrejection', this.catchAllUnhandledError)
      }
      componentWillUnmount() {
          window.removeEventListener('unhandledrejection', this.catchAllUnhandledError)
      }

      render() {
          if (!this.props.initialized){
              return <PreloaderForApp/>
          }

          return (

              <div className='app-wrapper'>
                  <Route
                      render={() => <HeaderContainer/>}
                  />
                  <Navbar/>
                  <div className='app-wrapper-content'>
                      <Switch>
                      <Route exact path='/'
                             render={()=> <Redirect to={'/profile'}/>}
                       />
                      <Route path='/dialogues'
                             render={withSuspense(DialogueContainer)}
                      />
                      <Route path='/profile/:userId?'
                             render={withSuspense(ProfileContainer)}
                      />
                      <Route path='/news' component={News}/>

                      <Route path='/users'
                             render={withSuspense(UsersContainer)}
                      />
                      <Route path='/login'
                             render={() => <Login/>}
                      />
                      <Route path='*'
                                 render={() => <div>404 NOT FOUND</div>}
                      />
                      </Switch>
                  </div>
              </div>

          );
      }
  }
*/

  const mapStateToProps = (state) =>({
      initialized: state.app.initialized,
      auth: state.auth.isAuth
  });

  let AppContainer = compose(
      withRouter,
      connect(mapStateToProps,{initializeApp}))(App);

  const MainApp = (props) => {
     return <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
              <AppContainer/>
          </Provider>
      </BrowserRouter>
  }

  export default MainApp;


