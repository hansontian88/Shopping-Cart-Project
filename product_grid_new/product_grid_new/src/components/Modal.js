import React, { Fragment } from 'react';
import { ProductConsumer } from './Context';
import styled from 'styled-components';

const Modal = () => (
  <ProductConsumer>
    {value => {
      const { showModal, inputValue } = value
      if (!showModal) {
        return null;
      } else {
        return (
          <Modalwrapper>
            <ModalContent className="modal-body">
              {
                value.Item.filter(item=>item.title.toLowerCase().includes(inputValue)).map(item=>(
                <Fragment key={Math.random()+Math.random()}>
                  <p style={{fontSize:"18px"}}>{item.title}</p>
                  <hr/>
                </Fragment>     
                ))             
              }
            </ModalContent>
          </Modalwrapper>
        )
      }
    }}
  </ProductConsumer>
)

const Modalwrapper = styled.div`
position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 60px;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
const ModalContent = styled.div`
  position: absolute;
  top: 0px;
  margin-left:290px;
  width:420px;
  background-color: white
`
export default Modal





