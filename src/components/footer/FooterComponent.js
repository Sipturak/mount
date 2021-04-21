import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import footer from '../footer/footer.css'


export const FooterComponent = () => {
    return (   
        <div className="foo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 foo-text text-center">
                            <h3 className="foo-h3">Location</h3>
                            <p>Serbia,Belgrade<br/>Takovska 11</p>
                        </div>
                        <div className="col-md-4 foo-text text-center">
                            <h3 className="foo-h3">Around the Web</h3>
                            <ul className="list-inline foo-img">
                                <img src="/images/facebook.svg" className="foo-icon" alt=""/>
                                <img src="/images/twitter.svg" className="foo-icon" alt=""/>
                                <img src="/images/instagram.svg" className="foo-icon" alt=""/>
                                <img src="/images/google.svg" className="foo-icon" alt=""/>
                            </ul>
                        </div>
                        <div className="col-md-4 foo-text text-center">
                            <h3 className="foo-h3">About</h3>
                            <p>This is a sample page created to demonstrate power.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

