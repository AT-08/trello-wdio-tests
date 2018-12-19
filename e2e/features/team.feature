#team.feature

Feature: Create Team
    As a owner I would be able to create Team on https://trello.com
    And check its name

  Scenario: Get the name for created Team
    Given I logged into Trello website
      | url                      |
      | https://trello.com/login |
    When I created new Team
      | team      |
      | GUI-ATeam |
    Then I expect new team created
      | url                 |
      | https://trello.com/ |
