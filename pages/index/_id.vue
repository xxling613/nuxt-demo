<template>
    <div>
      <h6>视频列表</h6>
      <div class="vidio-list">
        <keep-alive>
            <ul>
                <li v-for="(item,index) in first" :key="item.id" class="" >
                    <h4>
                    <nuxt-link :to="{name:'detail-i',params:{i:index},query:{detail:item}}">{{item.data.header.title}}</nuxt-link></h4>
                    <img :src="item.data.header.icon" alt="图片加载失败">
                    <p>{{item.data.content.data.description}}</p>
                    <p>点赞数:{{item.data.content.data.duration}}</p>
                </li>
                <li v-for="(item,index) in list" :key="index" class=""> 
                   <h4>
                    <nuxt-link :to="{name:'detail-i',params:{i:index},query:{detail:item}}">{{item.data.header.title}}</nuxt-link>
                   </h4>
                   <img :src="item.data.header.icon" alt="图片加载失败">
                   <p>{{item.data.content.data.description}}</p>
                   <p>点赞数:{{item.data.content.data.duration}}</p>
                  </li>
              </ul>
        </keep-alive>
      </div>
    </div>
  </template>

<script>
    import {get,
        post
    } from '~/plugins/axios.js'
    export default {
        // async fetch({
        //     $axios,
        //     query
        // }) {
        //     let res = await $axios({
        //         url: 'videoCategoryDetails',
        //         method: 'get',
        //         parmas: query.oid
        //     })
        //     return {
        //         list: res.result
        //     }
        // },
        data() {
            return {
                list: [],
                id: '',
                first: [],

            }
        },
        methods: {
            getdata() {
                this.id = this.$route.query.oid;
                get('videoCategoryDetails?id=' + this.id).then(res => {
                        this.list = res.result
                    })
                    // this.$fetch()
            },
            // refresh() {
            //     this.$fetch();
            // }
        },
        beforeRouteUpdate(to, from, next) {
            if (to.fullPath != from.fullPath) {
                next()
                    // this.$fetch()
                this.getdata()
            }
        },
        mounted() {
            // let id = this.$store.state.fristid
            // console.log(this.$store.state.fristid)
            let id = this.$store.state.fristid
                // console.log(id)
            get('videoCategoryDetails?id=' + id).then(res => {
                this.first = res.result
            })
        },
    }
</script>

<style>
    .vidio-list {
        padding: 20px;
        margin: 0 auto;
        text-align: center;
    }
    
    .vidio-list li {
        list-style: none;
        margin-top: 20px;
        border: 1px solid pink;
    }
    
    .vidio-list li p {
        text-align: left;
        text-indent: 2em
    }
    
    .vidio-list li img {
        width: 100px;
    }
</style>