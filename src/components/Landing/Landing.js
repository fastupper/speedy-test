import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Divider from '@mui/material/Divider';
import {AddCircleOutline, Create} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
// import { withStyles } from '@mui/styles';
import './landing.css';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Landing() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <h2 style={{ marginTop: '30px' }}>{"Categories"}</h2>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack direction="row" spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Custom" {...a11yProps(1)} />
            <Tab label="ICP" {...a11yProps(2)} />
            <Tab label="Mission" {...a11yProps(3)} />
            <Tab label="Product" {...a11yProps(4)} />
          </Tabs>
          <Button variant="contained" startIcon={<AddCircleOutline />} onClick={handleOpen}>
            Add Topic
          </Button>
        </Stack>
      </Box>
      <TabPanel value={value} index={0}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem sx={{ border: '1px solid #c9c9c9', padding: '5px', backgroundColor: '#f7f7f7'}} disablePadding>
            <ListItemText primary="Recommended Topics" />
          </ListItem>
          <ListItem disablePadding className="customItem">
            <div>
              <p>The importance of Establishing a Strong Online Presence for Samll Besinesses</p>
              
              <div className="tagGroup">
                <Button variant="outlined" color='primary' size="small">
                  Write
                </Button>
                <Button variant="outlined" color='secondary' size="small">
                  Write
                </Button>
                <Button variant="outlined" color='success' size="small">
                  Write
                </Button>
                <Button variant="outlined" color='error' size="small">
                  Write
                </Button>
                <Button variant="outlined" color='info' size="small">
                  Write
                </Button>
                <Button variant="outlined" color='warning' size="small">
                  Write
                </Button> 
              </div>
            </div>
            <div>
              <Link to="/write">
                <Button variant="contained" color="secondary" endIcon={<Create />}>
                  Write
                </Button>
              </Link>
            </div>
          </ListItem>
          <ListItem disablePadding className="customItem">
            <div>
              <p>How Fast Turnaround Times inLogo and Website Design Benefit Your Business</p>
              
              <div className="tagGroup">
                <Button variant="outlined" color='primary' size="small">
                  fast turnaround
                </Button>
                <Button variant="outlined" color='secondary' size="small">
                  logo design
                </Button>
                <Button variant="outlined" color='success' size="small">
                  website design
                </Button>
                <Button variant="outlined" color='error' size="small">
                  branding
                </Button>
              </div>
            </div>
            <div>
              <Link to="/write">
                <Button variant="contained" color="secondary" endIcon={<Create />}>
                  Write
                </Button>
              </Link>
            </div>
          </ListItem>
          <ListItem disablePadding className="customItem">
            <div>
              <p>Affordable Branding Solutions for Startups and Entrepreneurs</p>
              
              <div className="tagGroup">
                <Button variant="outlined" color='primary' size="small">
                  affordable branding
                </Button>
                <Button variant="outlined" color='secondary' size="small">
                  startups
                </Button>
                <Button variant="outlined" color='success' size="small">
                  entrepreneurs
                </Button>
                <Button variant="outlined" color='error' size="small">
                  logo design
                </Button>
                <Button variant="outlined" color='info' size="small">
                  website design
                </Button>
              </div>
            </div>
            <div>
              <Link to="/write">
                <Button variant="contained" color="secondary" endIcon={<Create />}>
                  Write
                </Button>
              </Link>
            </div>
          </ListItem>
          <ListItem disablePadding className="customItem">
            <div>
              <p>The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses</p>
              
              <div className="tagGroup">
                <Button variant="outlined" color='primary' size="small">
                  comprehensive branding
                </Button>
                <Button variant="outlined" color='secondary' size="small">
                  small businesses
                </Button>
                <Button variant="outlined" color='success' size="small">
                  logo design
                </Button>
                <Button variant="outlined" color='error' size="small">
                  website design
                </Button>
                <Button variant="outlined" color='info' size="small">
                  social media management
                </Button>
              </div>
            </div>
            <div>
              <Link to="/write">
                <Button variant="contained" color="secondary" endIcon={<Create />}>
                  Write
                </Button>
              </Link>
            </div>
          </ListItem>
          <ListItem disablePadding className="customItem">
            <div>
              <p>Expert Tips for Choosing the Right Digital Marketing Agency for Your Business</p>
              
              <div className="tagGroup">
                <Button variant="outlined" color='primary' size="small">
                  digital marketing agency
                </Button>
                <Button variant="outlined" color='secondary' size="small">
                  tips
                </Button>
                <Button variant="outlined" color='success' size="small">
                  branding
                </Button>
                <Button variant="outlined" color='error' size="small">
                  website design
                </Button>
                <Button variant="outlined" color='info' size="small">
                  social media management
                </Button>
              </div>
            </div>
            <div>
              <Link to="/write">
                <Button variant="contained" color="secondary" endIcon={<Create />}>
                  Write
                </Button>
              </Link>
            </div>
          </ListItem>
        </List>
      </nav>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <h3 style={{ margin: '15px', textAlign: 'center' }}>Add Topic</h3>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'custom'}>Custom</MenuItem>
                <MenuItem value={'icp'}>ICP</MenuItem>
                <MenuItem value={'mission'}>Mission</MenuItem>
                <MenuItem value={'product'}>Product</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth multiline maxRows={2} label="Topics" variant="outlined" sx={{marginTop: "10px", marginBottom: "10px"}} />
            <TextField fullWidth multiline maxRows={2} label="Keywords" variant="outlined" sx={{marginTop: "10px", marginBottom: "10px"}} placeholder="Split the keywords with ','" />
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Button variant="contained" color="primary" onClick={() => handleClose()} >Submit</Button>
              <Button variant="outlined" color="error" onClick={() => handleClose()} sx={{ marginLeft: "16px" }}>Close</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
