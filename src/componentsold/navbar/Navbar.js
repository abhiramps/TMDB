import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="dannibla navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container-fluid">
          
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/movie" className="navbar-brand" href="index.html">Hollywood Movie</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li id="search-input">
                            <div className="navbar-form form-group" id="search-form">
                                <input id="searchMovies" name="searchMovies" className="form-control" autocorrect="off"
                                    placeholder="Search by Movie names / Movie Year " />
                            </div>
                        </li>
                        <li id="search-icon" className="search-nav-menu">
                            <a href="#" id="searching" className="dropdown-toggle movie-menu" data-toggle="dropdown">Search</a>
                        </li>
                        <li className="search-nav-menu"><Link to="/purchaised" className="movie-category">PURCHAISED</Link></li>
                        <li className="search-nav-menu"><Link to="/rented" className="movie-category">RENTED</Link></li>
                        {/* <li className="search-nav-menu-last dropdown dannibla-fw">
                            <a href="#" className="dropdown-toggle movie-menu" data-toggle="dropdown">RENTED</a>
                            <ul className="dropdown-menu animated slideInDown">
                                <li>
                                    <div className="dannibla-content">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="category col-md-3"><a className="movie-category">Thriller</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Horror</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Comedy</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Fantasy</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Drama</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Adventure</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Music</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Biography</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Romance</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Action</a></div>
                                                <div className="category col-md-3"><a className="movie-category">War</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Family</a></div>
                                                <div className="category col-md-3"><a className="movie-category">History</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Crime</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Documentary</a>
                                                </div>
                                                <div className="category col-md-3"><a className="movie-category">Sport</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Mystery</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Science Fiction</a>
                                                </div>
                                                <div className="category col-md-3"><a className="movie-category">Reality TV</a>
                                                </div>
                                                <div className="category col-md-3"><a className="movie-category">Film Noir</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Animation</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Short</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Western</a></div>
                                                <div className="category col-md-3"><a className="movie-category">Foreign</a></div>
                                                <div className="category col-md-3"><a className="movie-category">History</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Navbar
