<template>
<div class="login-form">
  <div class="g-form">
    <div class="g-form-line">
      <span class="g-form-label"> 创建用户名（输入邮箱名）： </span>
        <div class="g-form-input">
          <input type="text"
          v-model="usernameModel" placeholder="请输入用户名">
         </div>
         <span class="g-form-error">{{userErrors.errorText}}</span>
       </div>

       <div class="g-form-line">
         <span class="g-form-label">请输入密码： </span>
         <div class="g-form-input">
            <input type="password"
               v-model = "passwordModel" placeholder="请输入密码">
          </div>
          <span class="g-form-error">{{passwordErrors.errorText}}</span>
          </div>

          <div class="g-form-line">
         <span class="g-form-label">请重复确认密码： </span>
         <div class="g-form-input">
            <input type="password"
               v-model = "repeatpasswordModel" placeholder="请重复输入密码">
          </div>
          <span class="g-form-error">{{repeatpasswordErrors.errorText}}</span>
          </div>
  <div class="g-form-line">
  <div class="g-form-btn">
  <a class="button" @click="onLogup">注册</a>
</div>
  </div>
  <p>{{errorText}}</p>
  </div>
</div>
</template>

<script>
export default{
    data () {
        return {
            usernameModel:"",
            passwordModel:"",
            repeatpasswordModel:"",
            errorText:"",
        }
    },
    computed: {
        userErrors () {
        let errorText, status
        if(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.usernameModel)){
            status = false
            errorText = "不符合邮箱格式"
        }
        else {
            status = true
            errorText = ""
        }
        if(!this.userFlag){
            errorText = ""
            this.userFlag = true
        }
        return{
            status,
            errorText
        }
    },
    passwordErrors () {
        let errorText, status
        if(!/^\w{1,6}$/g.test(this.passwordModel)){
            status = false
            errorText = '密码不是1-6位数'
        }
        else {
            status = true
            errorText = ''
        }
        if(!this.passwordFlag) {
            errorText=''
            this.passwordFlag = true
        }
        return{
            status,
            errorText
        }
    },
    repeatpasswordErrors () {
        let errorText, status
        if(this.passwordModel !== this.repeatpasswordModel) {
            status = false
            errorText = '两次密码输入不一致'
        }
        else {
            status = true
            errorText = ''
        }
        if(!this.repeatpasswordFlag) {
            errorText=''
            this.passwordFlag = true
        }
        return{
            status,
            errorText
        }
        }
    },
methods: {
    onLogup () {
        if( !this.userErrors.status || !this.passwordErrors.status || !this.repeatpasswordErrors.status ){
            this.errorText = '部分选项输入有误，请确认后注册'
        }
        else{
            this.errorText = ''
            this.$http.get('/')
            .then(()=>{
        }, (error) => {
            console.log(error)
        })
       }
      }
    }
   }
</script>

<style scoped>

</style>