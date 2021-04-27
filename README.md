# Wedding Invitations

Application in action

<img src="/media/screenrecording.gif?raw=true" width="500px">

## Project Summary

The application was conceived by my partner and myself to enable the smooth sending out of invitations for our (hopefully) upcoming wedding. The project was designed to improve upon the features of typeform examples, adding the ability to be able to send personalised invitations in batches without having to manually create individual typeforms.

### New skills learnt

1. Creating a `React.js` single page application
2. React properties, states: how inheritance works and how to force re-rendering.
3. `Jest` and `Enzyme` testing suite
4. Seeding a production database

### Features

1. Invitations are created in batches through the <PostgreSQL> production database
2. Guests can RSVP, provide personal details for future correspondance
3. Invitations are personalised for each party of guests that are attending
4. Invitations have unique accessible urls (slugids) to enhance the user experience; specifically removing the need to login
5. The status of attendees is visible through the backend production database
6. Single page `React.js` front end
7. `Ruby on Rails` CRUD server
8. `PostgreSQL` database
9. `RSpec`, `Jest` and `Enzyme` testing framework

### Programming Language

Backend: `Ruby on Rails` was chosen as this is naturally suited to building a CRUD-type application. Guests will be updating their personal information.

Frontend: `React.js` was chosen to enhance the user experience by creating a single page application that is quick to use on mobiles; **whatsapp** is a key vehicle for invite delivery.

### Testing structure

The project was built using a Test Driven Development approach. Due to the different languages being used there are two sets of testing frameworks (_RSpec_ and _Jest/Enzyme_). The approach was driven by the following testing frameworks:

1. _RSpec w. Selenium_ this, mostly, drives feature tests to ensure end-user functionality
2. _Jest_ this drives unit tests for each of the React.js components
3. _Enzymes_ this adds to React unit tests by testing for functionality of components

#### Test Coverage

- Backend: **100%** test coverage

![RSpec coverage](https://github.com/aravzpatel/wedding-invitations/blob/master/media/RSpec_coverage.png)

- Frontend: **95.8%** test coverage

![React coverage](https://github.com/aravzpatel/wedding-invitations/blob/master/media/Jest_coverage.png)

#### Running Tests

_First, See note about project installation_
Backend: In the command line run `rspec`
Frontend: In the command line run `yarn test`

### Domain Model

The project consists of two backend models with controllers and 6 front-end components.

_The backend models are:_

1. Party - this contains a collection of **guests** and has an identifiable id and slugid
2. Guests - each guest is a single item in the db

![Domain model](https://github.com/aravzpatel/wedding-invitations/blob/master/media/rails_model.png)

_The frontend components are:_

1. App.js - this is a container that cycles between the different components to mimic the feel of a single page app
2. Artwork.js - this loads the first page artwork and calls the component <Welcome.js> which turns the array of guest objects into a string of names
3. RsvpForm.js - this loads the RSVP form for each guest
4. AddressForm.js - this loads the address form for each party of guests
5. Thankyou.js - this is presented at the end to thank the guest for RSVPing

![React model](https://github.com/aravzpatel/wedding-invitations/blob/master/media/react_model.png)

### Installing the application

1. Git clone the directory to your local
2. In the local directory run the following commands in your terminal
   `npm install`
   `yarn install`
   `bundle install`

### Running the application

1. To start the server execute `rails s`
2. To visit the application go to `127.0.0.1:3000/party/test-guest`.
   Please note that functionality is reduced after submitting the RSVP
3. To add more guests - create a party, with guests in the seed.db file using the template provided.
   Then run `rake db:reset db:migrate` to make the changes active before visiting the relevant page

# TBC

5. add link to gift registry -> need
6. shrink icon image
