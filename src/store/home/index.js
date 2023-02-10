import {reqCategoryList} from '../../api'
import { getBannerList } from '../../api';
import { reqFloorList } from '../../api';
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations={
    GetcategoryList(state,data){
        state.categoryList=data
    },
    GETBANNERLIST(state,data){
        state.bannerList=data
    },
    GETFLOORLIST(state,data){
        state.floorList=data
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
    },
    async getFloorList({commit}){
        let result=await reqFloorList()
        if(result.code==200){
            commit('GETFLOORLIST',result.data)
        }
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}