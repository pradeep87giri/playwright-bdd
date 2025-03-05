@login
Feature: Login Functionality

  Scenario: Successful login
    Given I navigate to the login page
    When I enter email and password "SecurePass123"
    And I click the login button
    Then Verify user is logged in successfully
