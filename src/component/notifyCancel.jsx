import React from 'react'
import { Link } from 'react-router-dom'

function NotifyCancel() {

    const hiddenNotify = () => {
        document.getElementById('NotifyCancel').style.display = 'none';
        document.getElementById('qtForm').style.filter = 'none';
    }

  return (
    <section id='NotifyCancel' className='hidden bg-white block border border-black-700 p-8 rounded-xl'>
        <div className='text-sm text-center'>
            <b>ยืนยันและกลับสู่หน้าหลัก</b>
        </div>
        <br />
        <div className='flex justify-between px-2'>
            <button type="submit" className='border px-4 border-green-700 text-white bg-green-700 rounded'>
                <Link to="/">ยืนยัน</Link>
            </button>
            <button type="button" className='text-red-800' onClick={hiddenNotify}>ยกเลิก</button>
        </div>
    </section>
  )
}

export default NotifyCancel