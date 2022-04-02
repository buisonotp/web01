import React from 'react'
import { productType } from '../types/productTypes';

type typeProps = {
    counts:productType[]
    onRemove :(id:number)=>void
}

const Home = (props: typeProps) => {
  return (
    <tbody>
    {props.counts?.map((counts,index) =>{
return <tr key = {index}>
    <td>{index +1}</td>
    <td>{counts.title}</td>
    <td>{counts.author}</td>
    <td><button onClick={() => props.onRemove(counts.id)}> xoa</button></td>

</tr>
    })}
    </tbody>
  )
}

export default Home