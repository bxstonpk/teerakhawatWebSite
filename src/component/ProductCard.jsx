import React from 'react'

function ProductCard() {
  return (
    <section id='productCard'>
        <div className='border border-gray-400 rounded-2xl bg-white py-2'>
            <div className=''>
                <img src="./GallonSim.png" alt="product" className='w-32 h-32 object-cover content-center justify-center '/>
            </div>
            <div className='mx-2 text-yellow-500'>
                <span className='text-sm'>Gallon Items</span>
            </div>
            <div className='mx-2'>
                <div>
                    <span className='text-sm'>แกลลอนเหลี่ยมฝาเกลียว 1.5”</span>
                    <br />
                    <span className='text-sm'>น้ำหนัก 0.4 กก.</span>
                </div>
                <div className='flex justify-between mt-1'>
                    <p className='text-red-500'>Price : TBA</p>
                    <img src="./shopping-cart.png" alt="" className='w-8 md:w-8 lg:w-10 object-cover cursor-pointer'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductCard