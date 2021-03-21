import aboutme from '../Data/aboutme.js';
import  '../css/Main.css';
import React from 'react';
import {  createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header" className="hoverEffect"
        >
          <Typography className={classes.heading}>About Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {aboutme.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
