export function offset (element: HTMLElement) {
    if (!element) {
        return;
    }

    const rect = element.getBoundingClientRect();

    // Make sure element is not hidden (display: none) or disconnected
    if (rect.width || rect.height || element.getClientRects().length ) {
        const doc = element.ownerDocument;
        const docElem = doc.documentElement;

        return {
            top: rect.top + window.pageYOffset - docElem.clientTop,
            left: rect.left + window.pageXOffset - docElem.clientLeft
        };
    }
}