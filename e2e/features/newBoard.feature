#newBoard.feature
@bvt
Feature: Create a board in Trello with all scenario

  Background: Login in Trello app
    Given I login with "{credentials.owner1}"
    And I go to Trello main page

  Scenario: Create a board using link button from home page
    Given I click on link create new board from home page
    When I create a new board using link button with:
      | Title      | Create board using link button |
      | Privacy    | Public                         |
      | Background | orange                         |
    Then I expect my board created
      | Title      | Create board using link button |

  Scenario: Create a board using plus icon from header
    Given I click on plus icon from header
    And I click on create board option from right dropdown menu
    When I create a new board using plus icon with:
      | Title      | Create board using plus icon |
      | Privacy    | Public                       |
      | Background | green                        |
    Then I expect my board created
      | Title      | Create board using plus icon |

  Scenario: Create a board using button board icon from header
    Given I click on button board icon from header
    And I click on create new board link from left dropdown menu
    When I create a new board using board icon with:
      | Title      | Create board using button board icon |
      | Privacy    | Public                               |
      | Background | blue                                 |
    Then I expect my board created
      | Title      | Create board using button board icon |
