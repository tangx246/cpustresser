# CPU Stresser
Simple way to stress test the CPU. Just insert number of workers desired, and
the page spawns that many workers to do work.

Head [here](https://tangx246.github.io/cpustresser/index.html) to test it out.

## Workers
Currently, the workers merely increment a single value in memory 1 by 1

## TODO
- Add more meaningful workers than just adders (e.g. the famous GIMPS?)

## Developers
### Init
When first cloned, run `npm install`

### Building
To run, just do `npm run build` and then serve the `docs` directory
via your favorite web server (e.g. `npm run build && serve -s docs`)

Building also only works on Windows. The `build` script in `package.json` needs to be made cross-platform
