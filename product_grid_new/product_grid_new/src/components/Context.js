import React, { Component } from 'react';
import { Item } from './data';

const context = React.createContext();


class ProductProvider extends Component{
    constructor(){
       super()
       this.state={
        Item,
        cart:[],
        detailProduct: Item[0],
        showModal: false,
        inputValue: '',
        showResults: false,
        resultsList: []
       }
    }

    handleDetail = (upc) =>{
       const product = this.state.Item.find(item=>item.upc===upc);
       this.setState({
         detailProduct: product
       })
    }

    handleAdd = (upc) =>{
      const product = this.state.Item.find(item=>item.upc===upc);
      let newCart=[...this.state.cart];
      newCart.push(product);
      this.setState({
        cart: newCart
      })
    }
    
    handleDelete = (key) =>{
      const newCart = [...this.state.cart];
      const product = newCart.find(item=>item.key===key);
      const index = newCart.indexOf(product);
      newCart.splice(index,1);
      this.setState({
        cart: newCart
      })
    }

    Modalopen = () =>{
       this.setState({
         showModal: true
       })
    }

    Modalout = () =>{
      this.setState({
        showModal: false
      })
    }

    handleInput = (e)=>{
      let value = e.target.value;
      this.setState({
        inputValue: value,
        showModal: true
      })
    }

    handleEnter = (e) =>{
      if(e.key==='Enter'){
      const copyItem =[...this.state.Item];
      const newList = copyItem.filter(item=>item.title.toLowerCase().includes(this.state.inputValue));
      this.setState({
        resultsList: newList,
        showResults: true,
        showModal: false,
        inputValue: ''
      })
      }
    }

    showHome = () =>{
      this.setState({
        showResults: false
      })
    }

    render(){
      return (
        <context.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleAdd: this.handleAdd,
          handleDelete: this.handleDelete,
          Modalopen: this.Modalopen,
          Modalout: this.Modalout,
          handleInput: this.handleInput,
          handleEnter: this.handleEnter,
          showHome: this.showHome
        }}>
          {this.props.children}
        </context.Provider>
      )
    }
  }
const ProductConsumer = context.Consumer;

export {ProductProvider, ProductConsumer}

