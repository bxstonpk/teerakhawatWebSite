import React from "react";
import { Link } from "react-router-dom";

function NotifySubmit() {

    const hiddenNotify = () => {
        document.getElementById('NotifySubmit').style.display = 'none';
        document.getElementById('qtForm').style.filter = 'none';
    }

  return (
    <section
      id="NotifySubmit"
      className="hidden bg-white block border border-black-700 p-8 rounded-xl text-center"
    >
      <div>บันทึกข้อมูลสำเร็จ</div>
      <br />
      <button type="button" className="bg-red-700 text-white py-1 px-6 rounded-lg" onClick={hiddenNotify}>
        <Link to="/" className="bg-red-700 text-white py-1 px-6 rounded-lg">Close</Link>
      </button>
    </section>
  );
}

export default NotifySubmit;
