import Vue from 'vue'
//import App from '../App.vue' //상대 경로 ../
import VueRouter from 'vue-router' //vue-router연결
//뷰라우터 사용법:https://v3.router.vuejs.org/kr/guide/#javascript
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Join from '../components/Join.vue'
import Board from '../components/Board.vue'
import Mypage from '../components/Mypage.vue'
import NotFound from '../components/NotFound.vue'
//지역
import seoul from '../components/region/seoul.vue'
import chungcheongnamdo from '../components/region/chungcheongnamdo.vue'
import busan from '../components/region/busan.vue'
import chungcheongbukdo from '../components/region/chungcheongbukdo.vue'
import daegu from '../components/region/daegu.vue'
import daejeon from '../components/region/daejeon.vue'
import gangwondo from '../components/region/gangwondo.vue'
import gwangju from '../components/region/gwangju.vue'
import gyeongsangbukdo from '../components/region/gyeongsangbukdo.vue'
import gyeonggido from '../components/region/gyeonggido.vue'
import gyeongsangnamdo from '../components/region/gyeongsangnamdo.vue'
import incheon from '../components/region/incheon.vue'
import jejudo from '../components/region/jejudo.vue'
import jeollabukdo from '../components/region/jeollabukdo.vue'
import jeollanamdo from '../components/region/jeollanamdo.vue'
import sejong from '../components/region/sejong.vue'
import ulsan from '../components/region/ulsan.vue'


import Company from '../components/Company.vue'
import Review from '../components/Review.vue'



Vue.use(VueRouter) //뷰라우터를 쓰기위해 써줘야함

const requireAuth = (to, from, next) =>{ //네비게이션 가드 설정(로그인 인증이 필요한 부분)
    const isAuth = localStorage.getItem('token') //token정보가있으면 문자열 저장
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}` //로그인 완료후 현재페이지로 돌아오게함
    isAuth ? next() : next(loginPath)//로그인 토큰 값이 있으면 next함수로 라우팅 로직 이어서 수행, 그렇지 않을경우 loginPath로 리다이렉트
}

const router = new VueRouter({ //라우터에따라 경로
  mode: 'history', //history 모드 사용 (/#/-해쉬백 없이 사용)
  routes :[  //우선순위에 의해 선언된 순서대로 매칭
    { path: '/', component: Home}, //beforeEnter: requireAuth-로그인 인증 필요
    { path: '/login', component: Login },
    { path: '/join', component: Join },
    { path: '/board', component: Board},//bid라는 변수로 정수형 받으면 경로 연결/ children속성의 배열
    { path: '/mypage', component: Mypage },
    { path: '*', component: NotFound }, //위에 경로로 매칭 안됐을때 마지막으로 규칙 적용
    

    { path: '/region/seoul', component: seoul},
    { path: '/region/chungcheongnamdo', component: chungcheongnamdo},
    { path: '/region/busan', component: busan},
    { path: '/region/chungcheongbukdo', component: chungcheongbukdo},
    { path: '/region/daegu', component: daegu},
    { path: '/region/daejeon', component: daejeon},
    { path: '/region/gangwondo', component: gangwondo},
    { path: '/region/gwangju', component: gwangju},
    { path: '/region/gyeongsangbukdo', component: gyeongsangbukdo},
    { path: '/region/gyeonggido', component: gyeonggido},
    { path: '/region/gyeongsangnamdo', component: gyeongsangnamdo},
    { path: '/region/incheon', component: incheon},
    { path: '/region/jejudo', component: jejudo},
    { path: '/region/jeollabukdo', component: jeollabukdo},
    { path: '/region/jeollanamdo', component: jeollanamdo},
    { path: '/region/sejong', component: sejong},
    { path: '/region/ulsan', component: ulsan},

    { path: '/company', name: 'Company', component: Company},
    // {
    //   path: 'region/:region/company',
    //   name: 'Company',
    //   component: Company,
    //   props: true
    // },
    
    // beforeEnter: requireAuth 

    { path: '/review', component: Review}

  ]
  
})

//사용 할수 있도록 모듈로 익스포트
export default router