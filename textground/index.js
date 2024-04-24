$('.ta').on('keydown', e => {
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

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const mainBox = $('#main-box');
mainBox.val(localStorage.getItem('textground'))
mainBox.height(window.outerHeight);
mainBox.on('input', (e) => {
    localStorage.setItem('textground', e.target.value);
});

$('#spread-area').on('inview', async (e, isInView) => {
    spreadAreaIsInView = isInView;
    if (isInView) {
        while (spreadAreaIsInView) {
            mainBox.height(mainBox.height() + 100);
            await sleep(500);
        }
    }
});
