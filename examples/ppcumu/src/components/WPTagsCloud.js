// require("../js/swfobject")
import {SWFObject} from "../js/swfobject"
import React, { PureComponent } from 'react'
import ReactTagsCloud from "./ReactTagsCloud"
class WPTagsCloud extends PureComponent {

    componentDidMount(){
        var widget_so = new SWFObject("js/tagcloud.swf?r=23432","tagcloudflash", "265", "265", "9", "#F0F7FB");
        // var widget_so = new SWFObject("../src/js/tagcloud.swf","tagcloudflash", "265", "265", "9", "#F0F7FB");
        widget_so.addParam("wmode", "transparent");
        widget_so.addParam("allowScriptAccess", "always");
        widget_so.addVariable("tcolor", "rgb(0,1,0,1)");
        widget_so.addVariable("tcolor", "rgb(0,1,0,1)");
        widget_so.addVariable("tcolor2", "DeepSkyBlue");
        widget_so.addVariable("hicolor", "9ACD32");
        // widget_so.addVariable("hovercolor", "9ACD32");
        widget_so.addVariable("tspeed", "100");
        widget_so.addVariable("distr", "true");
        widget_so.addVariable("mode", "tags");
        widget_so.addVariable("tagcloud","<tags><a href='http://www.google.com' color='blue' style='44'>百度222</a><a href='http://www.baidu.com' style='12'>行业2</a><a href='http://www.sina.com.cn' style='16'>Sina</a><a href='http://www.apple.com.cn' style='22'>Apple</a><a href='http://wsi.gucas.ac.cn' style='12'>WSI</a><a href='http://www.bit.edu.cn' style='12'>BIT</a><a href='http://www.sony.com.cn' style='9'>SONY</a><a href='http://www.gucas.ac.cn' style='10'>GUCAS</a><a href='http://www.sohu.com.cn' style='10'>Sohu</a><a href='http://www.renren.com' style='12'>renren</a><a href='http://www.qq.com' style='12'>QQ</a></tags>");
        widget_so.write("apps"); 
        // wmode：window | direct | opaque | transparent | gpu。指定flash显示模式。transparent表示是透明模式，gup表示硬件加速模式。默认值是window。
        // tcolor：指定默认的标签颜色。
        // tcolor2：第二标签颜色，标签根据它们的popularity取得两个颜色之间的颜色。
        // hicolor：鼠标放在标签上的颜色。
        // tspeed：指定标签转动的速度.默认值是100, 数字越大速度越大。
        // distr：指定标签会均匀分布在球的表面。默认值为false。
        // mode：tags|cats|both。指定显示的是标签、分组或两者。
        // tagcolud：xml格式的标签组串。
        // xmlpath：指定xml地址，默认为tagcolud.xml

    }
    render() {
        return (
            <div id="">
                <div id="apps">
                </div>
                <ReactTagsCloud/>
            </div>
        )
    }
}
export default WPTagsCloud