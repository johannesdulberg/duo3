import React from 'react'
import {useRef,useEffect,useState}  from "react"

export default function SplitBoxImgAndText(props) {
    const headerText = props.args.headerText

  return (
    <section name='about'  className="w-full">
       <h2 className="text-4xl sm:text-6xl xl:text-[80px] lg:text-[55px] md:text-[45px] font-bold text-center pt-10">{props.args.headerText}</h2>
        
  
    </section>
     )
    }