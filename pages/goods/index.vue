<template>
  <div class="goods">
    <h3>商品列表</h3>
    <div class="goodlist">
      <keep-alive>
          <ul class="flex">
              <li v-for="item in list" ::key="item.sid" class="good-item">
                <p>{{item.name}}</p>
                <!-- <img :src="item.images" alt="无法加载"> -->
                <p>{{item.text}}</p>
                <p>{{item.passtime}}</p>
              </li>
            </ul>
      </keep-alive>
    </div>
  </div>
</template>

<script>
    // import {get
    // } from '~/plugins/axios.js'
    export default {
        async asyncData(ctx) {
            var datas = await ctx.$axios.get('https://api.apiopen.top/getJoke').then((res) => {
                    // console.log(res.data.result)
                    return res.data.result
                })
                // console.log(datas)
            return {
                list: datas
            }
        },
        data() {
            return {
                list: [],
            }
        },
        mounted() {
            // this.getdata()
        },
        methods: {
            getdata() {
                // this.$axios.get('https://api.apiopen.top/getJoke')
                //     .then(res => {
                //         console.log(res)
                //     })
                //     .catch(err => {
                //         reject(err.data)
                //     })

            }
        },
    }
</script>

<style scoped>
    .goods {
        margin-top: 20px
    }
    
    .goodlist {
        padding: 20px;
    }
    
    .good-item {
        width: 220px;
        height: 100px;
        list-style: none;
        border: 1px solid pink;
        text-align: center;
        margin: 10px;
        padding: 10px;
    }
    
    .text,
    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
<style>
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