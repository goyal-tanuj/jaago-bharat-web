import React from 'react'
import "./App.css"
export default function Carousel(props) {
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " src={ props.bimg } alt="First slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={ props.bimg1 } alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={ props.bimg2 } alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={ props.bimg3 } alt="fourth slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={ props.bimg4 } alt="fifth slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </>
  )
}

export function Carousel1(props) {
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " src={ props.bimg } alt="First slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={ props.bimg1 } alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={ props.bimg2 } alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </>
  )
}