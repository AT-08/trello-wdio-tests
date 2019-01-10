#trello.feature
@bvt
Feature: Create a Team in Trello

  Background: I create a new Team
    Given I login with "{credentials.owner1}"

  Scenario: Create a Team
    When I create a new Team with:
      | teamName    | AT-08-Team1 |
      | description | any         |
    And I go to Trello main page
    Then I see the new team:
      | teamName | AT-08-Team1 |
    And I select a team with:
      | teamName | AT-08-Team1 |

  Scenario: Create a Team 1
    When I create a new Team using plus buttom with:
      | teamName    | AT-08-Team2 |
      | description | any         |
    And I go to Trello main page
    Then I see the new team:
      | teamName | AT-08-Team2 |
    And I select a team with:
      | teamName | AT-08-Team2 |
