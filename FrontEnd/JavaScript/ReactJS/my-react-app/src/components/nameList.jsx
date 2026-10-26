import React from "react";
import Person from "./Person";

function NameList() {
    const people = [
        {id: 1, name: "Al-s999", age: 20, skill: "React"},
        {id: 2, name: "Joko", age: 20, skill: "Vue"},
        {id: 3, name: "Budi", age: 20, skill: "Angular"}
    ];

    const personList = people.map(person => (
        <Person key={person.id} person={person} />
    ))
    return(
        <div>
            {personList}
        </div>
    )
}

export default NameList;
