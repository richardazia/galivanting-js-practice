const Post = ({ title, uri, date }) => {
    var _title = title;
    var _uri = uri;
    var _date = date;

    return { 
        getTitle: () => _title,
        getUri: () => _uri,
        getDate: () => _date,

        setTitle: newTitle => _title = newTitle,
        setDate: newDate => _date = newDate,
        setUri: newUri => _uri = newUri,

    }
}
const post = Post({ title: 'A Cold Rainy Day', uri: 'http://example.com', date: new Date() });

console.log(post.getDate());
post.setDate('December 17, 1995 03:24:00');
console.log(post.getDate());
post.setTitle('A Chicken Running After A Goose');
console.log(post.getTitle());
post.setUri('http://example.com/chicken-running-after-goose');
console.log(post.getUri());

const Person = ({ name, vaccinated, age }) => {
    var _name = name;
    var _vaccinated = vaccinated;
    var _age = age;

    return {
        getName: () => _name,
        getVaccinated: () => _vaccinated,
        getAge: () => _age,

        setName: newName => _name = newName,
        setVaccinated: newVaccinated => _vaccinated = newVaccinated,
        setAge: newAge => _age = newAge,
    }
}

const person = Person({ name: 'John', vaccinated: true, age: 25 });

console.log(person.getName());
person.setName('Jane');
console.log(person.getVaccinated());
person.setVaccinated(false);
console.log(person.getAge());
person.setAge(30);
console.log(person.getAge());