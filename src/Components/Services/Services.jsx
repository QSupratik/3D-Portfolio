import styles from "./Services.module.css";
import LaptopModelContainer from "./Laptop3D/LaptopModelContainer";
import s1 from "../../Images/service1.png";
import s2 from "../../Images/service2.png";
import s3 from "../../Images/service3.png";
import Counter from "./Counter";
import {motion, useInView } from "motion/react";
import {useRef} from "react"; 

const services =  [
    {id:1, img:s1, title:"Front-End Development", counter:35 },
    {id:2, img:s2, title:"Product Design", counter:23},
    {id:3, img:s3, title:"SQL Help", counter:46}
];

const textVariants= {
    initial:{ x:-100, y:-100, opacity:0 }, 
    animate:{ x:0, y:0, opacity:1, transition:{duration:3} }
}

const listVariants= {
    initial:{ x:-100, y:-100, opacity:0 }, 
    animate:{ x:0, y:0, opacity:1, transition:{duration:3.5} }
}


function Services() {
    const ref = useRef();
    const isInView = useInView(ref);
    return (
        <div className={styles.services} ref={ref}>
            <div className={styles.servicesSection}>
                <motion.h1 variants={textVariants} animate = {isInView ? "animate":"initial"} className={styles.sectionHeading}>How do I help ?</motion.h1>
                <div className={styles.serviceList}>
                    {services.map( (services)=> (
                        <motion.div variants={listVariants} animate = {isInView ? "animate":"initial"} className={styles.service} key={services.id}> 
                            <div className={styles.serviceIcon}>
                                <img src={services.img}></img>
                            </div>
                            <div className={styles.serviceInfo}>
                                <h3>{services.title}</h3>
                                <h5>{services.counter}</h5>
                            </div>

                        </motion.div>
                    ))}
                </div>
                <div className={styles.counterList}>
                    <Counter from={0} to={10} text="Projects Completed"/>
                    <Counter from={0} to={5} text="Happy Clients"/>
                </div>
            </div>

            <div className={styles.servicesSection}>
                <LaptopModelContainer></LaptopModelContainer>
            </div>
        </div>
    )
}

export default Services;