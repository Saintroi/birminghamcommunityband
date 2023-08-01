const config = {
  appUrl: 'http://bhmbands.com',
  authToken: 'bearer ',
  calendar: {
    calendarID: "birminghamcommunityband@gmail.com",
    api_key: process.env.REACT_APP_BCCB_GOOGLE_API,

    client_id: process.env.REACT_APP_BCCB_CLIENT_ID,
    project_id: "bcb-site",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.REACT_APP_BCCB_CLIENT_SECRET,
    javascript_origins: ["https://bhmbands.com"]
  }
};

export default config;
