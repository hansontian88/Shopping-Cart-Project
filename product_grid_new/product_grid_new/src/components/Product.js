import React, { Fragment }from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from './Context';

const Product =(props)=>{
    const  { brand, title, srcset, upc } = props.product;
    return(
        <div className="col-sm-6 col-lg-4">
            <div className="card" style={{width: "18rem", margin:"0 30px"}}>
                <ProductConsumer>
                    {value =>{
                    return (
                        <Fragment>
                            <ImgWrapper onClick={()=>value.handleDetail(upc)}>
                                <Link to='/detail'>
                                    <img src={srcset} className="card-img-top" alt="umbrella_img"/>
                                </Link>   
                            </ImgWrapper>
                            <CardBody className="card-body">
                                <h5 className="card-title" style={{fontSize:"16px"}}>{title}</h5>
                                <p className="card-text">{brand}</p>
                                <p className="price">{`$${props.product.list_price.price}`}</p>
                                <Button onClick={()=>value.handleAdd(upc)} className="btn-sm btn-danger">Add to cart</Button>               
                            </CardBody>   
                        </Fragment>                       
                    )}  
                    }  
                </ProductConsumer>          
            </div>
        </div>
    )
}
   
const ImgWrapper = styled.div`
    padding: 10px 10px 15px 10px;
`

const CardBody = styled.div`
    border-top: 1px solid #DCDCDC
    width: 246px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    .card-text{
       color: rgb(51, 51, 51);
       font-size:14px;
    }
    .price{
        font-size: 18px;
    }
`
const Button = styled.button`
    background: rgb(204, 0, 0);
    border: 1px solid rgb(204, 0, 0);
    width: 85px;
    font-size: 12px;
    text-align: center;
    :focus {
        outline: 0 !important;
        outline-offset: 0  !important;
        background-image: none  !important;
        -webkit-box-shadow: none !important;
        box-shadow: none  !important;
      }
`

export default Product;