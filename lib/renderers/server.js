import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import StateApi from 'state-api'
import config from 'config'

import App from 'components/App'

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`)
  const store = new StateApi(resp.data.data)

  return {
    initialContent: ReactDOMServer.renderToString(<App store={store} />),
    initialData: resp.data.data,
  }
}

export default serverRender
