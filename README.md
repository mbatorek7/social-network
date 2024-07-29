# Social Network

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Description
With this application, the user can create a new user, thought, or reaction. The user can also add friends or delete them. One slight flaw is that the create and delete reactions is currently not functioning. Further testing is needed to complete and perfect code.

<p align="center">
    <a href="https://github.com/mbatorek7/hw18-social-network"><img src="https://img.shields.io/badge/-See Live Site-success?style=for-the-badge"  alt="GitHub Repo" ></a>
</p>

## Screenshots

Here is what the final product looks like and how to use it:


![Final product.](./assets/images/final-product.gif)

## Installation
To clone this repo:

git clone git@github.com:mbatorek7/social-network.git

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Questions?
  - Github Profile: [https://github.com/mbatorek7](https://github.com/mbatorek7)
  - Email: [maegan.batorek@valpo.edu](maegan.batorek@valpo.edu)
