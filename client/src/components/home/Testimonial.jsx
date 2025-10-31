import React from 'react'
import Title from './Title'

const Testimonial = () => {
  return (
    <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>
        <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
            <ZapIcon width={14} />
            <span>Simple Process</span>
        </div>
        
        <Title title='Build your Resume' description='Our Streamlined Process helps you create a Professional Resume in Minutes with Intelligent AI-Powered Tools and Features.' />

    </div>
  )
}

export default Testimonial
