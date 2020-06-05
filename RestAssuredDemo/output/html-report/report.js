$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExchangeCurrencyRatesAPIGetTest.feature");
formatter.feature({
  "line": 1,
  "name": "GET: RestAssured Get Request- Foreign currency exchange rates api",
  "description": "Description: GET: purpose of this feature is to test the Foreign currency exchange rates api with currency conversion",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "GET: Verify the Latest Foregin currency exchange rates",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
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
        "StatusCode"
      ],
      "line": 12,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates;;1"
    },
    {
      "cells": [
        "Get Latest currecy rate",
        "/latest",
        "application/json",
        "",
        "GET",
        "200"
      ],
      "line": 13,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "GET: Verify the Latest Foregin currency exchange rates",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-latest-foregin-currency-exchange-rates;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want to set URL as \"/latest\" for test case \"Get Latest currecy rate\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
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
  "duration": 148871000,
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
  "duration": 640000,
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
  "duration": 2891551500,
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
  "duration": 2370000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "GET: Verify the response for bad Latest currency rates Get request.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I try to verify the response value \"error\" is \"time data \u0027lastest\u0027 does not match format \u0027%Y-%m-%d\u0027\"",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
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
        "StatusCode"
      ],
      "line": 24,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.;;1"
    },
    {
      "cells": [
        "Negative test - Get Latest currecy rate",
        "/lastest",
        "application/json",
        "",
        "GET",
        "400"
      ],
      "line": 25,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "GET: Verify the response for bad Latest currency rates Get request.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-response-for-bad-latest-currency-rates-get-request.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I want to set URL as \"/lastest\" for test case \"Negative test - Get Latest currecy rate\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I try to verify the status code is \"400\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
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
  "duration": 1580500,
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
  "duration": 507800,
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
  "duration": 1162376200,
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
  "duration": 493800,
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
  "duration": 5695901,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "GET: Verify the Foregin currency exchange rates based on specific date given.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
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
        "StatusCode"
      ],
      "line": 35,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.;;1"
    },
    {
      "cells": [
        "Negative test - Get Exchange currecy rate for specific date given",
        "/2019-01-13",
        "application/json",
        "",
        "GET",
        "200"
      ],
      "line": 36,
      "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "GET: Verify the Foregin currency exchange rates based on specific date given.",
  "description": "",
  "id": "get:-restassured-get-request--foreign-currency-exchange-rates-api;get:-verify-the-foregin-currency-exchange-rates-based-on-specific-date-given.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I want to set URL as \"/2019-01-13\" for test case \"Negative test - Get Exchange currecy rate for specific date given\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
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
    }
  ],
  "location": "GetExchangeRatesTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 1472500,
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
  "duration": 538600,
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
  "duration": 2225195400,
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
  "duration": 1106200,
  "status": "passed"
});
});