var schema = { 
    value: { type: Boolean, required: true },
    comment: { type: String, required: false },
    pollId: { type: String, required: true },
    date: { type: Date, default: Date.now }
};


module.exports = schema;