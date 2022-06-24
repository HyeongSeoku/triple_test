import { Apple, PlayStore, TripleLogo } from 'assets/svgs'
import useCounter from 'hooks/useCounter'
import { useState } from 'react'

import styles from './main.module.scss'

const MainPage = () => {
  const [traveler, setTraveler] = useState(0)
  const [review, setReview] = useState(0)
  const [schedule, setSchedule] = useState(0)

  useCounter(
    () => {
      setTraveler((prev) => prev + 1)
    },
    700,
    traveler,
    1
  )

  useCounter(
    () => {
      setReview((prev) => prev + 1)
    },
    100,
    review,
    13
  )
  useCounter(
    () => {
      setSchedule((prev) => prev + 1)
    },
    470,
    schedule,
    3
  )

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <TripleLogo className={styles.logoIcon} />
          <span className={styles.logoText}>2021년 12월 기준</span>
        </div>
        <div className={styles.detailContentContainer}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <mark>{traveler}만 명</mark>의 여행자
            </div>
            <div className={styles.text}>
              <mark>{review}만 개</mark>의 여행 리뷰
            </div>
            <div className={styles.text}>
              <mark>{schedule}만 개</mark>의 여행 일정
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.subContainer}>
              <PlayStore className={styles.icon} />
              <div className={styles.subText}>
                2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
              </div>
            </div>
            <div className={styles.subContainer}>
              <Apple className={styles.icon} />
              <div className={styles.subText}>
                2018 애플 앱스토어 <br /> 오늘의 여행 앱 선정
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage
