define([
    'jquery',
    'matchMedia',
    'accordion'
], function ($, mediaCheck) {
    'use strict';

    return function (config, element) {
        var element = $(element);

        element.each(function (i) {
            $(this).find("[data-collapsible]").attr("data-role", "collapsible");
            $(this).find("[data-content]").attr("data-role", "content");
        });

        mediaCheck({
            media: '(min-width: 768px)',
            entry: function () {
                element.accordion({
                    collapsible: true,
                    multipleCollapsible: false
                });
            },
            exit: function () {
                element.accordion({
                    collapsible: true,
                    multipleCollapsible: false,
                    active: false
                });
            }
        });

    };
});
