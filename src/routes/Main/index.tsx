import { Apple, PlayStore, TripleLogo } from 'assets/svgs'

import styles from './main.module.scss'

const MainPage = () => {
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
              <mark>700만 명</mark>의 여행자
            </div>
            <div className={styles.text}>
              <mark>100만 개</mark>의 여행 리뷰
            </div>
            <div className={styles.text}>
              <mark>470만 개</mark>의 여행 일정
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
