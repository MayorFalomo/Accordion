import React from 'react'
import Data from './Data'
import "./Card.css"

const Card = ({ faqs}) => {
    

  return (
    <div className='mappedItem'>
      {faqs.map((faq) => (
        <Data key={faq.id} faq={faq} />
      ))}
    </div>
  )
}

export default Card