# octet_design_studio_backend_assignment

Design the data structure and build a RESTful API which provides the job related data and able to do crud operation on it.


## deployed url of backend API below
`https://octet-design-studio-backend-api-url.vercel.app`




### Authentication Routes (register / login)

1. For REGISTRATION URL

`/auth/register`    route accepts 
                                   `name`     (String)
                                   `email`    (String)
                                   `password` (String)

and hash the password into a long string and provided a success message to the user



2. For LOGIN URL

`/auth/login`       route accepts
                                   `email`    (String)
                                   `password` (String)

and provided the token to the login user




## PRODUCT Routes


## below sample data when you fetch get request to the API

```js
    {
        "name": "Specialist",         ( String )
        "location": "Colmbo, India",  ( String )
        "posted": "23rd May",         ( String )
        "status": "Published",        ( String )
        "applied": 40,                ( Number )
        "jobViews": 100,              ( Number )
        "daysLeft": 7,                ( Number )
        "premium": false,             ( Boolean )
        "dateFormat": "2023-05-23"    ( String )
    }
```




### to fetch the requests to API

1. GET Route

`/jobs`

by fetch will get the data



2. POST Route

`/jobs/addjobs`

we need to provide all the detailed related data and it takes care about the required fields


```js
let example,

const payload = { name, location, posted, status, applied, jobViews, daysLeft, premium, dateFormat };

fetch(`api-url`, payload)
    .then((res) => {
        console.log('res: ',res);
    })
    .catch((error) => {
        console.log('error: ',error);
    })

```



3. PATCH Route

`/jobs/update/:id`

for update the data we need to provide an id as a params and data as a body.



4. DELETE Route

`/jobs/delete/:id`

for delete a unique element from the database, so need to provide an id as query params and it will automatically handled by backend code.




## Thank you for reading