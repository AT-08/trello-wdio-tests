#trello.feature
Feature: Card

  Background: Prepare a List
    Given I login with "{credentials.owner1}"
    When I create a new Board with:
      | Title | Test assing member |
    And I go to Trello main page
    And I search a Board with:
      | Title | Test assing member |
    And I create new list with:
      | Title | Test list |
    Given I select a list with:
      | Title | Test list |
    And I create a card with:
      | CardTitle | card Test |

  Scenario: Assign Member to a Card
    Given I invite a member to the board:
      | user | {credentials.member1} |
    And I select the card:
      | CardTitle | card Test |
      | ListTitle | Test list |
    When I assign a member to the card:
      | user | {credentials.member1} |
    Then I see the assigned member on the form
      | user | {credentials.member1} |
