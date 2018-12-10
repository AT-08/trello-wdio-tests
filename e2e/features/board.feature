#trello.feature
Feature: Create Dashboard in Trello
  As a User
  I want to create dashboards in Trello

  Scenario: Create a board in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Board with:
      | Title       |   newBoard     |
      | Privacy     |   Public       |
      | Background  |   orange       |
    Then I expect my board created

  Scenario: Create a board in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Board with:
      | Title       |   NameBoard  |
    Then I expect my board created

  Scenario: Create a public board in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Board with:
      | Title       |   publicBoard  |
      | Privacy     |   Public       |
    Then I expect my board created

  Scenario: Create a private board in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Board with:
      | Title       |   privateBoard  |
      | Privacy     |   Private       |
    Then I expect my board created
