# PyCon Colombia 2019 website

This is the repository for the pycon 2019 website at [pycon.co](https://www.pycon.co/), built using [lektor](https://www.getlektor.com)

# Workflow

There are 2 branches, `develop` and `production`.

## Develop
Default branch is develop and is deployed with gh-pages via Lektor to https://develop.pycon.co

## Production
After test have been carried out by the QA Team, the changes from `develop`
will be merged in `production` and deployed gh-pages via Lektor to https://www.pycon.co
and https://develop.pycon.co

# Run locally

## Install Lektor

Running installation script:
```
$ curl -sf https://www.getlektor.com/install.sh | sh
```

Using pip:
```
$ pip install -U Lektor
```

### Run server and make changes

To run local server:

```
$ lektor server
```

If you also want to update the webpack files, you need `npm` installed
and then run it like this:

```
$ lektor server -f webpack
```
