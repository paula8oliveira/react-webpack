'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido'
    }
  },

  render: function () {
    return (
      <div className='container'>
        <Title />
      </div>
    )
  }
})

export default App
