import React from 'react'
import '../../styles/section.css'
import '../../styles/service.css'
import ServiceNav from '../../components/ServiceNav'

const Service = () => {

  return (
    <div>
        <section>
          <div className="section__main">
            <div className="section__mypage__service--title">SERVICE</div>
            <div className="section__mypage__service--content">
              <ServiceNav/>
            </div>
          </div> 
        </section>
    </div>
  )
}

export default Service