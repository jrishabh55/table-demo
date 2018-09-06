import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Drawer, Grid } from '@material-ui/core';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';

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
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    padding: 3
  },
  table: {
    minWidth: 700
  },
  cell: {
    minWidth: 70
  },
  arrow: {
    cursor: "pointer",
    zIndex: 10,
    margin: 20,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  arrows: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 35,
    right: 0,
    width: '100%'
  },

  leftSideBar: {
  },
  leftSideBarButton: {
  },
  sideBarButton: {    
    backgroundColor: 'blue',
    color: 'white',
    writingMode: 'vertical-rl',
    textOrientation: "mixed",
    cursor: 'pointer',
    padding: 5,
    borderRadius: 3,
    marginTop: 20
  }
});

const drawerWidth = 240;

class App extends Component {
  tableRef = React.createRef();

  state = {
    open: true,
    anchor: "left",
    sidebar: false
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
  }

  scrollRight = () => {
    const item = this.tableRef.current;
    item.scrollLeft += item.offsetWidth;
  };

  scrollLeft = () => {
    const item = this.tableRef.current;
    item.scrollLeft -= item.offsetWidth;
  };

  toggleSideBar = () => {
    console.log("called");
    this.setState({ sidebar: !this.state.sidebar })
  }

  drawer = () => {
    const { classes } = this.props;
    const { sidebar } = this.state;

    return <Grid item xs={3} style={{
        position: sidebar ? 'static' : 'absolute',
        top: 100,
        left: -3
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: 600,
        marginTop: 100,
      }}>
        <Paper style={{ height: '100%', flexGrow: 1, display: sidebar ? 'block' : 'none' }}>
          This is work
        </Paper>
        <div className={classes.leftSideBarButton}>
          <span className={classes.sideBarButton} onClick={this.toggleSideBar}>
            Filters
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
        <Grid item xs={sidebar ? 9 : 12} style={{ position: 'relative' }}>
          <div class={classes.arrows}>
            <div className={classes.arrow}>
              <ChevronLeft onClick={this.scrollLeft} />
            </div>
            <div className={classes.arrow}>
              <ChevronRight onClick={this.scrollRight} />
            </div>
          </div>
          <div className={classes.root} ref={this.tableRef}>
            <Table>
              <Paper>
                <TableHead>
                  <TableRow>
                    <TableCell padding="none" style={{ maxWidth: 20 }} />
                    {columns.map(column => (
                      <TableCell className={classes.cell} key={column.key}>
                        {column.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              </Paper>
            </Table>
            {Object.keys(this.rows).map(title => (
              <RowsTable rows={this.rows[title]} title={title} />
            ))}
          </div>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(App);
