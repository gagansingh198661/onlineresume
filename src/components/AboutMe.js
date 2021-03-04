import { React } from 'react';
import aboutme from '../Data/aboutme.js'

const AboutMe = ()=> {
    
    return (<div>
        
        <article>
        <h3>About Me</h3>
        <p>
           {aboutme.description}
        </p>
        </article>
    </div>);
}

export default AboutMe;