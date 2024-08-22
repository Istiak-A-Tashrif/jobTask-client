import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Product from './components/Product'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <Product
  name="Sample Product"
  image="https://via.placeholder.com/400x300"
  description="This is a sample product description."
  price="99.99"
  category="Electronics"
  ratings={3}
  creationDate="2024-08-22T15:30:00Z"
  brand="Apple"
/>
    <Product
  name="Sample Product"
  image="https://via.placeholder.com/400x300"
  description="This is a sample product description."
  price="99.99"
  category="Electronics"
  ratings={3}
  creationDate="2024-08-22T15:30:00Z"
  brand="Apple"
/>
    <Product
  name="Sample Product"
  image="https://via.placeholder.com/400x300"
  description="This is a sample product description."
  price="99.99"
  category="Electronics"
  ratings={3}
  creationDate="2024-08-22T15:30:00Z"
  brand="Apple"
/>
    <Product
  name="Sample Product"
  image="https://via.placeholder.com/400x300"
  description="This is a sample product description."
  price="99.99"
  category="Electronics"
  ratings={3}
  creationDate="2024-08-22T15:30:00Z"
  brand="Apple"
/>
    <Product
  name="Sample Product"
  image="https://via.placeholder.com/400x300"
  description="This is a sample product description."
  price="99.99"
  category="Electronics"
  ratings={3}
  creationDate="2024-08-22T15:30:00Z"
  brand="Apple"
/>
    <Product
  name="Sample Product"
  image="https://via.placeholder.com/400x300"
  description="This is a sample product description."
  price="99.99"
  category="Electronics"
  ratings={3}
  creationDate="2024-08-22T15:30:00Z"
  brand="Apple"
/>
    </div>
    </>
  )
}

export default Home
