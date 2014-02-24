// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>The Basque Country</p>",
        "results": "<h5>Learn More</h5><p> Official Basque Website : http://tourism.euskadi.net/en/ </p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which two countries are the Basque people from?",
            "a": [
                {"option": "Spain and Netherland",      "correct": false},
                {"option": "Portugal and Spain",     "correct": false},
                {"option": "Spain and France",      "correct": true},
                {"option": "France and Germany",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Basque country is located west of the Pyranees moutain.</p>",
            "incorrect": "<p><span>Uhh no.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How does the Autonomous Basque Region rank in Spain's economy?",
            "a": [
                {"option": "1",               "correct": true},
                {"option": "2",   "correct": false},
                {"option": "3",               "correct": false},
                {"option": "4", "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> The Basque regions in Spain ranks first in terms of per capital income</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How fast can a Jai Alai player throw a ball?",
            "a": [
                {"option": "188mph",           "correct": true},
                {"option": "123mph",           "correct": false},
                {"option": "97mph",            "correct": false},
                {"option": "110mph",           "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "What's the most famous festival for bull run in Spain?",
            "a": [
                {"option": "San Sebastian festival",    "correct": false},
                {"option": "The festival of San Fermin",     "correct": true},
                {"option": "Semana Grande",      "correct": false},
                {"option": "La Endiablada",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. </p>" // no comma here
        }
        
    ]
};
