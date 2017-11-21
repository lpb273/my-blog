<template>
  <div class="content">
    <content-navigation class="con-nav"></content-navigation>
  </div>
</template>

<script>
  import contentNavigation from './ContentNavigation'
  export default {
    data() {
      return {

      }
    },
    components: {
      contentNavigation
    }
  }

</script>

<style lang="css" scoped>
.con-nav{
  background: #ff9000;
}

</style>
