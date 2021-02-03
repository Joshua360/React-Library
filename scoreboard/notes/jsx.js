
const title = <h1 className="abc" id="cba">This is the first React element</h1>;
const desc = "I just learned how to create a React node and render it into the DOM";
const theID= "the p-tag";

const header = React.createElement(
    'header',
     null,
     title,
     <p className="ABC" id={theID}>{desc}</p>
);

//mounting the react app
ReactDOM.render(
    header,
    document.getElementById("root")
);











