import { React } from 'react';
import aboutme from '../Data/aboutme.js';
import  '../css/Main.css';
const AboutMe = ()=> {
    
    return (<div className="container" style={{borderRadius:'10px'}}>
        
        <article>
        <h3>About Me</h3>
        <p>
           {aboutme.description}
        </p>
        </article>
    </div>);
}

export default AboutMe;