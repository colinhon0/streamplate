import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


import '../style/page.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="NavBar">
          <img className={classes.menuButton} src = "https://uploads-ssl.webflow.com/60ac37ccb06c7a91f6ae03a3/60b9ca016a1f6f20510b55d1_Union.svg" />
          <Typography variant="h4" className={classes.title}>
            Streamplate
          </Typography>
          <Link to="/edit" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">
              <Typography>Edit</Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}