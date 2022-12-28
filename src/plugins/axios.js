import Axios from "axios";
import VueCookies from "vue-cookies";

const prot = import.meta.env.API_PROTOCOL || window.location.protocol;
const host = import.meta.env.API_HOST || window.location.host;
const port = import.meta.env.API_PORT ? "" : ":" + import.meta.env.API_PORT;

Axios.defaults.baseURL = prot + "//" + host + port + "/api/";
Axios.defaults.headers.common["Authorization"] = `Bearer ${VueCookies.get(
    "token_auth"
)}`;

export default {
    install(app, options) {
        app.config.globalProperties.$http = Axios;
    },
};
