import React, { useRef, useState } from 'react';
import styles from './projects-list.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import achievementsData from '../../assets/data/achievements.json';

/* eslint-disable-next-line */
export interface ProjectsListProps {}

export function ProjectsList(props: ProjectsListProps) {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLDivElement | null>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        '--progress',
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <div className={styles.container}>
      <p>
        Embarking on a journey through code, I've orchestrated solutions that
        dance seamlessly across screens. From micro-frontends to UX wonders,
        I've scripted innovations that earned accolades and streamlined
        experiences. Witness the tapestry of my achievements.
      </p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles['mySwiper']}
      >
        {achievementsData.achievements.map((item) => (
          <div>
            <SwiperSlide key={item.id}>
              <h3>
                {item.id}
                {item.title}
              </h3>
              <p>{item.description}</p>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsList;
