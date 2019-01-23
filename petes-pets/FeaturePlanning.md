# Pagination

Once again - no matter how small the feature is, it's always good to write out the steps you plan to take to implement a feature.

Let's code from the Outside-In, so we'll start with the views, then do the controllers, and finally use or extend the models and database.

1. We are going to add pagination to the / and /search routes first and those both use the pets-index.pug template, so we can use bootstrap's pagination snippet to start that.
2. Next we need to add the mongoose-paginate module to extend Mongoose with pagination methods to only return pages of 10 pets.
3. Finally we need to write a test for both routes so that we can ship it!
