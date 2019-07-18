import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header'
import PostList from './components/PostList'
import Post from './components/Post'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={ PostList } />
        <Route path="/:id" component={ Post } />
      </div>
    </Router>
  );
}

export default App;
