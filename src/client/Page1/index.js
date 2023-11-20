import React from 'react';
import { Link } from "react-router-dom";

import Counter from './components/Counter';
import Posts from './components/Posts';
import AddPostsForm from './components/AddPostsForm';

import './style.scss';

const App = () => (
  <div className="test">
    ciao
    <div className="test__2">ciao</div>
    <div><Link to={'/giorno'}>aaa</Link></div>
    <Counter />
    <AddPostsForm />
    <Posts />
  </div>
);

export default App;
