import { getAllDocuments } from '../repositories/documentIncident.js'
import { getAllUsers } from '../repositories/users.js'


const resolvers = {
    Query: {
        incidents: () => getAllDocuments(),
        users: () => getAllUsers()
    }
}

export default resolvers