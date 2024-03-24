// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    #different tyoes are int float string boolean ID
  # This "Book" type defines the queryable fields for every book in our data source.
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  
  }
  # ! means properties are required
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]

  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    reviews: [Review]
    review(id:ID!): Review
    game(id:ID!): Game
    author(id:ID!): Author
    games: [Game]
    authors: [Author]
  }
  type Mutation{
    deleteGame(id:ID!): [Game]
    addGame(game: AddGameInput):Game
    updateGame(id:ID!,edits:EditGameInput): Game
  }
  input AddGameInput{
    title: String!,
    platform: [String!]!
  }
  input EditGameInput{
    title: String,
    platform: [String!]
  }
`