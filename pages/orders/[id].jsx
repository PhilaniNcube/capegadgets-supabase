import React, { useEffect } from 'react'
import cookie from 'cookie'
import axios from 'axios'
import supabase from '../../utils/supabase'

const Order = ({ order, error }) => {
  console.log(order)

  useEffect(async () => {
    console.log(localStorage.getItem('intelliToken'))
    console.log(localStorage.getItem('cardNumber'))

    if (order.paid === true && order.paymentMethod === 'Intellimali') {
      console.log('confirm Order')

      const res = await axios.post(`/api/confirm-intelli`, {
        cardNumber: localStorage.getItem('cardNumber'),
        token: localStorage.getItem('intelliToken'),
        amount: parseInt((order.orderTotal + order.shipping) / 100),
        reference: order.id,
      })

      console.log('intellidata', res)
    }
  }, [])

  return <div>Order</div>
}

export default Order

export async function getServerSideProps({
  req,
  params: { id },
  query: { success },
}) {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  const token = cookie.parse(req.headers.cookie)['sb-access-token']

  supabase.auth.session = () => ({ access_token: token })
  console.log(success)

  if (success === 'true') {
    const { data, error } = await supabase
      .from('Orders')
      .update({ paid: true })
      .eq('id', id)
      .single()
  }

  let { data: Orders, error } = await supabase
    .from('Orders')
    .select('*')
    .eq('id', id)
    .single()

  return {
    props: {
      order: Orders,
      error,
    },
  }
}
