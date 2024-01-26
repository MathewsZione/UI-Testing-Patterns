Feature: Checkout
As a costumer in EBAC-SHOP
I want to complete a purchase

    Scenario: Checkout a product I have purchased
        Given I visit EBACStore
        When I checkout a product   
        Then my purchase should be confirmed