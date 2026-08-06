const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingSchema");

const HoldingModel = model("Holding", HoldingsSchema);

module.exports = { HoldingModel };