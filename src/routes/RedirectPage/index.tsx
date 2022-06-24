import { useMemo } from 'react'
import { useLocation, useMount } from 'react-use'
import { Link } from 'react-router-dom'

import { PlayStorePage, AppStorePage } from 'assets/svgs'

import styles from './redirectPage.module.scss'

const RedirectPage = () => {
  const { pathname } = useLocation()

  const [title, icon] = useMemo(() => {
    const targeTitle = pathname === '/playStore' ? 'play store' : 'App store'
    const targetIcon = pathname === '/playStore' ? <PlayStorePage /> : <AppStorePage />

    return [targeTitle, targetIcon]
  }, [pathname])

  useMount(() => {
    if (pathname === '/playStore')
      return window.open('https://play.google.com/store/apps/details?id=com.titicacacorp.triple')
    return window.open(
      'https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%AC%ED%94%8C-%EC%B5%9C%EC%A0%80%EA%B0%80-%EC%98%88%EC%95%BD%EB%B6%80%ED%84%B0-%EC%97%AC%ED%96%89%EA%B3%84%ED%9A%8D%EA%B9%8C%EC%A7%80/id1225499481'
    )
  })
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.icon}>{icon}</div>
      <Link to='/'>
        <button className={styles.goBackBtn} type='button'>
          돌아가기
        </button>
      </Link>
    </div>
  )
}

export default RedirectPage
