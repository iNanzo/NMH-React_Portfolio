import React from 'react';

function Projects() {
    return (
        <div>
            <h2 id="projects">My Projects</h2>
            <div class="projects">
                <section class="card mainproj">        
                    <h2>extracted.</h2>
                    <a href="https://extracted-coffee.herokuapp.com/" target="_blank"><img src={require("../assets/images/Project4.png")} alt="Extracted. Coffee Site"/></a><br />
                    <p>
                        <a href="https://github.com/lyssg2/extracted" target="_blank">GitHub</a><br />
                        Extracted is a website that presents the best coffee shops in Seattle and Portland, <br />
                        with reviews posted by users to view to help make a decision on where to get their next cup of joe.
                    </p>
                </section>
                <section class="card">        
                    <h2>Note Taker</h2>
                    <a href="https://newton-notes.herokuapp.com/" target="_blank"><img src={require("../assets/images/NoteTaker.png")} alt="Note Taker"/></a><br />
                    <p>
                        <a href="https://github.com/iNanzo/NMH_BCHW11" target="_blank">GitHub</a><br />
                        A note taker deployed on Heroku. <br />
                        Done as practice for backend development.
                    </p>
                </section>
                <section class="card">        
                    <h2>Weather Dashboard</h2>
                    <a href="https://inanzo.github.io/NMH_BCHW6/" target="_blank"><img src={require("../assets/images/Project2.PNG")} alt="Weather Dashboard"/></a><br />
                    <p>
                        <a href="https://github.com/iNanzo/NMH_BCHW6" target="_blank">GitHub</a><br />
                        A project with heavy focus on OpenWeather API usage. <br />
                        Done as a practice for APIs in general.
                    </p>
                </section>
                <section class="card">        
                    <h2>Code Quiz</h2>
                    <a href="https://inanzo.github.io/NMH_BCHW4/" target="_blank"><img src={require("../assets/images/Project3.PNG")} alt="Code Quiz"/></a><br />
                    <p>
                        <a href="https://github.com/iNanzo/NMH_BCHW4" target="_blank">GitHub</a><br />
                        A code quiz that makes use of append and localStorage functions.
                    </p>
                </section>
                <section class="card">        
                    <h2>Text Editor</h2>
                    <a href="https://nmh-texteditor.herokuapp.com/" target="_blank"><img src={require("../assets/images/Project5.png")} alt="Note Taker"/></a><br />
                    <p>
                        <a href="https://github.com/iNanzo/NMH_BCHW19-Text_Editor" target="_blank">GitHub</a><br />
                        A heroku deployed PWA text editor that can be used locally offline, or downloaded as a browser extension.
                    </p>
                </section>
                {/* <section class="card">        
                    <h2>New Project</h2>
                    <img src="./assets/images/placeholder.jpg" alt="Project 6 Image"/>
                    <p>Coming soon...</p>
                </section> */}
                <section class="card mainproj">        
                    <h2>NBA Sports Facts</h2>
                    <a href="https://snkrfr3sh.github.io/sport_facts/" target="_blank"><img src={require("../assets/images/Project1.png")} alt="NBA Sports Facts"/></a><br />
                    <p>
                        <a href="https://github.com/SnkrFr3sh/sport_facts" target="_blank">GitHub</a><br />
                        A site used to get quick basic information on NBA players past and present. <br />
                        Made as group project focusing on implementing the Free NBA and Bing Image APIs.
                    </p>
                </section>
            </div>
        </div>
    );
  }

  export default Projects;