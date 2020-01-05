import React, { Component } from 'react';
import axios from 'axios';
import { globalURL } from '../../common/url';
import { Col, Row, Button, Card, CardBody, CardTitle, CardText, CardImg, Container, CardHeader, CardFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Rattiing from './ratting'
import SizeList from './sizeList'
import ColorList from './colorList'
import AvailableFlag from './availableFlag'
import ProductEditModal from '../productEdit/index'
import { Spinner } from 'reactstrap';

@inject('commonStore', 'productStore')
@observer
class CardDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            categoryLoading: true
        };
    }

    Data = [];
    categoryName;

    componentDidMount = () => {
        axios.get(`${globalURL}/products`).then(res => {

            if (res.data.success = 'true') {
                this.Data = res.data.data;
                this.setState({
                    isLoading: false
                })

            } else if (res.data.success = 'false') {
                this.props.commonStore.resetAuth();
                return (
                    <Redirect to='/login' />
                )
            }

        }).catch(err => {
            console.error(err);
        })

    }

    renderRow(block) {
        return (
            <Row className="mt-5">
                {block}
            </Row>
        );
    }

    getProductCategory = (id) => {
        let { categoryList } = this.props.commonStore;
        this.categoryName = ''

        categoryList.forEach((e) => {
            console.log(e.categoryID)
            if (e.categoryID == id) {
                console.log(e.categoryName)
                this.categoryName = e.categoryName;

                this.setState({
                    categoryLoading: false
                })

            }
        })
    }

    deleteProduct(productID) {

        let deleteProductDetail = {
            delete_list: [productID]
        }

        console.info("productID : " + productID);

        axios.post(`${globalURL}/product/delete`, deleteProductDetail).then(res => {
            console.info(res);
            if (res.data.success = 'true') {
                this.Data = res.data.data;
                this.props.productStore.setLoading();

            } else if (res.data.success = 'false') {
                alert("Cannot delete product on productID : " + productID + " and return messege : " + res.data.message)

            }

        }).catch(err => {
            console.error(err);
        })
    }

    renderProductBlock(product, i) {

        if (this.state.isLoading) {
            return <Spinner style={{ width: '1rem', height: '1rem' }} type="grow"/>
        }

        return (
            <Col lg="6" key={product.productName}>
                <Row noGutters={true}>
                    <Card className='border-0' style={{ width: '100%' }}>
                        <CardHeader style={{ backgroundColor: "#070A34", color: '#FFF' }}>
                            <Row>
                                {product.productName}
                                {/* <div class="position-absolute" style={{ right: 0 }}>
                                    <AvailableFlag AvailableFlag={product.productAvailableFlag} />
                                </div> */}
                            </Row>
                        </CardHeader>
                        <CardBody className="p-0">
                            <Card className="p-0 border-0" noGutters={true}>
                                <Row noGutters={true} >
                                    <Col>
                                        <Card className="rounded-0 border-0">
                                            <CardImg className="rounded-0" top width="auto" height="250px" src={product.picture.url} alt="Card image cap" />
                                            <CardBody>
                                                <Row>
                                                    <small className="text-muted float-left"># รหัสสินค้า : {product.productID}</small >
                                                </Row>
                                                <Row>
                                                    <small>จำนวนสินค้าคงเหลือ : {product.inventoryStock} ชิ้น</small>
                                                </Row>
                                                <Row>
                                                    <small>ประเภทสินค้า : {this.state.categoryLoading ? this.getProductCategory(product.categoryID) : this.categoryName}</small>
                                                </Row>
                                                <Row>
                                                    <small>ราคาสินค้า : {product.unitPrice} บาท</small>
                                                </Row>
                                                <Row>
                                                    <small>Rating : </small>
                                                    <Rattiing numberRatting={product.ranking} />
                                                </Row>
                                                <CardText>
                                                    <small className="text-muted">{product.lastUpdate}</small>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <CardBody className="ml-2 d-flex flex-column">
                                            <Col>
                                                <Row>
                                                    <SizeList Data={product.availableSize} />
                                                </Row>
                                            </Col>
                                            <Row className="media">
                                                <small className="align-self-center">สี :</small>
                                                <div className="media-body">
                                                    <ColorList key={product.availableColors} Color={product.availableColors} />
                                                </div>
                                            </Row>
                                            <Row>
                                                <small>ลดราคา: </small>
                                                {product.discountAvailableFlag == 'Y' ? <span className="badge badge-pill badge-warning ml-2"><small>กำลังลดราคา</small></span> : <span className="badge badge-pill badge-primary ml-2"><small>ราคาปกติ</small></span>}
                                            </Row>
                                            {product.discountAvailableFlag == 'Y' ? <Row><small>ราคาที่ลด : {product.discountUnitPrice}</small></Row> : null}
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </CardBody>
                        <CardFooter className='bg-white border-0 align-self-end'>
                            <Row>
                                <ProductEditModal productID={product.productID} />
                                <Button color="danger ml-2" size="sm" onClick={() => this.deleteProduct(product.productID)}>
                                    <i className="fa fa-lightbulb-o"></i>&nbsp;ลบสินค้า
                                </Button>
                            </Row>
                        </CardFooter>
                    </Card>
                </Row>
            </Col>
        );
    }

    renderProductList() {

        let blocks = [], rows = [];
        this.Data.forEach((product, i) => {
            const productBlock = this.renderProductBlock(product, i);
            if (productBlock) {
                blocks.push(productBlock);
            }
            if (blocks.length >= 2) {
                const row = this.renderRow(blocks);
                if (row) {
                    rows.push(row);
                }
                blocks = [];
            }
        });
        const row = this.renderRow(blocks);
        if (row) {
            rows.push(row);
        }
        console.log(rows)
        return rows;
    }

    render() {
        return (
            this.renderProductList()
        );
    }
}


export default CardDetails;
