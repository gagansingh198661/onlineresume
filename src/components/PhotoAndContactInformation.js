import  { React } from 'react';

const PhotoAndContactInformation = ()=>{
    return (<div style={{flexDirection:'row',display:'flex'}}>
        <div style={{flexGrow:1,textAlign:'center'}}>Image</div>
        <div style={{flexGrow:3,textAlign:'center'}}>Contact Information of The Person</div>
    </div>);
}

export default PhotoAndContactInformation;