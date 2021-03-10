# Newsletter using Django and ReactJS

## FUNCTIONS

- Subscribe: Subscribe to newsletter using your email.
- Display: Display all subscriber.
- Status: Show status of the subscription

## Project Archietecture

```
├── backend
│   ├── asgi.py
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── db.sqlite3
├── manage.py
└── newsletter
    ├── admin.py
    ├── apps.py
    ├── __init__.py
    ├── migrations
    ├── models.py
    ├── serializers.py
    ├── tests.py
    └── views.py
├── frontend
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── public
    ├── README.md
    └── src
├── Pipfile
├── Pipfile.lock
├── Readme.md
└── requirements.txt
```

## API Documentation

1. URLs

- Backend

  ```urls
  http://localhost:8000/admin
  http://localhost:8000/api/
  http://localhost:8000/api/newsletters/
  http://localhost:8000/api/newsletters/[:id]
  ```

- Frontend
  ```urls
      http://localhost:3000/
      http://localhost:3000/display
  ```

2. API's

`GET /api/newsletters/`- get all the subscribed emails

`POST /api/newsletters/`- subscribe a new email

`GET /api/newsletters/[:id]`- return mentioned id with
respective email registered

3. Status Codes
   200- Ok status
   400- Bad call

## How to run

### Backend

- Clone the repository in your desired directory.

```git
git clone https://github.com/jatinbharadwaj/Newsletter-Django-ReactJs.git
```

- Create and start virtual environment,

```python
virtualenv env --no-site-packages
source env/bin/activate
```

If above step won't work then
[Follow these steps for making virtual environment](https://www.javatpoint.com/django-virtual-environment-setup)

- Install project Dependencies

```shell
pip install -r requirements.txt
```

```
cd backend
```

- Migrate Database

```python
python manage.py migrate
```

- Create admin/superuser add username and password of your choice

```python
python manage.py createsuperuser
```

- Make migrations

```python
python manage.py makemigrations newsletter
```

- Run the deployment server

```python
python manage.py runserver
```

#### http://localhost:8000/api/ should be able to run after the last step

### Frontend

- change directory to frontend

```
cd frontend
```

- install npm packages

```npm
npm install
```

- start frontend server

```
npm start
```

#### http://localhost:3000/ should be able to run after above steps
