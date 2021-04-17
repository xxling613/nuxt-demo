<template>
    <div>
      <h6>视频列表</h6>
      <div class="vidiodet">
        <keep-alive>
            <ul>
                <li v-for="(item,index) in first" :key="index" class="" >
                    <h4>{{item.data.header.title}}</h4>
                    <img :src="item.data.header.icon" alt="图片加载失败">
                    <p>{{item.data.content.data.description}}</p>
                    <p>点赞数:{{item.data.content.data.duration}}</p>
                </li>
                <li v-for="(item,index) in list" :key="index" class="" > 
                   <h4>{{item.data.header.title}}</h4>
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
            }
        },
        beforeRouteUpdate(to, from, next) {
            if (to.fullPath != from.fullPath) {
                next()
                this.getdata()
            }
        },
        mounted() {
            // let id = this.$store.state.fristid
            // console.log(id)
            get('videoCategoryDetails?id=36').then(res => {
                this.first = res.result
            })
        },
    }
</script>

<style>
    .vidiodet {
        padding: 20px;
        margin: 0 auto;
        text-align: center;
    }
    
    .vidiodet li {
        list-style: none;
        margin-top: 20px
    }
    
    .vidiodet li p {
        text-align: left;
        text-indent: 2em
    }
    
    .vidiodet li img {
        width: 100px;
    }
</style>