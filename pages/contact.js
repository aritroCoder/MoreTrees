import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import  styles from '/styles/contact.module.css'

const contact = () => {


    return (
        <>

    
            <Head>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

            </Head>
            <Navbar />
            <div className={` ${styles.contact4} ${styles.bginfo}  overflow-hiddedn position-relative`}  >
                <div className="row no-gutters">
                    <div className="container">
                        <div className={`col-lg-6 ${styles.contactbox} mb-4 mb-md-0`}>
                            <div className="">
                                <h1 className="title font-weight-medium text-white mt-2 ">Contact Us</h1>
                                <form className="mt-3">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2" >
                                                <input className={` ${styles.formcontrol} text-white`} type="text" placeholder="name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12" >
                                            <div className="form-group mt-2">
                                                <input className={` ${styles.formcontrol} text-white`} type="email" placeholder="email address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12" >
                                            <div className="form-group mt-2" >
                                                <textarea className={` ${styles.formcontrol} text-white`} rows="3" placeholder="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-flex align-items-center mt-2"  >
                                            <button type="submit" className={`btn bg-white ${styles.textinverse} px-3 py-2`} ><span> Submit</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.rightimage}  col-lg-6  p-r-0`} >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
                            width="100%" height="538" frameborder="0" style={{ border: "0" }} allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe>
                    </div>
                </div>
            </div>

        </>


    );
}

export default contact;