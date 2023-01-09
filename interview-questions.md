# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:

Object-oriented programming (OOP) is a programming paradigm where objects are the most important aspects of the given language. In OOP, everything, or almost everything, is an object. This allows for a very flexible languague since every object can be given certain characteristics and many methods can be called on almost every part of a program. Functional programming places functions as the central component of the language. In functional programming, the programmer creates functions to accomplish desired objectives. In OOP, the programmer manipulates data as objects, so the programmer is manipulating the objects. In functional programming, the programmer uses functions to manipulate data, much of which is not an object.

Researched answer:

OOP and functional programming are two different programming paradigms. OOP is a genre of imperative programming, where a programmer's code tells a program how it should achieve an objective by using a step-by-step process. OOP groups functions and any variables within them into objects. Objects can have bothe properties (the variables) and methods (the functions). OOPs are supporting by the four pillars of encapsulation, abstraction, inheritance, and polymorphism. Encapsulation groups functions and variables into an object, and a blueprint of that object called a class may be created from them. Abstraction confines functions and variables into objects so changes within an object won't necessarily affect other objects. Inheritance allows new objects to inherit some properties of existing objects for scalability. Polymorphism allows objects to behave different to the same function, depending on that object's relationship with other objects. OOP relaies heavily on the concept of state and can change aspects of an object when requested.

Functional programming is a type of declarative programming, where the programmer declares what they want as a result but do not tell the program how to accomplish the task. In functional programming, functions are the centerpiece. Functions are ideally "pure", meaning that the functions do not change the state of a program but simply return the result of the function according to the paramters the function takes in. Functional programs also allow for higher-order functions, which are functions that take other functions as input and can return functions as well. Immutability is important in functional programming since variables must not change once declared in order for pure functions to run. 

The biggest difference between OOP and functional programming is that OOP combines both data and functions while functional programming keeps functions and data strictly separate.


2. What is the difference between a Float and an Integer in Ruby?

Your answer:

In Ruby, both Floats and Integers are objects. Integers are whole numbers (1, 5, 14) while Floats include decimals (0.2, 2.5, 10.3). 

Researched answer:

In Ruby, both Floats and Integers are objects. Integers are whole numbers and can be used to perform basic math. Because Integers are objects, they have methods. This is very useful when needing to create loops or other situations when a non-object integer would require an independent function to accomplish a task. Floats are used when high precision is required, such as when needing fractions of numbers. 


3. Ruby has an implicit return. What does that mean?

Your answer:

Implicit return mean that the word "return" is ususally not required when writing Ruby code. As opposed to Javascript, where leaving "return" out of a function will result in no value being returned, Ruby uses implicit return to assume that the programmer wants to return something as a reault of a function or method. Implicit return saves time and code, since returns are often desirable at the end of a function or method.

Researched answer:

Ruby's explicit return means that Ruby will automatically return the value of the last evaluated statement without using the "return" keyword. This is convenient and efficient for most situations, but does cause require some care to be taken by the programmer depending on the desired outcome. Since only the last statement is implicitly returned in Ruby, programmers must explicitly require other values to be returned if they are not the last evaluated statement in a block or method.

4. What is a block in Ruby?

Your answer:

Ruby blocks are independent methods created in addition to Ruby's built-in methods. Blocks can be run on their own, if necessary. Blocks help extend functionality beyond what Ruby offers out of the box.

Researched answer:

(My answer was totally wrong.) Ruby blocks are (usually) small anonymous functions that can be passed into methods. Blocks are more compact than writing out functions in a tradtional way. Blocks allow for cleaner, more efficient code. Blocks can contain parameters like a normal function. Blocks allow for very flexible and powerful method extension and customization.

5. How do you extract a value in a Ruby hash?

Your answer:

Ruby hashes follow the familiar key/value pair format. The keys are ideally symbols, but can be other object types such as integers or strings. To extract a value from a Ruby hash, the corresponding key must be referenced. Symbols allow for an intuitive way to reference the values (especially if the symbols are named well). As an example, to reference the "color" value of a car object, one would type:
> car[:color]

Researched answer:

I would keep my original answer.

## Looking Ahead: Terms for Next Week

1. Class Inheritance:

Class inheritance allows new classes of objects to inherit characteristics of existing classes. This allows for a large amount of flexibility and customization of classes. Like CSS being compartmentilizes to make it more customizable, class inheritance does the same thing for classes. Classes can contain the minimum number of common traits and use class inheritance to create for more specific classes independently.

2. RSpec:

RSpec is a testing framework for Ruby. Like Jest for Javascript, RSpec tests Ruby code to determine if it will run correctly.

3. CRUD:

Create, Read, Update, Delete. These four functions represent the four basic actions that can happen to data. They also have their equivalent actions for other protocols like HTTP. 

4. Test-driven development:

Test-driven development (TDD) is a strategy in programming that relies heavily on testing to produce good code. TDD follows a general set of rules. These rules include: 

- Writing a test for one, single aspect of the program, much like Reacts principle of "separation of concerns"
- Running the test (this should fail like Javascript tests in Jest for the same reason: the function/feature does not exist yet)
- Write the bare minimum amount of code to get the test to pass
- Refactor the code, if possible/practical
- Repeat the process, testing for and building only the features required for the program

5. HTTP:

HTTP stands for Hyper Text Transfer Protocol. It is one of the most important protocols used on the Internet and is the bedrock of the Web. HTTP transmits data between servers and clients. Usually, clients request data and servers send the requested data back to the client. HTTP methods such as GET or POST are contained in messages sent to servers from clients. These messages tell the servers what the client is wanting to do. If everything is set up corrently, the servers respond to the clients with the requested information of perform the requested action. 
