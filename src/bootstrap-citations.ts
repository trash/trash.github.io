import {offset} from './offset';
import {highlightElement, unhighlightElement} from './highlight';

export function bootstrapCitation() {
    const citations = document.querySelectorAll('.citation');
    const citationsBlock = document.querySelector('.citations-block');

    if (citations.length) {
        Array.prototype.forEach.call(citations, (citation: HTMLElement) => {
            const number = parseInt(citation.textContent.match(/\d/)[0]);
            const citationEntry = citationsBlock.children[number - 1] as HTMLElement;

            const citationPosition = Math.abs(
                offset(citation.parentNode as HTMLElement).top);
            const citationEntryPosition = Math.abs(
                offset(citationEntry.parentNode as HTMLElement).top);

            const citationEntryClickListener = function () {
                unhighlightElement(citation);
                document.body.removeEventListener('click', citationEntryClickListener);
            };
            const citationClickListener = function () {
                unhighlightElement(citationEntry);
                document.body.removeEventListener('click', citationClickListener);
            };

            citationEntry
                .addEventListener('click', () => {
                    document.body.scrollTop = citationPosition - 16;
                    highlightElement(citation);
                    setTimeout(() =>
                        document.body.addEventListener('click', citationEntryClickListener)
                    , 1);
                });
            citation
                .addEventListener('click', () => {
                    document.body.scrollTop = citationEntryPosition - 16;
                    highlightElement(citationEntry);
                    setTimeout(() =>
                        document.body.addEventListener('click', citationClickListener)
                    , 1);
                });
        });
    }
}