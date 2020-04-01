import i18next from "i18next";
import locizeBackend from "i18next-locize-backend";
import locizeEditor from "locize-editor";
import languageDetector from "i18next-browser-languagedetector";
import { reacti18nextModule } from "react-i18next";

i18next
  .use(locizeBackend)
  .use(locizeEditor)
  .use(languageDetector)
  .use(reacti18nextModule)
  .init({
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    debug: true,
    backend: {
      projectId: "a361f135-daff-4a9b-9f06-cc200c9d2e09",
      apiKey: "add923c9-e906-4a60-9d0f-ff0230bfe059",
      referenceLng: "en-US"
    },
    react: {
      wait: true
    }
  });
export default i18next;
