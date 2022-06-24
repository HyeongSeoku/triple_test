# 과제 설명

최대한 트리플 홈페이지의 섹션과 동일하도록 구현하고자 하였고, 

scss module 방식을 사용하여 className이 겹치는 일이 없도록 디자인을 구성하였습니다.

컴포넌트의 분할의 경우 크게 나눠야할 컴포넌트가 보이지 않아 routes의 MainPage에서 모든 것을 랜더링 하도록 구현하였고

과제의 이미지로 주어진 이미지들의 경우 svg 파일로 변환하여 ReactComponent 방식으로 사용할 수 있도록 하였습니다.

<br>

---

## [🚀 배포 페이지](https://triple-ten.vercel.app/)

<br>


## 🛠 기술 스택
- TypeScript
- React v18
- Scss
- react-router v6

### 선택 이유
- TypeScript : 타입 스크립트로 개발하는것에 익숙해져 있기 때문에 사용했습니다
- Scss : 셀렉터 중첩 기능 , 색상 변수화 등의 장점이 있기 떄문에 사용했습니다.
- react-router : 추가기능을 구현하는 과정에서 경로 설정이 필요해서 사용했습니다.


## 💻 프로젝트 실행 방법
```
git clone https://github.com/HyeongSeoku/triple_test.git

npm i
npm start
```

## 데모 영상

![Kapture 2022-06-25 at 00 51 10](https://user-images.githubusercontent.com/48541850/175571772-a7936b16-50e4-4426-849a-baf6d6dac6ce.gif)


## 🗂 파일 구조
```
.
├── assets
│   └── svgs
│       ├── appStorePage.svg
│       ├── apple.svg
│       ├── index.tsx
│       ├── logo.svg
│       ├── playStore.svg
│       ├── playStorePage.svg
│       ├── tripleIcon.svg
│       └── tripleLogo.svg
├── hooks
│   └── useCounter.tsx
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes
│   ├── Main
│   │   ├── index.tsx
│   │   └── main.module.scss
│   ├── RedirectPage
│   │   ├── index.tsx
│   │   └── redirectPage.module.scss
│   └── index.tsx
├── setupTests.ts
├── styles
│   ├── base
│   │   ├── _fonts.scss
│   │   ├── _more.scss
│   │   └── _reset.scss
│   ├── constants
│   │   └── _colors.scss
│   ├── index.js
│   ├── index.scss
│   └── mixins
│       └── _animation.scss
```

- assets : svg 파일들을 위한 폴더
- hooks : 커스텀 훅을 위한 폴더
- routes : page를 위한 폴더
- styles : 각종 style 관련 파일들

<br />

---


### 영역별 등장 애니메이션
![Kapture 2022-06-25 at 00 57 27](https://user-images.githubusercontent.com/48541850/175574244-dd5b05bd-84d0-4708-a117-c6ff83c06b5f.gif)


**💁 설명**

아래처럼 styles/mixins/_animation.scss 파일에서 애니메이션 관련 코드를 작성한뒤
```scss
@keyframes floating {
  from {
    opacity: 0;
    transform: translateY(70px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@mixin floatingAnimation($duration, $delay) {
  animation: floating $duration $delay;
}
```
필요한 곳에서 아래와 같이 사용했습니다
```scss
@include animation.floatingAnimation(0.7s, 0s);
```

애니메이션 적용전에 이미 화면에 보이는 문제를 해결하는 것이 문제가 되었으며
```scss
opacity: 0;
animation-fill-mode: forwards;
```
위 코드를 사용하여 해결하였습니다.

<br/>

---

### 숫자 카운팅 애니메이션
![Kapture 2022-06-25 at 01 11 49](https://user-images.githubusercontent.com/48541850/175575225-17b17e18-8da7-4bf5-9c04-7ee027ddb88d.gif)


**💁 설명**

콜백함수와 끝나는 숫자, 증가될 숫자(target), 딜레이를 매개 변수로 받아서
콜백 함수를 이용하여 증가될 숫자에 변화를 주는 custom hook을 만들어서 처리하였습니다

느려지는 효과를 위해 삼항연산자를 사용하여 끝나는 숫자 -10 보다 target이 클 경우에는 100ms 아닐경우에는 매개변수로 받은 딜레이가 적용되도록 하였습니다

또한 sementic한 HTML 작성을 위해 강조되어야할 글자에는 mark 태그를 적용하였습니다.

<br/>

---


### 추가 구현 사항 (앱 다운로드 링크 이동)

![Kapture 2022-06-25 at 01 18 22](https://user-images.githubusercontent.com/48541850/175576251-3c83767c-0962-4465-b490-367c7705a383.gif)

**💁 설명**
개인적으로 추가적으로 붙인 구현 사항이며 뭔가 좀 더 만들것이 없을까 고민을 하다 생각해냈습니다.

각 아이콘을 누르면 'playStore','appStore'로 이동하게 되고 이 두가지 경로의 경우에 Route를 이용하여 둘다 RedirectPage가 랜더링되도록 구현하였습니다

RedirectPage에서 useLocation을 활용하여 현재의 pathname을 알아내고 useMemo와 삼항연산자로 알맞는 타이틀과 아이콘을 할당해주도록 구현하였습니다.

또한 useMount를 사용하여 각 경로일때 새로운 창에서 해당 링크가 열리도록 구현하였습니다


<br/>

---


## 회고

전체적으로 가독성과 재사용성을 최우선으로 생각해서 짰으며 color와 animation을 이쁘게 분리하고 관리하기 용이하게 코드를 짜며

비교적 추상화하기 쉬운 난이도의 과제였지만 최대한 재사용성과 의미를 위해 잘게 자르려고 노력했으며

이미지 파일의 용량과 화질을 위해 svg 파일로 변환한뒤 컴포넌트 처럼 쓸 수 있도록 
```ts
export {ReactComponent as Logo} from './logo.svg'
```
위와 같은 방식으로 사용했습니다.

어렵다고는 할 수 없는 난이도의 과제였지만 중간중간 리팩토링도 진행하고 어떻게하면 최적화를 많이 시킬 수 있을지 고민하며 풀었던 과제인것 같습니다.



