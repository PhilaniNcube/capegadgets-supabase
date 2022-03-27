import { createContext, useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import getCategories from '../lib/getCategories'

const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  useEffect(async () => {
    setCategories(await getCategories())
  }, [])

  const exposed = {
    categories,
  }

  return <NavContext.Provider value={exposed}>{children}</NavContext.Provider>
}

export const useCategories = () => useContext(NavContext)

export default NavProvider
