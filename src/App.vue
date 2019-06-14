<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css"; /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>

<script>
import bus from "./components/common/bus"
import user from "./components/common/user"

export default {
  created: function() {
    bus.$on("kick",()=>{
      this.$notify.success({title:"下拉菜单命令响应",message:"帅哥你点我"})
    })
    bus.$on("logout",()=>{
        user.clear()
        this.$router.push("/login")
    })            
 }
};
</script>
