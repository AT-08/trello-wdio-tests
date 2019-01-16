#trello.feature
@bvt
Feature: Create a Team in Trello

  Background: I create a new Team
    Given I login with "{credentials.owner1}"

  Scenario: Create a Team from side bar.
    When I click the create Team link from sidebar
    And I create a new Team with:
      | teamName    | AT-08-TeamA |
      | description | any         |
    Then I see the new team:
      | teamName    | AT-08-TeamA |
      | description | any         |
    And I go to Trello main page
    And I see the new team at sidebar:
      | teamName | AT-08-TeamA |

  Scenario: Create a Team using quick create button at header.
    When I click the create Team link from header
    And I create a new Team with:
      | teamName    | AT-08-TeamB |
      | description | any         |
    Then I see the new team:
      | teamName    | AT-08-TeamB |
      | description | any         |
    And I go to Trello main page
    And I see the new team at sidebar:
      | teamName | AT-08-TeamB |
