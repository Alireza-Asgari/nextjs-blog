const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "alirezaAskari",
        mongodb_password: "wBRTCRjKYOBDU4UM",
        mongodb_projectname: "cluster0",
        mongodb_database: "blog-messages-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "alirezaAskari",
      mongodb_password: "wBRTCRjKYOBDU4UM",
      mongodb_projectname: "cluster0",
      mongodb_database: "blog-messages",
    },
  };
};
