module.exports = {
  server: window.location.href.includes("localhost")
    ? "http://localhost:8000"
    : "https://api.hostarena.org",

  CLOUD_COUPON_DOMAIN: "https://cloudcoupons.net/",
};
