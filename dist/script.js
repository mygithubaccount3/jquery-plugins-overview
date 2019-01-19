(($) => {
    $(document).ready((e) => {

        const $navigation = $('<nav class="navigation"></nav>');
        const $plugins = $('.plugin');
        $plugins.each((element) => {
            const $this = $($plugins[element]);
            const $href = ${$this.attr('id');
            const $name = ${$this.find('.plugin__title').text();
            $navigation.append($(`<a class="navigation__item" href="#${$href}">${$this.find('.plugin__title').text()}</a>`));
        });
        $navigation.prependTo($('body'));

        $('.js-magnific-popup').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
            // other options
        });
        $('.popup-images').magnificPopup({
            type: 'image'
        });
    });
}) (jQuery);