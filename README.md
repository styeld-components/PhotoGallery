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

**READ - Render Room's Photo Gallery**
----

* **URL** /api/:room_id/photos

* **Method:** `GET`

*  **URL Params**

   **Required:** `room_id`

* **Data Params** NA

* **Success Response:**

  * **Code:** 200 OK <br />
    **content:** `Successfully fetched!` and JSON Object of related photos

      **Related photos**
      ```sh
      {
        user_id: Number,
        room_id: Number,
        room_photos: [{
          image_id: Number,
          image_url: String,
          image_name: String,
          description: String
        }],
        favorites: [{
          favorite_name: String,
          isFaved: Boolean,
        }],
      }
      ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Response:** `Related photos doesnt exit`




**Create - Add photos to The Room's Photo Gallery**
----

* **URL** /api/:room_id/photos

* **Method:** `POST`

*  **URL Params**

   **Required:** `room_id`

* **Data Params** JSON Object
```sh
{
  image_id: Number,
  image_url: String,
  image_name: String,
  description: String
}
```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `Successfully posted!`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unathrorized user, unable to post`




**Create - Add a favorite **
----

* **URL** /api/:user_id/favorites

* **Method:** `POST`

*  **URL Params**

   **Required:** `user_id`

* **Data Params** JSON Object
```sh
{
  favorite_name: String,
  isFaved: Boolean,
}
```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `Successfully posted!`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unathrorized user, unable to post`




**Update - Update photo information**
----

* **URL** /api/:room_id/photos/:image_id

* **Method:** `PUT`

*  **URL Params**

   **Required:**
   * `room_id`
   * `image_id`

* **Data Params** JSON Object
```sh
{
  image_url: String,
  image_name: String,
  description: String
}
```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Response:** `Successfully updated!`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Response:** `Unathrorized user, unable to update`




**Update - Update the status on favorite**
----

* **URL** /api/:room_id/photos

* **Method:** `PUT`

*  **URL Params**

   **Required:** `room_id`

* **Data Params** JSON Object
```sh
{
  isFaved: Boolean,
}
```

* **Success Response:**

  * **Code:** 201 Created <br />
    **Response:** `Successfully updated!`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Response:** `Unathrorized user, unable to update`




**Delete - Delete photo from the faovrite list**
----

* **URL** /api/:room_id/photos

* **Method:** `DELETE`

*  **URL Params**

   **Required:** `room_id`

* **Success Response:**

  * **Code:** 204 OK <br />
    **Response Content:** `Successfully removed!`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Response Content:** `fovorite does not exist, can't be remove`

    or

  * **Code:** 401 UNAUTHORIZED <br />
    **Response Content:** `You are unauthorized to remove favorite`