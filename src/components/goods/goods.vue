<template>
<div class="goods">
	<div class="box">
		<div class="left-box" ref='leftBox'><!-- ref='leftBox'//滚动 -->
			<ul>
				<li v-for='itme in goods'>
				<span class="text">
					<span class="icon" v-show='itme.type>0' :class="classMap[itme.type]"></span>{{itme.name}}
				</span>
				</li>
			</ul>
		</div>
		<div class="right-box" ref='rightBox'>
			<ul >
				<li v-for="itme in goods" class="right-box-li">
					<h1 class="right-box-h1">{{itme.name}}</h1>
					<ul>
						<li v-for="food in itme.foods" class="right-box-li2">
							<div class="icon-img">
								<img :src="food.icon" width="57" height="57">
							</div>
							<div class="foods-text">
								<h1>{{food.name}}</h1>
								<p>{{food.description}}</p>
								<div>
									<span>月售{{food.sellCount}}份</span>
									<span>好评率{{food.rating}}%</span>
								</div>
								<div>
									<span>￥{{food.price}}</span>
									<s v-show="food.oldPrice">{{food.oldPrice}}</s>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<div class="footer-box"></div>
</div>
   
</template>

<script>
import BScroll from 'better-scroll'//滚动

const ERR_OK = 0
export default {
	data() {
		return {
			goods: []
		}
	},
	created() {
		this.classMap = ['decrease','discount','guarantee','invoice','special'],

     	this.$http.get('/api/goods').then((response) => {
       response = response.body;
       if (response.erron === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods);
        this.$nextTick(() => {//滚动
        this.initScroll()
       })
       }
     })
	},
	methods: {//滚动
		initScroll() {
			this.leftScroll = new BScroll(this.$refs.leftBox, {}),
			this.rightScroll = new BScroll(this.$refs.rightBox, {})
		}
	}
}
</script>


<style >
.goods{}
.box{
	display: flex;
	position: absolute;
	top: 185px;
	bottom: 60px;
	width: 100%;
	overflow: hidden;
}
.left-box{
	flex: 0 0 80px;
	width: 80px;
	background-color: #f3f5f7;
}
.left-box ul li{
	display: table;
	font-size: 12px;
	width: 56px;
	height: 54px;
	line-height: 14px;
}
.left-box ul li .text{
	display: table-cell;
	vertical-align: middle;
	line-height: 16px;
	border-bottom: 1px solid #ccc
}
.right-box{
	width: 100%;
	flex: 1
}
.icon{
  display: inline-block;
  width: 12px;
  height: 12px;
  vertical-align: middle;
  margin-right: 2px
} 
.icon.decrease{
  background: url('./decrease_3@2x.png') no-repeat;
  -webkit-background-size: 12px 12px;
  background-size: 12px 12px;
}
.icon.discount{
  background: url('./discount_3@2x.png') no-repeat;
  -webkit-background-size: 12px 12px;
  background-size: 12px 12px;
}
.icon.guarantee{
  background: url('./guarantee_3@2x.png') no-repeat;
  -webkit-background-size: 12px 12px;
  background-size: 12px 12px;
}
.icon.invoice{
  background: url('./invoice_3@2x.png') no-repeat;
  -webkit-background-size: 12px 12px;
  background-size: 12px 12px;
}
.icon.special{
  background: url('./special_3@2x.png') no-repeat;
  -webkit-background-size: 12px 12px;
  background-size: 12px 12px;
}
.right-box-h1{
	font-size: 12px;
	padding-left: 14px;
	height: 26px;
	line-height: 26px;
	border-left: 2px solid #d9dde1;
	color: rgb(147, 153, 159);
	background-color: #f3f5f7;
}
.right-box-li{
	margin: 0;
	width: 100%;
}
.right-box-li2{
	display: flex;
	margin: 18px;
	padding-bottom: 18px;
	border-bottom: 1px solid #ccc;
}
.icon-img{
	margin-right: 10px;
}
.foods-text{
	font-size: 12px;
	line-height: 16px;
}
</style>
