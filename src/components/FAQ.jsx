import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: "How long does it take to get my content?",
    answer: "Our standard turnaround time is 2-4 business days depending on the volume of your order. We're much faster than a traditional photoshoot!"
  },
  {
    question: "Do I need to send my own photos or products?",
    answer: "Yes, for best results we need basic photos of your product or clothing. They don't need to be professional—even a clear smartphone photo works! We use AI to place them on models or in stunning environments."
  },
  {
    question: "Can I request changes after I see the result?",
    answer: "Absolutely. We want you to be 100% happy with your content. Each package includes one round of free revisions to ensure it matches your vision."
  },
  {
    question: "How do I pay and is there a deposit?",
    answer: "We require a 50% deposit upfront to begin work, and the remaining 50% upon final delivery and approval. Payments can be made via bank transfer."
  },
  {
    question: "What's the difference between an AI model and a real photoshoot?",
    answer: "An AI model gives you the photorealistic look of a professional photoshoot without the cost of hiring models, photographers, and studios. You get total control over the lighting, background, and model's appearance."
  },
  {
    question: "Can you match my brand's exact style or colors?",
    answer: "Yes! When you place an order, you can provide us with your brand guidelines, mood boards, or color palettes, and our AI process will ensure the final content aligns perfectly with your brand identity."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="flat-card hover-lift" style={{...styles.faqItem, borderColor: isOpen ? 'var(--accent-violet)' : 'var(--glass-border)'}}>
      <button style={styles.questionBtn} onClick={onClick}>
        <span style={styles.questionText}>{faq.question}</span>
        <span style={{...styles.chevron, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}>
          ▼
        </span>
      </button>
      <div style={{
        ...styles.answerContainer,
        maxHeight: isOpen ? '200px' : '0',
        opacity: isOpen ? 1 : 0,
        marginTop: isOpen ? '1rem' : '0'
      }}>
        <p style={styles.answerText}>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const refHeading = useScrollReveal({ threshold: 0.1 });
  const refList = useScrollReveal({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <h2 ref={refHeading} className="scroll-reveal" style={styles.heading}>Frequently Asked Questions</h2>
      <div ref={refList} className="scroll-reveal" style={styles.list}>
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            faq={faq} 
            isOpen={openIndex === index} 
            onClick={() => toggleItem(index)} 
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  faqItem: {
    padding: '1.5rem',
    border: '1px solid var(--glass-border)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },
  questionBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    color: 'var(--text-primary)',
    fontSize: '1.125rem',
    fontWeight: '600',
    padding: 0,
  },
  questionText: {
    paddingRight: '2rem',
  },
  chevron: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    transition: 'transform 0.3s ease',
  },
  answerContainer: {
    transition: 'all 0.3s ease',
  },
  answerText: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  }
};

export default FAQ;
