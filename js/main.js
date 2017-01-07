function offset (elem) {
    if (!elem) {
        return;
    }

    var rect = elem.getBoundingClientRect();

    // Make sure element is not hidden (display: none) or disconnected
    if (rect.width || rect.height || elem.getClientRects().length ) {
        var doc = elem.ownerDocument;
        var win = window;
        var docElem = doc.documentElement;

        return {
            top: rect.top + win.pageYOffset - docElem.clientTop,
            left: rect.left + win.pageXOffset - docElem.clientLeft
        };
    }
}

function highlightElement (element) {
    element.style.background = 'yellow';
}
function unhighlightElement (element) {
    element.style.background = '';
}

window.onload = function() {

    var $menuIcon = document.getElementsByClassName('menu-icon')[0],
        $offCanva = document.getElementsByClassName('off-canvas')[0];
        $siteWrap = document.getElementsByClassName('site-wrapper')[0];

    $menuIcon.addEventListener('click', function() {
        toggleClass($menuIcon, 'close');
        toggleClass($offCanva, 'toggled');
        toggleClass($siteWrap, 'open');
    }, false);

    $menuIcon.addEventListener('mouseenter', function() {
        addClass($menuIcon, 'hover');
    });

    $menuIcon.addEventListener('mouseleave', function() {
        removeClass($menuIcon, 'hover');
    });

    function addClass(element, className) {
        element.className += " " + className;
    }

    function removeClass(element, className) {
        // Capture any surrounding space characters to prevent repeated
        // additions and removals from leaving lots of spaces.
        var classNameRegEx = new RegExp("\\s*" + className + "\\s*");
        element.className = element.className.replace(classNameRegEx, " ");
    }

    function toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        if (element.className.indexOf(className) === -1) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }

    // Properly style header links
    if (window.location.pathname === '/') {
        document.getElementById('about').classList.add('active');
    } else  {
        document.getElementById('posts').classList.add('active');
    }

    // Open Twitter/share in a Pop-Up
    var $popup = document.getElementsByClassName('popup')[0];
    if (!$popup) {
        return;
    }
    $popup.addEventListener('click', function(e) {
        e.preventDefault()
        var width  = 575,
            height = 400,
            left   = (document.documentElement.clientWidth  - width)  / 2,
            top    = (document.documentElement.clientHeight - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;

        window.open(url, 'twitter', opts);

        return false;
    });

    var citations = document.querySelectorAll('.citation');
    var citationsBlock = document.querySelector('.citations-block');

    if (citations.length) {
        Array.prototype.forEach.call(citations, function (citation) {
            var number = parseInt(citation.textContent.match(/\d/));
            var citationEntry = citationsBlock.children[number - 1];

            var citationPosition = Math.abs(offset(citation.parentNode).top);
            var citationEntryPosition = Math.abs(offset(citationEntry.parentNode).top);

            var citationEntryClickListener = function () {
                unhighlightElement(citation);
                document.body.removeEventListener('click', citationEntryClickListener);
            };
            var citationClickListener = function () {
                unhighlightElement(citationEntry);
                document.body.removeEventListener('click', citationClickListener);
            };

            citationEntry
                .addEventListener('click', function () {
                    document.body.scrollTop = citationPosition - 16;
                    highlightElement(citation);
                    setTimeout(function () {
                        document.body.addEventListener('click', citationEntryClickListener);
                    }, 1);
                });
            citation
                .addEventListener('click', function () {
                    document.body.scrollTop = citationEntryPosition - 16;
                    highlightElement(citationEntry);
                    setTimeout(function () {
                        document.body.addEventListener('click', citationClickListener);
                    }, 1);
                });
        });
    }
}