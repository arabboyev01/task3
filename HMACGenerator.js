const crypto = require("crypto");

class HMACGenerator {
  constructor(key) {
    this.key = key;
  }

  calculateHMAC(data) {
    const hmac = crypto.createHmac("sha256", this.key);
    hmac.update(data);
    return hmac.digest("hex");
  }
}

module.exports = HMACGenerator;
