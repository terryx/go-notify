const Nightmare = require('nightmare')

const baseUrl = 'http://localhost:1234/'

describe('When open the page', () => {
  test('Table should display', done => {
    const nightmare = Nightmare()

    nightmare
      .goto(baseUrl)
      .wait('.table-container')
      .wait('.card')
      .end()
      .then(() => done())
      .catch(err => console.error(err.message))
  })

  test('Display alert when notify driver', done => {
    const nightmare = Nightmare({ show: true })

    nightmare
      .goto(baseUrl)
      .wait('.table-container')
      .wait('.card')
      .click('.table-container .card:nth-child(1) .actions .notify')
      .wait('.modal-container')
      .type('textarea ', 'Hello')
      .click('.modal-content .actions .send')
      .wait('.alert')
      .evaluate(() => document.querySelector('.alert').innerText)
      .end()
      .then(result => {
        expect(result.includes('Hello')).toBe(true)
        done()
      })
      .catch(err => console.error(err.message))
  })
})
