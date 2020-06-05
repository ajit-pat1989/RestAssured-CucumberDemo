$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExchangeCurrencyRatesAPIGetTest.feature");
formatter.feature({
  "line": 1,
  "name": "GET: RestAssured Get Request- Foreign currency exchange rates api",
  "description": "Description: GET: purpose of this feature is to test the Foreign currency exchange rates api with currency conversion",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "################################Get request for Latest Foregin currency exchange ################################################################"
    }
  ],
  "line": 8,
  "name": "GET: Verify the Latest Foregin currency exchange rates",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Symbols",
        "Base"
      ],
      "line": 15,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates;;1"
    },
    {
      "cells": [
        "Get Latest currecy rate",
        "/latest",
        "application/json",
        "",
        "GET",
        "200",
        "",
        ""
      ],
      "line": 16,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "GET: Verify the Latest Foregin currency exchange rates",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want to set URL as \"/latest\" for test case \"Get Latest currecy rate\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/latest",
      "offset": 22
    },
    {
      "val": "Get Latest currecy rate",
      "offset": 46
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 131142700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 957900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 2805322200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 1793900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "GET: Verify the response for bad Latest currency rates Get request.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the response value \"error\" is \"time data \u0027lastest\u0027 does not match format \u0027%Y-%m-%d\u0027\"",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Symbols",
        "Base"
      ],
      "line": 27,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.;;1"
    },
    {
      "cells": [
        "Negative test - Get Latest currecy rate",
        "/lastest",
        "application/json",
        "",
        "GET",
        "400",
        "",
        ""
      ],
      "line": 28,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "GET: Verify the response for bad Latest currency rates Get request.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I want to set URL as \"/lastest\" for test case \"Negative test - Get Latest currecy rate\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I try to verify the status code is \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the response value \"error\" is \"time data \u0027lastest\u0027 does not match format \u0027%Y-%m-%d\u0027\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/lastest",
      "offset": 22
    },
    {
      "val": "Negative test - Get Latest currecy rate",
      "offset": 47
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 1645000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 533400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 917312000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 662500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 36
    },
    {
      "val": "time data \u0027lastest\u0027 does not match format \u0027%Y-%m-%d\u0027",
      "offset": 47
    }
  ],
  "location": "GetExchangeRatesTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 8390100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "GET: Verify and get the response for Latest Foreign Exchange Rates with Symbols.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-symbols.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@regression"
    },
    {
      "line": 30,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\" having parameters \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I set the query parameter as symbols \"\u003cSymbols\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-symbols.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Symbols",
        "Base"
      ],
      "line": 40,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-symbols.;;1"
    },
    {
      "cells": [
        "Get Latest Foreign Exchange Rates with Symbols",
        "/latest",
        "application/json",
        "",
        "GET",
        "200",
        "symbols\u003dUSD,GBP",
        ""
      ],
      "line": 41,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-symbols.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "GET: Verify and get the response for Latest Foreign Exchange Rates with Symbols.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-symbols.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@smoke"
    },
    {
      "line": 30,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to set URL as \"/latest\" for test case \"Get Latest Foreign Exchange Rates with Symbols\" having parameters \"\" and \"symbols\u003dUSD,GBP\"",
  "matchedColumns": [
    0,
    1,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I set the query parameter as symbols \"symbols\u003dUSD,GBP\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/latest",
      "offset": 22
    },
    {
      "val": "Get Latest Foreign Exchange Rates with Symbols",
      "offset": 46
    },
    {
      "val": "",
      "offset": 113
    },
    {
      "val": "symbols\u003dUSD,GBP",
      "offset": 120
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 2171100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 510700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbols\u003dUSD,GBP",
      "offset": 38
    }
  ],
  "location": "GetExchangeRatesTest.i_set_the_query_parameter_as_symbols(String)"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 685358600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 1090600,
  "status": "passed"
});
formatter.match({
  "location": "GetExchangeRatesTest.i_verify_the_response_body_as_per_given_query_parameter()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "GET: Verify and get the response for Latest Foreign Exchange Rates with Base.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@regression"
    },
    {
      "line": 43,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\" having parameters \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I set the query parameter as Base \"\u003cBase\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Symbols",
        "Base"
      ],
      "line": 53,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base.;;1"
    },
    {
      "cells": [
        "Get Latest Foreign Exchange Rates with Symbols and Base",
        "/latest",
        "application/json",
        "",
        "GET",
        "200",
        "",
        "base\u003dUSD"
      ],
      "line": 54,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "GET: Verify and get the response for Latest Foreign Exchange Rates with Base.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@smoke"
    },
    {
      "line": 43,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I want to set URL as \"/latest\" for test case \"Get Latest Foreign Exchange Rates with Symbols and Base\" having parameters \"base\u003dUSD\" and \"\"",
  "matchedColumns": [
    0,
    1,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I set the query parameter as Base \"base\u003dUSD\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/latest",
      "offset": 22
    },
    {
      "val": "Get Latest Foreign Exchange Rates with Symbols and Base",
      "offset": 46
    },
    {
      "val": "base\u003dUSD",
      "offset": 122
    },
    {
      "val": "",
      "offset": 137
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 2054600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 434400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "base\u003dUSD",
      "offset": 35
    }
  ],
  "location": "GetExchangeRatesTest.i_set_the_query_parameter_as_Base(String)"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 640515900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 720500,
  "status": "passed"
});
formatter.match({
  "location": "GetExchangeRatesTest.i_verify_the_response_body_as_per_given_query_parameter()"
});
formatter.result({
  "duration": 10200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "GET: Verify and get the response for Latest Foreign Exchange Rates with Base and symbols.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base-and-symbols.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@regression"
    },
    {
      "line": 57,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\" having parameters \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I set the query parameter as Base \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base-and-symbols.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Base",
        "Symbols"
      ],
      "line": 67,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base-and-symbols.;;1"
    },
    {
      "cells": [
        "Get Latest Foreign Exchange Rates with Symbols and Base",
        "/latest",
        "application/json",
        "",
        "GET",
        "200",
        "base\u003dUSD",
        "symbols\u003dGBP"
      ],
      "line": 68,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base-and-symbols.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "GET: Verify and get the response for Latest Foreign Exchange Rates with Base and symbols.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-latest-foreign-exchange-rates-with-base-and-symbols.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@smoke"
    },
    {
      "line": 57,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "I want to set URL as \"/latest\" for test case \"Get Latest Foreign Exchange Rates with Symbols and Base\" having parameters \"base\u003dUSD\" and \"symbols\u003dGBP\"",
  "matchedColumns": [
    0,
    1,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I set the query parameter as Base \"base\u003dUSD\" and \"symbols\u003dGBP\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/latest",
      "offset": 22
    },
    {
      "val": "Get Latest Foreign Exchange Rates with Symbols and Base",
      "offset": 46
    },
    {
      "val": "base\u003dUSD",
      "offset": 122
    },
    {
      "val": "symbols\u003dGBP",
      "offset": 137
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 1351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 500400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "base\u003dUSD",
      "offset": 35
    },
    {
      "val": "symbols\u003dGBP",
      "offset": 50
    }
  ],
  "location": "GetExchangeRatesTest.i_set_the_query_parameter_as_Base_and(String,String)"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 749357500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 677200,
  "status": "passed"
});
formatter.match({
  "location": "GetExchangeRatesTest.i_verify_the_response_body_as_per_given_query_parameter()"
});
formatter.result({
  "duration": 10200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 70,
      "value": "################################Get request for Foregin currency exchange with given specified date ################################################################"
    }
  ],
  "line": 73,
  "name": "GET: Verify the Foregin currency exchange rates based on specific date given.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\" having parameters \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Symbols",
        "Base"
      ],
      "line": 80,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.;;1"
    },
    {
      "cells": [
        "Negative test - Get Exchange currecy rate for specific date given",
        "/2019-01-13",
        "application/json",
        "",
        "GET",
        "200",
        "",
        ""
      ],
      "line": 81,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 81,
  "name": "GET: Verify the Foregin currency exchange rates based on specific date given.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "I want to set URL as \"/2019-01-13\" for test case \"Negative test - Get Exchange currecy rate for specific date given\" having parameters \"\" and \"\"",
  "matchedColumns": [
    0,
    1,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/2019-01-13",
      "offset": 22
    },
    {
      "val": "Negative test - Get Exchange currecy rate for specific date given",
      "offset": 50
    },
    {
      "val": "",
      "offset": 136
    },
    {
      "val": "",
      "offset": 143
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 1490100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 387700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 1072946400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 698600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "GET: Verify and get the response for Foreign Exchange Rates with Symbols for specified date.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-symbols-for-specified-date.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@regression"
    },
    {
      "line": 84,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\" having parameters \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I set the query parameter as symbols \"\u003cSymbols\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-symbols-for-specified-date.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Symbols",
        "Base"
      ],
      "line": 94,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-symbols-for-specified-date.;;1"
    },
    {
      "cells": [
        "Get Foreign Exchange Rates with Symbols for specified date.",
        "/2019-01-13",
        "application/json",
        "",
        "GET",
        "200",
        "symbols\u003dUSD,GBP",
        ""
      ],
      "line": 95,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-symbols-for-specified-date.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 95,
  "name": "GET: Verify and get the response for Foreign Exchange Rates with Symbols for specified date.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-symbols-for-specified-date.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@smoke"
    },
    {
      "line": 84,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I want to set URL as \"/2019-01-13\" for test case \"Get Foreign Exchange Rates with Symbols for specified date.\" having parameters \"\" and \"symbols\u003dUSD,GBP\"",
  "matchedColumns": [
    0,
    1,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I set the query parameter as symbols \"symbols\u003dUSD,GBP\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/2019-01-13",
      "offset": 22
    },
    {
      "val": "Get Foreign Exchange Rates with Symbols for specified date.",
      "offset": 50
    },
    {
      "val": "",
      "offset": 130
    },
    {
      "val": "symbols\u003dUSD,GBP",
      "offset": 137
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 2198100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 366800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbols\u003dUSD,GBP",
      "offset": 38
    }
  ],
  "location": "GetExchangeRatesTest.i_set_the_query_parameter_as_symbols(String)"
});
formatter.result({
  "duration": 30900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 694995400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 385000,
  "status": "passed"
});
formatter.match({
  "location": "GetExchangeRatesTest.i_verify_the_response_body_as_per_given_query_parameter()"
});
formatter.result({
  "duration": 10600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 98,
  "name": "GET: Verify and get the response for Foreign Exchange Rates with Base for specified date.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-for-specified-date.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 97,
      "name": "@regression"
    },
    {
      "line": 97,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\" having parameters \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "I set the query parameter as Base \"\u003cBase\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.examples({
  "line": 106,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-for-specified-date.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Symbols",
        "Base"
      ],
      "line": 107,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-for-specified-date.;;1"
    },
    {
      "cells": [
        "Get Foreign Exchange Rates with Symbols and Base for specified date",
        "/2019-01-13",
        "application/json",
        "",
        "GET",
        "200",
        "",
        "base\u003dUSD"
      ],
      "line": 108,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-for-specified-date.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 108,
  "name": "GET: Verify and get the response for Foreign Exchange Rates with Base for specified date.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-for-specified-date.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 97,
      "name": "@smoke"
    },
    {
      "line": 97,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "I want to set URL as \"/2019-01-13\" for test case \"Get Foreign Exchange Rates with Symbols and Base for specified date\" having parameters \"base\u003dUSD\" and \"\"",
  "matchedColumns": [
    0,
    1,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "I set the query parameter as Base \"base\u003dUSD\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/2019-01-13",
      "offset": 22
    },
    {
      "val": "Get Foreign Exchange Rates with Symbols and Base for specified date",
      "offset": 50
    },
    {
      "val": "base\u003dUSD",
      "offset": 138
    },
    {
      "val": "",
      "offset": 153
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 1300900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 350600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "base\u003dUSD",
      "offset": 35
    }
  ],
  "location": "GetExchangeRatesTest.i_set_the_query_parameter_as_Base(String)"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 1054608200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 449500,
  "status": "passed"
});
formatter.match({
  "location": "GetExchangeRatesTest.i_verify_the_response_body_as_per_given_query_parameter()"
});
formatter.result({
  "duration": 8300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 112,
  "name": "GET: Verify and get the response for Foreign Exchange Rates with Base and symbols for specified date.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-and-symbols-for-specified-date.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 111,
      "name": "@regression"
    },
    {
      "line": 111,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\" having parameters \"\u003cBase\u003e\" and \"\u003cSymbols\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "I set the query parameter as Base \"\u003cBase\u003e\" and Symbols \"\u003cSymbols\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.examples({
  "line": 120,
  "name": "",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-and-symbols-for-specified-date.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode",
        "Base",
        "Symbols"
      ],
      "line": 121,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-and-symbols-for-specified-date.;;1"
    },
    {
      "cells": [
        "Get Foreign Exchange Rates with Symbols and Base for specified date",
        "/2019-01-13",
        "application/json",
        "",
        "GET",
        "200",
        "base\u003dUSD",
        "symbols\u003dGBP"
      ],
      "line": 122,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-and-symbols-for-specified-date.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 122,
  "name": "GET: Verify and get the response for Foreign Exchange Rates with Base and symbols for specified date.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-and-get-the-response-for-foreign-exchange-rates-with-base-and-symbols-for-specified-date.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 111,
      "name": "@smoke"
    },
    {
      "line": 111,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "I want to set URL as \"/2019-01-13\" for test case \"Get Foreign Exchange Rates with Symbols and Base for specified date\" having parameters \"base\u003dUSD\" and \"symbols\u003dGBP\"",
  "matchedColumns": [
    0,
    1,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "I set the query parameter as Base \"base\u003dUSD\" and Symbols \"symbols\u003dGBP\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "I verify the response body as per given query parameter",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/2019-01-13",
      "offset": 22
    },
    {
      "val": "Get Foreign Exchange Rates with Symbols and Base for specified date",
      "offset": 50
    },
    {
      "val": "base\u003dUSD",
      "offset": 138
    },
    {
      "val": "symbols\u003dGBP",
      "offset": 153
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String,String,String)"
});
formatter.result({
  "duration": 1250300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "GetExchangeRatesTest.setHeader(String)"
});
formatter.result({
  "duration": 288200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "base\u003dUSD",
      "offset": 35
    },
    {
      "val": "symbols\u003dGBP",
      "offset": 58
    }
  ],
  "location": "GetExchangeRatesTest.i_set_the_query_parameter_as_Base_and_Symbols(String,String)"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "GetExchangeRatesTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 649783800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "GetExchangeRatesTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 1082400,
  "status": "passed"
});
formatter.match({
  "location": "GetExchangeRatesTest.i_verify_the_response_body_as_per_given_query_parameter()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
});