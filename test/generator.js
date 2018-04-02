const Chance = require('chance')
const fs = require('fs')
const { Observable } = require('rxjs')

const chance = Chance()

Observable
  .range(0, 1000)
  .map(index => ({
    id: index,
    name: chance.name(),
    phone: `+62${chance.phone({ formatted: false, mobile: true })}`,
    email: chance.email({ domain: 'gojek.com' }),
    suspended: chance.integer({ min: 0, max: 1 })
  }))
  .toArray()
  .mergeMap(data => Observable.bindNodeCallback(fs.writeFile)('./test/drivers.json', JSON.stringify(data), 'utf8'))
  .subscribe(console.log, console.log)
