import React, { useEffect, useRef } from 'react'
import dev_svg from '../images/develpoer.json';
import Lottie from 'lottie-web';
export default function Home() {
  const animationContainer=useRef(null);
  useEffect(()=>{
    handleAnimation();
  },[])
  function handleAnimation(){
    Lottie.loadAnimation({
      container:animationContainer.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      // animationData:require('../images/develpoer.json')
      animationData:dev_svg,
    })
  }
  return (
    <div>
      <section id="header" className=''>
        <div className='container-fluid nav_bg'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                <h1>
                  Grow your business with <strong className='brand_name'>AJ Studio</strong>
                </h1>
                <h2 className='my-3'>
                  We are the team of talented developer making websites
                </h2>
                <div className='mt-3'>
                  <a href='#' className='btn btn-outline-primary  '>
                    Get Started</a>
                </div>

              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <div  ref={animationContainer} ></div>
                
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
