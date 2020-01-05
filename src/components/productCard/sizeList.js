import React, { Component } from 'react';
import {
    Table,
    Spinner
} from 'reactstrap';
import styled from 'styled-components';

class SizeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    SizeRender = [];

    componentDidMount = () => {
        console.log('componentDidMount')
        for (const [key, value] of Object.entries(this.props.Data)) {
            console.log(key)
            console.log(value)
            this.SizeRender.push(
                <TR key={key}>
                    <TH><small>{key}</small></TH>
                    {value == 'Y' ? <TD><span className="badge badge-success"><small>พร้อมจำหน่าย</small></span></TD> : <TD><span className="badge badge-danger"><small>ไม่มีสินค้า</small></span></TD>}
                </TR>
            )
            this.setState({
                isLoading: false
            })
        }
    }

    render() {

        if(this.state.isLoading){
            return(
                <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
            )
        }
        console.log('render')
        const { Data } = this.props;
        console.log(this.SizeRender.length)
        return (
            <Table className="table table-sm table-bordered text-center table-striped">
                {console.log(Data)}
                <thead className="bg-info text-white">
                    <TR>
                        <TH scope="col"><small>Size</small></TH>
                        <TH scope="col"><small>Status</small></TH>
                    </TR>
                </thead>
                <tbody>
                    {this.SizeRender}
                </tbody>
            </Table>
        );
    }
}

export default SizeList;

const TR = styled.tr`
    padding: 0 !important;
    margin: 0 !important;
`

const TD = styled.td`
    padding: 0 !important;
    margin: 0 !important;
`

const TH = styled.th`
    padding: 0 !important;
    margin: 0 !important;
`