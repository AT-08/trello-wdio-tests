#trello.feature
Feature: Create Dashboard in Trello
  As a User
  I want to create dashboards in Trello

  Scenario: Create a Dashboard in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Dashboard with:
      | Title       |   wdio2Board  |
      | Privacy     |   Public      |
      | Background  |   orange      |
    Then I expect my board created

  Scenario: Create a public Dashboard in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Dashboard with:
      | Title       |   NameBoard  |
    Then I expect my board created

  Scenario: Create a public Dashboard in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Dashboard with:
      | Title       |   publicBoard  |
      | Privacy     |   Public       |
    Then I expect my board created

  Scenario: Create a public Dashboard in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Dashboard with:
      | Title       |   privateBoard  |
      | Privacy     |   Private       |
    Then I expect my board created