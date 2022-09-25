
import React, { useState } from 'react';
import "./Accordion.css"
import Card from './Card';


const Accordion = () => {

    const [faqs, setFaqs] = useState([
        {
        id: 1,
        question: "Do i have to allow the use of cookies?",
        answer: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
            id: 2,
            question: "How do i change my Page Password?",
            answer: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        },
    {
            id: 3,
            question: "What is Bank Id?",
            answer: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        },
    {
            id: 4,
            question: 'Whose Birth number can i use?',
            answer: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
        },
    {
            id: 5,
            question: "When do i receive a password ordered by letter",
            answer: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"
        }
    ])



  return (
      <div className='container'>
          <h1>Questions and Answers About Login</h1>
          <div className='cards'>
              <Card faqs={faqs} setFaqs={setFaqs} />
          </div>
      </div>
  )
}

export default Accordion