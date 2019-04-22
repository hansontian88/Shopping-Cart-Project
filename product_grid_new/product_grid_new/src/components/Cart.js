import React from 'react';
import { ProductConsumer } from './Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cart =()=>{
    return (
    <div className="container">
        <ProductConsumer>
            {value=>{
                const { cart, handleDelete } = value;
                if(cart.length===0){
                    return(
                        <EmptyCart>Your cart is empty</EmptyCart>
                    )
                }else{
                        let cartList = cart.map(item=>{                     
                            return(
                                <ItemContainer className="container" key={Math.random()+Math.random()}>
                                    <div>{item.title}</div>
                                    <img className="item_img" src={item.srcset} alt="Item in cart"/>
                                    <div>{`$${item.list_price.price}`}</div>
                                    <Button onClick={(key)=>handleDelete(key)} className="btn-sm btn-danger">Delete</Button>
                                </ItemContainer>
                            )                                          
                        })
                        return <div>{cartList}</div> 
                    }}
            }
        </ProductConsumer> 
        <Link to='/'>
            <Button className="btn btn-danger" style={{marginLeft: "473px"}}>Continue shopping</Button> 
        </Link>             
    </div>
    )
}

const EmptyCart = styled.h3`
    margin-top: 40px;
    text-align: center;
    height: 100px;
`
const ItemContainer = styled.div`
    margin-top: 20px;
    padding: 20px 20px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    width: 550px;
    .item_img{
        height: 80px;
        width: 80px;
    }
`
const Button = styled.button`
    color: white;
    background: rgb(204, 0, 0);
    border: 1px solid rgb(204, 0, 0);
    margin-top: 5px;
`

export default Cart