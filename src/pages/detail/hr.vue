<template>
<div class="sales-board">
<div class="sales-board-intro">
<h2>炉石传说</h2>
<p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
</div>
<div class="sales-board-form">
  <div class="sales-board-line">
    <div class="sales-board-line-left">
      卡包类型：
</div>
<div class="sales-board-line-right">
  <v-selection :selections="productTypes"  @on-change="onSelectionChange($event)"></v-selection>
 </div>
 </div>
 <div class="sales-board-line">
   <div class="sales-board-line-left">
    卡包数量：
    </div>
    <div class="sales-board-line-right">
      <v-chooser :selections="buyAmount" @on-change="onChooserChange($event)"></v-chooser>
        </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
           总价：
           </div>
           <div class="sales-board-line-right">
                 {{price}} 元
           </div>
             </div>
               <div class="sales-board-line">
                 <div class="salse-board-line-left">&nbsp; </div>
                 <div class=""sales-board-line-right>
                   <div class="button"  @click="ShowPayDialog">
                   立即购买
                   </div>
                     </div>
                       </div>
                         </div>
                         <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>安全安保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>办公文教</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>彩票</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>车辆物流</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>成人用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>出版传媒</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>电脑硬件</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>电子电工</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>房地产建筑装修</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分类平台</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>服装鞋帽</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>箱包饰品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>化工原料制品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>机械设备</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>家庭日用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>家用电器</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>教育培训</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>节能环保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>金融服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>礼品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>旅游住宿</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>美容化妆</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>母婴护理</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>农林牧渔</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>商务服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>生活服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>食品保健品</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>手机数码</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>医疗服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>游戏</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运动休闲娱乐</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>招商加盟</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
      <my-dialog  :is-show="isShowPayDialog" @on-close="hidePayDialog">
          <table class="buy-dialog-table">
             <tr>
            <th>卡包类型</th>
            <th>卡包数量</th>
            <th>总价</th>
          </tr>
            <tr>
            <td>{{category}}</td>
            <td>{{packetNum}}</td>
            <td>{{price}}</td>
            </tr>
            </table>
            <h3 class="buy-dialog-title">请选择银行</h3>
            <bank-chooser @on-change="onChangeBanks($event)"></bank-chooser>
            <div class="button buy-dialog-btn" @click="confirmBuy">
            确认购买
            </div>
      </my-dialog>

       <check-order :is-show-check-dialog="isShowCheckOrder"  :order-id="orderId" 
     @on-close-check-dialog="hideCheckOrder">
       </check-order>
     <my-dialog :is-show="isShowErrDialog"  @on-close="hideErrDialog">
      支付失败
      </my-dialog>
  </div>    
 </template>


<script>
import VSelection from '../../components/base/selection'
import VChooser from '../../components/base/chooser'
import Dialog from '../../components/base/dialog'
import BankChooser from '../../components/bankChooser'
import CheckOrder from '../../components/checkOrder'
import _ from 'lodash'
export default {
    components: {VSelection,VChooser,MyDialog:Dialog,BankChooser,CheckOrder},
   data () {
        return {
            price: 60,
            category:'上古之神的低语',
            packetNum:7,
            bankId: null,
            orderId: null,
            isShowPayDialog:false,
            isShowCheckOrder:false,
            isShowErrDialog:false,
        productTypes:[
            {
                label:'上古之神的低语',
                value:'0',
            },
            {
                label:'龙争虎斗加基森',
                value:'1',
            },
            {
                label:'炉石勇闯安戈洛',
                value:'2',
            }
        ],
        buyAmount:[
            {
                label:'7包',
                value:'0',
                charge:60
            },
            {
                label:'15包',
                value:'1',
                charge:128
            },
            {
                label:'40包',
                value:'2',
                charge:328
            },
            {
                label:'60包',
                value:'3',
                charge:388
            },
        ]
        }
    },
    methods: {
              onSelectionChange (val) {
                   this.category = val.label
              },

              onChooserChange (idx) {
                   this.price = idx.charge
                   this.packetNum = idx.label
              },
              ShowPayDialog () {
                       this.isShowPayDialog = true
              },
              hidePayDialog () {
                    this.isShowPayDialog = false
              },
               hideErrDialog () {
            this.isShowErrDialog = false
              },
        hideCheckOrder () {
            this.isShowCheckOrder = false
              },
        onChangeBnaks (bankObj) {
            this.bankId = bankObj.id
            console.log(this.bankId)
              },
        confirmBuy () {
        let buyVersionsArray = _.map(this.versions, (item) => {
            return item.value
        })
        let reqParams = {
            buyCategory: this.category,
            buyPacketNum: this.packetNum,
            bankId: this.bankId,
        }
        this.$http.post('/api/createOrder' , reqParams)
          .then((res)=>{
              this.orderId = res.data.orderId
              console.log(this.orderId)
              this.isShowCheckOrder = true
              this.isShowPayDialog = false
          }, (err)=>{
              this.isShowPayDialog = false
              this.isShowErrDialog = true
          })
    }, 
    }
}
</script>

<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>