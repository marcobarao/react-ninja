'use strict'

import { expect } from 'chai'
import pagination from './index'

it('pagination should be a function', () => {
  expect(pagination).to.be.a('function')
})

it('pagination({ total: 1, activePage: 1 }) should return [1]', () => {
  const params = { total: 1, activePage:1 };
  const result = [1];
  expect(pagination(params)).to.be.deep.equal(result);
})
