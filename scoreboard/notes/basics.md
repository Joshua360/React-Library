##My notes from Rewatching the React Basics course

### What is React?
At its simplest, React is a library for creating and updating HTML elements.

### Components
A component let's you reuse code that renders part of your UI. Being able to split your UI code into independent, reusable pieces, and think about each piece in isolation is one of the most embraced features of React

There are two ways of creating components in React:
1. **A function:** in a style called ***stateless functional components***( Are functions that do not handle state). They only receive inout through props and render UI.
2. **A class:** Class components offer a more powerful way to build components because they are the ONLY type of components that let you use state.

 ### Props
 Props are passed where elements are rendered. To me they are like function arguments: can only be passed where a function is called but will be applied where the function was declared.

 Props are immutable-Read only.

 ### Class
Class components offer a more powerful way to build components because they're the only type of components that let you use state.
 **NOTE** When using classes, it is important to remember that state cannot be modified directly.

 FOR INSTANCE:

 ```javascript
         state = {
            score: 0
        };

        incrementScore(){
            this.state.score +1; // this won't work
            this.setState({
                score: this.state.score + 1 //this will work
            })
        }
 ```


 