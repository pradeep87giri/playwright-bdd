Feature: Login Functionality

  Scenario: Successful login
    Given I navigate to the login page
    When I enter valid email and password "SecurePass@123"
    And I click the login button
    Then Verify user is logged in successfully

  Scenario Outline: Login with invalid credentials
    Given I navigate to the login page
    When I enter email "<Email>" and password "<Password>"
    And I click the login button
    Then I should see login error message "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later." on "Heading"

    Examples:
      | Email            | Password  |
      | invalid@test.com | Secure123 |
      | test@test.com    | WrongPass |
      | wrong@test.com   | WrongPass |

  Scenario Outline: Login with empty email and apssword
    Given I navigate to the login page
    When I enter email "<Email>" and password "<Password>"
    And I click the login button
    Then I should see login error message "This is a required field" on "<Field>"

    Examples:
      | Email         | Password  | Field              |
      |               | Secure123 | Email              |
      | test@test.com |           | Password           |
      |               |           | Email and Password |

  Scenario Outline: Login with invalid email format
    Given I navigate to the login page
    When I enter email "<Email>" and password "<Password>"
    And I click the login button
    Then I should see login error message "Please enter a valid email address" on "Email"

    Examples:
      | Email     | Password  |
      | test.com  | Secure123 |
      | test@.com | Secure123 |
      | @test.com | Secure123 |
      | test@test | Secure123 |
