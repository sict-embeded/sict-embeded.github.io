/**
 * @author Lorenzo Cadamuro / http://lorenzocadamuro.com
 */

import Stats from 'stats.js'

let stats

const init = () => {
  stats = new Stats()

  stats.showPanel(0)

  document.body.appendChild(stats.dom)
}

process.env.NODE_ENV !== 'production' && false && init()

export default {
  begin: () => {
    if (stats) {
      stats.begin()
    }
  },
  end: () => {
    if (stats) {
      stats.end()
    }
  },
}
