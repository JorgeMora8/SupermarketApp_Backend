import InitializeServer from "./src/server/server.js"
import { PORT } from "./src/config/Params.js"


await InitializeServer(PORT)