import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import './TogglePaper.css';

class TogglePaper extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: props.selected,
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect (event) {
        this.setState({selected: event.currentTarget.id})
        this.props.handleChange && this.props.handleChange(event.currentTarget.id)
    }

    generateElement (data) {
        let { selected } = this.state
        return(
            <div className={"call-type-list " + this.props.elementClass} key={data}>
                <Paper elevation={1} className={selected === data ? 'call-type-list-paper active' : 'call-type-list-paper'} onClick={this.handleSelect} id={data}>
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

export default TogglePaper;
