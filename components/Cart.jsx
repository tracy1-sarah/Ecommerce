import React,{useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
  
  
function Cart() {
  const cartRef = useRef()
  const {totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext()

  return (
    <div>

    </div>
  )
}

export default Cart