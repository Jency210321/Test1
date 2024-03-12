import React, { useState } from 'react'
import Card from './Card'
import {motion} from 'framer-motion'

function Foreground() {
    const data=[
        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            filesize:"9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            filesize:"2mb",
            close:false,
            tag:{isOpen:false,tagTitle:"Download Now",tagColor:"blue"}
        },
        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            filesize:"7mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Upload",tagColor:"green"}
        }
    ]
  return (
    <div className="fixed flex gap-5 flex-wrap p-5 top-0 left-0 z-[3] w-full h-full">
       {data.map((item,index)=>(
        <Card data={item}/>
       ))}
       

    </div>
  )
}

export default Foreground