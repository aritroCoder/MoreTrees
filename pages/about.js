import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Head from 'next/head';
import Image from 'next/image';
const about = () => {
  return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>


   





<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
    </Head>
        <Navbar/>
<div id="about">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="about-text">
          <h2>Welcome to <span>More Trees</span></h2>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
          <a href="#services" class="btn btn-custom btn-lg page-scroll">View All Services</a> </div>
      </div>
      <div class="col-xs-12 col-md-3">
        <div class="about-media"> <Image src="/about-1.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="about-desc">
          <h3>Garden Care</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis.</p>
        </div>
      </div>
      <div class="col-xs-12 col-md-3">
        <div class="about-media"> <Image src="/about-2.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="about-desc">
          <h3>Lawn Care</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="services">
  <div class="container">
    <div class="col-md-10 col-md-offset-1 section-title text-center">
      <h2>Our Services</h2>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div class="row">
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-1.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3>Lawn Care</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-2.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3>Landscape Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-3.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3>Tree Care</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-4.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3>Spring & Fall Cleanup</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="portfolio">
  <div class="container">
    <div class="section-title text-center center">
      <h2>Project Gallery</h2>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div class="categories">
      <ul class="cat">
        <li>
          <ol class="type">
            <li><a href="#" data-filter="*" class="active">All</a></li>
            <li><a href="#" data-filter=".lawn">Lawn Care</a></li>
            <li><a href="#" data-filter=".garden">Garden Care</a></li>
            <li><a href="#" data-filter=".planting">Planting</a></li>
          </ol>
        </li>
      </ul>
      <div class="styles.clearfix"></div>
    </div>
    <div class="row">
      <div class="portfolio-items" style={{display:"inline-block"}}>
        <div class="col-sm-6 col-md-4 lawn">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Lorem Ipsum</h4>
              </div>
              <Image src="/01-small.jpg" height={"300vw"} width={"400vw"}  class="img-responsive" alt="Project Title"/> </a> </div>
          </div>
        </div>
        

      </div>
      <div class="portfolio-items" style={{display:"inline-block"}}>
        <div class="col-sm-6 col-md-4 lawn">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href="/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Lorem Ipsum</h4>
              </div>
              <Image src="/02-small.jpg" height={"300vw"} width={"400vw"}  class="img-responsive" alt="Project Title"/> </a> </div>
          </div>
        </div>
        

      </div>
    </div>
  </div>
</div>


<div id="services" >
  <div class="container">
    <div class="col-md-10 col-md-offset-1 section-title text-center">
      <h2 style={{paddingLeft:"10vw"}}>Our Team</h2>
      <hr style={{marginLeft:"38vw",width:"10vw"}}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div class="row">
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-1.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3>COD</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-2.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3> Designer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-3.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3>Developer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="service-media"> <Image src="/service-4.jpg" height={"200vw"} width={"250vw"} alt=" "/> </div>
        <div class="service-desc">
          <h3>Manager</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="footer">
  <div class="container text-center">
    <div class="col-md-8 col-md-offset-2">
      <div class="social" style={{marginLeft:"30vw"}}>
        <ul>
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
        </ul>
      </div>
      <p style={{marginLeft:"30vw"}}>&copy; 2022 About Us design by Tushar Banik</p>
    </div>
  </div>
</div>
    </>
  )
}

export default about