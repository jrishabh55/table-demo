import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TogglePaper from '../components/TogglePaper'
import SelectPaper from '../components/SelectPaper'
import CheckboxList from '../components/CheckboxList'
import {connect} from 'react-redux'
import {updateCallCenter, updateCallerType, updateContractTypeList, updateProductCodeList, updateRoutingType} from '../actions/FirstPageActions'
import './FirstPage.css';

export class FirstPage extends Component {
    render() {
        return (
        <div>
            <header className="App-header" >
                <p className="App-title" >VDN Grid</p>
            </header>
            <Paper elevation={1} className="grid-paper">
                <div className="title"> 
                    <label> VDN Grid lookup </label>
                </div>
                <Row>
                    <Col xs={12} sm={3} md={4} className="vdn-key">
                        Call Center
                    </Col>
                    <Col xs={12} sm={3} md={8} className="vdn-value">
                        <FormControl className={"call-center-dd"}>
                            <Select 
                                multiple
                                value={this.props.callCenter}
                                displayEmpty
                                onChange={this.props.updateCallCenterProp}
                                name="Call Center"
                            >
                                <MenuItem value=""> <em>All Call Centers</em> </MenuItem>
                                <MenuItem value={1}> one </MenuItem>
                                <MenuItem value={2}> two </MenuItem>
                                <MenuItem value={3}> three </MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={12} sm={3} md={4} className="vdn-key">
                        Routing Mode
                    </Col>
                    <Col xs={12} sm={3} md={8} className="vdn-value">
                        <TogglePaper
                            elementClass="col-sm-4 col-xs-6"
                            dataList={["Phone", "Written"]}
                            selected={this.props.routingType}
                            handleChange={this.props.updateRoutingTypeProp}
                        />
                    </Col>
                    <Col xs={12} sm={3} md={4} className="vdn-key">
                        Contract Type
                    </Col>
                    <Col xs={12} sm={3} md={8} className="vdn-checkbox">
                        <CheckboxList
                            elementClass=""
                            dataList={["C", "R"]}
                            selected={this.props.contractTypeList}
                            handleChange={this.props.updateContractTypeListProp}
                        />
                    </Col>
                    <Col xs={12} sm={3} md={4} className="vdn-key">
                        Product Code
                    </Col>
                    <Col xs={12} sm={3} md={8} className="vdn-checkbox">
                        <CheckboxList
                            elementClass=""
                            dataList={["D", "H", "HHMO", "HHPO", "P"]}
                            selected={this.props.productCodeList}
                            handleChange={this.props.updateProductCodeListProp}
                        />
                    </Col>
                    <Col xs={12} sm={3} md={4} className="vdn-key">
                        Caller Type
                    </Col>
                    <Col xs={12} sm={3} md={8} className="vdn-value">
                        <SelectPaper
                            elementClass="col-sm-4 col-xs-6"
                            dataList={["MEM", "MSP", "PRO", "AGI", "AGG", "VOP"]}
                            selected={this.props.callerTypeList}
                            handleChange={this.props.updateCallerTypeProp}
                        />
                    </Col>
                </Row>
                <hr style={{margin: "5px 0"}}/>
                <div className="vdn-submit">
                    <Button variant="contained" className="submit-button">
                        Submit
                    </Button>
                </div>
            </Paper>
        </div>
        );
    }
}

export const mapStateToProps = (state) => {
    let { callCenter, contractTypeList, productCodeList, routingType, callerTypeList } = state.firstPage
    return { callCenter, contractTypeList, productCodeList, routingType, callerTypeList }
};


export const mapDispatchToProps = (dispatch) => ({
    updateCallCenterProp: (event) => {
        dispatch(updateCallCenter(event.target.value));
    },
    updateCallerTypeProp: (data) => {
        dispatch(updateCallerType(data));
    },
    updateContractTypeListProp: (data) => {
        dispatch(updateContractTypeList(data));
    },
    updateProductCodeListProp: (data) => {
        dispatch(updateProductCodeList(data));
    },
    updateRoutingTypeProp: (data) => {
        dispatch(updateRoutingType(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
