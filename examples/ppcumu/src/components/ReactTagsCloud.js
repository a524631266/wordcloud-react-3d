import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactSWF from 'react-swf'

export default class ReactTagsCloud extends PureComponent {
  static propTypes = {

  }
  render() {
    return (
        <ReactSWF
            src="js/tagcloud.swf"
            id="guid_001"
            width="265"
            height="265"
            wmode="transparent"
            flashVars={`tcolor=blue&tcolor2=blue&hicolor=blue&tspeed=100&distr=true&mode=tags&tagcloud=<tags><a href='http://www.google.com' style='22'>百度222</a><a href='http://www.baidu.com' style='12'>行业2</a><a href='http://www.sina.com.cn' style='16'>Sina</a><a href='http://www.apple.com.cn' style='14'>Apple</a><a href='http://wsi.gucas.ac.cn' style='12'>WSI</a><a href='http://www.bit.edu.cn' style='12'>BIT</a><a href='http://www.sony.com.cn' style='9'>SONY</a><a href='http://www.gucas.ac.cn' style='10'>GUCAS</a><a href='http://www.sohu.com.cn' style='10'>Sohu</a><a href='http://www.renren.com' style='12'>renren</a><a href='http://www.qq.com' style='12'>QQ</a></tags>`}
        />
    )
  }
}
