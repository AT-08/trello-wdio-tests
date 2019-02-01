#trello.feature
@wip
Feature: Assign member to card.

  Background: Prepare a List
    Given I login with "{credentials.owner1}"
    And I click on link create new board from home page
    And I create a new board with:
      | Title | Test assing member |
    And I go to Trello main page
    And I search a Board with:
      | Title | Test assing member |
    And I create new list with:
      | Title | Test list3 |
    And I create a card with:
      | CardTitle | card Test1 |
    And I invite a member to the board:
      | user | {credentials.member1} |

  Scenario: Assign Member to Card
    When I select the card:
      | CardTitle | card Test1 |
      | ListTitle | Test list3 |
    And I assign a member to the card:
      | user | {credentials.member1} |
    Then I see the assigned member on the form card
      | user | {credentials.member1} |
