import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from './Context';
import Modal from './Modal'

const Navbar = ()=>(
    <ProductConsumer>
        {value=>{
        const { showHome, Modalopen, Modalout, handleInput, handleEnter, inputValue } = value;
            return(
                <Nav className="navbar navbar-danger px-5">
                    <div className="float-left">
                        <Link to='/'>
                            <i className="fas fa-home" onClick={showHome}/>
                        </Link> 
                        <Link to='/' style={{textDecoration:"none"}}>
                            <NavSpan onClick={showHome}>Products</NavSpan>
                        </Link>
                    </div>
                    <SearchWrapper className="float-left" >
                        <input 
                            className="form-control" 
                            onFocus={Modalopen} 
                            onBlur={Modalout} 
                            onChange={(e)=>handleInput(e)}
                            onKeyPress={(e)=>handleEnter(e)}
                            placeholder={inputValue}
                        />
                        <Modal/>
                    </SearchWrapper>  
                    <div className="float-right">
                        <Link to='/cart' style={{textDecoration:"none"}}>
                            <i className="fas fa-shopping-cart"/>
                            <NavSpan className="cart_num" style={{fontSize: "15px",position:"relative",bottom:"15px"}}>{value.cart.length}</NavSpan>
                        </Link>
                    </div>  
                </Nav>    
            )                 
            }
        }           
    </ProductConsumer>           
)

const Nav = styled.nav`
    background: rgb(204, 0, 0);
    border: 1px solid rgb(204, 0, 0);
    height:60px;
    font-size: 20px;
    width: 100%;
    .fa-home{
        color:white;
        margin-left: 25px;
        margin-right: 58px;
    }
    .float-right{
        margin-right: 30px;
        & i{
            color:white;    
        }
    }
`
const SearchWrapper = styled.div`
    position: relative;
    margin-right: 340px;
    .form-control{
        width: 420px;
        border: 1px solid rgb(204, 0, 0);
        border-radius: 30px;
        :focus{
            outline: none;
            box-shadow: none;   
        }
    }
`
const NavSpan = styled.span`
    color: white;
`

export default Navbar;