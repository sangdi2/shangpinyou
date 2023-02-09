import requests from "./request";
import mockRequests from './mockdata'
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const getBannerList=()=>mockRequests({url:'/banner',method:'get'});
