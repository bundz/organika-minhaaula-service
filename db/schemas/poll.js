var schema = { 
    name: { type: String, required: true },
    description: { type: String, required: true},
    owner: { type: String, required: true},
    hash: { type: String, required: true }
};

module.exports = schema;