let defaultLanguage = sessionStorage.getItem("language");
if (!defaultLanguage) {
    defaultLanguage = "de";
    sessionStorage.setItem("language", "de");
}

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

        const translatedPlaceholders = document.querySelectorAll('[data-lang-placeholder-' + defaultLanguage + ']');
        defaultLangElements.forEach(function (input) {
            input.setAttribute('placeholder', input.getAttribute('data-lang-placeholder-' + defaultLanguage));
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
                sessionStorage.setItem("language", lang);
                const translatedElementsToShow = document.querySelectorAll('[lang=' + lang + '], [data-lang]:not([data-lang=' + lang + '])');
                translatedElementsToShow.forEach(function (contentDiv) {
                    contentDiv.style.removeProperty('display');
                });

                const translatedPlaceholders = document.querySelectorAll('[data-lang-placeholder-' + lang + ']');
                translatedPlaceholders.forEach(function (input) {
                    input.setAttribute('placeholder', input.getAttribute('data-lang-placeholder-' + lang));
                });
            });
        });
    }

    hideNonDefaultTranslatedElements();
    handleClickOnLanguageSwitch();
});
