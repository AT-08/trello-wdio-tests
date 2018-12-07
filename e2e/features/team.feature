#trello.feature

Feature: Create Team
  I Would be able to create Team on https://trello.com
  and check its name

  Scenario: Get the name for created Team
    Given I logged into https://trello/com
    When I created new team
    And I set name Team <nameTeam>
    Then I expect the name of the created Tema is equal to <nameTeam>

    Examples:
      | nameTeam  |
      | WDIO-team |