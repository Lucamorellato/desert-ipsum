// In your routes configuration file
const path = require('path')
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.tsx`),
  },
  {
    path: '/404/',
    component: path.resolve(`src/pages/404.tsx`),
  },
]
