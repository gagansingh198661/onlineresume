import { React } from 'react';
import AboutMe from './AboutMe'
import Summary from './Summary'
import PhotoAndContactInformation from './PhotoAndContactInformation'
import '../css/Main.css';


const Resume = ()=> {
    
    return (<div className="" style={{marginLeft:'10%',marginRight:'10%'}}>
        <PhotoAndContactInformation className="container"></PhotoAndContactInformation>
        <Summary></Summary>
        <AboutMe></AboutMe>
    </div>);
}

export default Resume

