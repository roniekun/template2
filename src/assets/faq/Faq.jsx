import { useState, useRef, useEffect } from 'react';
import faqData from './faq-data';
import styles from './Faq.module.css';
import { gsap } from 'gsap';

const Faq = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);
  const answerRefs = faqData.map(() => useRef(null));

  useEffect(() => {
    
    answerRefs.forEach(( answerRef, index) => {
      if (expandedIndex===index){
      gsap.from(answerRef.current, { duration: .5, opacity: 0, y: 10 });}
    });
  }, [expandedIndex]);

  const handleMouseEnter = (index) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <div className={styles.container}>
      <ul>
        {faqData.map((faqItem, index) => (
          <div
            className={styles.items}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.questionContainer}>
              <p className={styles.question}>Q: {faqItem.question}</p>
            </div>
            {expandedIndex === index && (
              <div className={styles.answerContainer}>
                <p ref={answerRefs[index]} className={styles.answer}> {faqItem.answer}</p>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
