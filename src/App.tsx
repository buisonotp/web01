import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { productType } from './types/productTypes'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios'

function App() {
  const [counts, setCount] = useState<productType[]>([])

  useEffect (() =>{
    const getProduct = async()=>{
      const {data} =await axios.get(' http://localhost:3001/posts');
      setCount(data);
    } 
    getProduct()
  },[])

  const startRemove= (id:number)=>{
     axios.delete(("http://localhost:3001/posts/"+id))
     //onclick xóa luôn
     setCount(counts.filter(item=>item.id!==id))  ///nếu item lặp ra 1 item mới ko bao gồm id click vào thì sẽ sét luôn 
  }

  return (
    <div >
      <Routes> 
        <Route path="/" element={<Home counts={counts} onRemove={startRemove}/>}   /> 
      </Routes>

   
    </div>
  )
}

export default App
