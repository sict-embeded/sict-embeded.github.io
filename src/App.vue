<template>
  <div id="app">
    <div class="nav">
      <div class="title">山商嵌入式</div>
      <ul>
        <router-link tag="li" tabindex="1" v-for="(item,index) in nav" :key="index" :to="item.to" active-class="active" @keypress.enter.native="$event.target.click()">{{item.title}}</router-link>
      </ul>
      <div></div>
    </div>
    <transition name="fade">
      <router-view @changeCubeTextures="changeCubeTextures" @initCube="initCube"/>
    </transition>
  </div>
</template>

<script>
import logo1 from '@/assets/logo.png'
import logo2 from '@/assets/logo2.png'
export default {
  name: 'App',
  data(){
    return {
      background:[],
      backgroundUpdater:null,
      nav:[
        {
          title:"首页",
          to:"/index"
        },
        {
          title:"简介",
          to:"/instruction"
        },
        {
          title:"资源",
          to:"/resources"
        },
        {
          title:"关于我们",
          to:"/about"
        }
      ]
    }
  },
  watch:{
    background(){
      this.backgroundUpdater&&this.backgroundUpdater(this.background)
    },
    // $route(){
    //   this.initCube()
    // }
  },
  methods:{
    initCube(){
      this.background=[
        "山商嵌入式",
        new Image(),
        "期待你的加入！",
        new Image(),
        "山商嵌入式"
      ]
      var logoLoadingStatus = 0;
      var vm = this
      function onLogosLoaded(){
        if(logoLoadingStatus<1) logoLoadingStatus++
        else if(vm.backgroundUpdater){
          vm.backgroundUpdater()
        }
        else{
          vm.backgroundUpdater = vm.initBackground(vm.background)
        }
      }
      this.background[1].src=logo1
      this.background[3].src=logo2
      this.background[1].onload=this.background[3].onload=onLogosLoaded
    },
    changeCubeTextures(array){
      this.background=array;
    },
    navPress(){
      console.log(arguments)
    }
  },
  mounted(){
    this.initCube()
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  padding: 0px;
  background: transparent;
  overflow: hidden;
  color: white;
}
#app {
  overflow: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
}
</style>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.nav{
  position: fixed;
  color: white;
  z-index: 3;
  left: 0px;
  right: 0px;
  top: 0px;
  font-size: 18px;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  line-height: 2em;
}
.nav>*{
  flex: 1;
}
.nav .title{
  padding: 1em;
  white-space:nowrap;
  overflow: hidden;
}
@media(max-width: 640px){
  .nav{
    flex-direction: column;
  }
  .nav .title{
    padding-bottom: 0px;
  }
}
.nav ul{
  flex: auto;
  list-style: none;
  text-align: center;
  padding: 1em 0em;
  margin: 0px;
  overflow-x: auto;
  white-space:nowrap;
}
.nav ul::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}
.nav ul::-webkit-scrollbar-button {
    display: none;
}
.nav ul::-webkit-scrollbar-track,
.nav ul::-webkit-scrollbar-track-piece{
  background: transparent;
}
.nav ul::-webkit-scrollbar-thumb{
  background-color: rgba(255, 255, 255, 0.2);
}

.nav ul li{
  display: inline;
  padding: 1em;
  margin: auto 5px;
  cursor: pointer;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  border-top: 1px solid rgba(0, 0, 0, 0);
  transition: all 500ms;
}
.nav ul li.active,
.nav ul li:focus,
.nav ul li:hover
{
  border-bottom: 1px solid white;
}
.nav ul li.active:focus,
.nav ul li.active:hover{
  border-top: 1px solid white;
}
</style>