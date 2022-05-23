import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {HeaderWrapper} from './style'
const CBThemeHeaderSmall = memo((props) => {
    const {title,more=''} = props
  return (
    <HeaderWrapper>
        <span>{title}</span>
        <a href=' ' > {more}</a>
    </HeaderWrapper>
  )
})
CBThemeHeaderSmall.propTypes = {
    title:PropTypes.string.isRequired,
    more:PropTypes.string,
}
export default CBThemeHeaderSmall