/* eslint-disable */
import React from 'react'

export default function Navbar() {
    return (
        <div class="navbar-dark text-white">
            <div class="container">
            <nav class="navbar px-0 navbar-expand-lg navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a href="#" class="pl-md-0 text-decoration-none p-3 text-light">Portfolio</a>
                    <a href="#" class="p-3 text-decoration-none text-light">Clients</a>
                    <a href="#" class="p-3 text-decoration-none text-light">Services</a>
                    <a href="#" class="p-3 text-decoration-none text-light">Contact</a>
                </div>
                </div>
            </nav>
            </div>
        </div>
    )
}
