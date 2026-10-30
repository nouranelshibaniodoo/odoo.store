/** @odoo-module **/

import { registry } from "@web/core/registry";
import { localizationService } from "@web/core/l10n/localization_service";

// Odoo selects locale-specific digits during localization service startup.
// Keep that behavior for every locale except Arabic, where this addon requests
// Latin digits from Luxon in the backend web client.
const services = registry.category("services");
services.remove("localization");
services.add("localization", {
    ...localizationService,
    async start(env, deps) {
        const localization = await localizationService.start(env, deps);
        const locale = luxon.Settings.defaultLocale || "";
        if (/^ar(?:[-_]|$)/i.test(locale)) {
            luxon.Settings.defaultNumberingSystem = "latn";
        }
        return localization;
    },
});
