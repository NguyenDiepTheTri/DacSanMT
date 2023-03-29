const {override , useBabelRc} = require("customize-cra");

module.exports = override(
  // thèn này có trong thư viện customize-cra
  useBabelRc()
);