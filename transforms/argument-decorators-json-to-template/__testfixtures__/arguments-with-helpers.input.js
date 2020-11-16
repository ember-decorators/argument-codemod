{
  "componentClassName": "Foo",
  "componentFileName": "type-decorator-helpers",
  "arguments": {
    "optionalArgument": {
      "type": "optional",
      "args": [
        "Date"
      ]
    },
    "arrayArgument": {
      "type": "arrayOf",
      "args": [
        "\"string\""
      ]
    },
    "oneArgument": {
      "type": "oneOf",
      "args": [
        "\"red\"",
        "\"blue\"",
        "\"yellow\""
      ]
    },
    "shapeArgument": {
      "type": "shapeOf",
      "args": [
        {
          "id": {
            "type": "\"string\""
          }
        }
      ]
    },
    "unionArgument": {
      "type": "unionOf",
      "args": [
        {
          "type": "\"number\""
        },
        {
          "type": "\"string\""
        }
      ]
    },
    "nestedArgument": {
      "type": "unionOf",
      "args": [
        {
          "type": "\"string\""
        },
        {
          "type": "shapeOf",
          "args": [
            {
              "id": {
                "type": "optional",
                "args": ["\"string\""]
              }
            }
          ]
        }
      ]
    }
  }
}