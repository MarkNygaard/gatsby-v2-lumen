import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="outer-layout">
      <div className="layout">
        <Helmet defaultTitle="Mark Nygaard" />
        {children}
      </div>
      </div>
    )
  }
}

export default Layout
