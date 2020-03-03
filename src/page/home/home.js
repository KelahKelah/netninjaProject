import React from 'react';
import Form from '../../components/form/form';
import Todo from '../../components/todo/todo';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation'
import './home.css'


const Home = () => {
    return(
        <div>
            <div className="flex-container">
                <div>
                    <Todo />
                </div>
            </div>
        </div>
    )
}
export default Home;