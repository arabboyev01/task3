const crypto = require("crypto");

class Crypto {
  generateKey() {
    return crypto.randomBytes(32); // 256 bits
  }

  calculateHMAC(key, message) {
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(message);
    return hmac.digest("hex");
  }
}

module.exports = Crypto;
