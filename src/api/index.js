import axios from 'axios';

const BASE_URL = 'http://43.200.25.231:8080';

export function fetchCompanyData(region, district, page, smallCode) {
  return axios.get(`${BASE_URL}/region/${region}/company`, {
    params: {
      district,
      smallCode,
      page,
    },
  });
}


//새로운 토큰 방식

const apiClient = axios.create({
  baseURL: 'http://43.200.25.231:8080',  // Your API base URL
});

// Set the AUTH token for any request
apiClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});

// Add a response interceptor
apiClient.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    localStorage.removeItem('token');
  }
  return Promise.reject(error);
});

export function login(data) {
  return apiClient.post('/auth/login', data);
}

export function setToken(token) {
  localStorage.setItem('token', token);
}

export function clearToken() {
  localStorage.removeItem('token');
}



//세션
// import axios from 'axios';
// import router from '../router';
// import qs from 'qs';

// const DOMAIN = 'http://43.201.199.65:8080';
// const UNAUTHORIZED = 401;

// const onUnauthorized = () => {
//   router.push(`/auth/login?rPath=${encodeURIComponent(location.pathname)}`);
// };

// const instance = axios.create({
//   baseURL: DOMAIN,
//   withCredentials: true
// });

// const request = (method, url, data) => {
//   return instance({
//     method,
//     url: url,
//     data: method === 'post' ? qs.stringify(data) : null,
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then((result) => result.data)
//     .catch((result) => {
//       const { status } = result.response;
//       if (status === UNAUTHORIZED) onUnauthorized();
//       throw result.response;
//     });
// };

// export const board = {
//   fetch() {
//     return request('get', '/posts');
//   },
//   create(title, content) {
//     return request('post', '/posts', { title, content });
//   }
// };

// export const auth = {
//   login(email, password) {
//     return request('post', '/auth/login', { email, password });
//   }
// };

// export const join = {
//   register(formData) {
//     return request('post', '/join', { formData })
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// };

// export const regionSeoulSmallName = {
//   give(smallName) {
//     return request('post', '/region/seoul', { smallName })
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// };


//token
// import axios from 'axios'
// import router from '../router'//라우터 가져오기

// const DOMAIN = 'http://43.200.25.231:8080'
// const UNAUTHORIZED = 401
// const onUnauthorized = () =>{  //401코드가 오면 처리하는 변수
//     router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`) //로그인 페이지로 푸시
// }

// const request = (method, url, data) => {  //백엔드 api에 요청, (get인지 post인지,경로,페이로드에 해당하는 데이터)인자를 받음
//     return axios({
//         method,
//         url: DOMAIN + url,//도메인 정보와 함께 받음
//         data,
//     }).then(result => result.data) //성공시 body데이터 넘겨줌
//       .catch(result => { //실패시
//         const {status} = result.response //결과 응답을 받아 status에 저장
//         if (status === UNAUTHORIZED) onUnauthorized() //status가 401이면 onUnauthorized()호출
//         throw result.response//다른 오류  throw
//       })
// }

// export const setAuthInHeader = token => { //토큰 정보를 받아서 axios라이브러리에 기능 추가(request전에 토큰 정보 날리게 함)
//         axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null; //Bearer:api문서형식
//         if (token) {
//           localStorage.setItem('token', token); // token이 있는 경우 로컬 스토리지에 저장
//       }
// }

// const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 읽어오기
// if (token) setAuthInHeader(token)


// export const board = { //모듈 사용하기위해 export
//     fetch() { //보드 노출 함수:보드 조회
//         return request('get','/posts')

//     },
//     create(title, content) {//title받아와서 board생성
//         return request('post','/posts', {title, content})
//     }
// }


// // //인증을 위한 객체
// export const auth = {
//     login(email, password) {
//         return request('post', '/auth/login', {email, password})
//     }
// }
// export const mypage = {
//     //mypage회원정보
//     fetchUser() { // 사용자 정보를 조회하는 메서드
//       return request('get', '/mypage');
//     }
// }

// export const join = {
//   register(formData) {
//     return request('post', '/auth/signup',  {formData} )
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// };

// export const regionSeoulSmallName = {
//   give(smallName) {
//     return request('post', '/region/seoul', { smallName })
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// };


