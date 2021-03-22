import React from "react";
import MyProject from "../components/Project";
import Container from "react-bootstrap/Container";
import ImageCocktailGenerator from "../assets/images/cocktailgenerator.png";
import ImageFeastWithFriends from "../assets/images/feastwithfriends.png";
import ImageEmployeeDirectory from "../assets/images/employee-directory.png";
import ImageWeatherDashboard from "../assets/images/weatherdashboard.png";
import ImageNoteTaker from "../assets/images/notetaker.png";
import ImageWorkDayPlanner from "../assets/images/workdayplanner.png"

function Portfolio(props) {
    const projects = [
        {
            name: "Employee Directory",
            description: "A web application that allows an employee or manager to view non-sensitive data about other employees; when the user loads the page, a table of employees from Random User API renders and the user can sort or filter employees by name and gender.",
            image: {ImageEmployeeDirectory},
            languages: "HTML, CSS, JavaScript, Node.js, ReactJS, Random User API",
            repoLink: "https://github.com/elliefh/employee-directory",
            liveLink: "https://elliefh.github.io/employee-directory/"
        },
        {
            name: "Note Taker",
            description: "An application that can be used to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.",
            image: {ImageNoteTaker},
            languages: "HTML, CSS, JavaScript, Node.js, Express",
            repoLink: "https://github.com/elliefh/note_taker",
            liveLink: "https://note-taker-efh.herokuapp.com"
        },
        {
            name: "Weather Dashboard",
            description: "An application that dynamically displays weather details for any searched location.",
            image: {ImageWeatherDashboard},
            languages: "HTML, CSS, OpenWeather API",
            repoLink: "https://github.com/elliefh/weather_dashboard",
            liveLink: "https://elliefh.github.io/weather_dashboard/"
        },
        {
            name: "Work Day Planner",
            description: "A simple calendar application that allows the user to save events for each hour of the typical working day.",
            image: {ImageWorkDayPlanner},
            languages: "HTML, CSS, jQuery",
            repoLink: "https://github.com/elliefh/work_day_planner",
            liveLink: "https://elliefh.github.io/work_day_planner/"
        },
        {
            name: "Cocktail Generator",
            description: "An application that provides cocktail recommendations based on the User’s location’s weather and time of day.",
            image: {ImageCocktailGenerator},
            languages: "HTML, CSS, JavaScript, CocktailDB + OpenWeather API",
            repoLink: "https://github.com/zehrl/cocktail-generator",
            liveLink: "https://zehrl.github.io/cocktail-generator/"
        },
        {
            name: "Feast With Friends",
            description: "An application that provides restaurant recommendations based on User’s dietary preferences and specificed city.",
            image: {ImageFeastWithFriends},
            languages: "JavaScript, Node.js, MySQL, Handlebars, Yelp API",
            repoLink: "https://github.com/laurenb08/feastWithFriends",
            liveLink: "https://feastwithfriendsproject.herokuapp.com/"
        }
    ];

    return(
        <Container className="d-flex justify-content-center">
            {projects.map(project => (
            <MyProject
                name = {project.name}
                description = {project.description}
                image = {project.image}
                languages = {project.languages}
                repoLink = {project.repoLink}
                liveLink = {project.liveLink}
            />
            ))}
        </Container>
    )
}

export default Portfolio;