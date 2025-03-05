@signup
Feature: Signup Functionality

  Scenario Outline: Successful signup
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter email
    And I enter password "<Password>" and confirm password
    And I click the Create an Account button
    Then I should see a success message "Thank you for registering with Main Website Store."

    Examples:
      | First Name | Last Name | Password      |
      | Pradeep    | Giri      | SecurePass123 |
