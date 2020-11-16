module.exports = {
    "componentFileName": "type-decorators-with-helpers.js",

    "arguments": {
        "optionalArgument": {
            "__name": "optional",
            "__args": ["Date"]
        },

        "arrayArgument": {
            "__name": "arrayOf",
            "__args": ["\"string\""]
        },

        "oneArgument": {
            "__name": "oneOf",
            "__args": [
                "\"red\"",
                "\"blue\"",
                "\"yellow\""
            ]
        },

        "unionArgument": {
            "__name": "unionOf",
            "__args": ["\"number\"", "\"string\""]
        },

        "shapeArgument": {
            "__name": "shapeOf",
            "__args": [
                {
                    "id": "\"string\""
                }
            ]
        },

        "nestedArgument": {
            "__name": "unionOf",
            "__args": [
                "\"string\"",
                {
                    "__name": "shapeOf",
                    "__args": [
                        {
                            "id": {
                                "__name": "optional",
                                "__args": ["\"string\""]
                            }
                        }
                    ]
                }
            ]
        }
    }
};