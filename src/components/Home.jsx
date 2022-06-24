import React,{useState} from 'react'

const Home = () => {
  const [count,setCount] = useState(0)
  return (
<>
<div>Home</div>
<h1>count:{count}</h1>;
<button onClick={()=>{setCount=count+1}}>inc</button>
<button onClick={()=>{setCount=count-1}}>dec</button>
</>
  )
}

export default Home