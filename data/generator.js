// Let's generate some seed data with `node generator.js`
const Chance = require('chance')
const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

const chance = Chance()

const data = (size) => Observable
  .range(1, size)
  .map(index => ({
    id: index,
    name: chance.name(),
    phone: `+62${chance.phone({ formatted: false, mobile: true })}`,
    email: chance.email({ domain: 'lovebonito.com' }),
    suspended: chance.integer({ min: 0, max: 1 })
  }))
  .toArray()
  .mergeMap(data =>
    Observable
      .bindNodeCallback(fs.writeFile)(path.join(__dirname, 'drivers.json'), JSON.stringify(data), 'utf8')
      .mapTo(data)
  )

module.exports = { data }
