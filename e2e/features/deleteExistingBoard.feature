#trello.feature
@bvt
Feature: Delete an existing board

  Background: I create a new board in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Board with:
      | Title      | DeadBoard test |
      | Privacy    | Public     |
      | Background | orange     |

  Scenario: I delete an existing board
    Given I go to Trello main page
    When I select the board with:
      | Title | DeadBoard test |
    And I delete it
    And I go to Trello main page
    Then I expect the board delete

