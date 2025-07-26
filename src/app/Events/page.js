import styles from "../Events/event.module.css";
import Navbar from "../components/Navbar";
import eventData from './eventData'; 

const Page = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}>
            <h1 className={styles.heading}>{eventData.title}</h1>
            <p className={styles.description}>{eventData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
