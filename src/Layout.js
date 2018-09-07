import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import green from "@material-ui/core/colors/green";

import { PhotoAlbum } from '@material-ui/icons';


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 80,
    background: 'blue',
    padding: 20,
    color: 'white'
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    padding: 7,
    color: green[500],
    backgroundColor: 'white',
    marginRight: 20,
  }
});

function AutoGrid(props) {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <div className={ classes.header }>
        <div>
          VDN Grid Lookup
        </div>
        <div style={{ display: 'flex', alignSelf: 'flex-end', height: 36 }}>
          <span className={classes.icon}><PhotoAlbum /></span>
          <Button variant="contained" style={{ backgroundColor: green[500], color: 'white' }}>
            Primary
          </Button>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Grid container spacing={24} direction="row" justify="space-between">
          {children}
        </Grid>
      </div>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutoGrid);
