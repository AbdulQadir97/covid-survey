import React from 'react'
import { Link } from 'react-router-dom';
import CreateForm from '../components/CreateForm';

const Home = () => {
    return (
        <div>
          <h1>Covid-Survey App</h1>
          <CreateForm/>
        </div>
    )
}
export default Home;
