odoo.define("arabic_numbers_fix.localization_patch", function (require) {
    "use strict";

    var Session = require("web.Session");

    function latinizeArabicDigits(value) {
        return value.replace(/[٠-٩۰-۹]/g, function (digit) {
            var code = digit.charCodeAt(0);
            var base = code >= 0x06F0 ? 0x06F0 : 0x0660;
            return String.fromCharCode(0x0030 + code - base);
        });
    }

    Session.include({
        _configureLocale: function () {
            this._super.apply(this, arguments);

            var locale = moment.locale();
            if (!/^ar(?:[-_]|$)/i.test(locale)) {
                return;
            }

            var localeData = moment.localeData(locale);
            var originalPostformat = localeData.postformat || function (value) { return value; };
            if (originalPostformat.__arabicNumbersFix) {
                return;
            }

            var postformat = function (value) {
                return latinizeArabicDigits(originalPostformat.call(this, value));
            };
            postformat.__arabicNumbersFix = true;
            moment.updateLocale(locale, { postformat: postformat });
        },
    });
});

