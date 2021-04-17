<template>
    <div>
      修改用户信息{{id}}---{{name}}
      修改用户信息{{id}}---{{name1}}
    </div>
  </template>

<script>
    export default {
        asyncData() {
            return {
                name: 'lisi'
            }
            console.log('打印lisi')
        },
        data() {
            return {
                id: '',
                name: '',
                name1: ''
            }
        },
        methods: {
            getname() {
                // axios.get('').then((res)=>{
                this.name1 = 'zhangsan'
                    // })
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.getname()
        },
    }
</script>

<style>

</style>