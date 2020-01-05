import React, { Component } from 'react';

export default class AvailableFlag extends Component {

    checkFlag = this.props.AvailableFlag == 'Y' ? true : false;

    render() {
        console.log(this.props.AvailableFlag + " this.props.AvailableFlag")
        return (
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" checked={this.checkFlag} muted />
                <label class="custom-control-label" for="customSwitch1"></label>
            </div>
        );
    }
}
