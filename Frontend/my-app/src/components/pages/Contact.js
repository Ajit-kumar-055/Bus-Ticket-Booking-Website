import React,{ useState } from "react";

const Contact = () =>{
    return(
        <div className = "container">
            <section className ="text-center">
                <div className="p-5 bg-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/3.jpg")', height: '300px'}} />
                <div className="shadow-lg p-3 mb-5 bg-body rounded-3 card mx-4 mx-md-5" style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Contact Us</h2>
                            <form>
                                <div className="form-outline mb-4">
                                    <textarea className="form-control" placeholder="Tell us about.."/>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                                <div className="form-outline mb-5">
                                    <input type="email" placeholder="Mobile No" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Send
                                </button>
                                
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

      
    )
}

export default Contact;