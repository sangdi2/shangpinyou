import { reqSearchInfo } from "@/api";
const state={
    searchinfo:{}
};
const mutations={
    GETSEARCHINFO(state,searchinfo){
        state.searchinfo=searchinfo
    }
};
const getters={
    getGoodsList(state){
        return state.searchinfo.goodsList
    }
};
const actions={
    async getSearchInfo({commit},params={}){
        let result =await reqSearchInfo(params)
        if(result.code==200){
            commit('GETSEARCHINFO',result.data)
        }
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}