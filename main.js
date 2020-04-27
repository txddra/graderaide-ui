// I want to create a function that will make my submit button work
// in the following ways: -store the added data, and upload it to the existing data displayed
// ive taken the code from a former project and tailored it to fit some of my current needs
//create a function that will print the student information
const studentInfo = document.createElement('ul');


const nameItem = document.createElement('li');
const courseItem = document.createElement('li');
const termItem = document.createElement('li');

nameItem.innerText = `Name: ${student.name}`;
courseItem.innerText = `Course: ${student.course}`;
termItem.innerText = `Term: ${student.term}`;

studentInfo.classList.add('student-info');
studentInfo.appendChild(nameItem);
studentInfo.appendChild(courseItem);
studentInfo.appendChild(termItem);
someParentElement.appendChild(studentInfo); 

document.querySelector('.new-student-button').addEventListener('click', function(){
    const name = document.querySelector('.new-student-name').value
    //this is calling the individual classes of the listed items
    const course = document.querySelector('.new-student-course').value
    const term = document.querySelector('.new-student-term').value
    const studentInfo = document.createElement('ul');
//getting a little lost with what I want to happen here


// i think adding this here is a bit redundant 
    const nameItem = document.createElement('li');
    const courseItem = document.createElement('li');
    const termItem = document.createElement('li');
//     const id = todos.length

// was hoping that this function  would prent 
    const newObj = {
name: name,
course: course,
term: term,
grades:grades,

}
// addTodo(newObj)
printStudent(newObj)

})

//instead of creating an li, i want to create an array of data
const printStudent = function(student) {
    // Use `document.createElement` to make an <li>
    const li = document.createElement('li');
    li.innerText = student.text;

    // Query the ul and put it in a variable.
    const ul = document.querySelector('student-info')
    ;
  
    // Append the li we made to the ul as the last child.
    ul.appendChild(li);
  
  
    // Give the name <p> a complete class if it was complete already (as in dummy data, or loaded data if we had a back end.
    // if (todo.complete) {
    //   li.classList.add('complete')
    // }
  
    // Give the <li> a layout class and an id so we can find it later (for instance in the ).
    // li.classList.add('todo-item');
    // li.id = todo.id.toString();
  
    // Give the name <p> an event listener to toggle its completeness.
    // li.addEventListener('click', function(event) {
    //   event.target.classList.toggle('complete')
      // TODO: find the correct todo in your data to toggle the completeness of!

    }



