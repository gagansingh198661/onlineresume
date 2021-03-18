import  React  from 'react';
import  '../css/Main.css';

import WorkIcon from '@material-ui/icons/Work';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import summary_data from '../Data/summary';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


/*
function Experience() {
    const classes = useStyles();
    return (
      <Accordion>
          <AccordionSummary className="hoverEffect" expandIcon={<ExpandMoreIcon/>} aria-controls="panel2a-content" id="panel2a-header">
                <Typography className={classes.heading}>Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
                <ul>
                    {summary_data.map(function(summary){
                    return (
                        <li key={summary.id}>
                            <div className="container">
                                    <Typography className={classes.heading}>{summary.description}</Typography>
                            </div>
                        </li>
                    );   
                    })}
                </ul>
            </AccordionDetails>    
      </Accordion>    
      );
  }
*/


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      
      backgroundColor: '#ffffff' ,
      backgroundColor: theme.palette.background.paper,
      
      
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    hoverEffect: {
        backgroundColor: '#ffffff' ,
        backgroundColor: theme.palette.background.paper,
            '&:hover': {
            background: "#d5d7da",
          }
    }
  }),
);

function  Experience() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="div"
      aria-labelledby="nested-list-subheader" style={{marginTop:'1px',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      borderRadius:'5px'}}
      disablePadding
      className={classes.root}
    >
      <ListItem button onClick={handleClick} className={classes.hoverEffect}>
        <ListItemText primary="Experience" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          <ListItem  className={classes.nested} >
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
            <ListItemText primary="XEBIA DEC 2020 - PRESENT" />
          </ListItem>
          <ListItem  className={classes.nested} >
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
            <ListItemText primary="SHL JULY 2017 - DEC - 2019" />
          </ListItem>
          <ListItem  className={classes.nested} >
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
            <ListItemText primary="AON HEWITT DEC 2016 - JULY - 2019" />
          </ListItem>
          <ListItem  className={classes.nested} >
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
            <ListItemText primary="COGNIZANT MARCH 2014 - DEC - 2016" />
          </ListItem>
          <ListItem  className={classes.nested} >
            <ListItemIcon>
              <WorkIcon/>
            </ListItemIcon>
            <ListItemText primary="3I-INFOTECH JAN 2013 - OCT - 2013" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default Experience;