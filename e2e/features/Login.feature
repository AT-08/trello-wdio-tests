#board.feature

Feature: login in Trello

  Scenario: user login in Trello
    Given I  open the login page
    When I login with user "{credentials.member1}"
    Then I log in successfully