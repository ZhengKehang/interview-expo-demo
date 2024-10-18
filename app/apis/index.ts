import requestUtil from "./request";

export const getServerTime = () => {
  return requestUtil.request({
    path: `/time`,
    method: "GET",
  })
}
