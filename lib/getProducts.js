import supabase from '../utils/supabase'

const getProducts = async () => {
  let { data: Product, error } = await supabase
    .from('Product')
    .select('*, brand(id,name), category(id,name), supplier(id,name)')

  return Product
}

export default getProducts
