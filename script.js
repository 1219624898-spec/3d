function openViewer(modelName) {
    const viewer = document.getElementById("modelViewer");
    viewer.src = "models/" + modelName;

    document.getElementById("viewerModal").style.display = "block";
}

function closeViewer() {
    document.getElementById("viewerModal").style.display = "none";
}