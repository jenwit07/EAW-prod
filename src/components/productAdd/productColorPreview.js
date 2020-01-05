import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import {
    Spinner
} from 'reactstrap';
import {
    Table,
} from 'reactstrap';

export default class ColorAddPrv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    colorRender = []

    componentDidMount = () => {

        let { Color } = this.props
        if(Color) {
            Color.forEach(e => {
                this.colorRender.push(
                    <tr>
                        <td className="text-center">
                            <div>{e}</div>
                        </td>
                        <td className="text-center">
                            <ColorCircle colorProduct={e} />
                        </td>
                    </tr>
                )
            });
        }

        this.setState({
            isLoading: false
        })

    }

    componentWillReceiveProps = () => {

        let { Color } = this.props
        Color.forEach(e => {
            this.colorRender.push(
                <tr>
                    <td className="text-center">
                        <div>{e}</div>
                    </td>
                    <td className="text-center">
                        <ColorCircle colorProduct={e} />
                    </td>
                </tr>
            )
        });

        this.setState({
            isLoading: false
        })

    }

    render() {
        console.log("Child")
        console.log(this.props.Color)
        if (this.state.isLoading) return <Spinner style={{ width: '1rem', height: '1rem' }} type="grow" />

        return (
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table bg-white">
                <thead className="h6 thead-dark">
                    <tr>
                        <th>color</th>
                        <th>show</th>
                    </tr>
                </thead>
                <tbody>
                    {this.colorRender}
                </tbody>
            </Table>
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
