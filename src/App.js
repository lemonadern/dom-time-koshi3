import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function TabContentCard(props) {
  const { index,times, ...other } = props;
  return(
    <Card>
      <CardContent>
        <p>朝：{times[index].breakfast}</p>
        <p>昼：{times[index].lunch}</p>
        <p>夜：{times[index].dinner}</p>
        <p>風呂：{times[index].bath}</p>
      </CardContent>
    </Card>
  );
}

function TabPanel(props) {
  const { children, value, index, times, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
          <TabContentCard index={index} times={times}  />
          <p>高志3階</p>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    width: '25%',
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [times, setTimes] = React.useState([
    {
      breakfast: '08:15~08:35',
      lunch: '12:25~12:45',
      dinner: '17:35~18:00',
      bath: '19:30~19:50',
    },
    {
      breakfast: '07:55~08:15',
      lunch: '12:50~13:10',
      dinner: '18:05~18:30',
      bath: '18:50~19:10',
    },
    {
      breakfast: '08:10~08:30',
      lunch: '12:30~12:50',
      dinner: '17:30~17:55',
      bath: '18:30~18:50',
    },
    {
      breakfast: '07:50~08:10',
      lunch: '12:55~13:15',
      dinner: '18:00~18:25',
      bath: '19:10~19:30',
    }
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} >
          <Tab className={classes.tabs} label="A" {...a11yProps(0)} />
          <Tab className={classes.tabs} label="B" {...a11yProps(1)} />
          <Tab className={classes.tabs} label="C" {...a11yProps(2)} />
          <Tab className={classes.tabs} label="D" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} times={times}>
        A
      </TabPanel>
      <TabPanel value={value} index={1} times={times}>
        B
      </TabPanel>
      <TabPanel value={value} index={2}times={times}>
        C
      </TabPanel>
      <TabPanel value={value} index={3} times={times}>
        D
      </TabPanel>
    </div>
  );
}

export default App;
