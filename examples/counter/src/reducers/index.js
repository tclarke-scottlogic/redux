export default (state = 0, thing) => {
  switch (thing.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'DOUBLE':
      return state * 2
    default:
      return state
  }
}
