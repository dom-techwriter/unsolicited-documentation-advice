const response = pm.response.json();
let fundsDataResponSchema = {
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "required": [
        "name",
        "type",
        "balance",
        "percentage",
        "collected_at",
        "public_identifiers",
    ],
    "properties": {
        "name": {
            "type": "string",
            "title": "The id schema",
            "description": "An explanation about the purpose of this instance.",
        },
        "type": {
            "type": "string",
            "title": "The institution schema",
            "description": "An explanation about the purpose of this instance.",
        },
        "balance": {
            "type": "number",
            "title": "The access_mode schema",
            "description": "An explanation about the purpose of this instance.",
        },
        "percentage": {
            "$id": "#/properties/status",
            "type": "number",
            "title": "The status schema",
            "description": "An explanation about the purpose of this instance.",
        },
        "public_identifiers": {
            "type": "object",
            "title": "The created_by schema",
            "description": "An explanation about the purpose of this instance.",
        },
        "collected_at": {
            "$id": "#/properties/created_at",
            "type": "string",
            "format": "date-time",
            "title": "The created_at schema",
            "description": "An explanation about the purpose of this instance.",
        },
    },
    "additionalProperties": false
}



pm.test('Response is expected Belvo funds_data schema', function() {
    let result = tv4.validateResult(response.funds_data, fundsDataResponSchema);
    if (!result.valid){
        console.log(result);
    }

    pm.expect(result.valid).to.be.true
})