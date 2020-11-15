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
    const input = [[25, 30], [2, 19], [14, 23], [4, 8]]
    const expected = [[2, 23], [25, 30]]

    const actual = merge_overlaps(input)

    expect(actual).toStrictEqual(expected)
  })

  it("considers zero length ranges to be valid", () => {
    const input = [[3, 10], [95, 95], [21, 61], [0, 2], [14, 22], [0, 0], [41, 66], [34, 79], [18, 95], [66, 67], [31, 52]]
    const expected = [[0, 2], [3, 10], [14, 95]]

    const actual = merge_overlaps(input)

    expect(actual).toStrictEqual(expected)
  })

  it("is idempotent", () => {
    const original_input = [[3, 10], [21, 61], [0, 2], [14, 22], [0, 0], [41, 66], [34, 79], [18, 95], [66, 67], [31, 52]]
    const expected = [[0, 2], [3, 10], [14, 95]]

    const input = merge_overlaps(original_input)
    const actual = merge_overlaps(input)

    expect(actual).toStrictEqual(expected)
  })

  it("runs acceptably fast for larger inputs", () => {
    const randomInt = (int) => Math.floor(Math.random * int)
    const original_input = Array.from({ length: 100000 }, () => { const end = randomInt(100000); return [randomInt(end), end] })

    const expected = merge_overlaps(original_input)
    const actual = merge_overlaps(expected)

    expect(actual).toStrictEqual(expected)

  })
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