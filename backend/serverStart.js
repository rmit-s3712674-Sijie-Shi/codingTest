import { createServer } from "http";


const serverStart = (app, port) => {
    const server = createServer(app)

    server.listen(8080, () => {
        console.log(
            `Server is running on port 8080`
        )
    })

    server.on('error', (err) => {
        console.error('Server starting error: ' + err)
    })
}

export default serverStart;