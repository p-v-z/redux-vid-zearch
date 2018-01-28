Javascript Concept: Modules

ES6
All the code that we write in separate files are silo'ed from other code that we write in other libraries in our project.

Code that is declared in other files that we produce will have zero contact with this file unless we explicitly say "I want access to some code in that other file over there"

Scripts:
React works with react components - render, nesting, etc.
ReactDOM takes components and inserts them into DOM

JXS
Whenever you make a tag that has nothing inside of it, you can make it a self-closing tag:
<App />
(This creates an instance of the app class)

Always make 1 component per file

-Exporting Modules
-Classes
-State

Functional component:
Takes in some info, and spits out some JSX

Class component:
Has internal record keeping
Be aware of itself (using state)
extends React.Component
Must have a defined render method that returns JSX

State:
Plain JS object thats used to record and react to user events
Each class based component has its own state object
Whenever a component's state gets changed, the component immediately rerenders and also forces all of its children to rerender as well.

State objects needs to be initialized
State always gets manipulated through setState

Controlled Filed / Input / Form element:
A field(input) whose value is set by the state, rather than the other way around
input -> Change State
Ideally: State -> input value

Downwards data flow:
Only the most parent component in an application should be responsible for fetching data. Via API, flux, Redux, etc.
(index.js)
