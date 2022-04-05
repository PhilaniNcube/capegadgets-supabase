import axios from 'axios'
import cookie from 'cookie'

export default async function (req, res) {
  const response = await axios.post(
    `https://portal.intellimali.co.za/web/payment`,
    {
      username: process.env.INTELLI_USERNAME,
      password: process.env.INTELLI_PASSWORD,
      cardNumber: req.body.cardNumber,
      terminalId: '94DVA001',
      amount: parseInt(req.body.amount),
      redirectSuccess: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/orders/${req.body.reference}?success=true`,
      redirectCancel: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment/failed`,
      reference: req.body.reference,
    },
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }
  )

  const { data } = await response

  res.send(data)
}
