import {AntlrEditor} from '../editor/antlr-editor';

export class SimpleToolbar {

    constructor(private editor: AntlrEditor) {
    }

    create(): HTMLElement {
        const toolbar = this.createToolBar();
        const btn = this.createVimButton();
        toolbar.appendChild(btn);

        return toolbar;
    }

    private createToolBar() {
        const el = document.createElement('div');
        el.className = 'antlr-toolbar';
        return el;
    }

    private createVimButton() {
        const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWElEQVQ4y4WTXUiTURjHf+/2hvMT3/mVueaUQIOBIaSC0k0Ru1AvDLwIQxF2kZRQZhcRlZUREt5WpsNKItxFdBN5MSI/QEkmSqOQRFTSWm2Ga1/uffd2YS4n087Vec75//7Pcx7OI7DHSiuSNIYzpS0IAl9ffR70ffFGE+mERIfpxZLGeKXc5lbXmwHytPqny70zrRvznmhCA6vVWmyxWJq2Y092oPzR4sv6Ff9aTFiVWTbcoqt17UiqOhyOIRFAkqSTFRUVtwRBEABUVWVqfZadBoWZhsbKsspYrKqq6nQ6V0WAnp6efoPBYGpoaLgG8Nj1gtcrDgTNVrLc5CzOHqmLwbIsy52dnW12u31A3HqzXhDNGeaYQtTE4PzkHPpqujGkHAQgosjcHumdHJl9NwCoYppJ0hg7ym2r0R/1uxtUkJLHk+pu8lNyAdhUIlyduM97+UPN4cvHbMsPnK2iVGtsceNt3g0bUw/RV32XvORsAMLyJh0T3YyvOxEEAbfibZbqCkdFz6Jbm3o0Pw42pRfQX3OPHJ0egJAc5tL4HSZ/zfG3zwB4Fr5rxcDbb4PanKRTlNC4fWEpOBETBSMh2se7mN5wxf2a0LR32P9mbVBEUSO+50tNVAYzKMWysxL/ZoCLY13M/P4UV2Fo2jvse7bUhKJGRAAUNVKSVjQJ/wx8YT8Xxm4y55/fEwYQY6UGg8r2fiPso230Bq7Awr5w3CyYzWazzWYbAWi3X/+4YPp5+n9womFKAkArRNPPFQ7pjusb94P3nEYANBzQVWWdBwhNeR8mggH+AGOO/TZ3cOjxAAAAAElFTkSuQmCC';
        const img = document.createElement('img');
        img.src = url;

        const btn = document.createElement('button');
        btn.className = 'antlr-toolbar__button';
        btn.appendChild(img);

        const enableFunction = (enable: boolean) => {
            this.editor.setEnableVim(enable);

            if (enable) {
                btn.classList.add('antlr-toolbar__button__disabled');
                btn.classList.remove('antlr-toolbar__button__enabled');
                btn.title = 'Disable Vim Mode';
            } else {
                btn.classList.add('antlr-toolbar__button__enabled');
                btn.classList.remove('antlr-toolbar__button__disabled');
                btn.title = 'Enable Vim Mode';
            }
        };

        let inVimMode = this.editor.getEnableVim();
        enableFunction(inVimMode);

        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();

            inVimMode = (!inVimMode);
            enableFunction(inVimMode);
            this.editor.focus();
        });

        return btn;
    }
}
