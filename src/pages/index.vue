<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        
        <template v-for="product in productList">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in getNewsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <a class="button" :href="item.href">立即购买</a>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script>
  import slideShow from '../components/slideShow'
  export default {
    components:{
      slideShow    //对自定义标签进行命名
    },
    //实际上它是一个AJAX通讯器，讲后台数据传到前台放入newsList中
    created: function () {
      this.$http.get('api/getNewsList')
      .then((res) => {
        this.getNewsList = res.data  //请求data数据
      }, (err)=>{
        console.log(err)
      })
    },
    data () {
      return {
        invTime: 5000,  //优先于听父组件的5s，如果父组件未设定，则听子组件的2.5s
        slides: [
          {
            src: require('../assets/slideShow/owb.png'),
            title: 'xxx1',
            href: 'detail/ow'
          },
          {
            src: require('../assets/slideShow/hrb.png'),
            title: 'xxx2',
            href: 'detail/hr'
          },
          {
            src: require('../assets/slideShow/lolb.png'),
            title: 'xxx3',
            href: 'detail/lol'
          },
          {
            src: require('../assets/slideShow/sgsb.png'),
            title: 'xxx4',
            href: 'detail/sgs'
          },
        ],
        boardList: [
          {
            title: '守望先锋',
            description: '守望先锋是一款FPS和MOBA结合的射击类游戏。',
            id: 'ow',
            saleout: false,
            href: 'detail/ow'
          },
          {
            title: '炉石传说',
            description: '炉石传说是一款暴雪出品的第一款卡牌益智类游戏。',
            id: 'hr',
            saleout: false,
            href: 'detail/hr'
          },
          {
            title: '英雄联盟',
            description: '英雄联盟是一款时下最火热的MOBA类游戏。',
            id: 'lol',
            saleout: true,
            href: 'detail/lol'
          },
          {
            title: '三国杀',
            description: '三国杀是一款多人合作益智类卡牌经典游戏。',
            id: 'sgs',
            saleout: false,
            href: 'detail/sgs'
          },
        ],
        getNewsList: [],
        productList: {
          pc: {
            title: '游戏产品',
          list: [
            {
              name: '守望先锋',
              url: 'http://ow.blizzard.cn/',
              hot: true
            },
            {
              name: '英雄联盟',
              url: 'http://lol.qq.com/'
            },
            {
              name: '炉石传说',
              url: 'http://hs.blizzard.cn/landing',
            },
            {
              name: '三国杀',
              url: 'http://www.sanguosha.com/'
            }
          ]
          },
          app: {
             title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
          },
        },
      }
    }
  }
  </script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 140px;
}
.index-board-ow .index-board-item-inner{
  background: url(../assets/images/ow.png) no-repeat;
  /*因为此处为background属性，它是从padding内边距开始填充，再加上设置了图片非平铺，在加上设置padding-left:140px,所以120x120的图片自然在padding里面了*/
}
.index-board-hr .index-board-item-inner{
  background: url(../assets/images/hr.png) no-repeat;
}
.index-board-lol .index-board-item-inner{
  background: url(../assets/images/lol.jpg) no-repeat;
}
.index-board-sgs .index-board-item-inner{
  background: url(../assets/images/sgs.jpg) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0px;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block; /*此处代表 可以设置宽高的 行内元素inline*/
  width: 230px;
  overflow: hidden;    /*浮动的溢出文本会隐藏*/
  text-overflow: ellipsis; /*溢出的文本用省略号形式展现*/
  white-space: nowrap;  /*不换行处理*/
}
</style>
