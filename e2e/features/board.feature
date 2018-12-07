#trello.feature

Feature: Create private Board
	I Would to able to create a new board on https://trello.com
	and check its title

	Scenario: Get the title from created board
		Given I logged into "https://trello.com/login?returnUrl=%2F"
		When I created new board
			| titleBoard     | visibility | backgroundBoard |
			| GUI Automation | private    | blue            |
		Then I expect the title of the created board is equal <titleBoard>
		And I expect the visibility the created board is equal <visibility>
		And I expect the background the created board is equal <backgroundBoard>
		