import { sum } from '@/sum'

describe('Sum function', () => {
  test('returns the sum of the two given numbers', () => {
    const number1 = 1
    const number2 = 2

    const sut = sum(number1, number2)

    expect(sut).toStrictEqual(3)
  })
})
