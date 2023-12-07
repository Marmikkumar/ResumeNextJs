"use client"
import Image from "next/image"
import Photo from "./Photo.png"

export default function Resume(){
  return(
    <div className="resume-box">
      <div className="head-section">
        <h1 style={{"padding-top":"1rem"}}>Marmik Kumar</h1>
        <Image
          src={Photo}
          width={100}
          height={120}
          alt="Picture of the author"
        />
      </div>

      <div className="container">
          <div className="box">
            <h3>Personal Information</h3>
            <hr/>
            <ul>
              <li>Nichali Kila, garh pr, biharsharif 803101, India  Ph-07903650466</li>
              <li>marmik.kumar.ece23@heritageit.edu.in</li>
              <li>https://www.linkedin.com/in/marmik-kumar-055137238/</li>
            </ul>
          </div>
        

          <div className="box">
            <h3>Profile</h3>
            <hr/>
            <p>Experienced Frontend Developer driven by a fervent desire to craft captivating and user-friendly websites. Demonstrates expertise in HTML, CSS, JavaScript, and React, coupled with an exceptional attention to design and meticulousness. Devoted to providing flawless user experiences through the development of responsive and interactive interfaces. Eager to apply my skills and experience.</p>
          </div>

          <div className="box">
            <h3>Skills</h3>
            <hr/>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Responsive Web Design</li>
              <li>Problem Solving , OOPs</li>
              <li>Debugging Skills</li>
              <li>MySQL , MongoDB</li>
              <li>React , Next ,Rest APIs</li>
            </ul>
          </div>

          <div className="box">
            <h3>Edutation</h3>
            <hr/>
            <ul>
              <li>08/2019 – 06/2023 KOLKATA, INDIA</li>
              <li style={{"font-weight":"bold"}}>Electronics and communication Engineering |</li>
              <li style={{"font-weight":"bold"}}>B.tech
              Heritage Institutes of Technology</li>
              <li>8.33 Cgpa</li>
            </ul>
          </div>

          <div className="box">
            <h3>Projects</h3>
            <hr/>
            <p>Homyz-Constructor-Limited </p>
            <ul className="project">
              <li>Implemented React components and optimized performance, resulting in a 30% faster page load time and improved user experience.</li>
              <li>Applied animations and scrolling effects to enhance the project.</li>
            </ul>
          </div>

          <div className="box">
            <h3>Projects</h3>
            <hr/>
            <p>My-Portfolio  </p>
            <ul className="project">
              <li>Designed a personal portfolio showcasing my skills, experience, and journey, leveraging HTML, CSS, and React for a dynamic and engaging user interface.</li>
              <li>Included direct links to my GitHub and LinkedIn profiles, enabling visitors to explore my projects and professional background.</li>
              <li>Implemented a feature for downloading my resume.</li>
              <li>Applied animations and scrolling effects to enhance the project.</li>
            </ul>

            <p>Netflix Clone</p>
            <ul className="project">
              <li>Designed a responsive Netflix clone using HTML, CSS, and React, featuring a language-switching option to Hindi and a secure sign-in page.</li>
              <li>Utilized React's use Effect feature effectively to improve functionality and user interaction, demonstrating proficiency in modern front-end development techniques.</li>
            </ul>
          </div>

          <div className="box">
            <h3>Coding Profile</h3>
            <hr/>
            <ul>
              <li><spam>Code chef:</spam> Attained a 3-Star rating, with a maximum rating of 1667, by accomplishing 150 challenging coding questions.</li>
              <li><spam>Gfg</spam> Demonstrated exceptional proficiency on geeksforgeeks.org/user/marmikkumar13 by successfully solving over 350 coding questions on this platform.</li>
              <li><spam>Github:</spam> Showcased an extensive portfolio of projects and contributions at github.com/Marmikkumar, highlighting a wide array of skills and expertise.</li>
            </ul>
          </div>

          <div className="box">
            <h3>Achievement</h3>
            <hr/>
            <ul>
              <li className="list">Secured Global Rank-8 in January Long Challenge-2022 coding contest held on code chef.</li>
              <li className="list">Selected in cricket team of our branch. </li>
            </ul>
          </div>

          <div className="box">
            <h3>ADDITION INFORMATION</h3>
            <hr/>
            <ul>
              <li className="list">Hobbies: Cooking, playing cricket.</li>
              <li className="list">Active member in NSS. </li>
            </ul>
          </div>

      </div>
      
    </div>
  )
}