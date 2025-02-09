// Enable zoom and pan for the Fortnite map
document.addEventListener("DOMContentLoaded", function() {
    const map = document.getElementById("fortnite-map");

    let scale = 1;
    let originX = 0;
    let originY = 0;
    let isDragging = false;
    let startX, startY;

    // Zoom in & out
    map.addEventListener("wheel", function(e) {
        e.preventDefault();
        let zoomAmount = e.deltaY > 0 ? -0.1 : 0.1;
        scale += zoomAmount;
        scale = Math.max(1, Math.min(scale, 4)); // Limit zoom between 1x and 4x
        map.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
    });

    // Drag map
    map.addEventListener("mousedown", function(e) {
        isDragging = true;
        startX = e.clientX - originX;
        startY = e.clientY - originY;
    });

    document.addEventListener("mousemove", function(e) {
        if (!isDragging) return;
        originX = e.clientX - startX;
        originY = e.clientY - startY;
        map.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
    });
});
