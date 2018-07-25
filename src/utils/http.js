// import { showLoading, hideLoading, showAlertText, hideAlertText } from '@/components/Alert/module'
// import { logout } from '@/components/Auth/module'

const http = ({ dispatch, url, method, data, headers, success, fail, doHideAlert }) => {
  // 显示loading
//   dispatch(showLoading())
  let fetchObj = {}
  if (method) {
    fetchObj = {
      method,
      body: JSON.stringify(data),
      headers: new Headers({ ...headers, 'Content-Type': 'application/json' })
    }
  }
  fetch(url, fetchObj).then(res => {
    // 关闭loading
    // dispatch(hideLoading())
    return res.json()
  }).then(json => {
    // 成功
    if (json.code === 0) {
    //   !doHideAlert && dispatch(showAlertText(json.message))
    alert(json.message)
      setTimeout(() => {
        // dispatch(hideAlertText())
      }, 1000)
      success && success(json.result)
      // 自定义错误
    } else if (json.code === 1) {
    //   dispatch(showAlertText(json.message))
      alert(json.message)
      // 系统错误
    } else if (json.code === 2) {
    //   dispatch(showAlertText(json.message))
      alert(json.message)
      fail && fail(json.err)
      // 认证失败
    } else if (json.code === 3) {
    //   dispatch(showAlertText(json.message))
      alert(json.message)
    //   dispatch(logout)
      // 权限不足
    } else if (json.code === 4) {
    //   dispatch(showAlertText(json.message))
      alert(json.message)
    }
  }).catch(() => {
    // dispatch(showAlertText('服务器故障'))
    alert('服务器故障')
  })
}

export default http