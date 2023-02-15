const mongoose = require("mongoose");

const iamgeSchema = new mongoose.Schema({
  links: {
    type: Array
  }
});
let Image ;
try {
  Image = mongoose.model("image");
} catch {
  Image= mongoose.model("image", iamgeSchema);
}
module.exports = Image;