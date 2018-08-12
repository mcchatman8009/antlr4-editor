/**
 * A Promise that creates the element or the HTMLElement
 */
export type DomElement = (Promise<HTMLElement> | HTMLElement);

export interface EditorPosition {
    column: number;
    line: number;
}
