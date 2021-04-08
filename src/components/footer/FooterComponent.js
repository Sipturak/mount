import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


export const FooterComponent = () => {
    return (   
        <div class="foo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 foo-text text-center">
                            <h3 class="foo-h3">Location</h3>
                            <p>Serbia,Belgrade<br/>Takovska 11</p>
                        </div>
                        <div class="col-md-4 foo-text text-center">
                            <h3 class="foo-h3">Around the Web</h3>
                            <ul class="list-inline foo-img">
                                <img src="/images/facebook.svg" class="foo-icon" alt=""/>
                                <img src="/images/twitter.svg" class="foo-icon" alt=""/>
                                <img src="/images/instagram.svg" class="foo-icon" alt=""/>
                                <img src="/images/google.svg" class="foo-icon" alt=""/>
                            </ul>
                        </div>
                        <div class="col-md-4 foo-text text-center">
                            <h3 class="foo-h3">About</h3>
                            <p>This is a sample page created to demonstrate power.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

