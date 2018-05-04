# callbag-drop-after

Callbag operator that drops all events after the first event for which predicate returns `true`.

Inspired by [most.js's skipAfter](https://mostcore.readthedocs.io/en/latest/api.html#skipafter).

## Example

```js
import dropAfter from 'callbag-drop-after'
import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'

pipe(
  fromIter([10, 20, 30, 40, 50, 60, 70]),
  dropAfter(value => value >= 30),
  forEach(value => {
    // will log 10, 20, 30
    console.log(value)
  }),
)
```
