const defaultLanguage = 'de';

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    function hideNonDefaultTranslatedElements() {
        const translatedElements = document.querySelectorAll('[lang], [data-lang]');
        translatedElements.forEach(function (contentDiv) {
            contentDiv.style.display = 'none';
        });
        const defaultLangElements = document.querySelectorAll('[lang=' + defaultLanguage + '], [data-lang]:not([data-lang=' + defaultLanguage + '])');
        defaultLangElements.forEach(function (contentDiv) {
            contentDiv.style.removeProperty('display');
        });
    }

    function handleClickOnLanguageSwitch() {
        const languageButtons = document.querySelectorAll('.language');

        languageButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                const translatedElements = document.querySelectorAll('[lang], [data-lang]');
                translatedElements.forEach(function (contentDiv) {
                    contentDiv.style.display = 'none';
                });

                const lang = button.getAttribute('data-lang');

                const translatedElementsToShow = document.querySelectorAll('[lang=' + lang + '], [data-lang]:not([data-lang=' + lang + '])');
                translatedElementsToShow.forEach(function (contentDiv) {
                    contentDiv.style.removeProperty('display');
                });
            });
        });
    }

    hideNonDefaultTranslatedElements();
    handleClickOnLanguageSwitch();
});
