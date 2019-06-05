import { Notification } from 'element-ui'

export default function({ $axios, $nuxt, redirect }) {
  $axios.onError(err => {
    if (err.response.status === 500) {
      return $nuxt.error(err)
    } else {
      return Notification({
        title: `Error ${err.response.code}`,
        message: err.response,
        type: 'error',
        duration: 600
      })
    }
  })

  $axios.onResponse(res => {
    Notification({
      title: 'Success!',
      message: 'Planets have being loaded',
      type: 'success',
      duration: 1200
    })

    return res
  })
}
