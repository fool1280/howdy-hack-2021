# Howdy Hack 2021

## Team Members
A picture of our team: 

![241961639_386473156421657_8259089015619180550_n](https://user-images.githubusercontent.com/24601461/132996435-924228ad-d089-417f-baf1-65c02f9bc1fd.png)

Kaleb Dickerson, Phu (Jack) Nguyen, Anh Nguyen, Anh Hoang.

## Summary
Our project is called "Mello." which is a play on the emotion "mellow" and "melody", and we just thought that the period at the end looks cool. This project uses the openCV library in Python for the back-end data processing, React.js for the front-end, web-cam access, and API calls, and the Spotify API to browse a song. The basic functionality of this is using a facial expression recognition model to analyze a user's expression and playing an song that fits their mood.

## Running the Program
To run the program, first pull the reposity using your favorite environment (strongly recommend a virtual one):
### Front End
    1. Open a terminal
    2. `cd frontend` to navigate to the front end folder
    3. `npm install` to install the required modules
    4. `npm start` to initiate the front end once the install is completed. 
### Back End
    1. Open a new terminal 
    2. `cd backend` to the back end folder
    3. `pip install -r requirements.txt` to install the required dependencies
    4. `cd server_fer` to navigate to the server_fer folder
    5. `python manage.py runserver` to initiate the back end server.
    
## Reference
We would like to give a very special thank to Justin Shenk, who made all of this possible. Your pretrained model is goat 🐐. 
Here is his repo: https://github.com/justinshenk/fer

