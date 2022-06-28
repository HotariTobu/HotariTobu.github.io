function toggleVisiblity(id) {
    $(`#${id}`).toggle("fast");
}


const windowSize = $("#window-size");
const contentSize = $("#content-size");
const aspectRatio = $("#aspect-ratio");

function applySize() {
    const windowWidth = windowSize.value();
    const contentWidth = contentSize.value();

    const scale = contentWidth / windowWidth;

    const windowContent = $("#window-content");
    windowContent.css("transform", `scale${scale}`);
    windowContent.css("width", `${windowWidth}px`);
    windowContent.attr("width", contentWidth.toString());

    applyRatio(aspectRatio.value());
}

function applyRatio(ratio) {
    const windowHeight = windowSize.value() * ratio;
    const contentHeight = contentSize.value() * ratio;

    const windowContent = $("#window-content");
    windowContent.css("height", `${windowHeight}px`);
    windowContent.attr("height", contentHeight.toString());
}


const windowsFrame = $("#windows-frame");

function applyURLs(value) {
    const lines = values.split('\n').map(line => {
        const tokens = line.split('\t');
        var name = "";
        var url = "";

        switch (tokens.length) {
            case 0:
                break;

            case 1:
                url = tokens[0];
                break;
        
            default:
                name = tokens[0];
                url = tokens[1];
                break;
        }
        
        return {
            name: name,
            url: url,
        };
    });
    
    windowsFrame.empty();

    windowsFrame.append(`
    <div class="window-frame">
					<div class="window-bar">
						<a class="window-name" href="">NAME</a>
						<label class="switcher">
							<input class="window-check-box" type="checkbox" onchange="toggleVisibility('1')">
							<div class="switcher__indicator"></div>
						</label>
					</div>
					<iframe id="1" class="window-content" frameborder="0" width="1500" height="300" sandbox src="https://ja.wikipedia.org/wiki/"></iframe>
				</div>
    `);
}

$("#source-box").on('keydown', e => {
    if (e.key == 'Tab') {
        e.preventDefault();
        const ta = e.target;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        
        // set textarea value to: text before caret + tab + text after caret
        ta.value = ta.value.substring(0, start) + "\t" + ta.value.substring(end);
        
        // put caret at right position again
        ta.selectionStart = ta.selectionEnd = start + 1;
    }
});
