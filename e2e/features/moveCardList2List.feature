#trello.feature
@wip
Feature: Move an existing card
  As a user
  I want to move a card from a list to another list in the same board

  Background: I create a new board in Trello, with 2 lists and one card in only a list
    Given I login with "{credentials.owner1}"
    And I click on link create new board from home page
    And I create a new board with:
      | Title   | FinalBoard |
    And I create new list with:
      | Title | To Do |
    And I create new list with:
      | Title | In Progress |
    And I create a card with:
      | CardTitle | Card2Move |

    Scenario: Move card created from a list to another list
      Given I select the card:
        | CardTitle | Card2Move |
        | ListTitle | To Do |
      When I move the card to:
        | ListTitle | In Progress |
      Then I see the card in:
        | ListTitle | In Progress |
      And I don't see the card in:
        | ListTitle | To Do |
