const { describe, it, expect } = require("@jest/globals");
const { hasOverlap, merge_overlaps } = require("../2d_overlap_merge")

describe("merge_overlaps", () => {
  it("defaults to an empty array", () => {
    const input = undefined
    const expected = []

    const actual = merge_overlaps(input)

    expect(actual).toStrictEqual(expected)
  })

  it("works for single entry", () => {
    const input = [[9, 23]]
    const expected = [[9, 23]]

    const actual = merge_overlaps(input)

    expect(actual).toStrictEqual(expected)
  })

  it("merges correctly for normalized entries", () => {
    const input = [[25,30], [2,19], [14, 23], [4,8]]
    const expected = [[2,23], [25,30]]

    const actual = merge_overlaps(input)

    expect(actual).toStrictEqual(expected)
  })

  it.todo("runs acceptably fast for larger inputs")
  it.todo("does not mutate input")
  it.todo("paralellizes well")
})

describe("hasOverlap", () => {
  it("returns true for overlapping ranges", () => {
    const input = [[4, 8], [7, 9]]
    const expected = true

    const actual = hasOverlap(...input)

    expect(actual).toBe(expected)
  })

  it("returns false for non-overlapping ranges", () => {
    const input = [[4, 8], [20, 25]]
    const expected = false

    const actual = hasOverlap(...input)

    expect(actual).toBe(expected)
  })

})