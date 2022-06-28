const windowSize = $("#window-size");
const contentSize = $("#content-size");
const aspectRatio = $("#aspect-ratio");

const applySize = () => {
    const windowWidth = windowSize.value();
    const contentWidth = contentSize.value();

    const scale = contentWidth / windowWidth;

    const windowContent = $("#window-content");
    windowContent.css("transform", `scale${scale}`);
    windowContent.css("width", `${windowWidth}px`);
    windowContent.attr("width", contentWidth.toString());

    applyRatio(aspectRatio.value());
}

const applyRatio = e => {
    const ratio = e.target.value;

    const windowHeight = windowSize.value() * ratio;
    const contentHeight = contentSize.value() * ratio;

    const windowContent = $("#window-content");
    windowContent.css("height", `${windowHeight}px`);
    windowContent.attr("height", contentHeight.toString());
}

windowSize.on("change", applySize);
contentSize.on("change", applySize);
aspectRatio.on("change", applyRatio);