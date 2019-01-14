#trello.feature
@bvt
Feature: Delete an existing board

  Scenario: I delete an existing board
    Given I login with "{credentials.owner1}"
    And I select the board with:
      | Title | ATesTA |

