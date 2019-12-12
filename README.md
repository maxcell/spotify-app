# Spotify Sample Project

This is Prince Wilson's code submission for Newsela. This project is a small
exercise of showcasing a React frontend. It is worth noting that the design is
simplistic and there are no tests but these are both spaces that the code
submission can be improved!

## Getting Started

If you wanted to experiment with the project locally, make sure you install the
dependencies:

```
yarn install
# or
npm install
```

In order to run the project you need to run `start`:

```
yarn start
# or
npm start
```

And the project should automatically open up on <http://localhost:3000>.

## Goal

The goal of the exercise is to showcase how I design React components and how I
think about solving problems. You'll notice that you can search through for any
artist on spotify and then the artist's name can be clicked and it will
highlight their top tracks in the United States. Spotify's API allows you to
change it to any country code but for now I specified it directly within the
application.

Things that I was thinking about when writing this project is:

1. How do I make sure to abstract away the Spotify client? It would have been
   easy to just put all of the client pieces directly in the code, but if a team
   decides that they want to change out their tool, they would need to change
   out every callsite. If you take a gander at [MusicApi](/src/lib/MusicApi.js),
   you'll notice that there is a Singleton Pattern so that way we can only
   initialize the client a single time and we have methods that work on top of
   our client so that way we can easily change out the implementations as we
   need to!
2. I wanted to think about how to make it accessible! Thinking about how people
   interact with the project, I want any name to be clickable but not just
   simply through a mouse pointer. Users are always going to be different than
   the developers and we have to think about what experiences do they need to
   have in order for things to work. By using a button we stay towards semantic
   and native components of HTML and continue to have the correct tab focus
   order. In addition you'll notice there is a label connected to the input so
   that increased the target range for someone to fire a click event and then
   focus on the input
3. Debouncing the API calls. Instead of calling our API after each character
   being pressed, I wanted to make sure the interface limits the amount of calls
   it is making at once so that way 1) we avoid rate limits but 2) we aren't
   wasting API calls because they aren't meeting the users needs.
