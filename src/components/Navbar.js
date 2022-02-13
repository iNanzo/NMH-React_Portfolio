import React from 'react';

function Navbar() {
    return (
        <header>
            <a class="pagename">Newton Hoang</a>
            <nav>
                <ul class="navlink">
                    <li><a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                    </a></li>
                    <li><a
                        href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    My Projects
                    </a></li>
                    <li><a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact Me
                    </a></li>
                </ul>
            </nav>
        </header>
    );
  }

  export default Navbar;