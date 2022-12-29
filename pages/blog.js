import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

const Blog = () => {
    return (
        <>


            <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>

            </Head>
            <Navbar />
            <section class="home-blog bg-sand">
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-xl-5 col-lg-6 col-md-8">
                            <div class="section-title text-center title-ex1">
                                <h2>Latest News</h2>
                                <p>Inventore cillum soluta inceptos eos platea, soluta class laoreet repellendus imperdiet optio.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-6">
                            <div class="media blog-media">
                                <a href="#"><img class="d-flex image-1" src="https://static.ishaoutreach.org/d-1460x876/isha-outreach-images/2022-03/center-to-rejuvenate-13-major-rivers.jpeg" alt="Generic placeholder image" /></a>
                                <div class="circle">
                                    <h5 class="day">14</h5>
                                    <span class="month">sep</span>
                                </div>
                                <div class="media-body">
                                    <a href=""><h5 class="mt-0">Standard Blog Post</h5></a>
                                    Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                                    <a href="#" class="post-link">Read More</a>
                                    <ul>
                                        <li>by: Admin</li>
                                        <li class="text-right"><a href="#">07 comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="media blog-media">
                                <a href="#"><img class="d-flex image-2" src="https://static.ishaoutreach.org/d-1460x876/isha-outreach-images/2021-09/Blog%20Version%20Creative.png" alt="Generic placeholder image" /></a>
                                <div class="circle">
                                    <h5 class="day">12</h5>
                                    <span class="month">sep</span>
                                </div>
                                <div class="media-body">
                                    <a href=""><h5 class="mt-0">perferendis labore</h5></a>
                                    Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                                    <a href="#" class="post-link">Read More</a>
                                    <ul>
                                        <li>by: Admin</li>
                                        <li class="text-right"><a href="#">04 comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="media blog-media">
                                <a href="#"><img class="d-flex image-3" src="https://static.ishaoutreach.org/d-1460x876/isha-outreach-images/2022-07/Blog%20preview%20image_0.jpg" alt="Generic placeholder image" /></a>
                                <div class="circle">
                                    <h5 class="day">09</h5>
                                    <span class="month">sep</span>
                                </div>
                                <div class="media-body">
                                    <a href=""><h5 class="mt-0">deleniti incdunt magni</h5></a>
                                    Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                                    <a href="#" class="post-link">Read More</a>
                                    <ul>
                                        <li>by: Admin</li>
                                        <li class="text-right"><a href="#">10 comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="media blog-media">
                                <a href="#"><img class="d-flex image-4" src="https://static.ishaoutreach.org/d-1460x876/isha-outreach-images/2022-12/rise-of-velliangiri-uzhavan-fpo-article-img0.jpeg" alt="Generic placeholder image" /></a>
                                <div class="circle">
                                    <h5 class="day">04</h5>
                                    <span class="month">sep</span>
                                </div>
                                <div class="media-body">
                                    <a href=""><h5 class="mt-0">Explicabo magnam </h5></a>
                                    Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                                    <a href="#" class="post-link">Read More</a>
                                    <ul>
                                        <li>by: Admin</li>
                                        <li class="text-right"><a href="#">06 comments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;