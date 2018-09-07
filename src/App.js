import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Card, Grid, CardHeader, CardContent, TextField, Divider, MenuItem, TableBody } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";

import { ChevronRight, ChevronLeft, Cancel, FilterList, Refresh, Search } from '@material-ui/icons';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import RowsTable from './Table';

import columns from './dummyColumns.json';
import rows from './dummyRows.json';

import Layout from './Layout';
import logo from './logo.svg';
import './App.css';
import { Object } from 'core-js';

const styles = theme => ({
  root: {
    position: "relative",
    marginTop: theme.spacing.unit,
    padding: 3
  },
  table: {
    minWidth: 700
  },
  cell: {
    minWidth: 70,
    maxWidth: 70
  },
  arrow: {
    cursor: "pointer",
    zIndex: 10,
    margin: 20,
    backgroundColor: 'blue',
    borderRadius: '50%',
    display: 'flex',
    alignContent: 'center',
    color: 'white'
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  arrows: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: theme.spacing.unit + 8,
    right: 0,
    width: "100%"
  },

  leftSideBar: {},
  leftSideBarButton: {},
  sideBarButton: {
    display: "block",
    position: 'absolute',
    width: 120,
    backgroundColor: "blue",
    color: "white",
    transform: "rotate(270deg)",
    transformOrigin: "left top 0",
    cursor: "pointer",
    padding: 5,
    borderRadius: 3,
    marginTop: 180
  },

  leftSidebarCardTitle: {
    color: "blue"
  },
  leftSidebarCardRoot: {
    borderTop: "2px solid blue"
  },
  leftSidebarCardActions: {
    color: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  },
  expantionRoot: {
    paddingLeft: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
    overflowX: 'hidden'
  },
  expantionSummeryRoot: {
    paddingBottom: 0
  }
});

const drawerWidth = 240;

class App extends Component {
  tableRef = React.createRef();
  tables = {};

  state = {
    open: true,
    anchor: "left",
    sidebar: true
  };

  componentWillMount() {
    this.rows = rows.reduce((obj, curr) => {
      if (obj[curr.TYPE]) {
        obj[curr.TYPE].push({ ...curr });
      } else {
        obj[curr.TYPE] = [{ ...curr }];
      }
      return obj;
    }, {});

    Object.keys(this.rows).forEach(title => {
      this.tables[title] = React.createRef();
    });
  }

  scrollRight = () => {
    const item = this.tableRef.current;
    item.scrollLeft += item.offsetWidth;
    Object.keys(this.tables).forEach(key => {
      const ref = this.tables[key].current;
      ref.scrollLeft += ref.offsetWidth;
    });
  };

  scrollLeft = () => {
    const item = this.tableRef.current;
    item.scrollLeft -= item.offsetWidth;
    Object.keys(this.tables).forEach(key => {
      const ref = this.tables[key].current;
      ref.scrollLeft -= ref.offsetWidth;
    });
  };

  toggleSideBar = () => {
    this.setState({ sidebar: !this.state.sidebar })
  }

  drawer = () => {
    const { classes } = this.props;
    const { sidebar } = this.state;

    return <Grid item xs={4} style={{
        position: sidebar ? 'static' : 'absolute',
        top: 100,
        left: 10
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: 600,
        marginTop: 100,
      }}>
        <Card style={{ height: '100%', maxWidth: '90%', flexGrow: 1, display: sidebar ? 'block' : 'none' }}>
          <CardHeader
            title="Filters"
            classes={{ title: classes.leftSidebarCardTitle, root: classes.leftSidebarCardRoot, action: classes.leftSidebarCardActions }}
            action={<React.Fragment>
              <Refresh />
              <Cancel />
            </React.Fragment>}
          />
          <Divider />
          <CardContent>
            <TextField
              id="name"
              label="Search"
              margin="normal"
              style={{ width: '100%' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Search /></InputAdornment>
              }}
            />

            <TextField
              select
              label="Sort"
              margin="normal"
              style={{ width: '100%'}}
            >
              {['Sample', 'Sample 2'].map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="name"
              label="View Rolling Tag"
              margin="normal"
              style={{ width: '100%' }}
            />

          </CardContent>
        </Card>
        <div className={classes.leftSideBarButton}>
          <span className={classes.sideBarButton} onClick={this.toggleSideBar}>
            { sidebar ? 'Hide Filters' : 'Show Filters' } <FilterList />
          </span>
        </div>
      </div>
    </Grid>
  };

  render() {
    const { classes } = this.props;
    const { sidebar} = this.state;
    return (
      <Layout>
          {this.drawer()}
        <Grid item xs={sidebar ? 8 : 10} offset={sidebar ? 0 : 4} style={{ position: 'relative', marginLeft: 'auto' }}>
          <div className={classes.arrows}>
            <div className={classes.arrow}>
              <ChevronLeft onClick={this.scrollLeft} />
            </div>
            <div className={classes.arrow}>
              <ChevronRight onClick={this.scrollRight} />
            </div>
          </div>
          <div className={classes.root}>
            <Paper style={{ maxWidth: '100%' }}>
              <div style={{ overflowX: 'hidden', padding: '0 20px 3px 20px' }} ref={this.tableRef}>
                <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell padding="none" style={{ minWidth: 4 }} />
                        {columns.map(column => (
                          <TableCell padding="checkbox" className={classes.cell} key={column.key}>
                            {column.name}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                </Table>
              </div>
            </Paper>
            {Object.keys(this.rows).map(title => (
              <ExpansionPanel defaultExpanded={true} key={title}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} classes={{ root: classes.expantionSummeryRoot}}>
                  <Typography>{title}<br /><small>Sub Heading</small></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{ root: classes.expantionRoot } }>
                  <div style={{ overflowX: 'hidden', padding: '0 20px 3px 20px' }} ref={this.tables[title]}>
                    <RowsTable rows={this.rows[title]} title={title} />
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </div>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(App);
