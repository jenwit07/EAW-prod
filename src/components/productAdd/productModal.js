/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { inject, observer } from 'mobx-react'
import axios from 'axios'
import { globalURL } from '../../common/url'


const ProductAddModal = (props) => {
    const {
        className,
        commonStore,
        productStore
    } = props;

    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const [categoryid, setCategoryid] = useState("");
    const [color, setColor] = useState("");
    const [productName, setProductName] = useState("");
    const [notes, setNotes] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [availableSize, setAvailableSize] = useState("");
    const [availableColors, setAvailableColors] = useState("");
    const [size, setSize] = useState("");
    const [picture, setPicture] = useState("");
    const [safetyStock, setSafetyStock] = useState("");
    const [inventoryStock, setInventoryStock] = useState("")

    const [discountUnitPrice, setDiscountUnitPrice] = useState("");
    const [productAvailableFlag, setProductAvailableFlag] = useState("");
    const [ranking, setRanking] = useState("");


    const toggle = () => setModal(!modal);

    /*
    var newProduct = {
        categoryID: body.categoryid,
        quatityPerUnit: body.quatityPerUnit,
        unitPrice: body.unitPrice,
        availableSize: body.availableSize,
        availableColors: body.availableColors,
        size: body.size,
        color: body.color,
        discountUnitPrice: body.discountUnitPrice,
        productAvailableFlag: body.productAvailableFlag,
        discountAvailableFlag: body.discountAvailableFlag,
        picture: body.picture,
        ranking: body.ranking,
        note: body.note,
        createBy: body.createBy,
        updateBy: body.updateBy
    }
    */


    const selectCategory = () => {
        let category = []
        for (let index = 0; index < commonStore.categoryList.length; index++) {
            category.push(
                <option key={commonStore.categoryList[index].categoryID}>{commonStore.categoryList[index].categoryName}</option>
            )
        }
        return category;
    }

    const handleInventoryStock = event => {
        let prodInventoryStock = event.target.value;
        setInventoryStock(prodInventoryStock)

    }

    const handleSafetyStock = event => {
        let prodSafetyStock = event.target.value
        setSafetyStock(prodSafetyStock)

    }

    const handleProductName = event => {
        let prodVal = event.target.value;
        setProductName(prodVal);
        console.log("productName : " + productName)

    }

    const handleNote = event => {
        let prodNotes = event.target.value;
        setNotes(prodNotes)
        console.info("prodNotes" + prodNotes)

    }

    const handleUnitPrice = event => {
        let prodPrice = event.target.value;
        setUnitPrice(prodPrice)

    }

    const handleCategory = event => {
        let prodCategory = event.target.value;

        for (let index = 0; index < commonStore.categoryList.length; index++) {
            if (commonStore.categoryList[index].categoryName == prodCategory) {
                setCategoryid(commonStore.categoryList[index].categoryID)
            }
        }
    }

    const handleColor = event => {
        let color = event.target.value;
        setColor(color)
        setAvailableColors(color)

    }

    const handleSize = event => {
        let size = event.target.value;
        setSize(size)
        setAvailableSize(size)

    }

    const handlePicture = event => {
        let picture = event.target.value;
        setPicture(`{"url": "${picture}"}`)

    }

    const addNewProd = {
        "categoryid": categoryid,
        "unitPrice": unitPrice,
        "availableSize": availableSize,
        "availableColors": availableColors,
        "size": size,
        "color": color,
        "note": notes,
        "picture": picture,
        "inventory": inventoryStock,
        "safetyStock": safetyStock,
        "productName": productName
    }

    const sendProd = () => {
        let config = { headers: { 'Content-Type': 'application/json' } };

        axios.post(`${globalURL}/product/new`, addNewProd, config).then(res => {

            if (res.data.success) {
                alert("add new product!!")
                productStore.setLoading();
                toggle()

            } else {
                console.log('this false login')
            }
        })
    }

    return (
        <div className="mr-4">
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <Button noGutters={true} color="success" onClick={toggle}>
                    <i className="fa fa-lightbulb-o"></i>&nbsp;เพิ่มสินค้า
              </Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose} size="xl">
                <ModalHeader toggle={toggle}>เพิ่มสินค้า</ModalHeader>
                <ModalBody>
                    <form>
                        <div class="form-group">
                            <label for="inputProductName">ชื่อสินค้า</label>
                            <input type="text" class="form-control" id="inputProductName" onChange={handleProductName} />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                <label for="inputNote">รายละเอียดสินค้า</label>
                                <input type="text" class="form-control" id="inputNote" onChange={handleNote} />
                            </div>
                            <div class="form-group col-lg-6 col-md-6 col-sm-6">
                                <label for="inputCategory">ประเภทสินค้า</label>
                                <select id="inputCategory" class="form-control" defaultValue={'DEFAULT'} onChange={handleCategory} >
                                    <option value="DEFAULT">Choose...</option>
                                    {selectCategory()}
                                </select>
                            </div>
                            <div class="form-group col-lg-6 col-md-6 col-sm-6">
                                <label for="inputSafetyStock">Safety Stock</label>
                                <input type="text" class="form-control" id="inputSafetyStock" onChange={handleSafetyStock} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-lg-6">
                                <label for="inputInventory">จำนวนสินค้าในคลัง (ชิ้น)</label>
                                <input type="text" class="form-control" id="inputInventory" onChange={handleInventoryStock} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputUnitPrice">ราคาสินค้าต่อชิ้น</label>
                                <input type="text" class="form-control" id="inputUnitPrice" onChange={handleUnitPrice} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="InputColor">Color</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="InputColor" placeholder="เลือกสี เช่น red,green,blue" aria-describedby="basic-addon2" onChange={handleColor} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="InputSize">Size</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="InputSize" placeholder="เลือก Size เช่น S,M,L" aria-describedby="basic-addon2" onChange={handleSize} />
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <label for="InputImage">Images</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="InputImage" placeholder="รูปภาพจาก URL" aria-describedby="basic-addon2" onChange={handlePicture} />
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={sendProd}>เพิ่มสินต้า</Button>
                    <Button color="secondary" onClick={toggle}>ยกเลิก</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default inject('commonStore','productStore')(observer(ProductAddModal));