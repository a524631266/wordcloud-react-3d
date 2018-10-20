import React, { Component } from 'react'
import PropTypes from 'prop-types'
// require("TagCloud")


class Cloud extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount(){
    console.log(this.el)
    require("TagCloud")
    tagcloud()
  } 
  render() {
    return (
      <div className="tagcloud" ref={el=>this.el = el} >
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
          <a href="#">text</a>
      </div>
    )
  }
}
export default Cloud