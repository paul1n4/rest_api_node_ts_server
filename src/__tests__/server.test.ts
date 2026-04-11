describe('Our first test', () => {
  it('Check that 1+1 equals 2', () => {
    expect(1+1).toBe(2)
  })

  it('Check that 1+1 is not equal to 3', () => {
    expect(1+1).not.toBe(3)
  })
})