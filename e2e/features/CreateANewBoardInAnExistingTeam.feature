#trello.feature
@bvt
Feature: Create A New Board In An Existing Team
  Background: I create a new Team
    Given I login with "{credentials.owner1}"
    And I click the create Team link from sidebar
    And I create a new Team with:
      | teamName    | TeamCANBIANET |
      | description | any         |
    And I go to Trello main page
    And I select a team with:
      | teamName | TeamCANBIANET |
  Scenario: Create a Team
    When I click on link create new board from home page
    And I create a new Board with:
      | Title  | BoardCANBIANET |
    Then I expect my board created
      | Title  | BoardCANBIANET |
