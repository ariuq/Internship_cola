'use client'

import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import pampersImage from "../../public/assets/images/a.png"
import PlusMinus from '@components/plusMinus'
import deleteIcon from "../../public/assets/icons/exit.svg"
import exitIcon from "../../public/assets/icons/back.svg"

export default function CartPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);
  console.log("cartItems", cartItems)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  return (
    <div className='font-comfortaa text-indigo'>
      {loading ? (
        <div>Loading...</div>
      ) : cartItems.length === 0 ? (
        <div>
          <Link href="/products" className='flex'><Image src={exitIcon} width={12} height={12}/> <span className='text-sm underline'>Сагс хоосон байна.</span> </Link>
        </div>
      ) : (
        <>
        <h1 className="mb-4 text-xl">Таны сонгосон бүтээгдэхүүн</h1>
        <div className="grid md:grid-cols-4 md:gap-5">
          
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Бүтээгдэхүүн</th>
                  <th className="p-5 text-right">Тоо ширхэг</th>
                  <th className="p-5 text-right">Үнэ</th>
                  <th className="p-5">Устгах</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <Link
                        href={`/product/${item.id}`}
                        className="flex items-center"
                      >
                        <Image
                          src={pampersImage}
                          alt={item.productname}
                          width={50}
                          height={50}
                          className="p-1"
                        ></Image>
                        {item.productname}
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                    <PlusMinus item={item}/>
                    </td>
                    <td className="p-5 text-right">15654₮</td>
                    <td className="p-5 text-center">
                      <button
                        className="default-button"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                       <Image src={deleteIcon} width={15} height={15}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="card p-5">
              <ul>
                
                <li className='pb-3 text-lg'>
                  <button
                    onClick={() => router.push('/shipping')}
                    className="primary-button w-full"
                  >
                    Үргэлжлүүлэх  
                  <span>{" "+itemsPrice}₮</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  )
}