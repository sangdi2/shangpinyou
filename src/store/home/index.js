import {reqCategoryList} from '../../api'
const state={
    categoryList:[]
};
const mutations={
    GetcategoryList(state,data){
        state.categoryList=data
    }
};
const getters={};
const actions={
    async getcategoryList({commit}){
        const result=await  reqCategoryList()
        if(result.code==200){
            commit('GetcategoryList',result.data)
        }
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}