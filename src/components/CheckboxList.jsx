import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './CheckboxList.css';

class CheckboxList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: props.selected || [],
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect (event) {
        let value = event.target.value
        let { selected } = this.state
        let index = selected.indexOf(value)
        if (index > -1) {
            selected.splice(index, 1)
        } else {
            selected.push(value)
        }
        this.setState({selected})
        this.props.handleChange && this.props.handleChange(selected)
    }

    generateElement (data) {
        let { selected } = this.state
        return(
            <FormControlLabel classes={{label:"checkbox-list-label"}} key={data} control={ <Checkbox checked={selected.includes(data)} color="primary" value={data} onClick={this.handleSelect} /> } label={data} />
        )
    }

    render() {
        let elements = []
        this.props.dataList.forEach(data=>{
            elements.push(this.generateElement(data))
        })
        return (
            <div style={{display: "inline"}}>
                {elements}
            </div>
        );
    }
}

export default CheckboxList;
