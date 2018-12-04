#trello.feature
Feature: Create Dashboard in Trello
  As a User
  I want to create a new dashboard in Trello

  Scenario: Create Dashboard in Trello
    Given I log in "https://trello.com/login?returnUrl=%2F"
    When I create a new Board
    Then I expect my board created

  Scenario: Create Public Dashboard in Trello
    Given I go to "https://trello.com"
    When I create a new public Dashboard
    Then I expect my public board created

  Scenario Outline: Create multiple Dashboards in Trello
    Given I go "https://trello.com"
    When I create board with this <NameBoard> and <Background>
    Then I expect a public board created <NameBoard>

    Examples:
        | NameBoard | Background |
        | Dennis    |            |
        | Roger     |       blue |
        | George    |        red |
