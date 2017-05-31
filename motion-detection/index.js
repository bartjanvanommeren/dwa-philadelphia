const $motionBox = $('#motion-box');
const score = document.getElementById('score');

const scale = 10;

function initSuccess() {
    DiffCamEngine.start();
}

function initError() {
    alert('Something went wrong!');
}

function capture(payload) {
    score.textContent = payload.score;

    const box = payload.motionBox;
    if (box) {
        const right = box.x.min * scale + 1;
        const top = box.y.min * scale + 1;
        const width = (box.x.max - box.x.min) * scale;
        const height = (box.y.max - box.y.min) * scale;

        $motionBox.css({
            display: 'block',
            top: top,
            right: right,
            width: width,
            height: height
        });
    } else {
        $motionBox.css({
            display: 'none'
        });
    }
}

DiffCamEngine.init({
    video: document.getElementById('video'),
    initSuccessCallback: initSuccess,
    initErrorCallback: initError,
    includeMotionBox: true,
    includeMotionPixels: true,
    captureCallback: capture,
    diffWidth: 640 / scale,
    diffHeight: 480 / scale
});
