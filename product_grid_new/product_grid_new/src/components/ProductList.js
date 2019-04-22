import React, { Component, Fragment }from 'react';
import styled from 'styled-components';
import { ProductConsumer } from './Context';
import Product from './Product';

class ProductList extends Component{
    render(){
        return(
            <div className="container py-5">
                <ProductConsumer>
                    {value=>{
                    const { Item, resultsList, showResults } = value;
                        if(!showResults){
                            return(
                                <Fragment>
                                    <Title className='title'><h3>Umbrellas</h3></Title>
                                    <Row className='row align-items-start'>
                                        {Item.map((product)=>(
                                            <Product key={product.upc} product={product}/>
                                        ))}
                                    </Row>
                                </Fragment>                       
                                )
                        }else{
                            return(
                                <Fragment>
                                    <Title className='title'><h3>Results:</h3></Title>
                                    <Row className='row align-items-start'>
                                        {resultsList.map((product)=>(
                                            <Product key={product.upc} product={product}/>
                                        ))}
                                    </Row>
                                </Fragment>                       
                            )  
                        }                  
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

const Title = styled.div`
    text-align: center;
`
const Row = styled.div`
    margin-top: 50px;
`

export default ProductList;
