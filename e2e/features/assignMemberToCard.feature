#trello.feature
@bvt
Feature: Assign member to card.

  Background: Prepare a List
    Given I login with "{credentials.owner1}"
    When I create a new Board with:
      | Title | Test assing member |
    And I go to Trello main page
    And I search a Board with:
      | Title | Test assing member |
    And I create new list with:
      | Title | Test list |
    And I create a card with:
      | CardTitle | card Test |
    And I invite a member to the board:
      | user | {credentials.member1} |

  Scenario: Assign Member to Card
    When I select the card:
      | CardTitle | card Test |
      | ListTitle | Test list |
    And I assign a member to the card:
      | user | {credentials.member1} |
    Then I see the assigned member on the form card
      | user | {credentials.member1} |
