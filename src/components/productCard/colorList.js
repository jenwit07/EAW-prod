import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import {
    Spinner
} from 'reactstrap';


export default class colorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    colorRender = []

    componentDidMount = () => {

        let { Color } = this.props

        for (const [key, value] of Object.entries(Color)) {
            if(value == 'Y') {
                this.colorRender.push(
                    <ColorCircle colorProduct={key} key={key} />
                )
            }
        }

        this.setState({
            isLoading: false
        })
    }

    render() {

        if (this.state.isLoading) return <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />

        return (
            <Fragment>
                {this.colorRender}
            </Fragment>
        );
    }
}

const ColorCircle = styled.span`
    height: 20px;
    width: 20px;
    background-color: ${props => props.colorProduct};
    border-radius: 50%;
    display: inline-block;
    margin-left: 4px;
`
