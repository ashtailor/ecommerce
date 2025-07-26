import React, { useState } from 'react'

export const Accordion = ({faq}) => {
    const{question,answer} = faq;
    const[show,setshow] = useState(false);
    return (
    <div >
        <h2 id='accordion-flush-heading-1'>
        <button  className ="flex justify-between w-full items-center "onClick={()=> setshow(!show)} type='button'>
            <span className='font-medium px-10 mb-2  underline underline-offset-4 leading-8'>{question}</span>
           
            {!show && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>}
            {show && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>}
        </button>
    </h2>
    {show && (
        <div id='accordion-flush-body-1'>
            <div>
                 <p className='font-normal mb-4 px-10'>{answer}</p>
            </div>
        </div>
    )}

</div>
  )
}
