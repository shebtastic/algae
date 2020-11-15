const merge_overlaps = (inputs) => {
  if(!inputs) return []

  const clonedInputs = JSON.parse(JSON.stringify(inputs))

  if(clonedInputs.length === 1) return clonedInputs

  return clonedInputs
    .sort(([start_a], [start_b]) => start_a - start_b)
    .reduce((accumulator, current) => {
      if(accumulator.length === 0) return [current]
      if(hasOverlap(accumulator[accumulator.length - 1], current)) {
        accumulator.push(merge(accumulator.pop(), current))
        return accumulator
      }
      accumulator.push(current)
      return accumulator
    }, [])
}

const range_length = ([start, end]) => end - start
const merge = ([start_a, end_a], [start_b, end_b]) => [Math.min(start_a, start_b), Math.max(end_a, end_b)]

const hasOverlap = ([start_a, end_a], [start_b, end_b]) => (
  range_length([Math.min(start_a, start_b), Math.max(end_a, end_b)]) <= range_length([start_a, end_a]) + range_length([start_b, end_b])
)

module.exports = {
  merge_overlaps,
  hasOverlap
}