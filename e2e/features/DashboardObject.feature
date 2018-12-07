#trello.feature
Feature: Create Dashboard in Trello
  As a User
  I want to create dashboards in Trello

  Scenario: Create a Dashboard in Trello
    Given I go to webpage "https://trello.com"
    When I create a new Dashboard with:
      | Title      | wdio2Board |
      | Privacy    | Public     |
      | Background | orange     |
    Then I expect my board created
