import React, {useState} from 'react'
import "./Data.css"
import {AiOutlinePlus} from "react-icons/ai"
import {HiMinus} from "react-icons/hi"

const Data = ({faq}) => {

  const [click, setClick] = useState(false)

   const dropFaq = () => {
            setClick(!click)
    }

  return (
    <div className='card'>
      <div className='flexItem'>
        <h3>{faq.question}</h3>
        <div className='reactIcons'>
          <div id='plusBtn' className={click? "icon active" : "icon"}><button onClick={dropFaq} ><AiOutlinePlus /></button></div>
          <div id='minusBtn' className={click? "icon active" : "icon"}><button onClick={dropFaq}><HiMinus/></button></div>
          </div>
      </div>
      <p className={click? "links active" : "link"}>{ faq.answer}</p>
    </div>
  )
}

export default Data