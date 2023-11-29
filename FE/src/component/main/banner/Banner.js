import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Banner() {
    const [activeBanner, setActiveBanner] = useState("banner1");
    const [progress, setProgress] = useState(0);

    const handleBannerChange = (bannerId) => {
        setActiveBanner(bannerId);
    };

    const autoChangeBanner = () => {
        const bannerIds = ["banner1", "banner2", "banner3", "banner4"];
        const currentIndex = bannerIds.indexOf(activeBanner);
        const nextIndex = (currentIndex + 1) % bannerIds.length;
        const nextBanner = bannerIds[nextIndex];
        handleBannerChange(nextBanner);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            autoChangeBanner();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [activeBanner]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prevProgress) => (prevProgress + 1) % 101);
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    return (
        < section id="section-1" >
            <div className="content-slider">
                <input type="radio" id="banner1" className="sec-1-input" name="banner" defaultChecked />
                <input type="radio" id="banner2" className="sec-1-input" name="banner" />
                <input type="radio" id="banner3" className="sec-1-input" name="banner" />
                <input type="radio" id="banner4" className="sec-1-input" name="banner" />
                <div className="slider">
                    <div id="top-banner-1" className="banner">
                        <div className="banner-inner-wrapper header-text">
                            <div className="main-caption">
                                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                                <h1>Caribbean</h1>
                                <div className="border-button"><Link to="about.html">Go There</Link></div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="more-info">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-user" />
                                                    <h4><span>Population:</span><br />44.48 M</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-globe" />
                                                    <h4><span>Territory:</span><br />275.400 KM<em>2</em></h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-home" />
                                                    <h4><span>AVG Price:</span><br />$946.000</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <div className="main-button">
                                                        <Link to="about.html">Explore More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="top-banner-2" className="banner">
                        <div className="banner-inner-wrapper header-text">
                            <div className="main-caption">
                                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                                <h1>Switzerland</h1>
                                <div className="border-button"><Link to="about.html">Go There</Link></div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="more-info">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-user" />
                                                    <h4><span>Population:</span><br />8.66 M</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-globe" />
                                                    <h4><span>Territory:</span><br />41.290 KM<em>2</em></h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-home" />
                                                    <h4><span>AVG Price:</span><br />$1.100.200</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <div className="main-button">
                                                        <Link to="about.html">Explore More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="top-banner-3" className="banner">
                        <div className="banner-inner-wrapper header-text">
                            <div className="main-caption">
                                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                                <h1>France</h1>
                                <div className="border-button"><Link to="about.html">Go There</Link></div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="more-info">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-user" />
                                                    <h4><span>Population:</span><br />67.41 M</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-globe" />
                                                    <h4><span>Territory:</span><br />551.500 KM<em>2</em></h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-home" />
                                                    <h4><span>AVG Price:</span><br />$425.600</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <div className="main-button">
                                                        <Link to="about.html">Explore More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="top-banner-4" className="banner">
                        <div className="banner-inner-wrapper header-text">
                            <div className="main-caption">
                                <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
                                <h1>Thailand</h1>
                                <div className="border-button"><Link to="about.html">Go There</Link></div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="more-info">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-user" />
                                                    <h4><span>Population:</span><br />69.86 M</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-globe" />
                                                    <h4><span>Territory:</span><br />513.120 KM<em>2</em></h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <i className="fa fa-home" />
                                                    <h4><span>AVG Price:</span><br />$165.450</h4>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-6">
                                                    <div className="main-button">
                                                        <Link to="about.html">Explore More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="controls">
                        <label htmlFor="banner1"><span className="progressbar"><span className="progressbar-fill" style={{ width: `${progress}` }}/></span><span className="text">1</span></label>
                        <label htmlFor="banner2"><span className="progressbar"><span className="progressbar-fill" style={{ width: `${progress}` }}/></span><span className="text">2</span></label>
                        <label htmlFor="banner3"><span className="progressbar"><span className="progressbar-fill" style={{ width: `${progress}` }}/></span><span className="text">3</span></label>
                        <label htmlFor="banner4"><span className="progressbar"><span className="progressbar-fill" style={{ width: `${progress}` }}/></span><span className="text">4</span></label>
                    </div>
                </nav>
            </div>
        </section >

    )
}

export default Banner;