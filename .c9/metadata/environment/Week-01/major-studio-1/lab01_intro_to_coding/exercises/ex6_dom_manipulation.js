{"changed":true,"filter":false,"title":"ex6_dom_manipulation.js","tooltip":"/Week-01/major-studio-1/lab01_intro_to_coding/exercises/ex6_dom_manipulation.js","value":"/*\n  Exercise 6\n  DOM manipulation with vanilla JS\n*/\n\n// Task\n// What does DOM stand for? Document Object Model\n\n// Task\n// Open the file index.html in AWS Cloud9. Click \"Preview\" > \"Preview File index.html\". (Note that you can open it in a new window). What do you see?\n// Pink vertical rectangle \n\n// Task\n// Delete the div with the class rectangle from index.html and refresh the preview.\n//The rectangle disappers\n\n// Task\n// What does the following code do?\nconst viz = document.body.querySelector(\".viz\"); //Finds a specific element with specific values of an attribute - selects html elements\nconst button = document.body.querySelector(\"#button\");\n\nconsole.log(viz, viz.children); //calls all of the parent and child elements of the element viz\n\n// creates new child element in 'viz'\nconst addChildToViz = () => {\n  const newChild = document.createElement(\"div\");\n  newChild.className = \"rectangle\"; //defines what element is\n  newChild.style.height = Math.random() * 100 + \"px\"; // determines size of rectangle\n  viz.appendChild(newChild); \n}; \n\nviz.addEventListener(\"click\", addChildToViz); // creates new rectangle when you click\n\n// Task\n// Where can you see the results of the console.log below? How is it different from in previous exercises?\n\nfunction drawIrisData() {\n  window\n    .fetch(\"./iris_json.json\")\n    .then(data => data.json())\n    .then(data => {\n      data.forEach(i => {\n        addChildToViz(i.petallength);\n      });\n      console.log(data);\n    });\n}\n\ndrawIrisData();\n\n// function drawIrisData() {\n//   window\n//     .fetch(\"./iris_json.json\")\n//     .then(data => data.json())\n//     .then(data => {\n//       console.log(data);\n//     });\n// }\n\n// drawIrisData();\n\n// Task\n// Modify the code above to visualize the Iris dataset in the preview of index.html.\n// Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.\n","undoManager":{"mark":51,"position":51,"stack":[[{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["// "],"id":7},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["// "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["// "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"insert","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"insert","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"insert","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"insert","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"insert","lines":["// "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["// "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"remove","lines":["// "],"id":8},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"remove","lines":["// "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"remove","lines":["// "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"remove","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"remove","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"remove","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"remove","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"remove","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"remove","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"remove","lines":["// "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["// "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":47,"column":15},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":49,"column":0},"end":{"row":58,"column":15},"action":"insert","lines":["function drawIrisData() {","  window","    .fetch(\"./iris_json.json\")","    .then(data => data.json())","    .then(data => {","      console.log(data);","    });","}","","drawIrisData();"],"id":10}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["// "],"id":11},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["// "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["// "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"insert","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"insert","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"insert","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"insert","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"insert","lines":["// "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["// "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":3},"action":"insert","lines":["// "],"id":13},{"start":{"row":50,"column":0},"end":{"row":50,"column":3},"action":"insert","lines":["// "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":3},"action":"insert","lines":["// "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":3},"action":"insert","lines":["// "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":3},"action":"insert","lines":["// "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":3},"action":"insert","lines":["// "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":3},"action":"insert","lines":["// "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":3},"action":"insert","lines":["// "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"remove","lines":["// "],"id":14},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"remove","lines":["// "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"remove","lines":["// "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"remove","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"remove","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"remove","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"remove","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"remove","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"remove","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"remove","lines":["// "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["// "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"insert","lines":[","],"id":15}],[{"start":{"row":40,"column":21},"end":{"row":40,"column":22},"action":"insert","lines":[" "],"id":16},{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"insert","lines":["j"]}],[{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"remove","lines":["j"],"id":17},{"start":{"row":40,"column":21},"end":{"row":40,"column":22},"action":"remove","lines":[" "]},{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"remove","lines":[","]}],[{"start":{"row":41,"column":34},"end":{"row":41,"column":35},"action":"insert","lines":[","],"id":18}],[{"start":{"row":41,"column":35},"end":{"row":41,"column":36},"action":"insert","lines":[" "],"id":19},{"start":{"row":41,"column":36},"end":{"row":41,"column":37},"action":"insert","lines":["i"]}],[{"start":{"row":41,"column":37},"end":{"row":41,"column":38},"action":"insert","lines":["."],"id":20},{"start":{"row":41,"column":38},"end":{"row":41,"column":39},"action":"insert","lines":["p"]},{"start":{"row":41,"column":39},"end":{"row":41,"column":40},"action":"insert","lines":["e"]},{"start":{"row":41,"column":40},"end":{"row":41,"column":41},"action":"insert","lines":["t"]},{"start":{"row":41,"column":41},"end":{"row":41,"column":42},"action":"insert","lines":["a"]},{"start":{"row":41,"column":42},"end":{"row":41,"column":43},"action":"insert","lines":["l"]}],[{"start":{"row":41,"column":43},"end":{"row":41,"column":44},"action":"insert","lines":["l"],"id":21},{"start":{"row":41,"column":44},"end":{"row":41,"column":45},"action":"insert","lines":["e"]},{"start":{"row":41,"column":45},"end":{"row":41,"column":46},"action":"insert","lines":["n"]}],[{"start":{"row":41,"column":38},"end":{"row":41,"column":46},"action":"remove","lines":["petallen"],"id":22},{"start":{"row":41,"column":38},"end":{"row":41,"column":49},"action":"insert","lines":["petallength"]}],[{"start":{"row":41,"column":34},"end":{"row":41,"column":49},"action":"remove","lines":[", i.petallength"],"id":23}],[{"start":{"row":41,"column":34},"end":{"row":41,"column":35},"action":"insert","lines":[","],"id":24}],[{"start":{"row":41,"column":35},"end":{"row":41,"column":36},"action":"insert","lines":[" "],"id":25}],[{"start":{"row":41,"column":36},"end":{"row":41,"column":51},"action":"insert","lines":[", i.petallength"],"id":26}],[{"start":{"row":41,"column":37},"end":{"row":41,"column":38},"action":"remove","lines":[" "],"id":27},{"start":{"row":41,"column":36},"end":{"row":41,"column":37},"action":"remove","lines":[","]}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":36},"action":"remove","lines":["i.petalwidth, "],"id":28}],[{"start":{"row":26,"column":2},"end":{"row":26,"column":5},"action":"insert","lines":["// "],"id":29}],[{"start":{"row":26,"column":2},"end":{"row":26,"column":5},"action":"remove","lines":["// "],"id":30}],[{"start":{"row":27,"column":104},"end":{"row":27,"column":105},"action":"remove","lines":["e"],"id":37},{"start":{"row":27,"column":103},"end":{"row":27,"column":104},"action":"remove","lines":["d"]},{"start":{"row":27,"column":102},"end":{"row":27,"column":103},"action":"remove","lines":["o"]},{"start":{"row":27,"column":101},"end":{"row":27,"column":102},"action":"remove","lines":["n"]},{"start":{"row":27,"column":100},"end":{"row":27,"column":101},"action":"remove","lines":[" "]},{"start":{"row":27,"column":99},"end":{"row":27,"column":100},"action":"remove","lines":["t"]},{"start":{"row":27,"column":98},"end":{"row":27,"column":99},"action":"remove","lines":["n"]},{"start":{"row":27,"column":97},"end":{"row":27,"column":98},"action":"remove","lines":["e"]},{"start":{"row":27,"column":96},"end":{"row":27,"column":97},"action":"remove","lines":["r"]},{"start":{"row":27,"column":95},"end":{"row":27,"column":96},"action":"remove","lines":["a"]},{"start":{"row":27,"column":94},"end":{"row":27,"column":95},"action":"remove","lines":["p"]},{"start":{"row":27,"column":93},"end":{"row":27,"column":94},"action":"remove","lines":[" "]},{"start":{"row":27,"column":92},"end":{"row":27,"column":93},"action":"remove","lines":["d"]},{"start":{"row":27,"column":91},"end":{"row":27,"column":92},"action":"remove","lines":["e"]},{"start":{"row":27,"column":90},"end":{"row":27,"column":91},"action":"remove","lines":["i"]},{"start":{"row":27,"column":89},"end":{"row":27,"column":90},"action":"remove","lines":["f"]},{"start":{"row":27,"column":88},"end":{"row":27,"column":89},"action":"remove","lines":["i"]},{"start":{"row":27,"column":87},"end":{"row":27,"column":88},"action":"remove","lines":["c"]},{"start":{"row":27,"column":86},"end":{"row":27,"column":87},"action":"remove","lines":["e"]},{"start":{"row":27,"column":85},"end":{"row":27,"column":86},"action":"remove","lines":["p"]},{"start":{"row":27,"column":84},"end":{"row":27,"column":85},"action":"remove","lines":["s"]},{"start":{"row":27,"column":83},"end":{"row":27,"column":84},"action":"remove","lines":[" "]},{"start":{"row":27,"column":82},"end":{"row":27,"column":83},"action":"remove","lines":["a"]},{"start":{"row":27,"column":81},"end":{"row":27,"column":82},"action":"remove","lines":[" "]},{"start":{"row":27,"column":80},"end":{"row":27,"column":81},"action":"remove","lines":["f"]},{"start":{"row":27,"column":79},"end":{"row":27,"column":80},"action":"remove","lines":["o"]},{"start":{"row":27,"column":78},"end":{"row":27,"column":79},"action":"remove","lines":[" "]},{"start":{"row":27,"column":77},"end":{"row":27,"column":78},"action":"remove","lines":["n"]},{"start":{"row":27,"column":76},"end":{"row":27,"column":77},"action":"remove","lines":["e"]},{"start":{"row":27,"column":75},"end":{"row":27,"column":76},"action":"remove","lines":["r"]},{"start":{"row":27,"column":74},"end":{"row":27,"column":75},"action":"remove","lines":["d"]},{"start":{"row":27,"column":73},"end":{"row":27,"column":74},"action":"remove","lines":["l"]},{"start":{"row":27,"column":72},"end":{"row":27,"column":73},"action":"remove","lines":["i"]},{"start":{"row":27,"column":71},"end":{"row":27,"column":72},"action":"remove","lines":["h"]},{"start":{"row":27,"column":70},"end":{"row":27,"column":71},"action":"remove","lines":["c"]},{"start":{"row":27,"column":69},"end":{"row":27,"column":70},"action":"remove","lines":[" "]},{"start":{"row":27,"column":68},"end":{"row":27,"column":69},"action":"remove","lines":["f"]},{"start":{"row":27,"column":67},"end":{"row":27,"column":68},"action":"remove","lines":["o"]},{"start":{"row":27,"column":66},"end":{"row":27,"column":67},"action":"remove","lines":[" "]},{"start":{"row":27,"column":65},"end":{"row":27,"column":66},"action":"remove","lines":["t"]},{"start":{"row":27,"column":64},"end":{"row":27,"column":65},"action":"remove","lines":["s"]},{"start":{"row":27,"column":63},"end":{"row":27,"column":64},"action":"remove","lines":["i"]},{"start":{"row":27,"column":62},"end":{"row":27,"column":63},"action":"remove","lines":["l"]},{"start":{"row":27,"column":61},"end":{"row":27,"column":62},"action":"remove","lines":[" "]},{"start":{"row":27,"column":60},"end":{"row":27,"column":61},"action":"remove","lines":["e"]},{"start":{"row":27,"column":59},"end":{"row":27,"column":60},"action":"remove","lines":["h"]},{"start":{"row":27,"column":58},"end":{"row":27,"column":59},"action":"remove","lines":["t"]}],[{"start":{"row":27,"column":57},"end":{"row":27,"column":58},"action":"remove","lines":[" "],"id":38},{"start":{"row":27,"column":56},"end":{"row":27,"column":57},"action":"remove","lines":["f"]},{"start":{"row":27,"column":55},"end":{"row":27,"column":56},"action":"remove","lines":["o"]},{"start":{"row":27,"column":54},"end":{"row":27,"column":55},"action":"remove","lines":[" "]},{"start":{"row":27,"column":53},"end":{"row":27,"column":54},"action":"remove","lines":["d"]},{"start":{"row":27,"column":52},"end":{"row":27,"column":53},"action":"remove","lines":["n"]},{"start":{"row":27,"column":51},"end":{"row":27,"column":52},"action":"remove","lines":["e"]},{"start":{"row":27,"column":50},"end":{"row":27,"column":51},"action":"remove","lines":[" "]},{"start":{"row":27,"column":49},"end":{"row":27,"column":50},"action":"remove","lines":["e"]},{"start":{"row":27,"column":48},"end":{"row":27,"column":49},"action":"remove","lines":["h"]},{"start":{"row":27,"column":47},"end":{"row":27,"column":48},"action":"remove","lines":["t"]},{"start":{"row":27,"column":46},"end":{"row":27,"column":47},"action":"remove","lines":[" "]},{"start":{"row":27,"column":45},"end":{"row":27,"column":46},"action":"remove","lines":["o"]},{"start":{"row":27,"column":44},"end":{"row":27,"column":45},"action":"remove","lines":["t"]},{"start":{"row":27,"column":43},"end":{"row":27,"column":44},"action":"remove","lines":[" "]},{"start":{"row":27,"column":42},"end":{"row":27,"column":43},"action":"remove","lines":["e"]},{"start":{"row":27,"column":41},"end":{"row":27,"column":42},"action":"remove","lines":["d"]},{"start":{"row":27,"column":40},"end":{"row":27,"column":41},"action":"remove","lines":["o"]},{"start":{"row":27,"column":39},"end":{"row":27,"column":40},"action":"remove","lines":["n"]},{"start":{"row":27,"column":38},"end":{"row":27,"column":39},"action":"remove","lines":[" "]}],[{"start":{"row":27,"column":37},"end":{"row":27,"column":38},"action":"remove","lines":["a"],"id":39},{"start":{"row":27,"column":36},"end":{"row":27,"column":37},"action":"remove","lines":[" "]},{"start":{"row":27,"column":35},"end":{"row":27,"column":36},"action":"remove","lines":["s"]},{"start":{"row":27,"column":34},"end":{"row":27,"column":35},"action":"remove","lines":["d"]},{"start":{"row":27,"column":33},"end":{"row":27,"column":34},"action":"remove","lines":["d"]},{"start":{"row":27,"column":32},"end":{"row":27,"column":33},"action":"remove","lines":["a"]},{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"remove","lines":[" "]},{"start":{"row":27,"column":30},"end":{"row":27,"column":31},"action":"remove","lines":["/"]},{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"remove","lines":["/"]}],[{"start":{"row":18,"column":112},"end":{"row":18,"column":113},"action":"insert","lines":[" "],"id":40},{"start":{"row":18,"column":113},"end":{"row":18,"column":114},"action":"insert","lines":["-"]}],[{"start":{"row":18,"column":114},"end":{"row":18,"column":115},"action":"insert","lines":[" "],"id":41},{"start":{"row":18,"column":115},"end":{"row":18,"column":116},"action":"insert","lines":["s"]},{"start":{"row":18,"column":116},"end":{"row":18,"column":117},"action":"insert","lines":["e"]},{"start":{"row":18,"column":117},"end":{"row":18,"column":118},"action":"insert","lines":["l"]},{"start":{"row":18,"column":118},"end":{"row":18,"column":119},"action":"insert","lines":["e"]},{"start":{"row":18,"column":119},"end":{"row":18,"column":120},"action":"insert","lines":["c"]},{"start":{"row":18,"column":120},"end":{"row":18,"column":121},"action":"insert","lines":["t"]},{"start":{"row":18,"column":121},"end":{"row":18,"column":122},"action":"insert","lines":["s"]}],[{"start":{"row":18,"column":122},"end":{"row":18,"column":123},"action":"insert","lines":[" "],"id":42},{"start":{"row":18,"column":123},"end":{"row":18,"column":124},"action":"insert","lines":["h"]},{"start":{"row":18,"column":124},"end":{"row":18,"column":125},"action":"insert","lines":["t"]},{"start":{"row":18,"column":125},"end":{"row":18,"column":126},"action":"insert","lines":["m"]},{"start":{"row":18,"column":126},"end":{"row":18,"column":127},"action":"insert","lines":["l"]}],[{"start":{"row":18,"column":127},"end":{"row":18,"column":128},"action":"insert","lines":[" "],"id":43},{"start":{"row":18,"column":128},"end":{"row":18,"column":129},"action":"insert","lines":["e"]},{"start":{"row":18,"column":129},"end":{"row":18,"column":130},"action":"insert","lines":["l"]},{"start":{"row":18,"column":130},"end":{"row":18,"column":131},"action":"insert","lines":["e"]},{"start":{"row":18,"column":131},"end":{"row":18,"column":132},"action":"insert","lines":["m"]},{"start":{"row":18,"column":132},"end":{"row":18,"column":133},"action":"insert","lines":["e"]},{"start":{"row":18,"column":133},"end":{"row":18,"column":134},"action":"insert","lines":["n"]},{"start":{"row":18,"column":134},"end":{"row":18,"column":135},"action":"insert","lines":["t"]},{"start":{"row":18,"column":135},"end":{"row":18,"column":136},"action":"insert","lines":["s"]}],[{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":44},{"start":{"row":23,"column":0},"end":{"row":23,"column":1},"action":"insert","lines":["/"]},{"start":{"row":23,"column":1},"end":{"row":23,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"insert","lines":[" "],"id":45},{"start":{"row":23,"column":3},"end":{"row":23,"column":4},"action":"insert","lines":["c"]},{"start":{"row":23,"column":4},"end":{"row":23,"column":5},"action":"insert","lines":["r"]},{"start":{"row":23,"column":5},"end":{"row":23,"column":6},"action":"insert","lines":["e"]},{"start":{"row":23,"column":6},"end":{"row":23,"column":7},"action":"insert","lines":["a"]},{"start":{"row":23,"column":7},"end":{"row":23,"column":8},"action":"insert","lines":["t"]},{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"insert","lines":["e"]},{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"insert","lines":[" "],"id":46},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["n"]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["e"]},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["w"]}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":[" "],"id":47},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["c"]},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["h"]},{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"insert","lines":["i"]},{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"insert","lines":["l"]},{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["d"]}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":[" "],"id":48},{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["e"]},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["l"]},{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["e"]},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["m"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["e"]},{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["n"]},{"start":{"row":23,"column":27},"end":{"row":23,"column":28},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":28},"end":{"row":23,"column":29},"action":"insert","lines":[" "],"id":49},{"start":{"row":23,"column":29},"end":{"row":23,"column":30},"action":"insert","lines":["i"]},{"start":{"row":23,"column":30},"end":{"row":23,"column":31},"action":"insert","lines":["n"]}],[{"start":{"row":23,"column":31},"end":{"row":23,"column":32},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":23,"column":32},"end":{"row":23,"column":34},"action":"insert","lines":["''"],"id":51}],[{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"insert","lines":["v"],"id":52},{"start":{"row":23,"column":34},"end":{"row":23,"column":35},"action":"insert","lines":["i"]},{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":["x"]}],[{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"remove","lines":["x"],"id":53}],[{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":["z"],"id":54}],[{"start":{"row":42,"column":24},"end":{"row":42,"column":35},"action":"remove","lines":["petallength"],"id":60},{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":["s"]},{"start":{"row":42,"column":25},"end":{"row":42,"column":26},"action":"insert","lines":["e"]},{"start":{"row":42,"column":26},"end":{"row":42,"column":27},"action":"insert","lines":["p"]},{"start":{"row":42,"column":27},"end":{"row":42,"column":28},"action":"insert","lines":["a"]},{"start":{"row":42,"column":28},"end":{"row":42,"column":29},"action":"insert","lines":["l"]}],[{"start":{"row":42,"column":24},"end":{"row":42,"column":29},"action":"remove","lines":["sepal"],"id":61},{"start":{"row":42,"column":24},"end":{"row":42,"column":34},"action":"insert","lines":["sepalwidth"]}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":37},"action":"insert","lines":["()"],"id":62}],[{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"insert","lines":["i"],"id":63},{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"insert","lines":["."]}],[{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"insert","lines":["s"],"id":64},{"start":{"row":42,"column":39},"end":{"row":42,"column":40},"action":"insert","lines":["e"]},{"start":{"row":42,"column":40},"end":{"row":42,"column":41},"action":"insert","lines":["p"]},{"start":{"row":42,"column":41},"end":{"row":42,"column":42},"action":"insert","lines":["a"]},{"start":{"row":42,"column":42},"end":{"row":42,"column":43},"action":"insert","lines":["l"]}],[{"start":{"row":42,"column":43},"end":{"row":42,"column":44},"action":"insert","lines":["l"],"id":65},{"start":{"row":42,"column":44},"end":{"row":42,"column":45},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":38},"end":{"row":42,"column":45},"action":"remove","lines":["sepalle"],"id":66},{"start":{"row":42,"column":38},"end":{"row":42,"column":49},"action":"insert","lines":["sepallength"]}],[{"start":{"row":42,"column":49},"end":{"row":42,"column":50},"action":"remove","lines":[")"],"id":67},{"start":{"row":42,"column":48},"end":{"row":42,"column":49},"action":"remove","lines":["h"]},{"start":{"row":42,"column":47},"end":{"row":42,"column":48},"action":"remove","lines":["t"]},{"start":{"row":42,"column":46},"end":{"row":42,"column":47},"action":"remove","lines":["g"]},{"start":{"row":42,"column":45},"end":{"row":42,"column":46},"action":"remove","lines":["n"]},{"start":{"row":42,"column":44},"end":{"row":42,"column":45},"action":"remove","lines":["e"]},{"start":{"row":42,"column":43},"end":{"row":42,"column":44},"action":"remove","lines":["l"]},{"start":{"row":42,"column":42},"end":{"row":42,"column":43},"action":"remove","lines":["l"]},{"start":{"row":42,"column":41},"end":{"row":42,"column":42},"action":"remove","lines":["a"]},{"start":{"row":42,"column":40},"end":{"row":42,"column":41},"action":"remove","lines":["p"]},{"start":{"row":42,"column":39},"end":{"row":42,"column":40},"action":"remove","lines":["e"]},{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"remove","lines":["s"]},{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"remove","lines":["."]},{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"remove","lines":["i"]},{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"remove","lines":["("]}],[{"start":{"row":42,"column":24},"end":{"row":42,"column":34},"action":"remove","lines":["sepalwidth"],"id":68},{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":["p"]},{"start":{"row":42,"column":25},"end":{"row":42,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":26},"end":{"row":42,"column":27},"action":"insert","lines":["t"],"id":69},{"start":{"row":42,"column":27},"end":{"row":42,"column":28},"action":"insert","lines":["a"]},{"start":{"row":42,"column":28},"end":{"row":42,"column":29},"action":"insert","lines":["l"]},{"start":{"row":42,"column":29},"end":{"row":42,"column":30},"action":"insert","lines":["l"]},{"start":{"row":42,"column":30},"end":{"row":42,"column":31},"action":"insert","lines":["e"]},{"start":{"row":42,"column":31},"end":{"row":42,"column":32},"action":"insert","lines":["n"]}],[{"start":{"row":42,"column":32},"end":{"row":42,"column":33},"action":"insert","lines":["g"],"id":70},{"start":{"row":42,"column":33},"end":{"row":42,"column":34},"action":"insert","lines":["t"]},{"start":{"row":42,"column":34},"end":{"row":42,"column":35},"action":"insert","lines":["h"]}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":47},"action":"remove","lines":["viz.addEventListener(\"click\", drawIrisData()); "],"id":83}],[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"remove","lines":["i"],"id":83}],[{"start":{"row":31,"column":55},"end":{"row":31,"column":56},"action":"remove","lines":["h"],"id":84},{"start":{"row":31,"column":54},"end":{"row":31,"column":55},"action":"remove","lines":["t"]},{"start":{"row":31,"column":53},"end":{"row":31,"column":54},"action":"remove","lines":["g"]},{"start":{"row":31,"column":52},"end":{"row":31,"column":53},"action":"remove","lines":["n"]},{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"remove","lines":["e"]},{"start":{"row":31,"column":50},"end":{"row":31,"column":51},"action":"remove","lines":["l"]},{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"remove","lines":["l"]},{"start":{"row":31,"column":48},"end":{"row":31,"column":49},"action":"remove","lines":["a"]},{"start":{"row":31,"column":47},"end":{"row":31,"column":48},"action":"remove","lines":["t"]},{"start":{"row":31,"column":46},"end":{"row":31,"column":47},"action":"remove","lines":["e"]},{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"remove","lines":["p"]},{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["."]}],[{"start":{"row":31,"column":45},"end":{"row":31,"column":50},"action":"remove","lines":["petal"],"id":85},{"start":{"row":31,"column":45},"end":{"row":31,"column":56},"action":"insert","lines":["petallength"]}],[{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"insert","lines":["p"],"id":86},{"start":{"row":31,"column":46},"end":{"row":31,"column":47},"action":"insert","lines":["e"]},{"start":{"row":31,"column":47},"end":{"row":31,"column":48},"action":"insert","lines":["t"]},{"start":{"row":31,"column":48},"end":{"row":31,"column":49},"action":"insert","lines":["a"]},{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"insert","lines":["l"]}],[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":["i"],"id":87},{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"insert","lines":["."]}],[{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"remove","lines":["t"],"id":88},{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"remove","lines":["e"]},{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"remove","lines":["p"]}],[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":["p"],"id":89},{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"insert","lines":["e"]},{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"remove","lines":["i"],"id":90}],[{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":["i"],"id":91}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":15},"action":"remove","lines":["drawIrisData();"],"id":92}],[{"start":{"row":31,"column":30},"end":{"row":31,"column":34},"action":"remove","lines":["draw"],"id":93},{"start":{"row":31,"column":30},"end":{"row":31,"column":44},"action":"insert","lines":["drawIrisData()"]}],[{"start":{"row":31,"column":30},"end":{"row":31,"column":43},"action":"remove","lines":["addChildToViz"],"id":94},{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"insert","lines":["d"]},{"start":{"row":31,"column":31},"end":{"row":31,"column":32},"action":"insert","lines":["r"]},{"start":{"row":31,"column":32},"end":{"row":31,"column":33},"action":"insert","lines":["a"]},{"start":{"row":31,"column":33},"end":{"row":31,"column":34},"action":"insert","lines":["w"]}]]},"ace":{"folds":[],"scrolltop":243.5,"scrollleft":0,"selection":{"start":{"row":32,"column":0},"end":{"row":32,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1630951006060}