# AJV

We can use AJV to test our schemas! And it's pretty cool. The basics is that you need to first create a variable that contains your schema. Oh, and just so you know, your schema can also include some additional pattern testing if you need!

Make sure that you remove the `$schema` element, as otherwise it won't work at all :(.

```js
let schemaToTest = {
    {
    "title": "tax retention",
    "description": "A standard schema to represent a tax retention",
    "type": "object",
    "additionalProperties": false,
    "required": [
        "collected_at",
        "invoice_identification",
        "version",
        "code",
        "issued_at",
        "certified_at",
        "cancelled_at",
        "sender_id",
        "sender_name",
        "receiver_nationality",
        "receiver_id",
        "receiver_name",
        "total_invoice_amount",
        "total_taxable_amount",
        "total_exempt_amount",
        "total_retained_amount",
        "retention_breakdown",
        "xml"
    ],
    "properties": {
        "collected_at": {
            "type": [
                "string",
                "null"
            ],
            "format": "date-time"
        },
        "invoice_identification": {
            "type": [
                "string",
                "null"
            ]
        },
        "version": {
            "type": [
                "string",
                "null"
            ]
        },
        "code": {
            "type": [
                "integer",
                "null"
            ]
        },
        "issued_at": {
            "type": [
                "string",
                "null"
            ],
            "format": "date-time"
        },
        "certified_at": {
            "type": [
                "string",
                "null"
            ],
            "format": "date-time"
        },
        "cancelled_at": {
            "type": [
                "string",
                "null"
            ],
            "format": "date-time"
        },
        "sender_id": {
            "type": [
                "string",
                "null"
            ]
        },
        "sender_name": {
            "type": [
                "string",
                "null"
            ]
        },
        "receiver_nationality": {
            "type": [
                "string",
                "null"
            ]
        },
        "receiver_id": {
            "type": [
                "string",
                "null"
            ]
        },
        "receiver_name": {
            "type": [
                "string",
                "null"
            ]
        },
        "total_invoice_amount": {
            "type": [
                "number",
                "null"
            ]
        },
        "total_taxable_amount": {
            "type": [
                "number",
                "null"
            ]
        },
        "total_exempt_amount": {
            "type": [
                "number",
                "null"
            ]
        },
        "total_retained_amount": {
            "type": [
                "number",
                "null"
            ]
        },
        "retention_breakdown": {
            "type": [
                "array",
                "null"
            ],
            "required": [
                "base_amount",
                "tax_type",
                "retained_amount",
                "payment_status"
            ],
            "items": {
                "type": "object",
                "properties": {
                    "base_amount": {
                        "type": [
                            "number",
                            "null"
                        ]
                    },
                    "tax_type": {
                        "type": [
                            "string",
                            "null"
                        ]
                    },
                    "retained_amount": {
                        "type": [
                            "number",
                            "null"
                        ]
                    },
                    "payment_status": {
                        "type": [
                            "string",
                            "null"
                        ]
                    }
                }
            }
        },
        "xml": {
            "type": [
                "string",
                "null"
            ]
        }
    }
}
```