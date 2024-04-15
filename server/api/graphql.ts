import {Resolvers} from '#graphql/resolver'
import {ApolloServer} from "@apollo/server";
import {schema} from "#graphql/schema";
import {startServerAndCreateH3Handler} from "@as-integrations/h3";

const resolvers: Resolvers = {
    Query: {
        human(obj, args, context, info) {
            return {
                name: "Diana",
                appearsIn: ["NEWHOPE"],
                starships: [{name:"starship1"}],
            }
        },
        starship(){
            return {name: "startship_BE_server"}
        }
    }
}

const apollo = new ApolloServer({typeDefs: schema, resolvers})

export default startServerAndCreateH3Handler(apollo)