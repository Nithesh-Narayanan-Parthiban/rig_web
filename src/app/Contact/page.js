import styles from '../Contact/contact.module.css';
import Navbar from '../components/Navbar';


const Page = () => {
  return (
    <div>
      <Navbar />
      
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries or information.</p>
      </div>

      <div className={styles.downmain}>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.infoItem}>
            <h3>Phone</h3>
            <p>0495 228 6444</p>
          </div>
          <div className={styles.infoItem}>
            <h3>RIG Official Mail ID</h3>
            <p>rig@nitc.ac.in</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Address</h3>
            <p>8WCP+PC5, Central Workshop Rd, Inside NIT Calicut Campus, Kattangal, Kerala 673601</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Team Captain: Krishnachandran R</h3>
            <p>Email: <a href="mailto:krishnachandran_b220972me@nitc.ac.in">krishnachandran_b220972me@nitc.ac.in</a></p>
            <p>Phone: 7356822552</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Team Captain: Piyush Kumar</h3>
            <p>Email: <a href="mailto:piyush_b221115me@nitc.ac.in">piyush_b221115me@nitc.ac.in</a></p>
            <p>Phone: 9693292761</p>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  );
};

export default Page;
