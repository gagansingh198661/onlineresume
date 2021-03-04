import { React } from 'react';
import AboutMe from './AboutMe'
import Summary from './Summary'
import PhotoAndContactInformation from './PhotoAndContactInformation'


const Resume = ()=> {
    
    return (<div>
        <PhotoAndContactInformation></PhotoAndContactInformation>
        <Summary></Summary>
        <AboutMe></AboutMe>
    </div>);
}

export default Resume

