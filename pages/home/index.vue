<template>
  <div class="home">
    <h1>home</h1>
    <div class="homelist">
       <table border="1" style="border-collapse: collapse;">
         <thead>
            <tr>
              <th width="38%">text</th>
              <th width="5%">up</td>
              <th width="5%">down</th>
              <th  width="10%">name</th>
              <th  width="20%">内容</th>
              <th  width="20%">创建时间</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="item in list" ::key="item.sid">
              <td class="text" width="38%">{{item.text}}</td>
              <td width="5%">{{item.up}}</td>
              <td width="5%">{{item.down}}</td>
              <td  width="10%">{{item.name}}</td>
              <td  width="20%" class="text">{{item.top_comments_content}}</td>
              <td width="20%">{{item.passtime}}</td>
            </tr>
         </tbody>
       </table>
       <div class="flex" style="margin-top:20px">
          <div> 第 <input type="text" v-model="page"> 页</div>
          <div> 显示 <input type="text" v-model="count"> 条</div>
          <select v-model="selected">
              <option value ="video" selected>video</option>
              <option value="gif">gif</option>
              <option value="image">image</option>
            </select>
            <button @click="screen">筛选</button>
            <button @click="clear">清除筛选</button>
       </div>
    </div>
  </div>
</template>

<script>
    export default {
        async asyncData({
            app,
            store
        }) {
            let data = await app.$axios.get('getJoke').then(res => {
                // console.log(res.data.result)
                store.state.homeList = res.data.result
                return res.data.result
            })
            return {
                list: data
            }
        },
        data() {
            return {
                list: [],
                page: '',
                count: '',
                selected: ''
            }
        },
        methods: {
            screen() {
                this.$axios.get('getJoke?page=' + this.page + '&&count=' + this.count + '&&type=' + this.selected).then(res => {
                    // console.log(res.data.result)
                    this.list = res.data.result
                })
            },
            clear() {
                this.list = this.$store.state.homeList
            }
        },
    }
</script>

<style scoped>
    .home {
        margin: 20px auto;
    }
    /* .homelist {
        width: 100vw;
    } */
    
    .homelist tr {
        text-align: center;
    }
    
    table {
        table-layout: fixed;
        width: 100vw;
    }
    
    .homelist table td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .text {
        text-align: left;
        padding: 0 5px;
        box-sizing: border-box;
    }
    
    .flex {
        display: flex;
        justify-content: left;
        align-content: center;
    }
</style>