document.addEventListener("DOMContentLoaded", function() {
    const map = document.getElementById("fortnite-map");
    const container = document.querySelector(".map-container");
    
    let scale = 1;
    let originX = 0;
    let originY = 0;
    let isDragging = false;
    let startX, startY;
    
    // Zoom Controls (Smoother like Dropmap.net)
    container.addEventListener("wheel", function(e) {
        e.preventDefault();
        let zoomFactor = 0.1;
        let newScale = e.deltaY > 0 ? scale - zoomFactor : scale + zoomFactor;
        scale = Math.max(1, Math.min(newScale, 4)); // Limit zoom between 1x and 4x
        map.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
    });

    // Drag Controls (More Natural)
    map.addEventListener("mousedown", function(e) {
        isDragging = true;
        startX = e.clientX - originX;
        startY = e.clientY - originY;
        map.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", function(e) {
        if (!isDragging) return;
        originX = e.clientX - startX;
        originY = e.clientY - startY;
        map.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
        map.style.cursor = "grab";
    });
});
