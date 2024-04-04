import React from 'react'

function Content() {
  return (
    <section id='Home' className=''>
      <div className='flex mx-4 mt-4 lg:mx-20 xl:mx-32 content-center'>
        <div className=''>
          <div className=''>
            <span className='text-base border-l-2 border-l-primary-1000 pl-6'>Teerakhawat ATLAS</span>
          </div>
          <div className='mt-6 lg:mt-10'>
            <p className='text-xs md:text-base lg:text-4xl'>Our product are made with meticulous care.</p>
            <p className='text-xs md:text-base lg:text-3xl'>in order to have quality products and is trusted by customers.</p>
          </div>
          <div className='my-10 md:my-14 lg:my-16 border-primary-700 border-2 h-12 lg:h-16 w-40 md:w-72 lg:w-96 content-center text-center rounded-3xl'>
            <span className='text-xl md:text-2xl lg:text-4xl'>GALLON</span>
          </div>
          <div className=''>
            <span className=' md:text-xl lg:text-3xl'>บริษัท ธีรฆวัฒน์ แคน จำกัด</span>
            <div className='pt-1 md:pt-2'>
              <span className='text-sm md:text-xl lg:text-3xl'>ผู้ผลิต จำหน่าย และรับจ้างผลิต ปี๊บวิลาส แกลลอนวิลาส</span>
            </div>
          </div>
          <div className='mt-10 flex'>
            <div className='border-2 w-32 h-10 md:w-48 md:h-12 lg:w-52 lg:h-16 text-center content-center bg-primary-700 text-white rounded-lg hover:rounded-3xl hover:bg-primary-800'>
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
        <div className='grid absolute left-1/2' id='con-pic'>
          <img src="./GallonSim.png" alt="photo" className='hidden md:block h-80 object-corver md:h-96 md:mt-10 md:object-cover' id='con-img-right'/>
        </div>
      </div>
      <div className='bg-primary-700 w-full h-fit rounded-3xl my-8' id='con-box'>
        <div className='flex justify-between'>
          <div className='text-white text-xl md:text-4xl lg:text-6xl content-center'>
            <div className='ml-5 md:ml-10 lg:ml-20 mt-10 md:mt-16'>
              <span>Teerakhawat Can</span>
            </div>
            <div className='ml-8 md:ml-28 lg:ml-48'>
              <span>Company Limited</span>
            </div>
          </div>
          <div className='lg:mr-24 lg:mt-8'>
            <img src="./location.jpg" alt="picFac" className='m-8 w-32 h-32 md:w-52 md:h-52 lg:w-72 lg:h-72 border-double border-2 rounded-full object-cover'/>
          </div>
        </div>
        <div className='mx-4 md:mx-10 lg:mx-16 text-xs md:text-xl lg:text-3xl'>
          <div>
            <div className='mb-4 text-white'>
              <span>ก่อตั้งปี พ.ศ. 2564 ตั้งอยู่เลขที่ 62/55 หมู่ที่ 2 ตำบลนาดี อำเภอเมืองสมุทรสาคร จังหวัดสมุทรสาคร</span>
              <br />
              <br />
              <span>วิสัยทัศน์ (VISION)</span>
              <div className='ml-4 md:ml-8 lg:ml-24'>
                <span>เป็นบริษัทที่สร้างความมั่นใจ ทั้งคุณภาพ และผลิตภัณฑ์ที่ดีให้กับลูกค้า</span>
              </div>
            </div>
            <div className='flex justify-end mr-8 my-8 lg:mr-24' id='read-more'>
              <div></div>
              <div></div>
              <div className='border-2 w-24 h-8 md:w-36 md:h-12 lg:w-52 lg:h-14 bg-primary-1000 text-center content-center rounded-2xl'>
                <a href="#">
                  <p>อ่านเพิ่มเติม</p>
                </a>
              </div>
            </div>
              <div className='h-1 md:h-4 lg:h-8 xl:h-10'></div>
          </div>
          <div></div>
        </div>
      </div>
      <div className='flex justify-center text-center content-center'>
        <div className='md:w-12'></div>
        <div className='bg-gray-300 w-80 h-72 md:w-full rounded-2xl' id='product-items'>
          <div className='text-lg pt-4'>
            <span className='text-xl'>ผลิตภัณฑ์ของเรา</span>
          </div>
        </div>
        <div className='md:w-12'></div>
      </div>
      <div>
        4
      </div>
    </section>
  )
}

export default Content