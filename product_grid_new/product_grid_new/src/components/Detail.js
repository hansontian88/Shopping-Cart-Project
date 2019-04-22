import React, { Fragment }from 'react';
import { ProductConsumer } from './Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Detail =()=>{
    return(
        <Fragment>
        <ProductConsumer>
            {value=>{
                const { srcset, description, title } = value.detailProduct;
            return(
                <DetailContainer>
                    <h3>{title}</h3>
                    <img src={srcset} alt="detail"/>
                    <h4>description:</h4>
                    <p style={{fontSize:"15px"}}>{description}</p>
                    <Link to='/'>
                        <button type="button" className="btn btn-danger">Back</button>
                    </Link>
                </DetailContainer>   
            )}
            }
        </ProductConsumer>
    </Fragment>
    )
}

const DetailContainer = styled.div`
    padding: 40px 80px;
    .btn{
        background: rgb(204, 0, 0);
        border: 1px solid rgb(204, 0, 0);
    }
`

export default Detail