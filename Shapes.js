const SHAPE_INTERFACE = {
  point: {
    type: "point",
    background: "",
    lineWidth: 1,
    x: "",
    y: "",
    border: "1px solid #ccc",
    rank: "",
    name: ""
  },
  line: {
    type: "line",
    strokeStyle: "#000000",
    lineWidth: 1,
    x: 0,
    y: 0,
    eX: 0,
    eY: 0,
    rank: "",
    name: ""
  },
  star: {
    type: "star",
    background: "",
    size: "",
    x: "",
    y: "",
    border: "1px solid #ccc",
    rank: "",
    name: ""
  },
  round: {
    type: "round",
    x: 100,
    y: 100,
    r: 10,
    sAngle: 0,
    eAngle: 2 * Math.PI,
    fill: true,
    fillStyle: "red",
    lineWidth: 1,
    strokeStyle: "green",
    counterclockwise: true,
    rank: "",
    name: ""
  },
  block: {
    type: "block",
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    lineWidth: 1,
    strokeStyle: "#000000",
    fill: false,
    fillStyle: "red",
    rank: "",
    name: ""
  },
  triangle: {
    type: "triangle",
    background: "",
    width: "",
    height: "",
    x: "",
    y: "",
    border: "1px solid #ccc",
    angle: "",
    rank: "",
    name: ""
  },
  image: {
    type: "image",
    source: "",
    width: "",
    height: "",
    x: "",
    y: "",
    rank: "",
    name: ""
  },
  text: {
    type: "text",
    text: "",
    size: "20",
    color: "red",
    family: "Microsoft YaHei",
    weight: "bold",
    Alignment: "center left right, center top down", // center left top
    x: 0,
    y: 0,
    lineHeight: 20,
    width: 100,
    height: 100,
    rank: "",
    name: ""
  }
};

class Shapes {
  constructor() {}

  // 合并方式渲染
  drawShape = (pen, ...args) => {
    if (args.length == 0) {
      return;
    } else {
      for (let i = 0; i < args.length; i++) {
        let getArgs = args[i];
        if (getArgs == {} || !getArgs.type) return;
        let { drawLine, drawBlock, drawRound, drawText } = this;
        switch (getArgs.type) {
          case "line":
            drawLine(pen, getArgs);
            break;

          case "star":
            break;

          case "round":
            drawRound(pen, getArgs);
            break;

          case "block":
            drawBlock(pen, getArgs);
            break;

          case "triangle":
            break;

          case "image":
            break;

          case "text":
            drawText(pen, getArgs);
            break;
        }
      }
    }
  };

  // 绘制线条
  drawLine = (pen, args) => {
    let { line } = SHAPE_INTERFACE;
    let { x, y, eX, eY, lineWidth, strokeStyle } = Object.assign(line, args);
    pen.beginPath();
    pen.moveTo(x, y);
    pen.lineWidth = lineWidth;
    pen.lineTo(eX, eY);
    pen.strokeStyle = strokeStyle;
    pen.stroke();
  };

  // 绘制块
  drawBlock = (pen, args) => {
    let { block } = SHAPE_INTERFACE;
    let {
      x,
      y,
      width,
      height,
      lineWidth,
      strokeStyle,
      fillStyle,
      fill
    } = Object.assign(block, args);
    pen.beginPath();
    pen.lineWidth = lineWidth;
    pen.strokeStyle = strokeStyle;
    pen.rect(x, y, width, height);
    pen.stroke();
    if (fill) {
      pen.fillStyle = "blue";
      pen.fill();
    }
  };

  // 绘制圆
  drawRound = (pen, args) => {
    let { round } = SHAPE_INTERFACE;
    let {
      x,
      y,
      r,
      sAngle,
      eAngle,
      fill,
      fillStyle,
      lineWidth,
      strokeStyle,
      counterclockwise
    } = Object.assign(round, args);

    pen.beginPath();
    pen.lineWidth = lineWidth;
    pen.strokeStyle = strokeStyle;
    pen.arc(x, y, r, sAngle, eAngle);
    pen.stroke();
    if (fill) {
      pen.fillStyle = "blue";
      pen.fill();
    }
  };

  // 绘制点
  drawPoint = () => {};

  // 绘制星星
  drawStar = () => {};

  // 绘制三角形
  drawTriangle = () => {};

  // 绘制图像
  drawImage = () => {};

  // 绘制文本
  drawText = (pen, args) => {
    let {
      text,
      size,
      color,
      family,
      weight,
      lineHeight,
      x,
      y,
      Alignment
    } = Object.assign(SHAPE_INTERFACE.text, args);

    pen.beginPath();
    pen.x = x;
    pen.y = y;
    pen.font = `${weight} ${size}px${
      lineHeight > 0 ? "/" + lineHeight + "px" : ""
    } ${family}`;
    pen.fillStyle = color;
    pen.fillText(`${text}`, x, y);
  };

  // 设置数据
  setState = (args = {}) => {
    if (args == {}) return;
    let { getState } = this;
    let getAllState = getState();
    if (!(args instanceof Array) && args instanceof Object) {
      Object.keys(args).map(v => {
        getAllState[v] = args[v];
      });
    } else {
      console.error("传入的数据格式必须是非数组对象，例如：{a:10}！");
      return;
    }
    this.state = getAllState;
  };

  // 获取所有数据
  getState = () => this.state;
}
