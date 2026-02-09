// 打开模型弹窗
function openViewer(modelName) {
    const viewer = document.getElementById("modelViewer");
    viewer.src = "models/" + modelName;
    document.getElementById("viewerModal").style.display = "block";
}

// 关闭模型弹窗
function closeViewer() {
    document.getElementById("viewerModal").style.display = "none";
}

// 如果 URL 带 ?model=xxx，直接打开对应模型
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const model = urlParams.get("model");
    if(model) {
        openViewer(model);
    }
});
