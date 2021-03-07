import { React } from 'react';
import summary_data from '../Data/summary'

const Summary = ()=> {
    return (<div className="container">
    <h2>Summary</h2>
    <ul>{summary_data.map(function(summary){
        return (<li key={summary.id}>{summary.description}</li>);   
    })}</ul>
    </div>);
}

export default Summary;

