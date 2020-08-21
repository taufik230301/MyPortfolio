import React from 'react';
import Jumbotron1 from '../Jumbotron/Jumbotron';
import Article from '../Media/Article';
import Article1 from '../Media/Article1';
import Footer from '../Footer/Footer';
import './Home.css';

class Home extends React.Component{
    render(){
        return (
            <div className="Home">
                <Jumbotron1/>
                <Article/>
                <Article1/>
                <Footer/>
            </div>
        )
    }
}

export default Home;