Feature: Register
Background: Before each
Given I visit EBACStore sing-in page 

    Scenario Outline: Register a new account successfully      
    When I enter an unregisterd email and a password "<password>"    
    Then my account page should be visible

    Examples:
    | password                  |
    | GD*peToHNJ1#c$sgk08EaYJQ  |

    Scenario Outline: Try to register a new account with an email already used      
    When I enter a previously registerd email "<email>" and a password "<password>"    
    Then an error should be visible

    Examples:
    | email                 | password                  |
    | teste@ebac.com.br     | GD*peToHNJ1#c$sgk08EaYJQ  |