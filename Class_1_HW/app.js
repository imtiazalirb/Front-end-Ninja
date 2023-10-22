const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {className: "parent"},
    [
        React.createElement("h1", {}, "Hello World!!"),
        React.createElement("p", {}, "This is pera!"),
    ],

     wapper = React.createElement("div", {className: "wapper"},
        parent2 = React.createElement("div", {className: "wapper-parent"},
     [
        React.createElement("h1", {className: "parent-title"}, "I am Parent."),
        React.createElement("p", {}, "Barir Korta"),
     ],

     parent_two = React.createElement("div", {className: "parent2"},
    [
        React.createElement("h1", {className: "parent-title2"}, "I am parent two."),
        React.createElement("p", {}, "Barir second Korta"),
    ]
)
)
)
)

root.render(parent);