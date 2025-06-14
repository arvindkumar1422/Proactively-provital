import React, { useState, useRef, useEffect } from 'react';
import './PillarsSection.scss';
import imgNutrition from '../assets/img9.png';
import imgPhysicalActivity from '../assets/img10.png';
import imgRestorativeSleep from '../assets/img11.png';
import imgStressManagement from '../assets/img12.png';
import imgSocialConnection from '../assets/img13.png';
import imgSubstanceAbuse from '../assets/img14.png';

const pillars = [
  {
    name: 'Nutrition',
    icon: '❤️',
    value: '121/80 mmHg',
    title: 'Nutrition',
    desc: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    image: imgNutrition
  },
  {
    name: 'Physical activity',
    icon: '🏃‍♀️',
    value: '32 minutes',
    title: 'Physical activity',
    desc: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    image: imgPhysicalActivity
  },
  {
    name: 'Restorative sleep',
    icon: '💤',
    value: '8 hours',
    title: 'Restorative sleep',
    desc: 'Consistent, quality sleep is essential for physical and mental health.',
    image: imgRestorativeSleep
  },
  {
    name: 'Stress management',
    icon: '🧘‍♂️',
    value: '',
    title: 'Stress management',
    desc: 'Managing stress improves overall well-being and reduces risk of chronic disease.',
    image: imgStressManagement
  },
  {
    name: 'Social connection',
    icon: '🤝',
    value: '',
    title: 'Social connection',
    desc: 'Strong social connections support emotional health and longevity.',
    image: imgSocialConnection
  },
  {
    name: 'Substance abuse',
    icon: '🚭',
    value: '',
    title: 'Substance abuse',
    desc: 'Avoiding harmful substances is vital for long-term health.',
    image: imgSubstanceAbuse
  },
];

const PillarsSection = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselScrollWidth, setCarouselScrollWidth] = useState(0);
  const [inView, setInView] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    if (scrollRef.current) {
      const targetScroll = getCardPosition(Math.max(0, active - 1));
      scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        root: scrollRef.current,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [active]);

  const getCardPosition = (index) => {
    if (!scrollRef.current) return 0;
    const cards = Array.from(scrollRef.current.children);
    if (!cards[index]) return 0;
    const card = cards[index];
    const cardWidth = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(scrollRef.current).gap);
    return (cardWidth + gap) * index;
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    
    const firstCard = scrollRef.current.querySelector('.pillar-card');
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth;
    const gap = parseFloat(getComputedStyle(scrollRef.current).gap);
    const scrollAmount = cardWidth + gap;

    if (dir === 'left') {
      scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setScrollX(scrollRef.current.scrollLeft);
    setCarouselWidth(scrollRef.current.clientWidth);
    setCarouselScrollWidth(scrollRef.current.scrollWidth);
  };

  return (
    <section className="pillars-section">
      <h2>HOW IT WORKS</h2>
      <h3><span>Lifestyle as medicine:</span> The six pillars</h3>
      <div className="pillars-tabs">
        {pillars.map((pillar, idx) => (
          <button
            key={pillar.name}
            className={active === idx ? 'active' : ''}
            onClick={() => setActive(idx)}
          >
            {pillar.name}
          </button>
        ))}
      </div>
      <div className="pillars-scroll-wrapper">
        <div className="arrow-gradient"></div>
        <button className="pillars-arrow left" onClick={() => scroll('left')} disabled={scrollX === 0}>&#8592;</button>
        <div className="pillars-cards" ref={scrollRef} onScroll={handleScroll}>
          {pillars.map((pillar, idx) => (
            <div
              className={`pillar-card ${active === idx ? 'active' : ''} ${inView[`pillar-card-${idx}`] ? 'elevated' : ''}`}
              key={pillar.name}
              id={`pillar-card-${idx}`}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <img src={pillar.image} alt={pillar.name} className="pillar-card-image" />
              <div className="pillar-content">
                <div className="pillar-icon">{pillar.icon}</div>
                {pillar.value && <div className="pillar-value">{pillar.value}</div>}
                <div className="pillar-title">{pillar.title}</div>
                <div className="pillar-desc">{pillar.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="pillars-arrow right" onClick={() => scroll('right')} disabled={scrollX + carouselWidth >= carouselScrollWidth}>&#8594;</button>
      </div>
    </section>
  );
};

export default PillarsSection; 