import React from 'react'
import styles from "@/app/styles/content.module.css"
import Image from 'next/image'

export const Content = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.text} ${styles.head}`}>MISSION</div>
        <div className={styles.content}>
          <div className={`${styles.text} ${styles.left}`}>
            Robotics Interest Group(RIG) was formed out of the passion for robotics, to facilitate learning and research in the areas of Mechatronics/robotics and Intelligent Systems, Automation, Advanced Control Systems, Modeling and Simulation, and Sensors & Algorithms.
            Our aim is to acquire knowledge and appropriate hands-on experience, in order to meet the needs of these rapidly changing technologies and provide services to industry for promoting new technologies as well as designing and manufacturing commercially viable products, for the development of our country.
            Along with technological advancement, taking up socially relevant projects that can be brought to the aid of common people are of prime importance to us.
            We also make sure that the knowledge acquired is shared with students, by conducting workshops, exhibitions and talks;
            thereby introducing them to this the stream and invoking an interest among them for the same.
          </div>
          <div>
            <Image
              src="/mission.jpg" 
              alt="Mission Image"
              width={500}
              height={300}
              priority
              className={styles.image}
          />
          </div>
        </div>
      </div>
    </>
  )
}

export default Content;