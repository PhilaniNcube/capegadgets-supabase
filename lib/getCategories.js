import supabase from '../utils/supabase'

const getCategories = async () => {
  let { data: Category, error } = await supabase.from('Category').select('*')

  return {
    categories: Category,
  }
}

export default getCategories
