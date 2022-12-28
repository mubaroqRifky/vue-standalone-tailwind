import { createI18n } from "vue-i18n";
import EnUS from "../lang/en-US";
import IdID from "../lang/id-ID";

const messages = {
    en: EnUS,
    id: IdID,
};

// 2. Create i18n instance with options
const i18n = createI18n({
    locale: "id", // set locale
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
});

export default i18n;
