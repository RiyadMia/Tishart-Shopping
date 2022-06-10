import { useEffect, useState } from "react"

const useTshart =()=>{
    const [tsharts,setTstarts]=useState([])
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data => console.log(data))
    },[])
    return [tsharts,setTstarts]
}
export  default useTshart;