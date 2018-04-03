const generator = require('../data/generator')

test('generate seed data should return given amount', () => {
  generator.data(1000).subscribe(
    result => {
      expect(result.length).toBe(1000)
    }
  )
})
