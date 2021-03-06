export default function() {
  return {
    jobs: [
      {
        company: "FoodBoss",
        type: "Software Engineer",
        roll: "Intern",
        location: "Chicago, Illinois",
        time: "Winter 2020",
        whathappened: [
          "Built home page, static pages, redesigned the search page using Redux, React and NextJS",
          "Refactored and restyled React components with modern ES6 syntax, SCSS and Redux React",
          "Added Selenium tests, with a chrome driver, to our codebase to test pull requests when they get created, so we can automatically validate them before merging into staging or production",
          "Implemented a Pull Request template to our Github repository to help organize and abstract new Pull Requests"
        ],
        link: "https://www.foodboss.com/"
      },
      {
        company: "Anixter International Inc",
        type: "Intern",
        roll: "Information Services Development Program",
        location: "Chicago, Illinois",
        time: "Summer 2019",
        whathappened: [
          "Built an Electron desktop application to function as an interactive catalog for Project Managers and Sales Reps to aggregate through a database of shipping labels. ",
          "Created a database of 1000+ active shipping labels with corresponding web app to maintain it.",
          "Wrote scripts to calculate the estimated shipping cost for packages sent from a warehouse in New South Wales, Australia"
        ],
        link: "none"
      },
      {
        company: "Chicago Transit Authority",
        type: "Software Development Intern",
        roll: "Transit Operations",
        location: "Chicago, Illinois",
        time: "Winter/Spring 2018 & Summer 2018",
        whathappened: [
          "Recreated a 10 year old web portal from the ground up using ASP.NET MVC",
          "Added new functionality to shelter/bus sign maintenance program, enabling maintenance workers to handle repairs quicker and easier",
          "Wrote a documentation manual for the CTA Train Tracker",
          "Created a program to digitize Terminal Log sheets. Employees would previously record data on paper for someone else to manually update a spreadsheet after their shift; my program takes care of all that in one go. When an employee fills out the form, it automatically populates the database"
        ],
        link: "none"
      },
      {
        company: "Illinois Tool Works",
        type: "Computer Science Intern",
        roll: "Innovation Center",
        location: "Glenview, Illinois",
        time: "Summer 2017",
        whathappened: [
          "Created and updated pages to the ITW Innovation Center Sharepoint websites",
          "Wrote scripts tracking online data for various ITW branches. The scripts automatically run every 2 weeks to collect tweets, blog posts, YouTube videos and whatever other online content that mentions the specific company/products",
          "Programmed a Sawyer robot to flip burgers and/or pancakes for a live demo to show on tours of the ITW headquarters"
        ],
        link: "https://www.youtube.com/watch?v=6arNqddjC6M"
      }
    ],
    additionalIndustryExperience: [
      {
        company: "Futhead",
        type: "Volunteer",
        roll: "Moderator",
        location: "Huntsville, Alabama",
        time: "Fall 2015 - Present Day",
        whathappened: [
          "Maintain and monitor a large online Fifa Ultimate Team community (over 1 million unique users and 80 mil unique visitors)",
          "Provide feedback for the owner and lead developers to help with upkeep, testing and production of new features",
          "Learned about what it takes to run a forum/database website, including the various social media aspects"
        ],
        link: "https://www.futhead.com/"
      },
      {
        company: "Deploy Solutions Inc",
        type: "Web Developer",
        roll: "Freelance",
        location: "Toronto, Canada",
        time: "Spring 2020",
        whathappened: ["TBD"],
        link: "none"
      }
    ],
    relevantCoursework: [
      "Data Structures 1 & 2",
      "Software Projects for Community Clients",
      "Advanced Application Development 1 & 2",
      "Server-Side Web Development",
      "Data Analysis",
      "App Development Framework",
      "Human Computer Interaction",
      "Computer Systems"
    ],
    projects: [
      {
        name: "This",
        description: "I made this website",
        link: "/"
      },
      {
        name: "Shitty Dating",
        description: "TBA",
        link: "TBD"
      },
      {
        name: "Beer",
        description:
          "An indepth, statistical and scientific analysis of all the different kinds of beer I've sampled over the years",
        link: "beer"
      },
      {
        name: "Pokemon TCG Card Price Aggregator",
        description:
          "I'm currently working on a project to scrape TCG Player, Ebay and Troll & Toad to check, track and compare prices for Pokemon cards",
        link: "TBD"
      },
      {
        name: "Tic Tac Toe",
        description:
          "I created a tic tac toe game in React Redux to server as a potential interview project for FoodBoss",
        link: "https://dipaolo-react-redux-ttt.herokuapp.com/"
      },
      {
        name: "Is it Rotating? Pokemon TCG 2019-2020",
        description:
          "I created a tool read from the Pokemon TCGO API and check to see which cards are leaving the format come the 2019 rotation",
        link: "https://notmichaelsgithub.github.io/is_it_rotating/"
      },
      {
        name: "Wogwon's FIFA IG Stat Calculator",
        description:
          "A web app using the legendary Futheader Wogwon's card stat algorithm. This was the first javascript project I made back in high school and I'll love it forever",
        link: "https://notmichaelsgithub.github.io/wogwoncalc/"
      },
      {
        name: "My Code Pen account",
        description:
          "I toss up cool/useful blocks of code here that don't warrant a whole project based around them",
        link: "https://codepen.io/NotMichael/pens/"
      }
    ],
    sports: [
      {
        name: "DePaul Men's Club Volleyball",
        position: "Libero",
        time: "2016 - Present Day",
        accolades: [
          "1st Place Men's AA Gold @ MIVAs 16-17",
          "3rd Place Men's AA Gold @ Nationals 16-17",
          "15th Place Men's A Gold @ Nationals 17-18",
          "1st Place Men's A Silver @ Nationals 18-19"
        ]
      },
      {
        name: "DePaul Men's Club Soccer",
        position: "Defensive Mid",
        time: "2017 - Present Day",
        accolades: ["We tried"]
      },
      {
        name: "Di Paolo FC",
        position: "Defensive Mid / Right Wingback",
        time: "2019 - Present Day",
        accolades: ["1st Place Advanced Co-Ed 7v7 @ CFRS Summer Session 2019"]
      },
      {
        name: "Competitive Pokemon",
        position: "Senior",
        time: "1998 - Present Day",
        accolades: [
          "17th Place Madison VGC Regional - 2018",
          "1st Place Wednesday Night Standard TCG Tournament @ Near Mint Games 7/3/19"
        ]
      }
    ],
    languages: [
      {
        name: "English",
        level: "Fluent",
        years: "21 years"
      },
      {
        name: "Japanese",
        level: "Beginner",
        years: "1 year"
      }
    ]
  };
}
