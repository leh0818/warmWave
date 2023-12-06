import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginPost} from "../user/userApi"
import {getCookie, setCookie} from '../util/cookieUtil';

const initState = {
    email: '' // email 값이 있는 경우 로그인 상태로 간주, 없으면 로그인되지 않은 상태
}

// 비동기 통신 호출
export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
    return loginPost(param)
})

const loadMemberCookie = () => {    // 쿠키에서 로그인 정보 로딩
    const userInfo = getCookie("user")

    //닉네임 처리
    if (userInfo && userInfo.nickname) {
        userInfo.nickname = decodeURIComponent(userInfo.nickname)
    }

    // 기관명 처리

    return userInfo
}

// 리듀서 : 스토어에 있는 애플리케이션의 상태 가공
const loginSlice = createSlice({    // 로그인 상태
    name: 'LoginSlice',
    initialState: loadMemberCookie() || initState,   // 쿠키가 없다면 초기값 사용
    reducers: { // 액션의 페이로드값을 처리해서 보관해야 할 애플리케이션 상태 데이터를 반환
        login: (state, action) => {
            console.log("login........")

            //{email, pw로 구성}
            const data = action.payload

            // 새로운 상태
            return {email: data.email}
        },
        logout: (state, action) => {
            console.log("logout........")
            return {...initState}
        }
    },
    extraReducers: (builder) => { // 비동기 호출의 상태에 따라 동작
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled") // 완료

            const payload = action.payload

            //정상적인 로그인시에만 저장
            if(!payload.error) {
                setCookie("user", JSON.stringify(payload), 7)   // 7일
            }
            return payload
        })
            .addCase(loginPostAsync.pending, (state, action) => {
                console.log("pending") // 처리중
            })
            .addCase(loginPostAsync.rejected, (state,action) => {
                console.log("rejected") // 에러
            })
    }
})

export const {login, logout} = loginSlice.actions
export default loginSlice.reducer