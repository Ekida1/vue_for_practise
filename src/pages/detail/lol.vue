<template>
<div class="sales-board">
<div class="sales-board-intro">
<h2>英雄联盟</h2>
<p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
</div>
<div class="sales-board-form">
  <div class="sales-board-line">
    <div class="sales-board-line-left">
      礼包类型：
</div>
<div class="sales-board-line-right">
  <v-chooser :selections="buyTypes"   @on-change="onChooserChange($event)"></v-chooser>
 </div>
 </div>
 <div class="sales-board-line">
   <div class="sales-board-line-left">
    礼包数量：
    </div>
    <div class="sales-board-line-right">
      <v-chooser :selections="buyAmount"  @on-change="onCountChange($event)"></v-chooser>
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
                   <div class="button"   @click="ShowPayDialog">
                   立即购买
                   </div>
                     </div>
                       </div>
                         </div>
        <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
      </div>

       <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <table class="buy-dialog-table">
          <tr>
            <th>礼包类型</th>
            <th>礼包数量</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ category }}</td>
            <td>{{ packetNum }}</td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onChangeBnaks($event)"></bank-chooser>
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
import VChooser from '../../components/base/chooser'
import VSelection from '../../components/base/selection'
import Dialog from '../../components/base/dialog'
import BankChooser from '../../components/bankChooser'
import CheckOrder from '../../components/checkOrder'
import _ from 'lodash'
export default {
    components: {VChooser,VSelection,MyDialog:Dialog,BankChooser,CheckOrder},
    data () {
        return {
            price: 5,
            category:'普通礼包',
            packetNum:1,
            somevalue:0,
            bankId: null,
            orderId: null,
            isShowPayDialog:false,
            isShowCheckOrder:false,
            isShowErrDialog:false,
            buyTypes:[
                {
                   label:'普通礼包',
                   value:0,
                   charge:5
                },
                {
                    label:'精美礼包',
                    value:1,
                    charge:10
                }
            ],
            buyAmount:[
                {
                    label:'1个',
                    value:'0',
                    multiple: 1
                },
                {
                    label:'10+1个（必出稀有）',
                    value:'1',
                    multiple: 10
                },
            ],
        }
    },
    methods: {
            onChooserChange(cate) {
                  this.price = cate.charge
                  this.somevalue = cate.value
                  this.category = cate.label
            },
            onCountChange(mul){
                  if(this.somevalue === 0){
                  this.price =  5 * mul.multiple
                  this.packetNum = this.label
                  }
                  if(this.somevalue === 1){
                      this.price = 10 * mul.multiple
                  }
            },
            hidePayDialog () {
               this.isShowPayDialog = false
            },
            ShowPayDialog () {
                this.isShowPayDialog = true
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