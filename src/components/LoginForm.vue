<template>
  <div class="LoginForm">
      <div style="position:relative; left:35%;">
          <router-link tag="a" :to="{name:'home'}"><img src="../assets/logo.png" alt="로고"></router-link>
      </div>
      <div  class='mx-auto text-centor' style="width:600px; height:250px" >
        
        <p class='headline text-center'>로그인</p>
        <form @submit.prevent="login">
            <!-- 위쪽에 아이콘 넣어서 홈으로 돌아가기 했으면 좋겠음 -> 로고가 필요함(네이버 로그인 페이지 마냥) -->
            <v-text-field
            v-model="credentials.username"
            placeholder="아이디"
            required>
            </v-text-field>
            <v-text-field
            v-model="credentials.password"
            placeholder="비밀번호"
            required
            type="password">
            </v-text-field>
            <v-btn class="mr-4 white" @click="login">로그인</v-btn>
            <v-btn class="mr-4 white" @click="clear">다시 입력하기</v-btn>
            <v-btn class="white" @click="signup">회원가입</v-btn>
        </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
    data() {
        return {
            credentials: {},
            options:{}
        }
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:8000/api-token-auth/', this.credentials)
                .then(response => {
                    const token = response.data.token
                    this.$session.start()
                    this.$session.set('jwt', token)
                    router.push({name:'home'})
                })
                .catch(error => {
                    console.log(error)
                })

            this.credentials = {}
        },
      clear () {
        this.credentials.username = ''
        this.credentials.password = ''
      },
      signup (){
          router.push({name:'signup'})
      }
    },
}
</script>

<style>
    .LoginForm {
        box-shadow: 5px 5px 5px 5px gray;
        padding: 20px;
        background-color: #ffffff;
    }
</style>