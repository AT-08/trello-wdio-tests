#trello.feature
@bvt
Feature: Delete team board

  Background:
    Given  I login with "{credentials.owner1}"
    And I create a new Team with:
      | teamName    | AT-08-Team1 |
      | description | any         |
    And I go to tab Boards
    And  I create a team board:
      | Title      | testAbel |
      | Privacy    | Public   |
      | Background | orange   |

  Scenario: I delete a board to team
    And I delete it
    And I go to Trello main page
    Then I expect the board delete
