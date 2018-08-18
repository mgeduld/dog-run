# Dog Run

For Vestwell

## Install

`npm install`

## Run

`npm run build`

You can then view the app at `http://localhost:1234`.

## Tasks Complete

- [x] fetches data (but see "Issues," below)
- [x] transforms data
- [x] populates dropdown with options from data
- [x] renders grid
- [x] updates grid when user picks an option from the dropdown
- [x] grid is sortable
- [x] grid is filterable
- [x] grid columns can be resized and dragged
- [x] header stays fixed when scrolling
- [x] can handle window resize
- [x] dark theme can be toggled
- [x] unit tests[1]

[1] I have only tested the "controller" parts of the code, which are in src/store. That module is pretty well tested. If this was a real project, I would test the components, too. Hopefully, though, this shows you that I know how to write tests. For a more fully-tested project of mine, see [https://github.com/mgeduld/tlly](https://github.com/mgeduld/tlly).

## Issues

Maybe something is temporarily broken, but the endpoint is not returning an Access-Control-Allow-Origin header, which means the only way I can get a response is with no-cors mode. Unfortunately, that isn't helpful, because it gives me an opaque response, which doesn't include the body.

`(index):1 Failed to load https://www.nycgovparks.org/bigapps/DPR_DogRuns_001.json: No 'Access-Control-Allow-Origin' header is present on the requested resource... If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

So, in order to complete the project, I fetched the data from a local file. (I was able to get the data in postman, since it doesn't follow the browser's rules.)

This is why, in src/constants, you'll see `export const endpoint = './data.json' // 'https://www.nycgovparks.org/bigapps/DPR_DogRuns_001.json'`

Once the endpoint is fixed, we can simply uncomment the end of the line and delete the reference to the local file.
