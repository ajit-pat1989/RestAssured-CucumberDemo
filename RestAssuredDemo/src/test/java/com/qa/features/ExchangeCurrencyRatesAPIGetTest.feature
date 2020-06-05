Feature: GET: RestAssured Get Request- Foreign currency exchange rates api 
  Description: GET: purpose of this feature is to test the Foreign currency exchange rates api with currency conversion


################################Get request for Latest Foregin currency exchange ################################################################

  @regression @smoke
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
            
   @regression  @smoke   
   Scenario Outline: GET: Verify and get the response for Latest Foreign Exchange Rates with Symbols.  
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    And I set the query parameter as symbols "<Symbols>" 
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I verify the response body as per given query parameter

    Examples: 
      | TestName  									   | URL     | ContentType      | RequestBody | RequestMethod | StatusCode |Symbols 		|
      | Get Latest Foreign Exchange Rates with Symbols | /latest? | application/json |             | GET           |        200 |symbols=USD,GBP |
 
   @regression  @smoke   
   Scenario Outline: GET: Verify and get the response for Latest Foreign Exchange Rates with Base.  
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    And I set the query parameter as Base "<Base>" 
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I verify the response body as per given query parameter

    Examples: 
      | TestName  									   | URL    			 | ContentType    	| RequestBody | RequestMethod | StatusCode |Base		|
      | Get Latest Foreign Exchange Rates with Symbols and Base | /latest? | application/json 	|            		 | GET             |        200 |base=USD    |
         
  
   @regression  @smoke   
   Scenario Outline: GET: Verify and get the response for Latest Foreign Exchange Rates with Base and symbols.  
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    And I set the query parameter as Base "<Base>" and "<Symbols>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I verify the response body as per given query parameter

    Examples: 
      | TestName  									   			| URL     | ContentType		  | RequestBody | RequestMethod | StatusCode |Base		|Symbols 		|
      | Get Latest Foreign Exchange Rates with Symbols and Base | /latest? | application/json |             | GET        	| 200 		 |base=USD    |symbols=GBP    |
    
    ################################Get request for Foregin currency exchange with given specified date ################################################################
  
  @regression
  Scenario Outline: GET: Verify the Foregin currency exchange rates based on specific date given.
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName  							   							 | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | Negative test - Get Exchange currecy rate for specific date given| /2019-01-13       | application/json |             | GET           |        200 |
      
    
   @regression  @smoke   
   Scenario Outline: GET: Verify and get the response for Foreign Exchange Rates with Symbols for specified date.  
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    And I set the query parameter as symbols "<Symbols>" 
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I verify the response body as per given query parameter

    Examples: 
      | TestName  									   					   | URL     | ContentType      | RequestBody | RequestMethod | StatusCode |Symbols 		|
      | Get Foreign Exchange Rates with Symbols for specified date. | /2019-01-13 | application/json |             | GET           |        200 |symbols=USD,GBP |
 
   @regression  @smoke   
   Scenario Outline: GET: Verify and get the response for Foreign Exchange Rates with Base for specified date.  
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    And I set the query parameter as Base "<Base>" 
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I verify the response body as per given query parameter

    Examples: 
      | TestName  									 					   | URL    			 | ContentType    	| RequestBody | RequestMethod | StatusCode |Base		|
      | Get Foreign Exchange Rates with Symbols and Base for specified date| /2019-01-13 | application/json 	|            		 | GET             |        200 |base=USD    |
         
  
   @regression  @smoke   
   Scenario Outline: GET: Verify and get the response for Foreign Exchange Rates with Base and symbols for specified date.  
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    And I set the query parameter as Base "<Base>" and Symbols "<Symbols>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I verify the response body as per given query parameter

    Examples: 	
      | TestName  									   						       | URL     | ContentType		  | RequestBody | RequestMethod | StatusCode |Base		|Symbols 		|
      | Get Foreign Exchange Rates with Symbols and Base for specified date | /2019-01-13 | application/json |             | GET        	| 200 		 |base=USD    |symbols=GBP    |
                       
      
