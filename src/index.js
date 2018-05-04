export default function dropAfter(predicate) {
  return source => (start, sink) => {
    if (start !== 0) return

    let completed = false
    let sourceTalkback

    const talkback = (type, data) => {
      if (completed) return
      sourceTalkback(type, data)
    }

    source(0, (type, data) => {
      if (type === 0) {
        sourceTalkback = data
        sink(0, talkback)
        return
      }

      if (type !== 1) {
        sink(type, data)
        return
      }

      completed = predicate(data) === true

      sink(1, data)

      if (completed) {
        sink(2)
        sourceTalkback(2)
      }
    })
  }
}
