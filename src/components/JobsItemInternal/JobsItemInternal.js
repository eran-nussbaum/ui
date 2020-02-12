import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import JobsItemInternalView from './JobsItemInternalView'

const JobsItemInternal = ({ match, ...props }) => {
  useEffect(() => {
    if (match.params.tab) {
      document
        .getElementsByClassName('jobs__table__item__menu_item active')[0]
        .classList.remove('active')
      document.getElementById(match.params.tab).classList.add('active')
    }
  })

  const handleMenuClick = e => {
    document
      .getElementsByClassName('jobs__table__item__menu_item active')[0]
      .classList.remove('active')
    e.target.closest('.jobs__table__item__menu_item').classList.add('active')
  }
  return (
    <JobsItemInternalView
      handleMenuClick={handleMenuClick}
      match={match}
      {...props}
    />
  )
}

JobsItemInternal.propTypes = {
  job: PropTypes.shape({}).isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleShowElements: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired
}

export default JobsItemInternal