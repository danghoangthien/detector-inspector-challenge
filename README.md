# WIKI Chart 

## Summary
- After researching, instead of scan any table, I've scan only table with the class `sortable` which will be best fit for extracting chart data.
- In demonstration purpose, I've only parsed 1st match table.sortable in given url.
- While parsing table into data, I've mark th cell as main criteria in chart, if `th` not found it will get closet non-numeric column as main criteria.
- I made the chart based on 1st numeric column.
- Supported numeric column pattern: 
 + contain only number , ex: 123, 100,000,000, 111.5 (comma character if any will be removed by using regex).
 + contain number and notation following behind, ex: 123 ft, 999 mm...
- Unsupported numeric column pattern: 
 + date time data like 14 March 1983,...
 + phone number: 111-333-999-0000,...
- output is an svg chart instead save as an image.

 ## Todo
- Provide test cases / acceptant criterias.
- Provide unittest for frontend and backend.
- Support parsing date time data.
- Make output save as an image.


## Local machine dependency:
- git
- nodejs ^14x
- yarn

## [FrontEnd] setup and run
(Default: Frontend will run on PORT : 3000)
- install dependency
```sh
cd ./client
yarn install
```
- start app (in the same pwd)
```sh
yarn start
```

## [BackEnd] setup and run
(Default: Backend will run on PORT : 4001)

- install dependency
```sh
cd ./server
yarn install
```
- start app (in the same pwd)
```sh
yarn start
```

**Testing**

- Front-end: http://localhost:3000
- Back-end: http://localhost:4001
