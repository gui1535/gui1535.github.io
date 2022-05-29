$(function () {
    var filterList = {
        init: function () {
            $('.portfolio-grid').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: 'all' // show app tab on first load
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});	