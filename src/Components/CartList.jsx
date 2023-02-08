import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const CartList = () => {

    const {items} = useSelector((s) => s.cart)
    const dispatch = useDispatch();

    function handleIncItem(id){
        dispatch({type: 'INC_ITEM_COUNT', payload: id})
    }
    function handleDecItem(id){
        dispatch({type: 'DEC_ITEM_COUNT', payload: id})
    }
    function handleRemoveItem(id){
        dispatch({type: 'REMOVE_FROM_CART', payload: id})
    }

  return (
    <section className='text-bg-light'>
        <div className="container py-3">
        <div className='d-flex align-items-center justify-content-between'>
          <h1>Your Cart</h1>
          <span>Total: ${items.reduce((p,c) => p + c.product.price * c.count , 0).toFixed(2)}</span>
        </div>

        {
            items.length === 0 && <h2 className='text-center'>Cart is empty</h2>
        }

        <ul className="list-group my-3">
            {
                items.map((el, i )=> (
                    <li key={i} className="list-group-item row d-flex align-items-center">
                        <div className='col-1'>
                        <img className='img-fluid' width={150} height={150} src={el.product.image} alt={el.product.title} />
                        </div>
                    <div className='col-md-7'>
                        <h2>{el.product.title}</h2>
                        <p>{el.product.description}</p>
                    </div>
                    <div className='col-md-1'>
                        <p>${el.product.price}</p>
                    </div>
                    <div className='col-md-1 d-flex justify-content-between align-items-center'>
                        <button onClick={()=> handleDecItem(el.product.id)} disabled={el.count <= 1} className="btn btn btn-secondary">-</button>
                        <p className='m-0'>{el.count}</p>
                        <button onClick={()=> handleIncItem(el.product.id)} className="btn btn btn-secondary">+</button>
                    </div>
                    <div className='col-md-1'>
                        <p>${el.count * el.product.price}</p>
                    </div>
                    <div className='col-md-1'>
                        <button onClick={() =>handleRemoveItem(el.product.id)} className="btn btn btn-danger">
                        <i className='fa-solid fa-trash'></i>
                        </button>
                    </div>
                    </li>
                ))
            }
        </ul>

        <div className="text-end d-flex align-items-center justify-content-between">
            <Link to={'/'} className="btn btn-outline-success">
                <i className='fa-solid fa-arrow-left'></i>Back to Shopping
            </Link>

            <button disabled={items.lenght === 0} className="btn btn-success">
                Proceed to payment <i className='fa-solid fa-arrow-right'></i>
            </button>
        </div>
        </div>
    </section>
  )
}

export default CartList