<template>
  <div></div>
</template>

<script>
export default {
    name:"NotFound",
    mounted(){
        var array = []
        for (let index = 0; index < 6; index++) {
            array.push("404")
        }
        this.$emit("changeCubeTextures",array)
    }
}
</script>

<style>

</style>