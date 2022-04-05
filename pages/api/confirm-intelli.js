import axios from 'axios'
import supabase from '../../utils/supabase'
import cookie from 'cookie'

export default async (req, res) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  const token = cookie.parse(req.headers.cookie)['sb-access-token']

  supabase.auth.session = () => ({ access_token: token })

  const response = await axios.post(
    `https://portal.intellimali.co.za/web/payment`,
    {
      cardNumber: req.body.cardNumber,
      terminalId: '94DVA001',
      username: 'capegadgets',
      password: '9d059e3fb4efe73760d5ecee6909c2d2',
      amount: parseInt(req.body.amount),
      redirectSuccess: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/orders/${req.body.reference}?success=true`,
      redirectCancel: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment/failed`,
      reference: req.body.reference,
      token: req.body.token,
    },
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }
  )

  const { data } = await response

  if (data.errorCode === 0) {
    const order = await supabase
      .from('Orders')
      .update({ payment_id: data.traId })
      .eq('id', req.body.reference)
      .single()

    console.log(order)
  }

  res.send(data)
}
