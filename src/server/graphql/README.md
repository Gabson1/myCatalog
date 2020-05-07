This is a classic directory structure seen in many frameworks. 
The files are organized by their roles (models, resolvers, type definitions).
Its main benefit is to quickly get the picture of all files for specific roles.

``Models`` describe how the API interfaces with the database.
For each resource there exists a set of functions that can be used to query or mutate that data in the database.

``Resolvers`` are a collection of functions that generate response for a GraphQL query. 
In simple terms, a resolver acts as a GraphQL query handler. Every resolver function in a GraphQL schema accepts four positional arguments as given below