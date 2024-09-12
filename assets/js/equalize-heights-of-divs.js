
/*this function execute when window properly loaded*/

$(window).on('load', function () {

    // featuredProductHeight
    $(function () {
        let featuredProductHeight = 0;
        $('#featuredProduct .product__chunks:not(.listView) .featuredProduct__item').each(function () {
            if ($(this).height() > featuredProductHeight) {
                featuredProductHeight = $(this).height();
            }
        });
        $('#featuredProduct .product__chunks:not(.listView) .featuredProduct__item').height(featuredProductHeight);
    });

    // feature__item
    $(function () {
        let featureHeight = 0;
        $('.feature__item').each(function () {
            if ($(this).height() > featureHeight) {
                featureHeight = $(this).height();
            }
        });
        $('.feature__item').height(featureHeight);
    });

    // service_item
    $(function () {
        let serviceHeight = 0;
        $('.service__item').each(function () {
            if ($(this).height() > serviceHeight) {
                serviceHeight = $(this).height();
            }
        });
        $('.service__item').height(serviceHeight);
    });

    // service_item
    $(function () {
        let certificationHeight = 0;
        $('.certification_post_item').each(function () {
            if ($(this).height() > certificationHeight) {
                certificationHeight = $(this).height();
            }
        });
        $('.certification_post_item').height(certificationHeight);
    });


    // service_item
    $(function () {
        let productDisplayItemHeight = 0;
        $('.productDisplay-4 .productDisplayItem').each(function () {
            if ($(this).height() > productDisplayItemHeight) {
                productDisplayItemHeight = $(this).height();
            }
        });
        $('.productDisplay-4 .productDisplayItem').height(productDisplayItemHeight);
    });

    // blogHeight
    $(function () {
        let blogHeight = 0;
        $('.blog_card').each(function () {
            if ($(this).height() > blogHeight) {
                blogHeight = $(this).height();
            }
        });
        $('.blog_card').height(blogHeight);
    });

});
