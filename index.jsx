 var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content />
        <meta name="author" content />
        <title>Explore</title>
        {/* CSS FILES */}        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Sono:wght@200;300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/bootstrap-icons.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link href="css/templatemo-pod-talk.css" rel="stylesheet" />
        {/*

TemplateMo 584 Pod Talk

https://templatemo.com/tm-584-pod-talk

*/}
        <main>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand me-lg-5 me-0" href="index.html">
                <img src="images/pod-talk-logo.png" className="logo-image img-fluid" alt="templatemo pod talk" style={{width: '300px'}} />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-lg-auto" />
                <div className="ms-4">
                  <a href="#section_3" className="btn custom-btn custom-border-btn smoothscroll">Login/SignUp</a>
                </div>
              </div>
            </div>
          </nav>
          <section className="hero-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="text-center mb-5 pb-2">
                    <h1 className="text-white">Exploring Podcasts with PodChord</h1>
                    <p className="text-white">Listen it everywhere. Explore your fav podcasts.</p>
                    <a href="#section_2" className="btn custom-btn smoothscroll mt-3">Start listening</a>
                  </div>
                  <div className="owl-carousel owl-theme">
                    <div className="owl-carousel-info-wrap item">
                      <img src="images/profile/1.jpg" className="owl-carousel-image img-fluid" alt="" />
                      <div className="social-share">
                        <ul className="social-icon">
                        </ul>
                      </div>
                    </div>
                    <div className="owl-carousel-info-wrap item">
                      <img src="images/profile/2.jpg" className="owl-carousel-image img-fluid" alt="" />
                      <div className="social-share">
                        <ul className="social-icon">
                        </ul>
                      </div>
                    </div>
                    <div className="owl-carousel-info-wrap item">
                      <img src="images/profile/3.jpg" className="owl-carousel-image img-fluid" alt="" />
                      <div className="social-share">
                        <ul className="social-icon">
                        </ul>
                      </div>
                    </div>
                    <div className="owl-carousel-info-wrap item">
                      <img src="images/profile/4.jpg" className="owl-carousel-image img-fluid" alt="" />
                      <div className="social-share">
                      </div>
                    </div>
                    <div className="owl-carousel-info-wrap item">
                      <img src="images/profile/5.jpg" className="owl-carousel-image img-fluid" alt="" />
                      <div className="social-share">
                        <ul className="social-icon">
                        </ul>
                      </div>
                    </div>
                    <div className="owl-carousel-info-wrap item">
                      <img src="images/profile/6.jpg" className="owl-carousel-image img-fluid" alt="" />
                      <div className="social-share">
                        <ul className="social-icon">
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="latest-podcast-section section-padding pb-0" id="section_2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="section-title-wrap mb-5">
                    <h4 className="section-title">Lastest episodes</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                  <div className="custom-block d-flex">
                    <div className>
                      <div className="custom-block-icon-wrap">
                        <div className="section-overlay" />
                        <a href="detail-page.html" className="custom-block-image-wrap">
                          <img src="images/podcast/1.jpg" className="custom-block-image img-fluid" alt="" />
                        </a><a href="#" className="custom-block-icon">
                          <i className="bi-play-fill" />
                        </a>
                      </div>
                    </div>
                    <div className="custom-block-info">
                      <div className="custom-block-top d-flex mb-1">
                        <small className="me-4">
                          <i className="bi-clock-fill custom-icon" />
                          50 Minutes
                        </small>
                        <small>Episode <span className="badge">10</span></small>
                      </div>
                      <h5 className="mb-2">
                        <a href="detail-page.html">
                          Who Killed JFK?
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="custom-block d-flex">
                    <div className>
                      <div className="custom-block-icon-wrap">
                        <div className="section-overlay" />
                        <a href="detail-page.html" className="custom-block-image-wrap">
                          <img src="images/podcast/2.jpg" className="custom-block-image img-fluid" alt="" />
                        </a><a href="#" className="custom-block-icon">
                          <i className="bi-play-fill" />
                        </a>
                      </div>
                    </div>
                    <div className="custom-block-info">
                      <div className="custom-block-top d-flex mb-1">
                        <small className="me-4">
                          <i className="bi-clock-fill custom-icon" />
                          120 Minutes
                        </small>
                        <small>Episode <span className="badge">15</span></small>
                      </div>
                      <h5 className="mb-2">
                        <a href="detail-page.html">
                          Tosh Show
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="topics-section section-padding pb-0" id="section_3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="section-title-wrap mb-5">
                    <h4 className="section-title">Topics</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                      <img src="images/topics/physician-consulting-his-patient-clinic.jpg" className="custom-block-image img-fluid" alt="" />
                    </a>
                    <div className="custom-block-info custom-block-overlay-info">
                      <h5 className="mb-1">
                        <a href="listing-page.html">
                          Productivity
                        </a>
                      </h5>
                      <p className="badge mb-0">50 Episodes</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                      <img src="images/topics/repairman-doing-air-conditioner-service.jpg" className="custom-block-image img-fluid" alt="" />
                    </a>
                    <div className="custom-block-info custom-block-overlay-info">
                      <h5 className="mb-1">
                        <a href="listing-page.html">
                          Technician
                        </a>
                      </h5>
                      <p className="badge mb-0">12 Episodes</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                      <img src="images/topics/woman-practicing-yoga-mat-home.jpg" className="custom-block-image img-fluid" alt="" />
                    </a>
                    <div className="custom-block-info custom-block-overlay-info">
                      <h5 className="mb-1">
                        <a href="listing-page.html">
                          Mindfullness
                        </a>
                      </h5>
                      <p className="badge mb-0">35 Episodes</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                  <div className="custom-block custom-block-overlay">
                    <a href="detail-page.html" className="custom-block-image-wrap">
                      <img src="images/topics/delicious-meal-with-sambal-arrangement.jpg" className="custom-block-image img-fluid" alt="" />
                    </a>
                    <div className="custom-block-info custom-block-overlay-info">
                      <h5 className="mb-1">
                        <a href="listing-page.html">
                          Cooking
                        </a>
                      </h5>
                      <p className="badge mb-0">12 Episodes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="trending-podcast-section section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="section-title-wrap mb-5">
                    <h4 className="section-title">Trending episodes</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                  <div className="custom-block custom-block-full">
                    <div className="custom-block-image-wrap">
                      <a href="detail-page.html">
                        <img src="images/podcast/3.webp" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="custom-block-info">
                      <h5 className="mb-2">
                        <a href="detail-page.html">
                          What Now? with Trevor Noah
                        </a>
                      </h5>
                    </div>
                    <div className="social-share d-flex flex-column ms-auto">
                      <a href="#" className="badge ms-auto">
                        <i className="bi-heart" />
                      </a>
                      <a href="#" className="badge ms-auto">
                        <i className="bi-bookmark" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                  <div className="custom-block custom-block-full">
                    <div className="custom-block-image-wrap">
                      <a href="detail-page.html">
                        <img src="images/podcast/4.jpg" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="custom-block-info">
                      <h5 className="mb-2">
                        <a href="detail-page.html">
                          The Defenders
                        </a>
                      </h5>
                      <div className="custom-block-bottom d-flex justify-content-between mt-3">
                      </div>
                    </div>
                    <div className="social-share d-flex flex-column ms-auto">
                      <a href="#" className="badge ms-auto">
                        <i className="bi-heart" />
                      </a>
                      <a href="#" className="badge ms-auto">
                        <i className="bi-bookmark" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="custom-block custom-block-full">
                    <div className="custom-block-image-wrap">
                      <a href="detail-page.html">
                        <img src="images/podcast/5.jpg" className="custom-block-image img-fluid" alt="" />
                      </a>
                    </div>
                    <div className="custom-block-info">
                      <h5 className="mb-2">
                        <a href="detail-page.html">
                          The Bakersfield Three
                        </a>
                      </h5>
                    </div>
                    <div className="social-share d-flex flex-column ms-auto">
                      <a href="#" className="badge ms-auto">
                        <i className="bi-heart" />
                      </a>
                      <a href="#" className="badge ms-auto">
                        <i className="bi-bookmark" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer">   
          <div className="container">
            <div className="row">
            </div>
          </div>
          <div className="container pt-5">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3 col-12">
                <a className="navbar-brand" href="index.html">
                  <img src="images/pod-talk-logo.png" className="logo-image img-fluid" alt="templatemo pod talk" style={{width: '600px'}} />
                </a>
              </div>
              <div className="col-lg-7 col-md-6 col-11 offset-md-2 offset-2">
                <p className="copyright-text mb-0 text-md-end">Copyright © 2023 PodChord</p>
              </div>
            </div>
          </div>
        </footer>
        JAVASCRIPT FILES
      </div>
    );
  }
});