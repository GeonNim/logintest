import { createSlice } from '@reduxjs/toolkit'; //1. 슬라이스(slice)생성
import Cookies from 'js-cookie'

const initialState = {
  authData: Cookies.get('authData') ? JSON.parse(Cookies.get('authData')) :  null,
  
 
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      //업데이트 상태값 변경
      state.authData = action.payload.authData;

      Cookies.set('authData', JSON.stringify(action.payload.authData),{ //{}는 옵션값입력 필수는 아니다.
        expires: 1, //1일 쿠키 유효기간  
      });
    },
    logout: (state) => {
      //상태값 비움
      state.authData = null;

      Cookies.remove('authData');
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; //4. exprot된 함수들을 store에 등록
