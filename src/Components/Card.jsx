import React from 'react'
import {motion} from 'framer-motion'
import {FaFilePen} from "react-icons/fa6"
import {FcDownload} from "react-icons/fc"
import { IoMdClose } from "react-icons/io";
function Card({data,reference}) {
  return (
   <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} className="relative flex-shrink w-60 h-72 rounded-xl bg-sky-400/20 text-white px-5 py-10 overflow-hidden">
        <FaFilePen />
        <p className='"text-xs leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className="footer absolute bottom-0 bg-sky-800 w-full left-0">
            <div className="flex items-center justify-between px-8 mb-1 pt-1">
               <h5 className="text-md">{data.filesize}</h5>
               <span className="w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center">
               {data.close?<IoMdClose className="text-bold text-red-900"/>:<FcDownload />}
               </span>
            </div>
            {
                data.tag.isOpen&&(
                    <div className={`tag h-8 w-full ${data.tag.tagColor==="blue"?"bg-sky-400":"bg-green-600"} flex items-center justify-center`}>
                         <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                    </div>
                )
            }
            
        </div>
   </motion.div>
   
  )
}

export default Card