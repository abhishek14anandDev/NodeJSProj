exports.listCourses = (req, res) => {
    const data = {
        title: 'LMS | List of Courses',
        courses: [
            { 
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png', 
                name: 'NodeJS Training', 
                duration: '36 Hours' 
            },
            { 
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png', 
                name: 'ReactJS Training', 
                duration: '36 Hours' 
            },
            { 
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png', 
                name: 'Angular Training', 
                duration: '36 Hours' 
            },
            { 
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png', 
                name: 'MongoDB Training', 
                duration: '36 Hours' 
            }
        ]
    }
    
    res.render('listCourses', data)
}