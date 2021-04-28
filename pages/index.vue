<template>
  <div class="index">
    <h3>首页</h3>
    <h4>视频分类</h4>
    <keep-alive>
    <div class="vidioList">
          <ul class="flex">
              <li v-for="(item,index) in list" :key="index" class="vidio-item" @click="todet(item.data.id)">
                  {{item.data.title}}
                </li>
            </ul>
    </div>
  </keep-alive>
  <NuxtChild />
  </div>
</template>

<script>
    import {get,
        post
    } from '~/plugins/axios.js'
    export default {
        loading: false,
        async asyncData({
            app,
            store
        }) {
            let data = await app.$axios.get('videoCategory')
                // ctx.$store.commit('setfristid', data.data.result.itemList[0].data.id)
            store.state.fristid = data.data.result.itemList[0].data.id;
            return {
                list: data.data.result.itemList,
            }
        },
        data() {
            return {
                list: [],
                detList: [],
                fristid: ''
            }
        },
        methods: {
            todet(id) {
                // console.log(id)
                this.$router.push({
                    path: '/' + id,
                    query: {
                        oid: id,
                    }
                })
            },
            getdata() {
                get('videoCategory').then(res => {
                    this.list = res.result.itemList
                    this.fristid = this.list[0].data.id
                    console.log(this.fristid)
                })
            }
        },
        mounted() {
            // this.getdata()
        },
    }
</script>

<style>
    .vidioList {
        padding: 20px;
    }
    
    .vidio-item {
        width: 70px;
        height: 50px;
        list-style: none;
        border: 1px solid pink;
        text-align: center;
        margin: 10px;
        padding: 10px;
        background: palevioletred;
        color: white;
        border-radius: 10px;
    }
    
    .flex {
        display: flex;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
    }
    
    ul,
    p {
        margin: 0;
        padding: 0;
    }
</style>