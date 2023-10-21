# HOTEL RESERVATION API

### ERD:

![ERD](./erdHotelAPI.png)

### Installation:

```sh
    $ mkdir logs
    $ cp .env-sample .env
    $ npm i
```

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    package.json
    readme.md
    logs/
    src/
        configs/
            dbConnection.js
        controllers/
            auth.js
            reservation.js
            room.js
            user.js
        helpers/
            dateToLocaleString.js
            passwordEncrypt.js
            setToken.js
            sync.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
        models/
            reservation.js
            room.js
            user.js
        routes/
            auth.js
            document.js
            index.js
            reservation.js
            room.js
            user.js
```
