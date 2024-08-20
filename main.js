const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");

img_frame = {
  currentFrame: 0,
  maxFrame: 1291,
};

let imageLoader = 0;
const imgArray = [];

function preLoader() {
  for (let i = 1; i <= img_frame.maxFrame; i++) {
    const imgUrl = `./img/frame_${i.toString().padStart(4, "0")}.jpeg`;
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      imageLoader++;
      if (imageLoader === img_frame.maxFrame) {
        canvasImg(img_frame.currentFrame);
        frameAnimation();
      }
    };
    imgArray.push(img);
  }
}

function canvasImg(imgIndex) {
  if (imgIndex >= 0 && imgIndex <= img_frame.maxFrame) {
    const img = imgArray[imgIndex];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;

    const scale = Math.max(scaleX, scaleY);

    const newCanvaswidth = img.width * scale;
    const newCanvasheight = img.height * scale;

    const offsetX = (canvas.width - newCanvaswidth) / 2;
    const offsetY = (canvas.height - newCanvasheight) / 2;

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.imageSmoothingEnabled = true;
    canvasContext.imageSmoothingQuality = "high";
    canvasContext.drawImage(
      img,
      offsetX,
      offsetY,
      newCanvaswidth,
      newCanvasheight
    );

    img_frame.currentFrame = imgIndex;
  }
}

function frameAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".parent",
      start: "top top",
      scrub: 2,
      end: "bottom bottom",
    },
  });

  function animateFrame(framecount) {
    return {
      currentFrame: framecount,
      onUpdate: function () {
        canvasImg(Math.floor(img_frame.currentFrame));
      },
    };
  }

  tl.to(img_frame, animateFrame(58), "animation_00")
    .to(".animate_00", { opacity: 0 }, "animation_00")
    .to(img_frame, animateFrame(105), "animation_01")
    .to(".animate_01", { opacity: 1 }, "animation_01")
    .to(img_frame, animateFrame(109), "animation_01_1")
    .to(".animate_01", { opacity: 0 }, "animation_01_1")
    .to(img_frame, animateFrame(150), "animation_02")
    .to(".animate_02", { opacity: 1 }, "animation_02")
    .to(img_frame, animateFrame(155), "animation_02_1")
    .to(".animate_02", { opacity: 0 }, "animation_02_1")
    .to(img_frame, animateFrame(210), "animation_03")
    .to(".animate_03", { opacity: 1 }, "animation_03")
    .to(img_frame, animateFrame(218), "animation_03_1")
    .to(".animate_03", { opacity: 0 }, "animation_03_1")
    .to(img_frame, animateFrame(290), "animation_04")
    .to(".animate_04", { opacity: 1 }, "animation_04")
    .to(img_frame, animateFrame(299), "animation_04_1")
    .to(".animate_04", { opacity: 0 }, "animation_04_1")
    .to(img_frame, animateFrame(302), "animate_05_01")
    .to(".animate_05_01", { opacity: 1, translateX: 0 }, "animate_05_01")
    .to(img_frame, animateFrame(303), "animate_05_02")
    .to(".animate_05_02", { opacity: 1, translateX: 0 }, "animate_05_02")
    .to(img_frame, animateFrame(304), "animate_05_03")
    .to(".animate_05_03", { opacity: 1, translateX: 0 }, "animate_05_03")
    .to(img_frame, animateFrame(305), "animate_05_04")
    .to(".animate_05_04", { opacity: 1, translateX: 0 }, "animate_05_04")
    .to(img_frame, animateFrame(306), "animate_05_05")
    .to(".animate_05_05", { opacity: 1, translateX: 0 }, "animate_05_05")
    .to(img_frame, animateFrame(312), "animate_05")
    .to(".animate_05", { opacity: 0 }, "animate_05")
    .to(img_frame, animateFrame(360))
    .to(img_frame, animateFrame(440), "animate_06")
    .to(".animate_06", { opacity: 1 }, "animate_06")
    .to(img_frame, animateFrame(460), "animate_06_1")
    .to(".animate_06", { opacity: 0 }, "animate_06_1")
    .to(img_frame, animateFrame(503), "animate_07")
    .to(".animate_07", { opacity: 1 }, "animate_07")
    .to(img_frame, animateFrame(509), "animate_07_1")
    .to(".animate_07", { opacity: 0 }, "animate_07_1")
    .to(img_frame, animateFrame(575), "animate_08")
    .to(".animate_08", { opacity: 1 }, "animate_08")
    .to(img_frame, animateFrame(589), "animate_08_1")
    .to(".animate_08", { opacity: 0 }, "animate_08_1")
    .to(img_frame, animateFrame(710), "animate_09")
    .to(".animate_09", { x: "0%", ease: "expo" }, "animate_09")
    .to(img_frame, animateFrame(750), "animate_09_1")
    .to(".animate_09", { opacity: 0, ease: "expo", x: "100px" }, "animate_09_1")
    .to(img_frame, animateFrame(772), "animate_canvas")
    .to("canvas", { scale: 0.5 }, "animate_canvas")
    .to(img_frame, animateFrame(920), "animate_10")
    .to(".animate_10", { opacity: 1, scale: 1, ease: "expo" }, "animate_10")
    .to(img_frame, animateFrame(1035), "animate_canvas_01")
    .to("canvas", { scale: 1 }, "animate_canvas_01")
    .to(img_frame, animateFrame(1200), "animate_10_1")
    .to(".animate_10", { opacity: 1, scale: 2, ease: "linear" }, "animate_10_1")
    .to(img_frame, animateFrame(1291), "animate_10_2")
    .to(".para", { opacity: 1, scale: 1.2 }, "animate_10_2");
}

window.addEventListener("resize", () => {
  canvasImg(Math.floor(img_frame.currentFrame));
});

preLoader();
