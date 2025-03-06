Feature: Signup Functionality

  Scenario Outline: Successful signup
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter a valid random email
    And I enter password "<Password>" and "<Confirm Password>"
    And I click the Create an Account button
    Then I should see a success message "Thank you for registering with Main Website Store."

    Examples:
      | First Name | Last Name | Password       | Confirm Password |
      | Pradeep    | Giri      | SecurePass@123 | SecurePass@123   |

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

  Scenario Outline: Signup with an existing email
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter email "<Email>"
    And I enter password "<Password>" and "<Confirm Password>"
    And I click the Create an Account button
    Then I should see an error message "There is already an account with this email address." on "Heading"

    Examples:
      | First Name | Last Name | Email         | Password      | Confirm Password |
      | Pradeep    | Giri      | test@test.com | SecurePass123 | SecurePass123    |

  Scenario Outline: Signup with an invalid email
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter email "<Email>"
    And I enter password "<Password>" and "<Confirm Password>"
    And I click the Create an Account button
    Then I should see an error message "Please enter a valid email address" on "Email"

    Examples:
      | First Name | Last Name | Email         | Password      | Confirm Password |
      | Pradeep    | Giri      | invalid-email | SecurePass123 | SecurePass123    |

  Scenario Outline: Signup with a weak password
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter email "<Email>"
    And I enter password "<Password>" and "<Confirm Password>"
    And I click the Create an Account button
    Then I should see an error message "<Message>" on "Password"

    Examples:
      | First Name | Last Name | Email            | Password   | Confirm Password | Message                                                                                                                                 |
      | Pradeep    | Giri      | test123@test.com | abc        | abc              | Minimum length of this field must be equal or greater than 8 symbols                                                                    |
      | Pradeep    | Giri      | test123@test.com | abcdefghij | abcdefghij       | Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters. |

  Scenario Outline: Signup with missing fields
    Given I navigate to the signup page
    When I enter first name "<First Name>" and last name "<Last Name>"
    And I enter email "<Email>"
    And I enter password "<Password>" and "<Confirm Password>"
    And I click the Create an Account button
    Then I should see an error message "<Error Message>" on "<Field>"

    Examples:
      | First Name | Last Name | Email            | Password      | Confirm Password | Error Message               | Field            |
      |            | Giri      | test@example.com | SecurePass123 | SecurePass123    | "This is a required field." | First Name       |
      | Pradeep    |           | test@example.com | SecurePass123 | SecurePass123    | "This is a required field." | Last Name        |
      | Pradeep    | Giri      |                  | SecurePass123 | SecurePass123    | "This is a required field." | Email            |
      | Pradeep    | Giri      | test@example.com |               | SecurePass123    | "This is a required field." | Password         |
      | Pradeep    | Giri      | test@example.com | SecurePass123 |                  | "This is a required field." | Confirm Password |
