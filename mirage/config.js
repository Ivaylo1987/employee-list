export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.namespace = '/api';
  let employees = [
    {
      "id": 1,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Tom",
        "surName": "Roberts",
        "dateBirth": "21/04/1986",
        "age": 29,
        "salary": 59783,
        "takeHome": 41999.84,
        "incomeTax": 13316.2,
        "nationaInsurance": 4466.96
      }
    },
    {
      "id": 2,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Louis",
        "surName": "Singh",
        "dateBirth": "16/04/1979",
        "age": 36,
        "salary": 50739,
        "takeHome": 36754.32,
        "incomeTax": 9698.6,
        "nationaInsurance": 4286.08
      }
    },
    {
      "id": 3,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Mohammed",
        "surName": "John",
        "dateBirth": "18/05/1992",
        "age": 23,
        "salary": 26389,
        "takeHome": 21032,
        "incomeTax": 3157.8,
        "nationaInsurance": 2199.48
      }
    },
    {
      "id": 4,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Owen",
        "surName": "Humphreys",
        "dateBirth": "15/05/1972",
        "age": 43,
        "salary": 31336,
        "takeHome": 24395.68,
        "incomeTax": 4147.2,
        "nationaInsurance": 2793.12
      }
    },
    {
      "id": 5,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Holly",
        "surName": "Gregory",
        "dateBirth": "31/01/1993",
        "age": 22,
        "salary": 60176,
        "takeHome": 42227.78,
        "incomeTax": 13473.4,
        "nationaInsurance": 4474.82
      }
    },
    {
      "id": 6,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Mrs.",
        "firstName": "Skye",
        "surName": "Lawrence",
        "dateBirth": "22/06/1979",
        "age": 36,
        "salary": 42552,
        "takeHome": 32005.86,
        "incomeTax": 6423.8,
        "nationaInsurance": 4122.34
      }
    },
    {
      "id": 7,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Tom",
        "surName": "Carey",
        "dateBirth": "03/06/1994",
        "age": 21,
        "salary": 75316,
        "takeHome": 51008.98,
        "incomeTax": 19529.4,
        "nationaInsurance": 4777.62
      }
    },
    {
      "id": 8,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Mrs.",
        "firstName": "Katherine",
        "surName": "Goddard",
        "dateBirth": "20/07/1970",
        "age": 45,
        "salary": 16203,
        "takeHome": 14105.24,
        "incomeTax": 1120.6,
        "nationaInsurance": 977.16
      }
    },
    {
      "id": 9,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Dr.",
        "firstName": "Rachel",
        "surName": "Lambert",
        "dateBirth": "16/09/1987",
        "age": 28,
        "salary": 17542,
        "takeHome": 15015.76,
        "incomeTax": 1388.4,
        "nationaInsurance": 1137.84
      }
    },
    {
      "id": 10,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Daniel",
        "surName": "Abbott",
        "dateBirth": "08/12/1972",
        "age": 43,
        "salary": 31100,
        "takeHome": 24235.2,
        "incomeTax": 4100,
        "nationaInsurance": 2764.8
      }
    },
    {
      "id": 11,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Harley",
        "surName": "Hobbs",
        "dateBirth": "26/01/1988",
        "age": 27,
        "salary": 37086,
        "takeHome": 28305.68,
        "incomeTax": 5297.2,
        "nationaInsurance": 3483.12
      }
    },
    {
      "id": 12,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Abby",
        "surName": "Hopkins",
        "dateBirth": "02/07/1976",
        "age": 39,
        "salary": 82443,
        "takeHome": 55142.64,
        "incomeTax": 22380.2,
        "nationaInsurance": 4920.16
      }
    },
    {
      "id": 13,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Mrs.",
        "firstName": "Evie",
        "surName": "Horton",
        "dateBirth": "08/01/1995",
        "age": 21,
        "salary": 86390,
        "takeHome": 57431.9,
        "incomeTax": 23959,
        "nationaInsurance": 4999.1
      }
    },
    {
      "id": 14,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Hayden",
        "surName": "Turnbull",
        "dateBirth": "15/05/1966",
        "age": 49,
        "salary": 22432,
        "takeHome": 18340.96,
        "incomeTax": 2366.4,
        "nationaInsurance": 1724.64
      }
    },
    {
      "id": 15,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Grace",
        "surName": "Glover",
        "dateBirth": "25/10/1996",
        "age": 19,
        "salary": 78828,
        "takeHome": 53045.94,
        "incomeTax": 20934.2,
        "nationaInsurance": 4847.86
      }
    },
    {
      "id": 16,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Dr.",
        "firstName": "Harley",
        "surName": "Andrews",
        "dateBirth": "18/02/1987",
        "age": 28,
        "salary": 73900,
        "takeHome": 50187.7,
        "incomeTax": 18963,
        "nationaInsurance": 4749.3
      }
    },
    {
      "id": 17,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Victoria",
        "surName": "Norris",
        "dateBirth": "09/03/1975",
        "age": 40,
        "salary": 71432,
        "takeHome": 48756.26,
        "incomeTax": 17975.8,
        "nationaInsurance": 4699.94
      }
    },
    {
      "id": 18,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Amelia",
        "surName": "Sullivan",
        "dateBirth": "24/12/1964",
        "age": 51,
        "salary": 25067,
        "takeHome": 20132.76,
        "incomeTax": 2893.4,
        "nationaInsurance": 2040.84
      }
    },
    {
      "id": 19,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Mrs.",
        "firstName": "Isabel",
        "surName": "Dyer",
        "dateBirth": "03/06/1996",
        "age": 19,
        "salary": 27904,
        "takeHome": 22061.92,
        "incomeTax": 3460.8,
        "nationaInsurance": 2381.28
      }
    },
    {
      "id": 20,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Liam",
        "surName": "Gibbons",
        "dateBirth": "12/03/1971",
        "age": 44,
        "salary": 76120,
        "takeHome": 51475.3,
        "incomeTax": 19851,
        "nationaInsurance": 4793.7
      }
    },
    {
      "id": 21,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Elliot",
        "surName": "Herbert",
        "dateBirth": "03/04/1991",
        "age": 24,
        "salary": 40092,
        "takeHome": 30349.76,
        "incomeTax": 5898.4,
        "nationaInsurance": 3843.84
      }
    },
    {
      "id": 22,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Gabriel",
        "surName": "Sheppard",
        "dateBirth": "14/07/1987",
        "age": 28,
        "salary": 50725,
        "takeHome": 36746.2,
        "incomeTax": 9693,
        "nationaInsurance": 4285.8
      }
    },
    {
      "id": 23,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Francesca",
        "surName": "Patel",
        "dateBirth": "12/10/1990",
        "age": 25,
        "salary": 25986,
        "takeHome": 20757.68,
        "incomeTax": 3077.2,
        "nationaInsurance": 2151.12
      }
    },
    {
      "id": 24,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Mrs.",
        "firstName": "Rosie",
        "surName": "Bryan",
        "dateBirth": "04/02/1968",
        "age": 47,
        "salary": 34702,
        "takeHome": 26684.56,
        "incomeTax": 4820.4,
        "nationaInsurance": 3197.04
      }
    },
    {
      "id": 25,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Maddison",
        "surName": "Bull",
        "dateBirth": "29/10/1979",
        "age": 36,
        "salary": 66131,
        "takeHome": 45681.68,
        "incomeTax": 15855.4,
        "nationaInsurance": 4593.92
      }
    },
    {
      "id": 26,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Louis",
        "surName": "Ford",
        "dateBirth": "02/11/1967",
        "age": 48,
        "salary": 55963,
        "takeHome": 39784.24,
        "incomeTax": 11788.2,
        "nationaInsurance": 4390.56
      }
    },
    {
      "id": 27,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Dr.",
        "firstName": "Logan",
        "surName": "Ball",
        "dateBirth": "14/12/1981",
        "age": 34,
        "salary": 78716,
        "takeHome": 52980.98,
        "incomeTax": 20889.4,
        "nationaInsurance": 4845.62
      }
    },
    {
      "id": 28,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Ms.",
        "firstName": "Maya",
        "surName": "Hancock",
        "dateBirth": "30/12/1967",
        "age": 48,
        "salary": 35345,
        "takeHome": 27121.8,
        "incomeTax": 4949,
        "nationaInsurance": 3274.2
      }
    },
    {
      "id": 29,
      "type": "employee",
      "attributes": {
        "gender": "female",
        "title": "Mrs.",
        "firstName": "Niamh",
        "surName": "Gibbs",
        "dateBirth": "29/07/1987",
        "age": 28,
        "salary": 44479,
        "takeHome": 33123.52,
        "incomeTax": 7194.6,
        "nationaInsurance": 4160.88
      }
    },
    {
      "id": 30,
      "type": "employee",
      "attributes": {
        "gender": "male",
        "title": "Mr.",
        "firstName": "Morgan",
        "surName": "Taylor",
        "dateBirth": "16/09/1993",
        "age": 22,
        "salary": 63299,
        "takeHome": 44039.12,
        "incomeTax": 14722.6,
        "nationaInsurance": 4537.28
      }
    }];

  this.get('/employees', function (db, request) {
    let queryParam = request.queryParams.name;

    if (queryParam !== undefined) {
      let filteredEmployees = employees.filter(emp => {
        let fullName = emp.attributes.firstName.concat(emp.attributes.surName);
        return fullName.toLowerCase().indexOf(queryParam.toLowerCase()) !== -1;
      });

      return { data: filteredEmployees };
    } else {
      return { data: employees };
    }
  });

  this.get('/employees/:id', function (db, request) {
    return { data: employees.find(emp => request.params.id === emp.id.toString()) };
  });

}
