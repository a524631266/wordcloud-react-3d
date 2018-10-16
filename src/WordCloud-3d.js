
import React, { PureComponent } from 'react';
import {getWebGLContext} from "./lib/cuon-utils";
let cloud = require("d3-cloud")

// https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-text-html.html
// learning webgl web https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-fundamentals.html#toc 
class WordCloud3d extends PureComponent {
    constructor(props) {
        super(props)
        this.state={
            timer:null
        }
    }
    end(words,tags, bounds) { 
        console.log(words,tags, bounds); 
    } 
    usrd3Cloud=()=>{
        var words = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
                .map(function(d) {
                return {text: d, size: 10 + Math.random() * 90};
                });

        cloud().size([960, 500])
                .canvas(this.el)
                .words(words)
                .padding(0)
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                // .rotate(90)
                .font("Impact")
                .fontSize(function(d) { return d.size; })
                // .spiral(function(size){return function(t){return [(Math.random() * 2)*10,(Math.random() * 2)*10]}})
                .on("end", this.end)
                .start();
    }

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
        "attribute vec4 a_position;",
        "void main() {",
        "    gl_Position = a_position;",
        "}"
        ].join("\n")
        return source
    }
    // 创建片元着色源
    createPsource(){
        let source = [
        "precision mediump float;",
        "void main() {",
        "    gl_FragColor = vec4(1, 0, 0.5, 1);",
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
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }
    // 创建一个program
    createProgram(gl, vertexShader, fragmentShader) {
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
          return program;
        }
       
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
    //WebGL的主要任务就是设置好状态并为GLSL着色程序提供数据
    bindPosition(gl,program,positions){
        let positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        // 重新调整画布
        gl.viewport(0,0,gl.canvas.width,gl.canvas.height)
        // 调整好以后背景渲染
        this.clearColor(gl)
        // 并启动program
        gl.useProgram(program)

        return positionBuffer
    }
    drawRect(gl){

    }
    clearColor(gl){
        gl.clearColor(0.3,0.4,0.5,0.8) // 清空颜色
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.clearDepth(5) //清空景深
        gl.clear(gl.DEPTH_BUFFER_BIT)
    }

    componentDidMount(){
        let gl = getWebGLContext(this.el);
        // validate whether client web has the context of webgl 
        if(!this.validateWebgl(gl)) {return undefined}
        // this.usrd3Cloud()

        let vsource = this.createVsource()
        let psource = this.createPsource()
        let vshader = this.createShader(gl,gl.VERTEX_SHADER,vsource)
        let pshader = this.createShader(gl,gl.FRAGMENT_SHADER,psource)

        let program = this.createProgram(gl,vshader,pshader);
        
        
        let positionAttributeLocation = gl.getAttribLocation(program,"a_position")
        let positions = [
            0, 0,
            0, 0.5,
            0.7, 0,
        ];
        let positionBuffer = this.bindPosition(gl,program,positions)

        gl.enableVertexAttribArray(positionAttributeLocation);

        // 将绑定点绑定到缓冲数据（positionBuffer）
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        // 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
        var size = 2;          // 每次迭代运行提取两个单位数据
        var type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
        var normalize = false; // 不需要归一化数据
        var stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
                            // 每次迭代运行运动多少内存到下一个数据开始点
        var offset = 0;        // 从缓冲起始位置开始读取
        gl.vertexAttribPointer(
            positionAttributeLocation, size, type, normalize, stride, offset)
    
        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 3;
        gl.drawArrays(primitiveType, offset, count);
        
        // this.clearColor(gl)

        

        // this.state.timer = setTimeout()
        // requestAnimationFrame()
    }
    render() {
        let canvasstyle = {
            width:"100%",
            height:"100%"
        }
        let {style} = this.props
        let cw,ch;
        style && (cw=style.width) && (ch = style.height)
        return (
        <canvas  ref={el =>(this.el = el)} style={{...canvasstyle,...style}}>
            
        </canvas>
        )
  }
}

export default WordCloud3d;