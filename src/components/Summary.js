import { React } from 'react';
import  '../css/Main.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import summary_data from '../Data/summary'


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop : '2px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

const Summary = ()=> {
    const classes = useStyles();

    return (<div className={classes.root}>
                <Accordion >
                    <AccordionSummary className="hoverEffect" expandIcon={<ExpandMoreIcon/>} aria-controls="panel2a-content" id="panel2a-header">
                        <Typography className={classes.heading}>Summary</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {summary_data.map(function(summary){
                            return (<li key={summary.id}>{summary.description}</li>);   
                            })}
                        </ul>
                    </AccordionDetails>    
                </Accordion>
            </div>);
}

export default Summary;



