import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import './TogglePaper.css';

class SelectPaper extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: props.selected || [],
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect (event) {
        let value = event.currentTarget.id
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
            <div className={"call-type-list " + this.props.elementClass} key={data}>
                <Paper elevation={1} className={selected.includes(data) ? 'call-type-list-paper active' : 'call-type-list-paper'} onClick={this.handleSelect} id={data}>
                    {data}
                </Paper>
            </div>
        )
    }

    render() {
        let elements = []
        this.props.dataList.forEach(data=>{
            elements.push(this.generateElement(data))
        })
        return (
            <Row>
                {elements}
            </Row>
        );
    }
}

export default SelectPaper;
