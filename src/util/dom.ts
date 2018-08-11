export function removeElement(el: HTMLElement): void {
    const parent = el.parentNode;
    if (parent) {
        parent.removeChild(el);
    }
}

export function addClass(el: HTMLElement, className: string): void {
    el.classList.add(className);
}

export function removeClass(el: HTMLElement, className: string): void {
    el.classList.remove(className);
}

export function createElement(tagName: string, className: string = ''): HTMLElement {
    const el = document.createElement(tagName);
    el.className = className;

    return el;
}

export function getPosition(el: HTMLElement, relativeTarget: HTMLElement): [number, number] {
    let xPos = 0;
    let yPos = el.getBoundingClientRect().height;

    while (el !== relativeTarget) {
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);

        if (el.offsetParent) {
            el = el.offsetParent as HTMLElement;
        } else {
            break;
        }
    }

    return [xPos, yPos];
}

export function setPosition(el: HTMLElement, position: [number, number]) {
    const [left, top] = position;

    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
}
