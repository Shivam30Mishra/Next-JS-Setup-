"use client"

import { useEffect,useState } from 'react'
import axios from 'axios'

export default function Sign() {
  const [ loading,setLoading ] = useState(true)
  const [ data,setData ] = useState({})

  useEffect(()=>{
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
      .then(response =>{
        setData(response.data)
        setLoading(false)
      })
  },[])

  if(loading){
    return (
      <>
        loading
      </>
    )
  }

  return(
    <>
      {data?.name}
      {data?.email}
    </>
  )

}