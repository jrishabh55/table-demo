import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    margin: 3
  },
  table: {
    minWidth: 700,
    padding: 2
  },
  cell: {
    minWidth: 80,
    maxWidth: 80
  },
  active: {
    minWidth: 4,
    backgroundColor: "green"
  },
  inactive: {
    minWidth: 4,
    backgroundColor: "blue"
  },
  tableRow: {
    height: 36
  }
});

function SimpleTable(props) {
  const { classes, title, rows } = props;

  const length = Object.keys(rows[0]).length + 1;

  return (
    <Table className={classes.table}>
        <TableBody>
        {rows.map(function(row, i) {
            let TYPE = row.type
            let active = row.active
            delete row.TYPE
            delete row.active
            return (
              <TableRow key={i} className={classes.tableRow}>
              <TableCell padding="none" className={active ? classes.active : classes.inactive} />
                {Object.keys(row).map((key, i) => <TableCell padding="checkbox" className={classes.cell} key={i}>{row[key]}</TableCell>)}
              </TableRow>
            );
          })}
        </TableBody>
    </Table>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
};

export default withStyles(styles)(SimpleTable);
