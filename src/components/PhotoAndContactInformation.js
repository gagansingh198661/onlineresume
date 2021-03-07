import  { React } from 'react';
import profile_pic from '../images/profile_pic.jpg';
import '../css/Main.css';
import { Avatar } from '@material-ui/core';
import {name,contact} from '../Data/contactinformation'
const PhotoAndContactInformation = ()=>{
    return (<div className="container" style={{flexDirection:'row',display:'flex'}}>
        <div style={{flexGrow:7,textAlign:'center'}}>{name.name}
        <ContactInfo></ContactInfo>
        </div>
        <div className="" style={{flexGrow:1}}>
            <Avatar src={profile_pic} style={{ height: '100px', width: '100px' }}/>
        </div>

    </div>);
}
const ContactInfo = ()=>{
    return (<div style={{textAlign:"left"}}><ul style={{ listStyleType: 'none'}}>{
            contact.map(function(nameAndEmail){
                return <li> {nameAndEmail.link}</li>
            })
        }    
    </ul></div>);
}

export default PhotoAndContactInformation;