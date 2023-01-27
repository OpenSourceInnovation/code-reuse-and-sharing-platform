import React from 'react'
import './Home.css';


export default function home() {
  return (
    <div className='fullcontainer'>
      <div className="classeswrapper">

        <div className='heading'>
          <h1>Welcome to CodeSync!</h1>
          <h2 >The ultimate platform for sharing and collaborating on code snippets!</h2>

          <button id='B1'>
            <a className="writecodebtn" href="#">
              Head to Playground
            </a>
          </button>

          <button id='B2'>
            <a className="writecodebtn" href="#">
              Write Your Code
            </a>
          </button>
        </div>

      </div>

      <hr></hr>


      <div className="container px-4 py-5 hello">
        <h2 className="pb-2 ">About CodeSync</h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h3 className="fw-bold border-bottom">Let's Collaborate, Code and Share.</h3>
            <p className="text">CodeSync is perfect for developers of all skill levels, whether you're a beginner looking for code examples or a seasoned pro looking for a better way to organize and share your code snippets.
              With our powerful code editor, you can easily create and edit code snippets in all programming languages.
            </p>
            <a href="#" className="btn btn-primary btn-lg btn-dark">Start Building</a>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                </div>
                <h4 className="fw-semibold mb-0">Build & Share</h4>
                <p className="text">Create and upload your own code snippets.</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                </div>
                <h4 className="fw-semibold mb-0">Learn & Discover</h4>
                <p className="text">Search and discover code snippets from other user.</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                </div>
                <h4 className="fw-semibold mb-0">Collaborate</h4>
                <p className="text">Collaborate and edit code snippets with others in real-time.</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                </div>
                <h4 className="fw-semibold mb-0">Organize</h4>
                <p className="text">Organize your code snippets into custom collections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* 


<ul><li></li>
<li>s</li>
<li></li>
<li>Organize your code snippets into custom collections</li>
<li>Add comments and annotations to code snippets</li>
<li>Browse code snippets by programming language or category</li>
</ul> */}

    </div>



  );
}




