'use strict'

const pagination = ({ total, activePage }) => {
  // return Array.apply(null, { length: total }).map((_, index) => index + 1)
  return Array.from({ length: total }, (_, i) => i + 1)
}

export default pagination
