import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

import RowsTable from './Table';

import columns from './dummyColumns.json';
import rows from './dummyRows.json';

import Layout from './Layout';
import logo from './logo.svg';
import './App.css';
import { Object } from 'core-js';

const styles = theme => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    padding: 3,
  },
  table: {
    minWidth: 700
  },
  cell: {
    minWidth: 70
  },
  right: {
    position: 'fixed',
    right: 5,
    top: 20,
    cursor: 'pointer',
    zIndex: 10
  }
});

class App extends Component {

  tableRef = React.createRef();

  state = {
    page: 1
  };

  componentWillMount() {
    this.rows = rows.reduce((obj, curr) => {
      if (obj[curr.TYPE]) {
        obj[curr.TYPE].push({...curr});
      } else {
        obj[curr.TYPE] = [{...curr}];
      }
      return obj;
    }, {});
  }

  scrollLeft = () => {
    const item = this.tableRef.current;
    const start = item.scrollLeft;
    const final = item.scrollLeft + item.offsetWidth;
    const increment = 2;

    for (let i = start; i <= final; i+=increment) {
      item.scrollLeft += increment;
    }

    // this.tableRef.current.scrollLeft += ;
  }
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.root} ref={this.tableRef}>
          <div className={classes.right}><ChevronRight onClick={this.scrollLeft} /></div>
          <Table>
            <Paper>
              <TableHead>
                <TableRow>
                  {columns.map(column => <TableCell className={classes.cell} key={column.key}>{column.name}</TableCell>)}
                </TableRow>
              </TableHead>
            </Paper>
          </Table>
          {Object.keys(this.rows).map(title => <RowsTable rows={this.rows[title]} title={title} />)}
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(App);
