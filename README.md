# Location Microservice

Tiny service for locating IP addresses geographically.
Created with the purpose of learning Node.js.
Relies on [MaxMind's database](http://dev.maxmind.com/geoip/geoip2/geolite2/).


## Sample

```js
// GET /ips/8.8.8.8
{
  host: "8.8.8.8",
  country: {
    iso_code: "US",
    geoname_id: 6252001,
    name: "United States"
  }
}
```


## Getting started

Installation:

```bash
git clone https://github.com/manuelmorales/location.git
cd location
npm install
grunt bootstrap # Will download the database
```

Check that everything is in order:

```bash
grunt test
```


Run the server:

```bash
node app.js
```


## License

Released under the MIT License.
See the [LICENSE](LICENSE.txt) file for further details.
