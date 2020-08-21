import React from 'react';
import { Media, Button} from 'reactstrap';
import './Article.css';
import cv from '../Image/CV.jpg'


const Article = () => {
    return (
        <Media className="media1">
            <Media body className="capt">
                    <Media left href="#">
                        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={cv} />
                    </Media>
                    <Media heading>
                    Curriculum Vitae
        </Media>
        Ini adalah CV saya berisi riwayat hidup dan pengalaman saya, saya memiliki beberapa keahlian dan Hobby.
        <br/>
        <Button color="primary">Download</Button>
      </Media>
     </Media>
        

        
        
    );
};

export default Article;