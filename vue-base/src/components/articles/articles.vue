<template lang="pug">
  ul.articles
    li(v-for="(article, index) in articles", :key="index")
      img(:src="article.thumbnail_pic_s")
      h2 {{article.title}}
      p.summary {{article.author_name}}
      p.summary.time {{article.date}}
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    _requestNews() {
      api.getNews().then(res => {
        this.articles = res.articles
      })
    }
  },
  created() {
    this._requestNews()
  }
}
</script>

<style lang="stylus" scoped>
.articles
  li
    position relative
    margin-bottom 20px
    padding 10px 0 0 250px
    height 200px
    box-sizing border-box

    h2
      font-size 20px
      line-height 46px
      font-weight bold

    .summary
      font-size 14px
      line-height 24px

    .time
      text-align right
      padding-right 18px

    img
      height 90%
      position absolute
      left 10px
      top 50%
      transform translate3d(0, -50%, 0)
</style>
