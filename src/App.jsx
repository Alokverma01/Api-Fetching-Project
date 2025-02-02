import { useEffect } from 'react'
import './App.css'
import {data} from './api/data'
import { useState } from 'react'
import { userData } from './api/userData'
import PostCards from './components/PostCards'
import RandomUserDataCard from './components/RandomUserDataCard'
function App() {

  // for rendering only title and description 

//   const[userData, setUserData] = useState()
// useEffect(() => {
//    data().then((response) => {
//       setUserData(response);
//    })
// }, [])

//   for render the random user data with image 

const[randomUserData, setRandomUserData] = useState(null)
const[refresh, setRefresh] = useState(false)
useEffect(() => {
  userData().then((response) => {
     setRandomUserData(response.results[0]);
  })
}, [refresh])
  return (
    <>
       {/* {
         userData ? userData.map((e) => <PostCards id= {e.id} title= {e.title} body={e.body}/>) : <p>data nahi hai</p>
      //  } */}
       {
     randomUserData ? <RandomUserDataCard data= {randomUserData}/> : <p>Loading...</p>
    }
    <button style={
      {marginLeft:"550px", marginTop:"30px", padding:"40px", background:"crimson", font:"30px", borderRadius:"15px"}
      }  onClick={()=>{
      setRefresh(!refresh)
      }}>Refresh</button>
    </>
  )
}

export default App
