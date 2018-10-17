
import React, { PureComponent } from 'react';
import {getWebGLContext} from "./lib/cuon-utils";
let cloud = require("d3-cloud")

// https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-text-html.html
// learning webgl web https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-fundamentals.html#toc 
class WordCloud3d extends PureComponent {
    constructor(props) {
        super(props)
        this.state={
            timer:null,
        }
        this.gl = null //webgl对象
        this.el = null //canvas对象
    }
    end(words,tags, bounds) { 
        console.log(words,tags, bounds); 
    } 
    onMoveCanvas=(e)=>{
        let {clientX,clientY} = e
        let {width,height} = this.el.style;
        width = parseInt(width)
        height = parseInt(height)
        
        this.clearColor(this.gl)
        let tformMatrix = new Float32Array([
            1.0,0.0,0.0,0.0,
            0.0,1.0,0.0,0.0,
            0.0,0.0,1.0,0.0,
            1.0,1.0,0.0,1.0
        ])
        this.drawTriangle(this.gl,this.positionAttributeLocation,this.resolutionUniformLocation,this.trans_positionUniformLocation,tformMatrix)
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
    // 初始化program 返回program
    initProgram(gl){
        let vsource = this.createVsource()
        let psource = this.createPsource()
        let vshader = this.createShader(gl,gl.VERTEX_SHADER,vsource)
        let pshader = this.createShader(gl,gl.FRAGMENT_SHADER,psource)
        let program = this.createProgram(gl,vshader,pshader);
        return program
    }
    // 创建顶点着色源
    createVsource(){
        let source = [
        "attribute vec2 a_position;",
        "uniform vec2 u_resolution;",
        "uniform mat4 u_trans_postion;",
        "void main() {",
        "    vec2 zeroToOne = a_position / u_resolution;",
        "    vec2 zeroToTwo = zeroToOne * 2.0;",
        "    vec2 clipSpace = zeroToTwo - 1.0;",
        "    gl_Position = u_trans_postion * vec4(clipSpace  , 0 , 1);",
        "    gl_PointSize = 0.1;",
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
        "void main() {",
        "    gl_FragColor = vec4(0.5, 0.5, 0.5, 1);",
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
    // 创建一个program
    createProgram(gl, vertexShader, fragmentShader) {
        var program = gl.createProgram();
        
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            // 开始启动 program
            gl.useProgram(program)    
            return program;
        }
       
        // console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
    //WebGL的主要任务就是设置好状态并为GLSL着色程序提供数据
    //创建缓冲区，用来给所有变量使用，并
    bindPositionAndOpenTwoShader(gl,positions){
        let positionBuffer = gl.createBuffer();
        // 将数据绑定到缓冲区的对象上，并作为标记为array_buffer（number值）
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        // 写入数据的GPU的缓冲中
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW); // 这里

        // 重新调整画布
        gl.viewport(0,0,gl.canvas.width,gl.canvas.height)
       
       
    }
    drawTriangle(gl,positionAttributeLocation,resolutionUniformLocation,trans_positionUniformLocation,tformMatrix){
        
        let size = 2;          // 每次迭代运行提取两个单位数据
        let type = gl.FLOAT;   // 每个单位的数据类型是32位浮点型
        let normalize = false; // 不需要归一化数据
        let stride = 0;        // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
                            // 每次迭代运行运动多少内存到下一个数据开始点
        let offset = 0;        // 从缓冲起始位置开始读取
        // 将缓冲区的数据attribue
        gl.vertexAttribPointer(
            positionAttributeLocation, size, type, normalize, stride, offset)
        // 设置 u_resolution 的值为最大
        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
        gl.uniformMatrix4fv(trans_positionUniformLocation,false,tformMatrix)
        let primitiveType = gl.TRIANGLES;//TRIANGLES
        let count = 6;

         // 调整好以后背景渲染
        this.clearColor(gl)
        // 开启attribute变量，用来在物理渲染阶段进行填充,
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.drawArrays(primitiveType, offset, count);        
    }
    clearColor(gl){
        gl.clearColor(0.3,0.4,0.5,0.5) // 清空颜色
        gl.clear(gl.COLOR_BUFFER_BIT)
        // gl.clearDepth(5) //清空景深
        // gl.clear(gl.DEPTH_BUFFER_BIT)
    }

    componentDidMount(){
        
        let gl = getWebGLContext(this.el);
        // 设置gl可访问
        this.gl = gl
        // validate whether client web has the context of webgl 
        if(!this.validateWebgl(gl)) {return undefined}
        // 
        let program = this.initProgram(gl)
        
        this.positionAttributeLocation = gl.getAttribLocation(program,"a_position")
        this.resolutionUniformLocation = gl.getUniformLocation(program , "u_resolution")
        this.trans_positionUniformLocation = gl.getUniformLocation(program , "u_trans_postion")

        let positions = [
            10, 20,
            80, 20,
            10, 30,
            10, 30,
            80, 20,
            80, 30,
        ];
        let tformMatrix = new Float32Array([
            1.0,0.0,0.0,0.0,
            0.0,1.0,0.0,0.0,
            0.0,0.0,1.0,0.0,
            0.0,0.0,0.0,1.0
        ])
        this.bindPositionAndOpenTwoShader(gl,positions)
        this.drawTriangle(gl,this.positionAttributeLocation,this.resolutionUniformLocation,this.trans_positionUniformLocation,tformMatrix)
        // this.usrd3Cloud()
    }
    render() {
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
}

export default WordCloud3d;