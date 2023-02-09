import {reqCategoryList} from '../../api'
import { getBannerList } from '../../api';
const state={
    categoryList:[],
    bannerList:[]
};
const mutations={
    GetcategoryList(state,data){
        state.categoryList=data
    },
    GETBANNERLIST(state,data){
        state.bannerList=data
    }
};
const getters={};
const actions={
    async getcategoryList({commit}){
        const result=await reqCategoryList()
        if(result.code==200){
            commit('GetcategoryList',result.data)
        }
    },
    async getBannerList({commit}){
        let result=await getBannerList()
        if(result.code==200){
            commit('GETBANNERLIST',result.data) 
        }
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}