const windowsFrame = $("#windows-frame");
const sourceBox = $("#source-box");

const applyURLs = () => {
    const value = sourceBox.val();

    const rows = value.split('\n').map(line => {
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

    const append = () => {
        windowsFrame.empty();
    
        rows.forEach((row, index) => {
            const id = index.toString();
    
            windowsFrame.append(`
            <div class="window-frame" style="display: none;">
                <div class="window-bar">
                    <a class="window-name" href="${row["url"]}" target="_blank">${row["name"]}</a>
                    <div class="end-frame">
                        <button class="window-reload-button" onclick="reloadContent('${id}')">
                            reload
                        </button>
                        <label class="switcher">
                            <input class="window-check-box" type="checkbox" checked="checked" onchange="toggleVisibility('${id}')">
                            <div class="switcher__indicator"></div>
                        </label>
                    </div>
                </div>
                <div class="window-content-frame">
                    <div>
                        <iframe id="${id}" class="window-content" frameborder="0" sandbox src="${row["url"]}"></iframe>
                    </div>
                </div>
            </div>
            `);
        });

        applySize();
        $(".window-frame").show("fast");
    }

    const windowFrame = $(".window-frame");
    if (windowFrame.length == 0) {
        append();
    }
    else {
        windowFrame.hide("fast", append);
    }
}

$("#source-apply-button").on("click", applyURLs);

sourceBox.on('keydown', e => {
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

$(() => {
    applyURLs();
});