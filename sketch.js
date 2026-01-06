let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // キャンバスを作成

  // カメラオプションを設定
  const constraints = {
    video: {
      facingMode: "user" // フロントカメラを指定
    }
  };

  // createCaptureにオプションを渡す
  capture = createCapture(constraints);
  capture.size(640, 480);
  // capture要素はデフォルトでDOMに追加されるので、非表示にする
  capture.hide();
}

function draw() {
  background(255);
  // 映像をキャンバスに描画
  image(capture, 0, 0, width, height);
}
