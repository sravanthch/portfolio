# Personal Portfolio Website with Backend Integration

A responsive personal portfolio website showcasing professional details such as Home, About, Education, Skills, and Projects.  
The Projects section is dynamically powered by a Spring Boot backend to demonstrate backend and REST API experience.

## Features
- Responsive portfolio UI
- Sections: Home, About, Education, Skills, Projects
- Dynamic Projects section using backend APIs
- RESTful APIs built with Spring Boot
- MongoDB for storing project details

## Tech Stack
**Frontend:** Next.js, Tailwind CSS  
**Backend:** Spring Boot, MongoDB, REST APIs  
**Tools:** Postman, Git, Netlify

## Backend APIs
### POST /api/projects
Stores project details in MongoDB.
```json
{
  "title": "Project Title",
  "githubLink": "https://github.com/username/repo",
  "liveUrl": "https://project.netlify.app",
  "techStack": ["React", "Spring Boot", "MongoDB"]
}
