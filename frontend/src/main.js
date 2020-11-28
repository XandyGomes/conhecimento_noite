import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/msgs'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsZXhhbmRyZSBHb21lcyBkYSBTaWx2YSIsImVtYWlsIjoiYWxleGFuZHJlLnNpbHZhMTI0QGZhdGVjLnNwLmdvdi5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDY1MTgxNjMsImV4cCI6MTYwNjYwNDU2M30.EiTeXA5KnMTPGQLLPEtm2glZ08lav1u7lthcekO9S1U'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')