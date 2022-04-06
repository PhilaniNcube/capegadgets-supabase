import supabase from '../utils/supabase'

const getOrders = async () => {
  let { data: Orders, error } = await supabase.from('Orders').select('*')

  return Orders
}

export default getOrders
