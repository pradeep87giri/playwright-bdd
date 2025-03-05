Feature: Signup Functionality

  Scenario Outline: Successful signup
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter email "<Email>"
    And I enter password "<Password>" and confirm password "<Confirm Password>"
    And I click the "Create an Account" button
    # Then I should see a success message "Signup successful!"

    Examples:
      | First Name | Last Name | Email                | Password      | Confirm Password |
      | John       | Doe       | john.doe@example.com | SecurePass123 | SecurePass123    |
      # | Alice      | Smith     | alice.smith@example.com | Password@123  | Password@123     |
