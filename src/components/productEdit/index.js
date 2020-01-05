/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { inject, observer } from 'mobx-react'
import axios from 'axios'
import { globalURL } from '../../common/url'


const ProductEditModal = (props) => {
    const {
        className,
        commonStore,
        productStore,
        productID
    } = props;

    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const [categoryid, setCategoryid] = useState("");
    const [color, setColor] = useState("");
    const [productName, setProductName] = useState("");
    const [notes, setNotes] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [availableSize, setAvailableSize] = useState([]);
    const [availableColors, setAvailableColors] = useState([]);
    const [size, setSize] = useState("");
    const [picture, setPicture] = useState({});
    const [safetyStock, setSafetyStock] = useState("");
    const [inventoryStock, setInventoryStock] = useState("")
    const [_productID, _setProductID] = useState("")
    const [discountUnitPrice, setDiscountUnitPrice] = useState("");
    const [productAvailableFlag, setProductAvailableFlag] = useState("");
    const [discountAvailableFlag, setDiscountAvailableFlag] = useState("");
    const [ranking, setRanking] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const toggle = () => setModal(!modal);

    useEffect(() => {

        axios.get(`${globalURL}/product/${productID}`).then((res) => {

            let data = res.data.data;

            setProductName(data.productName)
            _setProductID(data.productID)
            setCategoryid(data.categoryID)
            setSafetyStock(data.safetyStock)
            setUnitPrice(data.unitPrice)
            setSize(Object.keys(data.availableSize).toString())

            let AvailSize = [];

            Object.entries(data.availableSize).forEach(([key, val]) => {
                if (val == "Y") AvailSize.push(key)
            });

            setAvailableSize(AvailSize.toString());
            setColor(Object.keys(data.availableColors).toString())

            let AvailColor = [];

            Object.entries(data.availableColors).forEach(([key, val]) => {
                if (val == "Y") AvailColor.push(key)
            });

            setAvailableColors(AvailColor.toString());
            setDiscountUnitPrice(data.discountUnitPrice);
            setProductAvailableFlag(data.productAvailableFlag);
            setDiscountAvailableFlag(data.discountAvailableFlag);
            setPicture(data.picture);
            setIsLoading(false);
            setNotes(data.note);
            setInventoryStock(data.inventoryStock);
        })

        selectCategory()

    }, [])

    /*
    URL : http://localhost:3333/product/7

    update product : http://localhost:3333/product/update
    {
        success: true,
        message: {
        productID: 7,
        shopID: 11,
        categoryID: 1,
        safetyStock: 15000,
        unitPrice: "400.00",
        availableSize: {
            small: "Y",
            big: "Y",
            extra: "Y"
        },
        availableColors: {
            gold: "Y",
            black: "Y",
            #123: "Y"
        },
        size: "small,big,extra",
        color: "gold,black,#123",
        discountUnitPrice: null,
        productAvailableFlag: "Y",
        discountAvailableFlag: "N",
        picture: {
            url: "http://www.footballshopz.com/wp-content/uploads/2019/01/50813519_626383981149252_4125612573695410176_o-1024x697.jpg"
        },
        ranking: 5,
        note: "sport",
        createDate: "2019-11-07T17:14:42.000Z",
        updateDate: "2019-11-07T17:14:42.000Z",
        createBy: "Peter",
        updateBy: "Peter",
        productName: "เสื้อบอล",
        inventoryStock: 2500,
        safetyStick: 15000
        }
    */


    const selectCategory = () => {
        let category = []
        for (let index = 0; index < commonStore.categoryList.length; index++) {
            category.push(
                <option value={commonStore.categoryList[index].categoryID} key={commonStore.categoryList[index].categoryID}>{commonStore.categoryList[index].categoryName}</option>
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
        console.info("test" + color)
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
        "productID": productID,
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

        console.log(typeof picture)

        if(typeof picture === 'object' && picture !== null) {
            addNewProd.picture = JSON.stringify(picture);
        }

        axios.post(`${globalURL}/product/update`, addNewProd, config).then(res => {

            if (res.data.success) {
                alert("update product : " + productName)
                productStore.setLoading();
                toggle()

            } else {
                console.log('this false login')
            }
        })
    }


    if (!isLoading) {
        return (
            <div className="mr-4">
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <Button noGutters={true} color="success" onClick={toggle}>
                        <i className="fa fa-lightbulb-o"></i>&nbsp;แก้ไขสินค้า
                  </Button>
                </Form>
                <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose} size="xl">
                    <ModalHeader toggle={toggle}>แก้ไขสินค้า</ModalHeader>
                    <ModalBody>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                        <label for="inputProductName">รหัสสินค้า</label>
                                        <input type="text" class="form-control-plaintext" id="inputProductName" value={productID} readOnly />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputProductName">ชื่อสินค้า</label>
                                    <input type="text" class="form-control" id="inputProductName" onChange={handleProductName}  value={productName}/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputNote">รายละเอียดสินค้า</label>
                                    <input type="text" class="form-control" id="inputNote" onChange={handleNote} value={notes} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputCategory">ประเภทสินค้า</label>
                                    <select id="inputCategory" class="form-control" defaultValue={categoryid} onChange={handleCategory} >
                                        <option value="DEFAULT">Choose...</option>
                                        {selectCategory()}
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputSafetyStock">Safety Stock</label>
                                    <input type="text" class="form-control" id="inputSafetyStock" onChange={handleSafetyStock} value={safetyStock} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputInventory">จำนวนสินค้าในคลัง (ชิ้น)</label>
                                    <input type="text" class="form-control" id="inputInventory" onChange={handleInventoryStock} value={inventoryStock} />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputUnitPrice">ราคาสินค้าต่อชิ้น</label>
                                    <input type="text" class="form-control" id="inputUnitPrice" onChange={handleUnitPrice} value={unitPrice}/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="InputColor">Color</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="InputColor" placeholder="เลือกสี เช่น red,green,blue" aria-describedby="basic-addon2" onChange={handleColor} value={color} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="InputSize">Size</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="InputSize" placeholder="เลือก Size เช่น S,M,L" aria-describedby="basic-addon2" onChange={handleSize} value={size} />
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label for="InputImage">Images</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="InputImage" placeholder="รูปภาพจาก URL" aria-describedby="basic-addon2" onChange={handlePicture} value={picture.url} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={sendProd}>บันทึก</Button>
                        <Button color="secondary" onClick={toggle}>ยกเลิก</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    } else {
        return (
            <p>Loading ..</p>
        )
    }

}

export default inject('commonStore', 'productStore')(observer(ProductEditModal));