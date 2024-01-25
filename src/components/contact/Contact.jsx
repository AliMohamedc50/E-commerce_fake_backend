import React from 'react'

import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <div className='contact bg-blue-600'>
        <div style={{width: "50%"}} className="mx-auto flex items-center justify-between p-2 ">
            <h3 className='text-white font-normal	'>BE IN TOUCH WITH US</h3>
            <div>
                <input type="text" placeholder='Enter your email' className='p-1 px-2 rounded-s-sm' />
                <button className='bg-slate-800 text-white p-1 px-2 outline-none rounded-e-sm'>join us</button>
                </div>
                <div className="icons flex gap-1">
<PinterestIcon className='text-white' />
<GoogleIcon className='text-white' />
<TwitterIcon className='text-white' />
<InstagramIcon className='text-white' />
            </div>
        </div>
    </div>
  )
}

export default Contact
