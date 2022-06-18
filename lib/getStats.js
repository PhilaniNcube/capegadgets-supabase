import supabase from '../utils/supabase'
import { useQuery } from 'react-query'

export const getPaidOrdersCount = async () => {
  let orders_count = await supabase.rpc('get_paid_orders_count')

  if (orders_count.error) {
    throw new Error(orders_count.error.message)
  }

  if (orders_count.data === null) {
    return 0
  }

  return orders_count.data
}
export const getTotalOrdersValue = async () => {
  let orders_value = await supabase.rpc('get_total_orders_value')

  if (orders_value.error) {
    throw new Error(orders_value.error.message)
  }

  if (orders_value.data === null) {
    return 0
  }

  return orders_value.data
}

export const useOrderCountQuery = async () => {
  let { data, isLoading, isSuccess, isFetching, isError } = useQuery(
    'orders_count',
    getPaidOrdersCount,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  return { data, isLoading, isSuccess, isFetching, isError }
}
