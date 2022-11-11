# nerest-harness

An example of a minimal [nerest](https://github.com/nerestjs/nerest) micro frontend. Provides two apps: [foo](apps/foo) and [bar](apps/bar).

## Running

```
npm install
npm run watch
```

View example routes at:

- http://localhost:3000/api/foo/examples/welcome
- http://localhost:3000/api/foo/examples/hello

See sample POST requests with custom bodies in [requests.http](requests.http)

## Usage as Local Harness for Nerest Development

To use this micro frontend as a harness for local `@nerest/nerest` framework development, follow the Development section of the nerest readme file. Then link the local nerest into the current project.

**IMPORTANT:** `react` and `react-dom` MUST be linked together with the framework itself. Otherwise react will fail to work due to two versions of the library being present in the project at the same time.

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
npm link ../nerest ../nerest/node_modules/react ../nerest/node_modules/react-dom

# Run the harness with the local framework version
npm run watch
```
