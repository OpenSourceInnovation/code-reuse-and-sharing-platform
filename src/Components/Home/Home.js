import React from 'react'
import './Home.css';


export default function home() { 
    return (
      <div>

<div clasName="container">
      <div className='heading grid1'>
      <h1>Welcome to CodeSync!</h1>
      <h2 >The ultimate platform for sharing and collaborating on code snippets!</h2>

      <button className='B1'>
        <a className="writecodebtn" href="#">
          Head to Playground
        </a>
      </button>

      <button className='B2'>
        <a className="writecodebtn" href="#">
          Write Your Code
        </a>
      </button>

      </div>

      </div>
<hr></hr>
   <div className="About">
    <h1 className="aboutheading">Join CodeSync</h1>
   <div className="grid1">
    <p className='aboutp'>Our mission is to provide developers with a simple and user-friendly way to share and discover code snippets across a wide range of programming languages.
      </p>
      </div>

      
      
      

      <p className='aboutp'>With CodeSync, you can:</p>

<ul><li>Create and upload your own code snippets</li>
<li>Search and discover code snippets from other users</li>
<li>Collaborate and edit code snippets with others in real-time</li>
<li>Organize your code snippets into custom collections</li>
<li>Add comments and annotations to code snippets</li>
<li>Browse code snippets by programming language or category</li>
</ul>

<p className='aboutp'>CodeSync is perfect for developers of all skill levels, whether you're a beginner looking for code examples or a seasoned pro looking for a better way to organize and share your code snippets.

With our powerful code editor, you can easily create and edit code snippets in a variety of programming languages, including JavaScript, Python, C++, and more. And with real-time collaboration and commenting, you can work together with other developers to improve your code and learn from one another.

So why wait? Sign up for CodeSync today and start sharing and discovering code snippets like never before!</p>

<img className="bannerimg1" src="pic2.jpg"></img>
<img className="bannerimg2" src="banner.jpg"></img>
</div>
      </div>

      
    );
  }




      