<template>
    <div>
      标签:
      {{content.category}}
      <div>
         <img :src="header.icon" alt="">
         <p>{{header.title}}</p>
         
         <p>{{content.description}}</p>
         <p>{{content.duration}}</p>
         <img :src="content.playUrl" alt="">
         <p>创建时间:formatDate({{content.releaseTime}})</p>
      </div>
    </div>
  </template>

<script>
    export default {
        data() {
            return {
                i: '',
                detail: {},
                header: {},
                content: {}
            }
        },
        mounted() {
            this.header = this.$route.query.detail.data.header
            this.content = this.$route.query.detail.data.content.data
        },
        methods: {}
    }
</script>

<style>

</style>