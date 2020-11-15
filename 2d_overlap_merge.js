const merge_overlaps = (inputs = []) => inputs.reduce(() => {}, [])

const range_length = ([start, end]) => end - start

const hasOverlap = ([start_a, end_a], [start_b, end_b]) => (
  range_length([Math.min(start_a, start_b), Math.max(end_a, end_b)]) < range_length([start_a, end_a]) + range_length([start_b, end_b])
)

module.exports = {
  merge_overlaps,
  hasOverlap
}