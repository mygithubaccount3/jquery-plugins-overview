(($) => {
    $(document).ready((e) => {
        $('.parent-container').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
            // other options
        });
    });
}) (jQuery);