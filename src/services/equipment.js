import {request, METHOD} from '@/utils/request'
import { EQUIPMENT } from '@/services/api'


/**
 * @param {控制器最后名称, 用于拼接请求路径，例如：控制上,传入'startTop'，最终接口路径：BASE_URL/startTop} direction 
 * @param {id} userId 
 * @returns 
 */
export async function equipment( direction, userId) {
  console.log('direction', direction)
  return request(`${EQUIPMENT}${direction}`, METHOD.GET, { userId })
}

export function preview(params){
  return request(`${EQUIPMENT}/pushStream`, METHOD.GET, params)
  // return request(`${EQUIPMENT}/preview`, METHOD.GET, params)
}
// pushStream
// 推流测试


// START_DOWN: `${BASE_URL}/startDownLeft`, // 控制下左-开始
// END_DOWN_LEFT: `${BASE_URL}/endDownLeft`, // 控制下左-结束

// START_DOWN: `${BASE_URL}/startDownRight`, // 控制下右-开始
// END_DOWN_RIGHT: `${BASE_URL}/endDownRight`,// 控制下右-结束

// START_DOWN: `${BASE_URL}/startFocusFar`, // 焦点后调-开始
// END_DOWN: `${BASE_URL}/endFocusFar`, // 焦点后调-结束

// START_DOWN: `${BASE_URL}/startFocusNear`, // 焦点前调-开始
// END_DOWN: `${BASE_URL}/endFocusNear`, // 焦点前调-结束

// START_DOWN: `${BASE_URL}/startLeft`, // 控制左-开始
// END_DOWN: `${BASE_URL}/endLeft`, // 控制左-结束

// START_DOWN: `${BASE_URL}/startRight`, // 控制右-开始
// END_DOWN: `${BASE_URL}/endRight`, // 控制右-结束

// START_DOWN: `${BASE_URL}/startUp`, // 控制上-开始
// END_DOWN: `${BASE_URL}/endUp`, // 控制上-结束

// START_DOWN: `${BASE_URL}/startUpLeft`, // 控制上左-开始
// END_DOWN: `${BASE_URL}/endUpLeft`, // 控制上左-结束

// START_DOWN: `${BASE_URL}/startUpRight`, // 控制上右-开始
// END_DOWN: `${BASE_URL}/endUpRight`, // 控制上右-结束

// START_DOWN: `${BASE_URL}/startZoomIn`, // 焦距变大-开始
// END_DOWN: `${BASE_URL}/endZoomIn`, // 焦距变大-结束

// START_DOWN: `${BASE_URL}/startZoomOut`, // 焦距变小-开始
// END_DOWN: `${BASE_URL}/endZoomOut`, // 焦距变小-结束