import React from 'react';
import styles from "../About/about.module.css";
import Navbar from "../components/Navbar";
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div>
        <div className={styles.backbox}>
          <span className={styles.aboutUs}>ABOUT US</span>
          {/* <div className={styles.dots}>
            {[...Array(12)].map((_,index) => (
              <div key={index} className={styles.dot}></div>
            ))}
          </div> */}
          <div className={styles.quote}>
            Driven by Innovation, Fueled by Passion. Explore the Boundless Horizons of Robotics.
          </div>
          <div className={styles.container}>
            <p>The Robotics Interest Group (RIG) is a vibrant community at NIT Calicut where passion for robotics drives innovation and fosters a collaborative spirit. We bring together students from diverse engineering backgrounds, each contributing their unique expertise to the development of cutting-edge robotic solutions. Our members come from various branches, united by a common goal: to utilize technology for positive change. Within RIG, late-night brainstorming sessions become hubs of creative energy, fueled by the collective commitment to pushing the boundaries of possibility. Beyond building robots, we believe in nurturing the next generation of innovators. We ignite young minds through engaging workshops, interactive classes, and open lab visits, where our passion shines through. More than just an extracurricular activity, RIG is a testament to the transformative power of collaboration. It&apos;s where individual interests merge into a collective force, shaping the future of robotics.</p>
            <div style={{ width: "100%", height: "100%" }}>
              <Image width={700} height={300} src='/begining.jpg' alt='First Team Picture' className={styles.image} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {/* <hr></hr> */}
        <div className={styles.line1}></div>
        <div className={styles.title}>Where it all began </div>
        <div className={styles.line1}></div>
        <div className={styles.where}>
          <p>In 2011, a group of students became enthused about participating in the prestigious international robotics event, RoboCon 2012. Despite their dedicated efforts during the holidays to construct robots, they encountered a financial obstacle. Seeking assistance from the institute, they were informed that they had yet to establish their credibility. Undeterred, two students decided to broaden their scope and explore additional opportunities in robotics.
            <br />
            <br />
            Consequently, a cohesive group of 14 students formed, seeking guidance from Mr. Sudheer A.P., a distinguished figure in the field of robotics in the college. Overcoming challenges, they proudly unveiled their first creation – the Plotterbot v1.0. This helped them to establish their credibility in the institution. Their journey continued with the restoration of a lab machine, extended lab access, and successful modeling endeavors. During their academic breaks, they dedicated their time on campus to working on projects. As a result of their efforts, a significant presentation on May 20th became a turning point. This led to the official recognition of the Robotics Interest Group (RIG) and consequently, securing the necessary funding for the upcoming RoboCon 2013.
            <br />
            <br />
            In a dedicated effort to share their knowledge, the Robotics Interest Group (RIG) organized a comprehensive workshop at NIT Calicut, focusing on the fundamental principles of robotics. The event aimed to impart essential insights and skills in the realm of robotics to the students of NIT Calicut. The workshop garnered substantial attention, attracting an impressive turnout of over a number of enthusiastic participants. The positive response and acclaim received for the event reflected the effectiveness of RIG&apos;s instructional approach. Their narrative underscores the transformative impact of passion, dedication, and a shared vision. It serves as an inspiration for all to persevere, explore every opportunity diligently, and invest unwavering effort, knowing that enduring commitment ultimately leads to success.</p>
        </div>
        <div className={styles.line1}></div>
        <div className={styles.title}>Way forward </div>
        <div className={styles.line1}></div>
        <div className={styles.where}>
          <p>
            As we reflect on our history, Robotics Interest Group (RIG) stands as a testament to the resilience, creativity, and unbreakable spirit of its members. Beyond the challenges of RoboCon 2012, we have evolved into a community that not only crafts robots but also seeks to share knowledge and ignite the minds of the next generation. Today, we carry the legacy of overcoming obstacles and transforming adversity into triumph. Our commitment extends beyond competitions; we aim to inspire and educate, pushing the boundaries of what is possible in the field of robotics. Continuing our journey, we still conduct workshops, share knowledge, and strive to make a meaningful impact on the evolving landscape of robotics, fostering innovation and contributing to the transformative advancements shaping our future.
          </p>
        </div>
        <div className={styles.qna}>
          <p className={styles.question}>What We do?</p>
          <p className={styles.answer}>UNLEASH INNOVATION</p>
        </div>
      </div>
    </div>
  );
};

export default page;
