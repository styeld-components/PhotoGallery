# PhotoGallery

> System Design Project on PhotoGallery module

## Related Projects

  - https://github.com/styeld-components/PhotoGallery
  - https://github.com/styeld-components/Calendar
  - https://github.com/styeld-components/reviews
  - https://github.com/styeld-components/Carousel

## Table of Contents

1. [Usage](#Usage)
2. [Development](#development)

## Usage

> Some usage instructions

## Development

### setup

From within the root directory:

```sh
- run npm install in root directory
- run below scripts in package.json:
  - npm run seed
  - npm run build
  - npm start
```

## Server Endpoints and API routes

**Create - Add a related song**
----

* **URL** /api/:roomId/photogallery

* **Method:** `POST`

*  **URL Params**

   **Required:** `roomId=[integer]`

* **Data Params** JSON Object
```sh
{
  user_id: Number,
  room_id: Number,
  room_photos: [{
    imageUrl: String,
    description: String
  }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}
```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `Successfully posted!`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unathrorized user, unable to post`

**READ - Render related photos and descriptions**
----

* **URL** /api/:roomId/photogallery

* **Method:** `GET`

*  **URL Params**

   **Required:** `roomId=[integer]`

* **Data Params** NA

* **Success Response:**

  * **Code:** 200 OK <br />
    **content:** `Successfully fetched!` and JSON Object of related photos

      **Related photos**
      ```sh
      user_id: Number,
      room_id: Number,
      room_photos: [{
        imageUrl: String,
        description: String
      }],
      save_status: [{
        name: String,
        saved: Boolean,
      }],
      ```


* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Response:** `Related photos doesnt exit`

**Update - Update/add a favorite-list item on favorite list**
----

* **URL** /api/:roomId/photogallery

* **Method:** `PUT`

*  **URL Params**

   **Required:** `roomId=[integer]`

* **Data Params** JSON Object
```sh
{
  user_id: Number,
  room_id: Number,
  room_photos: [{
    imageUrl: String,
    description: String
  }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}
```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Response:** `Successfully updated!`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Response:** `Unathrorized user, unable to update`

**Delete - Delete favorite-list item from the faovrite list**
----

* **URL** /api/:roomId/photogallery

* **Method:** `DELETE`

*  **URL Params**

   **Required:** `roomId=[integer]`

* **Data Params** JSON Object
```sh
{
  user_id: Number,
  room_id: Number,
  room_photos: [{
    imageUrl: String,
    description: String
  }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}
```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Response Content:** `Successfully removed!`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Response Content:** `fovorite does not exist, can't be remove`

    or

  * **Code:** 401 UNAUTHORIZED <br />
    **Response Content:** `You are unauthorized to remove favorite`