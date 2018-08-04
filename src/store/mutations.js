/*
直接更新state的多个方法的对象
 */

import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATING,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CARTS,
  RECEIVE_SEARCHSHOPS
} from './mutations-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATING](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if (!food.count) {//第一次增加
      //food.count = 1//新增属性（没有数据绑定）
      //1.对象
      //2.属性值（字符串）
      //3.值
      Vue.set(food,'count',1)//让新增的属性可以绑定数据
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count--
      if (food.count===0){
        //将food从foodCarts中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CARTS](state) {
    //清除food中的食物数量count
    state.cartFoods.forEach(food=>{
      return food.count=0
    })
    //清除cartFoods
    state.cartFoods=[]
  },
  [RECEIVE_SEARCHSHOPS](state, {searchShops}) {
    state.searchShops = searchShops
  },
}


