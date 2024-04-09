import React from 'react'

function closeForm(){
    document.getElementById('quotation').style.display = 'none';
}

function openForm(){
    document.getElementById('quotation').style.display = 'block'
}

function Quotation() {
  return (
    <section id='quotation'>
        <div className='w-screen h-screen'>
            <div>
                <button type='button' onClick={closeForm()}></button>
            </div>
        </div>
    </section>
  )
}

export default {
    Quotation,
    closeForm,
    openForm,
}