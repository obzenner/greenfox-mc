Feature: Store
  As I developer I want to be able to get a graphql schema object
  and pass a query to it

Scenario: Get a schema
  When I pass "helloWorld"
  Then I get "helloWorld" schema object

