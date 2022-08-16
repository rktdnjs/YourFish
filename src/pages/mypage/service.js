import React from 'react'
import { useState } from 'react';
import '../../styles/section.css'
import '../../styles/service.css'
import Nav from 'react-bootstrap/Nav';

const Service = () => {
  // 서비스 기본 값 FAQ

  return (
    <div>
        <section>
          <div className="section__main">
            <div className="section__mypage__service--title">SERVICE</div>
            <div className="section__mypage__service--content">
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="link-0" >FAQ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" >1:1문의</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" >내 문의내역</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div> 
        </section>
    </div>
  )
}

export default Service