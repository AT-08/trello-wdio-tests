Feature: Card

  Background: Prepare a List
    Given I login with "{credentials.owner1}"
    When I create a new Board with::
      | Title      | ATesTA|
    And I go to Trello main page
    And I search a Board with:
      | Title      | ATesTA|
    And I create a new List with:
      | Title      | ATesTA|

  Scenario: Assign Member to a Card
    Given I log-in to Trello
    And I have the dashboard "Alfitas"
    And I have a member
    And I have a card "Tasks"
    When I pick a card
    And I invite a member "Alfita"
    Then I see the assigned member on the form
    And I see their initial in the card
