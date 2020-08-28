<template>
  <div class="emmm">
    <h2>学习、交流、技术、团队合作。</h2>
    <div>
      <router-link to="/instruction" class="primary">了解山商嵌入式</router-link>
      <router-link to="/join">加入我们</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.$emit("initCube")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.emmm{
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 10%;
  z-index: 1;
  text-align: center;
  line-height: 2;
  user-select: none;
}
h2{
  font-weight: normal;
  max-width: 640px;
  max-height: 6em;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
}
a{
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  padding: 0.75em 1.5em;
  border: 1px solid white;
  border-radius: 5px;
  margin: auto 5px;
  vertical-align: middle;
  white-space:nowrap;
  transition: all 500ms;
}
a.primary{
  background-color: white;
  color: black;
}
a:hover{
  box-shadow: 0px 0px 10px white;
}
a:focus{
  outline: 2px solid white;
  outline-offset: 10px;
}
</style>
