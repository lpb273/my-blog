<template>
  <div class="container-fluid">
    <blog-header class="row"></blog-header>
    <div class="content row">
      <!-- 左侧 -->
      <blogger-info class="main-info col-md-2"></blogger-info>

      <!-- 中间 -->
      <blog-content class="main-con col-md-8"></blog-content>

      <!-- 右侧 -->
      <label-list class="main-label col-md-2"></label-list>
    </div>

    <blog-footer class="row"></blog-footer>
  </div>
</template>

<script>
  import blogHeader from './Header'
  import blogFooter from './Footer'
  import bloggerInfo from './BloggerInfo'
  import labelList from './LabelList'
  import blogContent from './BlogContent'
  // import contentNavigation from './ContentNavigation'
  export default {
    name: 'index',
    components: {
      blogHeader,
      blogFooter,
      bloggerInfo,
      labelList,
      blogContent
    },
    data() {
      return {
        msg: ''
      }
    }
  }

</script>


<style lang="css" scoped>
  .content {
    height: 709px;
    background: blue;
  }

  .main-con {
    background: #64c2f7;
  }

  .main-info {
    background: pink;
  }

  .main-label {
    background: gray;
  }

</style>
