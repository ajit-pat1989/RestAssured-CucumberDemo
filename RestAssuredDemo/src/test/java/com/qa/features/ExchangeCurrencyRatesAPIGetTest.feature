Feature: GET: RestAssured Get Request- Foreign currency exchange rates api 
  Description: GET: purpose of this feature is to test the Foreign currency exchange rates api with currency conversion

  @regression
  Scenario Outline: GET: Verify the Latest Foregin currency exchange rates
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName  				| URL     | ContentType      | RequestBody | RequestMethod | StatusCode |
      | Get Latest currecy rate | /latest | application/json |             | GET           |        200 |

  @regression
  Scenario Outline: GET: Verify the response for bad Latest currency rates Get request.
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the response value "error" is "time data 'lastest' does not match format '%Y-%m-%d'"

    Examples: 
      | TestName  							   | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | Negative test - Get Latest currecy rate| /lastest          | application/json |             | GET           |        400 |
      
  @regression
  Scenario Outline: GET: Verify the Foregin currency exchange rates based on specific date given.
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName  							   | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | Negative test - Get Exchange currecy rate for specific date given| /2019-01-13       | application/json |             | GET           |        200 |
      
         
      
      
