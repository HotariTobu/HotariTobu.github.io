const windowSize = $("#window-size");
const contentSize = $("#content-size");
const aspectRatio = $("#aspect-ratio");

const applySize = () => {
    const windowWidth = windowSize.val();
    const contentWidth = contentSize.val();

    const scale = windowWidth / contentWidth;

    const windowContent = $(".window-content");
    windowContent.css("transform", `scale(${scale})`);
    windowContent.attr("width", contentWidth.toString());

    windowContent.parent().parent().css("width", `${windowWidth}px`);

    applyRatio();
}

const applyRatio = () => {
    const ratio = aspectRatio.val()

    const windowHeight = windowSize.val() * ratio;
    const contentHeight = contentSize.val() * ratio;

    const windowContent = $(".window-content");
    windowContent.attr("height", contentHeight.toString());

    windowContent.parent().css("height", `${windowHeight}px`);
}

windowSize.on("change", applySize);
contentSize.on("change", applySize);
aspectRatio.on("change", applyRatio);