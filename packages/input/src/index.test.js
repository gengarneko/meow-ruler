import React from 'react'
import renderer from 'react-test-renderer'
import '@emotion/jest'

import Input from '.'

describe('Input', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
