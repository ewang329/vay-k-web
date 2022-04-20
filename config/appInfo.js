let apiDomain;
let webDomain;

if (process.env.NODE_ENV == "development") {
    apiDomain = "http://localhost:3000";
    webDomain = "http://localhost:3000";
} else if(process.env.NODE_ENV == "production") {
    apiDomain = "https://vay-k-web.vercel.app";
    webDomain = "https://vay-k-web.vercel.app";
}
const appInfo = {
  // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
  appName: "Vay-k",
  apiBasePath: "/api/auth",
  websiteBasePath: "/auth",
  websiteDomain: webDomain,
  apiDomain
}

export { appInfo };
