# nerest-harness

An example of a minimal [nerest](https://github.com/nerestjs/nerest) micro frontend. Provides two apps: [foo](apps/foo) and [bar](apps/bar).

## Running

```
npm install
npm run watch
```

View Swagger UI at http://localhost:3000/api

View example routes at:

- http://localhost:3000/api/foo/examples/welcome
- http://localhost:3000/api/foo/examples/hello

See sample POST requests with custom bodies in [requests.http](requests.http)

## Usage as Local Harness for Nerest Development

To use this micro frontend as a harness for local `@nerest/nerest` framework development, follow the Development section of the nerest readme file. Then link the local nerest into the current project.

[`relative-deps`](https://www.npmjs.com/package/relative-deps) is used instead of `npm link` because native npm linking breaks some peer and transitive dependencies like react, react-dom, @fastify/swagger-ui, etc. Relative deps runs automatically after every `npm install` as long as there is a `nerest` directory next to the `nerest-harness` directory:

```
# Download the nerest framework and harness
git clone https://github.com/nerestjs/nerest nerest
git clone https://github.com/nerestjs/harness nerest-harness

# Install and build the framework
cd nerest
npm install
npm run build

# Link the local framework into the harness
cd ../nerest-harness
npm install

# Run the harness with the local framework version
npm run watch
```
