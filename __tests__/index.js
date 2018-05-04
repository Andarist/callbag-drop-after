import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'

import dropAfter from '../src'

test('works', () => {
  const actual = []

  pipe(
    fromIter([10, 20, 30, 40, 50, 60, 70]),
    dropAfter(value => value >= 30),
    forEach(data => {
      actual.push(data)
    }),
  )

  expect(actual).toEqual([10, 20, 30])
})
