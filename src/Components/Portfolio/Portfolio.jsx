import styles from "./Portfolio.module.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const items = [
  {
    id: 1, img: 1,
    title: "Full Stack Chat and University Help App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officiis adipisci commodi, recusandae quam cumque!",
    link: ""
  },
  {
    id: 2, img: 2,
    title: "Weather Application",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure pariatur quae vel animi officiis.",
    link: "/"
  },
  {
    id: 3, img: 3,
    title: "Museum Ticket Booking System",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, reprehenderit.",
    link: ""
  }
];

function ListItem({ item, index, listRef }) {
  const scrollToNext = () => {
    const container = listRef.current;
    const nextItem = container?.children[index + 1];
    if (nextItem) {
      nextItem.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  return (
    <div className={styles.pItem}>
      <div className={styles.pImg}>//Project Image</div>
      <div className={styles.pText}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>
        <button onClick={scrollToNext}>Next</button>
      </div>
    </div>
  );
}

function Portfolio() {
  const listRef = useRef();

  const { scrollXProgress } = useScroll({
    container: listRef,
  });

  return (
    <div className={styles.portfolio}>
      <div className={styles.pList} ref={listRef}>
        {items.map((item, index) => (
          <ListItem item={item} index={index} key={item.id} listRef={listRef} />
        ))}
      </div>
      <div className={styles.pProgress}>
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
        </svg>
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{
              pathLength: scrollXProgress,
              transform: "rotate(-90deg)",
              transformOrigin: "center"
            }}
          />
        </svg>
      </div>
    </div>
  );
}

export default Portfolio;
