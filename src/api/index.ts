import requests from "../api/request";
//获取商品类型列表
// export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',methods:'get'})

/**
 *
 * 调用注册接口
 *
 */
export const reqRegister = (data: any) =>
  requests({ url: "user/regUser", method: "post", data });

/**
 *
 * 调用登录接口
 *
 */
export const reqLogin = (data: any) =>
  requests({ url: "user/login", method: "post", data });

/**
 *
 * 调用修改密码接口
 *
 */
export const reqUpdatePass = (data: any) =>
  requests({ url: "my/resetPwd", method: "post", data });
/**
 *
 * 获取用户信息接口
 *
 */
export const reqGetUserInfo = () =>
  requests({ url: "/my/userInfo", method: "get" });
/**
 *
 * 查看文章分类接口
 *
 */
export const reqSelectSort = (id:number) =>
  requests({
    url: "/article/getAllCategory",
    method: "get",
    params: id,
  });
/**
 *
 * 添加文章分类接口
 *
 */
export const reqAddSort = (data: any) =>
  requests({ url: "/article/addCategory", method: "post", data });
/**
 *
 * 修改文章分类接口
 *
 */
export const reqUpdateSort = (data: any) =>
  requests({ url: "/article/editCategory", method: "post", data });
/**
 *
 * 删除文章分类接口
 *
 */
export const reqDeleteSort = (data: any) =>
  requests({ url: "/article/deleteCategory", method: "get", data });

/**
 *
 * 添加文章分类接口
 *
 */
export const getAllMenuCategory = () =>
  requests({ url: "/article/getAllRouterCategory", method: "get" });