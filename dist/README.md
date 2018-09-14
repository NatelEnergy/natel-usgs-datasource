# USGS Water Services in Grafana

Load sensor values from: https://waterservices.usgs.gov/

To use this datadouce, you will need to get a USGS site ID. You can find a site using their mapper tool:
https://maps.waterdata.usgs.gov/mapper/

![Mapper](https://raw.githubusercontent.com/NatelEnergy/natel-usgs-datasource/master/src/img/screenshot-usgs.png)

### Screenshots

![Alcatraz](https://raw.githubusercontent.com/NatelEnergy/natel-usgs-datasource/master/src/img/screenshot-site.png)

#### Changelog

##### v0.0.2

* Moved service to https://nwis.waterservices.usgs.gov/nwis/ (Avoid 301 & error)
* Automatically switch from `iv` to `dv` for large queries
* Fix external site link in query builder
* Webpack build

##### v0.0.1

* First working version
* Only supports the first target

### Roadmap

* Improve the metric UI
* Better site selection popup.
* Somehow annotate the time series variables with their data quality.
* Auto link the panel to USGS sensor information?
