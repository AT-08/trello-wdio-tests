#trello.feature
@bvt
Feature: Create Board in Trello
  As a User
  I want to create board in Trello

  Background: Create a Board in Trello
    Given I login with "{credentials.owner1}"
    And I click on link create new board from home page
    And I create a new Board with:
      | Title      | inviteMemberTest |

  Scenario: Invite member to the board
    When I select Members button
    And I add member in the board:
      | user | {credentials.member1} |
    Then I see the member in board Members
      | user | {credentials.member1} |
