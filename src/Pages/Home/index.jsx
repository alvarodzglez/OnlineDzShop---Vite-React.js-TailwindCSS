import { useContext } from 'react'
import Layout from "../../Components/Layout"
import Card from "../../Components/Cards"
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return(
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return(
        <p className='text-gray-300'>We have nothing to offer you :'(</p>
      )
    }
  }
 
  return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
        </div>
        <input 
          type="text" 
          placeholder='Search'
          className='rounded-lg border border-gray-500 bg-black w-40 p-4 mb-4 focus: outline-none
          hover:border-green-500 hover:text-green-500 '
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProductDetail/>
      </Layout>
    )
  }
  
  export default Home