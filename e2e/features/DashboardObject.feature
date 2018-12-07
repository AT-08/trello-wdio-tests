#trello.feature
Feature: Create Dashboard in Trello
  As a User
  I want to create dashboards in Trello

  Scenario: Create Dashboard in Trello
    Given I log in "https://trello.com/login?returnUrl=%2F"
    When I create a new Board
    Then I expect the board created

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
        | Dennis    |      green |
        | Roger     |       blue |
        | George    |        red |

  Scenario: Create a Dashboard in Trello
    Given I go to webpage "https://trello.com"
    When I create a new Dashboard with:
      | Title       |   wdio2Board  |
      | Privacy     |   Public      |
      | Background  |   orange      |
    Then I expect my board created
