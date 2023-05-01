import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Model, createServer } from 'miragejs'

createServer({
  models: {
    card: Model
  },

  routes() {
    this.namespace = '/api'

    this.get('/cards', () => {
      return this.schema.all('transaction')
    })

    this.post('/cards', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('card', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
