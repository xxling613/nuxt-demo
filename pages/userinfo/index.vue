<template>
    <div>
      用户首页
      <nuxt-link :to="'/userinfo/one'">to one</nuxt-link>
      <nuxt-link :to="'/userinfo/101'">to 详情</nuxt-link>
      <nuxt-link :to="'/userinfo/two'">to two</nuxt-link>
      <nuxt-child />
    </div>
  </template>

<style>

</style>