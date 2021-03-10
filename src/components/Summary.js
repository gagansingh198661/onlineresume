import { React } from 'react';
import summary_data from '../Data/summary'

const Summary = ()=> {
    return (<div className="container">
    <div className="hoverEffect containerRight" ><h2>Summary</h2></div>
    
    <ul>{summary_data.map(function(summary){
        return (<li key={summary.id}>{summary.description}</li>);   
    })}</ul>
    </div>);
}

export default Summary;

