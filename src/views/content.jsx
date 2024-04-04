import React from 'react'

function Content() {
  return (
    <section id='Home' className='mx-4 mt-4 lg:mx-20'>
      <div className='flex'>
        <div className=''>
          <div className=''>
            <span className='text-base border-l-2 border-l-primary-1000 pl-6'>Teerakhawat ATLAS</span>
          </div>
          <div className='mt-6 lg:mt-10'>
            <p className='text-xs md:text-base lg:text-4xl'>Our product are made with meticulous care.</p>
            <p className='text-xs md:text-base lg:text-3xl'>in order to have quality products and is trusted by customers.</p>
          </div>
          <div className='my-10 md:my-14 lg:my-16 border-2 h-12 lg:h-16 w-40 md:w-72 lg:w-96 content-center text-center rounded-3xl'>
            <span className='text-xl md:text-2xl lg:text-4xl'>GALLON</span>
          </div>
          <div className=''>
            <span className=' md:text-xl lg:text-3xl'>บริษัท ธีรฆวัฒน์ แคน จำกัด</span>
            <div className='pt-1 md:pt-2'>
              <span className='text-sm md:text-xl lg:text-3xl'>ผู้ผลิต จำหน่าย และรับจ้างผลิต ปี๊บวิลาส แกลลอนวิลาส</span>
            </div>
          </div>
          <div className='mt-10 flex'>
            <div className='border-2 w-32 h-10 md:w-48 md:h-12 lg:w-52 lg:h-16 text-center content-center bg-primary-900 text-white rounded-lg hover:rounded-3xl'>
              <a href="#">
                <span className='md:text-xl lg:text-2xl'>ขอใบเสนอราคา</span>
              </a>
            </div>
            <div className='w-32 h-10 md:w-48 md:h-12 lg:w-52 lg:h-16 text-center content-center '>
              <a href="#">
                <span className='md:text-xl lg:text-2xl'>See More</span>
              </a>
            </div>
          </div>
        </div>
        <div className='grid'>
          <img src="./GallonSim.png" alt="photo" className='hidden md:block h-80 object-corver md:h-96 md:mt-10 md:object-cover lg:h-96'/>
        </div>
      </div>
      <div>
        2
      </div>
      <div>
        3
      </div>
      <div>
        4
      </div>
    </section>
  )
}

export default Content