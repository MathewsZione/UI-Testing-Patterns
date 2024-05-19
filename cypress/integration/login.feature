Feature: Login
 Background: Before each
  Given I am on the login page EBAC SHOP

  Scenario Outline: Login with correct credentials
  When I login with email "<email>" and password "<password>"
  Then I should be on the home page EBAC SHOP

  Examples:
      | email              | password                  | 
      | teste@ebac.com.br  | GD*peToHNJ1#c$sgk08EaYJQ  | 

  Scenario Outline: Login with password
  When I login with valid email "<email>" and invalid password "<password>"
  Then should be message error 
  
  Examples:
      | email              | password   | 
      | teste@ebac.com.br  | test@error |     

  Scenario Outline: Login with invalid email
  When I login with invalid email "<email>" and valid password "<password>"
  Then should be message error invalid email
  
  Examples:
      | email                 | password                 | 
      | testeERROR@ebac.com.br| GD*peToHNJ1#c$sgk08EaYJQ |  
    