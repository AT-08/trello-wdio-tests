#trello.feature
@wip
Feature: Delete team board

  Background:
    Given  I login with "{credentials.owner1}"
    Given I click the create Team link from sidebar
    And I create a new Team with:
      | teamName | abel |
    And I create a team board:
      | Title | hyi |

  Scenario: I delete a board to team
    And I delete it
    And I go to Trello main page
    Then I expect the board delete:
      | Title | hyi |
