// task 17
let users = [
    {
        username: 'larry',
        email: 'larry@foo.com',
        yearsExperience: 22.1,
        favoriteLanguages: ['Perl', 'Java', 'C++'],
        favoriteEditor: 'Vim',
        hobbies: ['Fishing', 'Sailing', 'Hiking'],
        hometown: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    {
        username: 'jane',
        email: 'jane@test.com',
        yearsExperience: 33.9,
        favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
        favoriteEditor: 'Emacs',
        hobbies: ['Swimming', 'Biking', 'Hiking'],
        hometown: {
            city: 'New York',
            state: 'NY'
        }
    },
    {
        username: 'sam',
        email: 'sam@test.com',
        yearsExperience: 8.2,
        favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
        favoriteEditor: 'Atom',
        hobbies: ['Golf', 'Cooking', 'Archery'],
        hometown: {
            city: 'Fargo',
            state: 'SD'
        }
    },
    {
        username: 'anne',
        email: 'anne@test.com',
        yearsExperience: 4,
        favoriteLanguages: ['C#', 'C++', 'F#'],
        favoriteEditor: 'Visual Studio Code',
        hobbies: ['Tennis', 'Biking', 'Archery'],
        hometown: {
            city: 'Albany',
            state: 'NY'
        }
    },
    {
        username: 'david',
        email: 'david@test.com',
        yearsExperience: 12.5,
        favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
        favoriteEditor: 'VS Code',
        hobbies: ['Volunteering', 'Biking', 'Coding'],
        hometown: {
            city: 'Los Angeles',
            state: 'CA'
        }
    }
];

function print_specific_detail(arg)
{

    users.forEach(element => {
        console.log(element[arg]);
    });
}
function printHobbies()
{
    print_specific_detail('hobbies');
    
}
function printEmails() 
{
    print_specific_detail('email');
} 
printEmails();
printHobbies();

function findHometownByState(arg)
{
    new_array = [];
    users.forEach(element => {
        if(element['hometown']['state']==arg)
        new_array.push(element);
    });
    return new_array;
}
console.log( findHometownByState('CA'));
function allLanguages() 
{
    let new_array = []
    users.forEach(element => {
        let favoriteLanguages =   (element['favoriteLanguages']);
        favoriteLanguages.forEach(lang => {
            if(! new_array.includes(lang))
                new_array.push(lang);
        });
    });

    return new_array;
}
console.log(allLanguages());

function hasFavoriteEditor(arg)
{
    for (let iterator of users) {
        let favoriteEditors =   (iterator['favoriteEditor']);
        
        if(favoriteEditors == arg)
        { 
            
            console.log('found');
            return true;
            
        }
        };
        
} 
console.log(
    hasFavoriteEditor('Vim'));

    function findByUsername(arg)
    {
        for (let iterator of users) {
            if( iterator['username'] == arg)
            return iterator;
        }
    }
console.log(
    findByUsername('david'));    



    