import React from 'react'

export default function professionalTemplate() {
    return (
        <div className="container">
            <aside className="sidebar">
                <div className="personal-info">
                    <h2>Personal</h2>
                    <hr />
                    <p><strong>Name</strong><br />Rohit Ghatal</p>
                    <p><strong>Address</strong><br />Thasikhel, Lalitpur 44700 Lalitpur</p>
                    <p><strong>Phone number</strong><br />9806415229</p>
                    <p><strong>Email</strong><br />rohitghatal@gmail.com</p>
                    <p><strong>Date of birth</strong><br />25-08-2001</p>
                    <p><strong>Place of birth</strong><br />Mahendranagar, Kanchanpur</p>
                    <p><strong>Gender</strong><br />Male</p>
                    <p><strong>Nationality</strong><br />Nepali</p>
                    <p><strong>Marital status</strong><br />Single</p>
                    <p><strong>Website</strong><br />rohitghatal.com.np</p>
                    <p><strong>LinkedIn</strong><br /><a href="https://www.linkedin.com/in/rohit-ghatal-7823111b4/">linkedin.com/in/rohit-ghatal-7823111b4/</a></p>
                </div>
                <div className="interests">
                    <h2>Interests</h2>
                    <hr />
                    <p>Coding</p>
                    <p>Playing Games (virtual)</p>
                </div>
            </aside>

            <main className="main-content">
                <h1>Rohit Ghatal</h1>
                <hr />
                <p className="summary">
                    Highly motivated <strong>Frontend</strong> and <strong>Backend</strong> web developer with a strong foundation in both client-side and server-side technologies. Proven ability to design and implement responsive, user-friendly web applications. Seeking a web developer position to contribute my expertise in full-stack development while achieving professional growth in a dynamic and innovative environment.
                </p>

                <section className="education">
                    <h2>Education and Qualifications</h2>
                    <hr />
                    <div className="education-item">
                        <h3>BCA</h3>
                        <p><strong>Vedas College, Lalitpur</strong><br/>Mar 2021 - Present</p>
                        <p>This course provided a comprehensive education in both theoretical and practical aspects of computer applications. Key programming languages and technologies studied includes C, Java, HTML, CSS, PHP, MySQL, DotNet C#, and ASP.NET, equipping me with a solid foundation in software development and web technologies. Additionally, the course covered essential business and management subjects such as Financial Accounting and Introduction to Management, which enhanced my understanding of the organizational and financial aspects of the IT industry.</p>
                    </div>
                </section>

                <section className="skills">
                    <h2>Skills</h2>
                    <hr />
                    <div className="skill-item">
                        <p>HTML</p>
                        <div className="skill-bar"><div className="fill" style="width: 90%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>CSS</p>
                        <div className="skill-bar"><div className="fill" style="width: 80%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>JavaScript</p>
                        <div className="skill-bar"><div className="fill" style="width: 70%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>Bootstrap</p>
                        <div className="skill-bar"><div className="fill" style="width: 60%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>PHP</p>
                        <div className="skill-bar"><div className="fill" style="width: 80%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>MySQL</p>
                        <div className="skill-bar"><div className="fill" style="width: 50%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>C</p>
                        <div className="skill-bar"><div className="fill" style="width: 75%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>ReactJs</p>
                        <div className="skill-bar"><div className="fill" style="width: 35%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>Java</p>
                        <div className="skill-bar"><div className="fill" style="width: 40%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>MongoDB</p>
                        <div className="skill-bar"><div className="fill" style="width: 20%;"></div></div>
                    </div>
                    <div className="skill-item">
                        <p>NodeJs</p>
                        <div className="skill-bar"><div className="fill" style="width: 20%;"></div></div>
                    </div>
                </section>
            </main>
        </div>
    )
}
