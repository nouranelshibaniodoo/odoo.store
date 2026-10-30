import { LocalizationPlugin } from "@web/core/l10n/localization_plugin";
import { patch } from "@web/core/utils/patch";

patch(LocalizationPlugin.prototype, {
    async load(...args) {
        const result = await super.load(...args);
        const locale = luxon.Settings.defaultLocale || "";
        if (/^ar(?:[-_]|$)/i.test(locale)) {
            luxon.Settings.defaultNumberingSystem = "latn";
        }
        return result;
    },
});
