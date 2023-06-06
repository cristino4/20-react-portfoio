import React from "react";
import Project from '../Project';




const Portfolio = () => {
    const webProjects =  [
        {
            title: 'Weather Dashboard',
            projectType: 'Solo Project',
            techUsed: 'Tailwind/DaisyUI',
            description: `A simple client-side application showing how to use a 3rd-party weather API to
            obtain and display weather data for cities world-wide`,
            repoLink: 'https://github.com/cristino4/6-weather-dashboard',
            appLink: 'https://cristino4.github.io/6-weather-dashboard/',
            image: './weather-dashboard.png'
        },
        {
            title: 'The Marketplace',
            projectType: 'Group Project',
            techUsed: 'MySQL/Stripe/Handlebars JS/Tailwind/DaisyUI/Heroku',
            description: 'An e-commerce site showcasing Stripe implementation and server-side rendering of pages - I worked on the search feature, navbar, home and search pages.',
            repoLink: 'https://github.com/nshaw973/The-Marketplace',
            appLink: 'https://group-3-marketplace.herokuapp.com/',
            image: './themarketplace.png'
        },
        {
            title: 'Digital Cookbook',
            projectType: 'Group Project',
            techUsed: 'Tailwind/DaisyUI/3rd Party API’s',
            description: 'Allows users to search the Free Meal API and view recipes and nutrition information.',
            repoLink: 'https://github.com/Carechiga/Easy-Recipe-App',
            appLink: 'https://carechiga.github.io/Easy-Recipe-App/',
            image: './recipe-app.png',
        },
        {
            title: 'Techy Blog',
            projectType: 'Solo Project',
            techUsed: 'MySQL/Express JS/Express-Sessions/Handlebars JS/REST API/Heroku',
            description: 'A blog site for tech enthusiasts - Create an account to create, view, update and comment blog posts.',
            repoLink: 'https://github.com/cristino4/14-tech-blog',
            appLink: 'https://tech-blog-14-cc.herokuapp.com/',
            image: './techy-blog.png'
        },
        {
            title: 'Employee Tracker CLI',
            projectType: 'Solo Project',
            techUsed: 'MySQL/Inquirer/JS',
            description: 'Manage an organization’s employees through a command line interface - CRUD employees from the MySQL database.',
            repoLink: 'https://github.com/cristino4/12-employee-tracker',
            appLink: 'https://www.youtube.com/watch?v=xybI3pLzSBg',
            image: './employee-tracker.png'
        },
        {
            title: 'Social Network REST API',
            projectType: 'Solo Project',
            techUsed: 'MongoDB/Express JS/Express-Router/REST API',
            description: 'CRUD your thoughts and reactions with a basic social network API. Add friends and react to their thoughts.',
            repoLink: 'https://github.com/cristino4/18-social-network-api',
            appLink: 'https://www.youtube.com/watch?v=fc9kLdqZopw',
            image: './social-network-api.png'
        },
        {
            title: 'Personal Portfolio',
            projectType: 'Solo Project',
            techUsed: 'React/JSX/Tailwind/DaisyUI',
            description: 'My personal portfolio showcasing my web development, embedded programming, and electronics test validation projects',
            repoLink: 'https://github.com/cristino4/20-react-portfolio',
            appLink: 'null',
            image: './portfolio.png'
        }
    ];

    const testScriptingProjects = [
        {
            title: 'Device Production Testing  and Provisioning App',
            projectType: 'Solo Project',
            techUsed: 'Python/Tkinter/Semtech Blueriver (proprietary)',
            description: 'Production personnel may view a encoder or decoder’s current state and correct any issues before shipping',
            repoLink: null,
            appLink: null,
            image: './blueriver-test-app.png'
        }
    ];
    
    return (
        <div>
            <div className="rounded-full m-4 p-2 bg-[linear-gradient(to_right,rgba(24,24,27,1.000),rgba(24,24,27,0)),url('https://cristino4.github.io/20-react-portfolio/code.png')]">
                <p className="px-4 text-2xl font-sans font-medium text-gray-100 dark:text-white ">Web Development</p>
            </div>
            {webProjects.map((project) => (
                <Project project={project} key={project.title}/>
            ))}
        </div>
      );
};


export default Portfolio;



  