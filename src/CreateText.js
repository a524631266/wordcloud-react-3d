import React, { PureComponent } from 'react';
import {getWebGLContext} from "./lib/cuon-utils";

class CreateText extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.textCtx=document.createElement("canvas").getContext("2d")
    }
    // 验证webgl是否可用
    validateWebgl(gl){
        if(!gl){
            console.log("failed to use webgl");
            return false
        }
        return true
    }
    // 创建顶点着色源
    createVsource(){
        let source = [
        "attribute vec2 a_position;",
        "uniform vec2 u_resolution;",
        "attribute vec2 a_color;",
        "varying vec2 v_color;",
        "void main() {",
        "    gl_Position = a_position;",
        "    v_color = a_color;",
        "}"
        ].join("\n")
        // gl_Position 是一个齐次坐标 (x,y,z, 1==顶点,0表示向量，法向量等等)
        return source
    }
    // 创建片元着色源
    createPsource(){
        let source = [
        "#ifdef GL_ES",
        "precision mediump float;",
        "#endif",
        "uniform sampler2D u_texture;",
        "varying vec2 v_color;",
        "void main() {",
        "    gl_FragColor = texture2D(u_texture,v_color);",
        "}"
        ].join("\n")
        return source
    }
     // 创建着色器
     createShader(gl, type, source) {
        var shader = gl.createShader(type); // 创建着色器对象
        gl.shaderSource(shader, source); // 提供数据源
        gl.compileShader(shader); // 编译 -> 生成着色器
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
          return shader;
        }
        // console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }
    // 初始化program 返回program
    initProgram(gl){
        let vsource = this.createVsource()
        let psource = this.createPsource()
        let vshader = this.createShader(gl,gl.VERTEX_SHADER,vsource)
        let pshader = this.createShader(gl,gl.FRAGMENT_SHADER,psource)
        let program = this.createProgram(gl,vshader,pshader);
        return program
    }
    drawText(){
        this.gl = getWebGLContext(this.el);
        if(!this.validateWebgl(this.gl)) {return undefined}
        let program = this.initProgram(this.gl)
        this.positionAttributeLocation = gl.getAttribLocation(program,"a_position")
        this.positionAttributeLocation = gl.getAttribLocation(program,"a_color")
    }
    componentDidMount(){
        this.drawText()
    }
    render(){
        let canvasstyle = {
            width:"100%",
            height:"100%"
        }
        let {style} = this.props
        let cw,ch;
        style = {
            width:"500px",
            height:"500px"
        }
        style && (cw=style.width) && (ch = style.height)
        return (
        <canvas onMouseMove={this.onMoveCanvas}  ref={el =>(this.el = el)} style={{...canvasstyle,...style}}>
            
        </canvas>
        )
    }
    _produceTextCanvas(text, width, height) {
        let textCtx = this.textCtx
        textCtx.canvas.width  = width;
        textCtx.canvas.height = height;
        textCtx.font = "20px monospace";
        textCtx.textAlign = "center";
        textCtx.textBaseline = "middle";
        textCtx.fillStyle = "blue";
        textCtx.clearRect(0, 0, textCtx.canvas.width, textCtx.canvas.height);
        textCtx.fillText(text, width / 2, height / 2);
        return textCtx.canvas;
    }
}

export default CreateText