class CnavasUtils extends Shapes {
  state = {
    canvas: null,
    pen: null
  };

  constructor() {
    super();
  }

  // 拿对象
  $ = args => {
    let { createCanvas, attr, drawShape } = this;
    createCanvas(args);
    let { canvas: root, pen } = this.state;
    root.attr = (args = {}) => attr(args);

    root.image = () => {};
    root.drawLine = args => {
      drawShape(pen, Object.assign({ type: "line" }, args));
      return root;
    };

    root.drawBlock = args => {
      drawShape(pen, Object.assign({ type: "block" }, args));
      return root;
    };

    root.drawRound = args => {
      drawShape(pen, Object.assign({ type: "round" }, args));
      return root;
    };

    root.drawText = args => {
      drawShape(pen, Object.assign({ type: "text" }, args));
      return root;
    };

    return root;
  };
  // 检测加载

  // 图片装载
  // {img, src, name}
  loadImages = (list = []) =>
    new Promise((reslove, reject) => {
      let loaded = 0;
      let length = Array.from(list).length;
      if (length == 0) reject("非法空调用，您没有传入任何图片！");
      let newList = list;
      for (let [key, value] of Object.entries(list)) {
        let img = new Image();
        img.onload = () => {
          loaded++;
          if (loaded == length) {
            console.log("over loaded");
            reslove(newList);
          }
        };
        img.src = value.src;
        newList[key].img = img;
      }
    });

  // 模式设置
  // modeSet = () => {};

  // 添加属性
  attr = args => {
    if (args == {}) return;
    let { canvas: root } = this.state;
    Object.keys(args).map(v => {
      if (v == "background") {
        let getInitStle = root.getAttribute("style");
        getInitStle = getInitStle == null ? "" : getInitStle;
        root.style = `${getInitStle}background:${args[v]};`;
      } else {
        root.setAttribute(v, args[v]);
      }
    });
    return root;
  };

  // 创建对象
  createCanvas = (...agrs) => {
    let { setState } = this;
    let canvas = null;
    let notHasCanvas =
      agrs.length == 0 ||
      agrs[0] == undefined ||
      document.querySelector(agrs[0]) == null
        ? true
        : false;
    canvas = notHasCanvas
      ? document.createElement("canvas")
      : document.querySelector(agrs[0]);
    canvas.setAttribute("class", `canvas${new Date().getTime()}`);
    if (notHasCanvas) {
      document.querySelector("body").appendChild(canvas);
    }
    setState({
      canvas,
      pen: canvas.getContext("2d")
    });
    return canvas;
  };

  // 绘制图像

  // 导出图片
  exportImage = () => {};

  // 加载所有的图片资源
  loadFiles = () => {};

  // 旋转

  // 异步
  //   promisify = func => (...args) =>
  //     new Promise((resolve, reject) =>
  //       func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  //     );
}
