# octet_design_studio_backend_assignment

Design the data structure and build a RESTful API which provides the job related data and able to do crud operation on it.


## deployed url of backend API below
`https://octet-design-studio-backend-api-url.vercel.app`



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

### to fetch the get request to API

`https://octet-design-studio-backend-api-url.vercel.app/jobs`



### to fetch the post request to API

`https://octet-design-studio-backend-api-url.vercel.app/jobs/addjobs`

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



### to fetch the update request to API

`https://octet-design-studio-backend-api-url.vercel.app/jobs/update/:id`

for update the data we need to provide an id as a params and data as a body.



### to fetch the delete request to API

`https://octet-design-studio-backend-api-url.vercel.app/jobs/delete/:id`

for delete a unique element from the database, so need to provide an id as query params and it will automatically handled by backend code.



## Thank you for reading