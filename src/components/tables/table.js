import React, { Component } from 'react';
import {
    Table,
} from 'reactstrap';
import axios from 'axios';
import {globalURL} from '../../common/url';
import { inject, observer } from 'mobx-react'

@inject('commonStore')
@observer
class ProductLists extends Component {

    componentDidMount = () => {

        let { getGlobalHeaderJson, accessToken } = this.props.commonStore;
        console.log(getGlobalHeaderJson)
        
            axios.get(`${globalURL}/products`).then(res => {
                console.log(res);
            }).catch(err => {
                console.error(err);
            })


    }

    table = {
        Header : [
            "Product",
            "Inventory",
            "Status"
        ],
        Body : [
            {
                name: "Yiorgos Avraamu",
                inventory: "5000",
                status: "available"
            },
            {
                name: "Yiorgos Avraamu",
                inventory: "5000",
                status: "available"
            },
            {
                name: "Yiorgos Avraamu",
                inventory: "5000",
                status: "available"
            },
            {
                name: "Yiorgos Avraamu",
                inventory: "5000",
                status: "available"
            },
            {
                name: "Yiorgos Avraamu",
                inventory: "5000",
                status: "available"
            },
            {
                name: "Yiorgos Avraamu",
                inventory: "5000",
                status: "available"
            },
            {
                name: "Yiorgos Avraamu",
                inventory: "5000",
                status: "available"
            }
        ]
    }


    Header = [];
    Body = [];

    AddHeader() {
        // let dataHeader = this.probs.data.Header
    }

    AddBody() {
        // let dataBody = this.probs.data.Body;
    }

     render() {
        this.Header = [];
        let dataHeader = this.table.Header
        dataHeader.forEach((e, i) => {
            console.log(i)
            this.Header.push(
                <th className="text-center">{e}</th>
            )
        });
        
        this.Body = [];
        let dataBody = this.table.Body;
        let Details = dataBody.forEach(element => {
            console.log(element.name)
            this.Body.push(
                <tr>
                    <td className="text-center">
                        <div>{element.name}</div>
                    </td>
                    <td className="text-center">
                        <div>{element.inventory}</div>
                    </td>
                    <td className="text-center">
                        <div>{element.status}</div>
                    </td>
                </tr>
            )
        });

        console.log(Details)
        console.log(this.Header)


        return (
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table bg-white">
                <thead className="h6 thead-dark">
                    <tr>
                        {this.Header}
                    </tr>
                </thead>
                <tbody>
                    {this.Body}
                </tbody>
            </Table>
        );
    }
}

export default ProductLists;
