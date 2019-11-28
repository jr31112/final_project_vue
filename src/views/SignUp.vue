<template>
<div class="signup">
    
    <div class='signupForm mx-auto text-centor' style="width:600px; height:700px" >
        <div style="position:relative; left:35%;">
          <router-link tag="a" :to="{name:'home'}"><img src="../assets/logo.png" alt="로고"></router-link>
      </div>
        <p class='title text-center'>회원가입</p>
        <form @submit.prevent="signup">
            <v-text-field
            v-model="username"
            placeholder="아이디"
            required>
            </v-text-field>
            <p class='font-weight-bold' style='color:#D32F2F;' v-for="error in errormessage.username" :key="error">{{ error }}</p>
            <v-text-field
            v-model="password"
            placeholder="비밀번호"
            required
            type="password">
            </v-text-field>
            <p class='font-weight-bold' style='color:#D32F2F;' v-for="error in errormessage.password" :key="error">{{ error }}</p>
            <v-text-field
            v-model="password2"
            placeholder="비밀번호 재확인"
            required
            type="password">
            </v-text-field>
            <v-btn class="mr-4" @click="clear">다시 입력하기</v-btn>
            <v-btn @click="signup">회원가입</v-btn>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
    name: 'signup',
    data() {
        return {
            signUpUser: {},
            username : '',
            password : '',
            password2 : '',
            errormessage : {username: [], password: []}
        }
    },
    methods: {
        signup() {
            this.signUpUser ={
                'username' : this.username,
                'password' : this.password,
                'password2' : this.password2,
                'like_movies' : [],
            }
            axios.post('http://15.165.77.221/api/v1/accounts/', this.signUpUser)
                .then(() => {
                    this.errormessage = {username: [], password: []}
                    router.push({name:'home'})
                })
                .catch(error => {
                    this.errormessage.username = error.response.data.username
                    this.errormessage.password = error.response.data.password
                })
                this.signUpUser = {}
        },
        clear() {
            this.username = ''
            this.password = ''
            this.password2= ''
            this.errormessage.username = []
            this.errormessage.password = []
        },
    }
}
</script>

<style>
    .signupForm {
        box-shadow: 5px 5px 5px 5px gray;
        padding: 20px;
        background-color: #ffffff;
    }
    .signup {
        position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-items: center;
    }
</style>