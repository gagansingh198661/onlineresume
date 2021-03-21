import  React  from 'react';
import  '../css/Main.css';

import WorkIcon from '@material-ui/icons/Work';
import experience_data from '../Data/experience';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { StarBorder } from '@material-ui/icons';




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

function  Experience(props) {
    
    
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
            <ExperienceItem/>
        </Collapse>
    </List>
  );
}

function ExperienceItem(){
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = React.useState(null);
     return (<List component="div" disablePadding>
                {experience_data.map((experience,index)=>
                    {
                         return (<>
                            <ListItem className={classes.nested} button  onClick={event => setActiveIndex(activeIndex === index ? null : index)}>
                                    <ListItemIcon>
                                        <WorkIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={experience.company+' '+experience.duration} />
                            </ListItem>
                            {experience_data[index].technologies.map((technology,techIndex)=>{
         return (<Collapse in={activeIndex === index} timeout="auto" unmountOnExit>
                    <ListItem className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={technology.description} />
                    </ListItem>
                </Collapse>)})}
                        </>)
                    
                    }                 )
                }
   
     </List>);



}

export default Experience;