# IPFS File Upload
This repository holds the client and server code implementation for an image upload to IPFS web app. The client and server do not need to be run on the same node, although the server may also serve the client app.

## Server
In order for the server to work properly, it is expected that you have an *IPFS node* running on the same machine the server app is running.

### Install dependencies
To install the dependencies use yarn and run:

```yarn install```

### Start Server
To start the server on Port 5000, simply run:

```PORT=5000 yarn start```

when not specifying a port the server will run on port *3000*.

### Running Tests
To run all the tests, including Coverage, run:

```yarn run test --coverage```

To run the test watcher, witch will also *invoke on file change* run:

```yarn run test```

## Client
All client related commands have to be run from the *client* directory.
Use at least node version *v9.2.0*.

### Install dependencies
To install the dependencies use yarn and run:

```yarn install```

### Run
To run the client simply start it via yarn:
```yarn start```

This will also open the URL of the client in a new tab in your browser. Changes made in the source code of the client will be *hot reloaded*, meaning you do not need to restart the client app to see changes made in code.

### Build
To build an application package ready for deployment, simply run:

```yarn build```

This will build all necessary files in the *build* directory which then can be served directly bu installing *serve* globally and running it:

```
yarn global add serve
serve -s build
```

The content of the build directory may of course be served by any other means you see fit.

#### Serving
To use the server to also serve the client, build the client as specified above, than link the *clients build* directory to the *servers public* directory from the root of the project:

```
mv server/public server/public.bak
ln -s $(pwd)/client/build server/public
```
Now you can start the server as described above and the client will be served from **/**.

### ENV Variables
The following *env* variables are available while running or building the client:
* ```API_URL="http://localhost:5000"```
* ```GATEWAY_URL="https://ipfs.io/ipfs"```

### Running Tests
To run all the tests, including Coverage, run:

```yarn run test --coverage```

To run the test watcher, witch will also invoke on file change run:

```yarn run test```
