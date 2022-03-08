import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up';
import Error from './components/Error';
import Header from './components/Header';
import {auth } from './firebase/Utils';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });

        console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignInAndSignUpPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    );
  }
}
     
     

export default App;

/* function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignInAndSignUpPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
} */

