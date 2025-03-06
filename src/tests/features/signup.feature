Feature: Signup Functionality
  # Scenario Outline: Successful signup
  #   Given I navigate to the signup page
  #   When I enter first name "<First Name>" and last name "<Last Name>"
  #   And I enter a valid random email
  #   And I enter password "<Password>" and "<Confirm Password>"
  #   And I click the Create an Account button
  #   Then I should see a success message "Thank you for registering with Main Website Store."
  #   Examples:
  #     | First Name | Last Name | Password       | Confirm Password |
  #     | Pradeep    | Giri      | SecurePass@123 | SecurePass@123   |

  Scenario Outline: Signup with mismatched passwords
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter email "<Email>"
    And I enter password "<Password>" and "<Confirm Password>"
    And I click the Create an Account button
    Then I should see an error message "Please enter the same value again." on "Confirm Password"

    Examples:
      | First Name | Last Name | Email                    | Password      | Confirm Password |
      | Pradeep    | Giri      | pradeep.giri@example.com | SecurePass123 | SecurePass456    |
