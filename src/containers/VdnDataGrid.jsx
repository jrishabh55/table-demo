import ReactDataGrid from 'react-data-grid'
import React from 'react'
import _rows from './dummyRows.json'
import _cols from './dummyColumns.json'
import Immutable from 'immutable'

const {
  Data: { Selectors }
 } = require('react-data-grid-addons');

export default class Example extends React.Component {
  state = {
    rows: new Immutable.fromJS(_rows),
    cols: new Immutable.List(_cols),
    groupBy: ['TYPE'],
    expandedRows: {}
  };

  getRows = () => {
    let rows = Selectors.getRows(this.state);
    return rows;
  };

  getRowAt = (index) => {
    let rows = this.getRows();
    return rows.get(index);
  };

  getSize = () => {
    return this.getRows().size;
  };

  onRowExpandToggle = (args) => {
    let expandedRows = Object.assign({}, this.state.expandedRows);
    expandedRows[args.columnGroupName] = Object.assign({}, expandedRows[args.columnGroupName]);
    expandedRows[args.columnGroupName][args.name] = { isExpanded: args.shouldExpand };
    this.setState({expandedRows: expandedRows});
  };

  render() {
    return (
          <ReactDataGrid
            ref={ node => this.grid = node }
            enableCellSelect={true}
            columns={_cols}
            rowGetter={this.getRowAt}
            rowsCount={this.getSize()}
            rowGroupRenderer={this.rowGroupRenderer}
            onRowExpandToggle={this.onRowExpandToggle}
            rowHeight={30}
            minHeight={500}
            />
    );
  }
}

// module.exports = exampleWrapper({
//   WrappedComponent: Example,
//   exampleName: 'Row Grouping (immutable collection input) Example',
//   examplePath: './scripts/example23-immutable-data-grouping.js'
// });