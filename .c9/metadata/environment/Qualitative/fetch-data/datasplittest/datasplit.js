{"changed":true,"filter":false,"title":"datasplit.js","tooltip":"/Qualitative/fetch-data/datasplittest/datasplit.js","value":"let apikey =\"https://api.si.edu/openaccess/api/v1.0/search?q=online_visual_material:true+AND+type:edanmdm+AND+%22Memorabilia%20and%20Ephemera-Political%20and%20Activist%20Ephemera%22+&api_key=g41p5R2gTJACnqmLuuBs0bVwYfV4L6domSyjDHMa\";\nlet contentsets=[];\nlet labelsets=[];\nlet setnames=[];\n\nfetch(apikey).then(response => {\n    return response.json();\n  }).then(data => {\n    data.response.rows.forEach(row=>{\n      row.content.freetext.setName.forEach(s=>{\n          labelsets.push(s.label);    \n      })\n      row.content.freetext.setName.forEach(s=>{\n        contentsets.push(s.content);    \n    })\n    }\n  \n    \n    \n    )\n    \n   \n    console.log(labelsets);\n\n  \n    console.log(contentsets);\n    for(let i =0;i<labelsets.length;i++){\n      if(labelsets[i]===\"Movement\"){\n    \n        console.log(i,contentsets[i]);\n\n      }\n\n    }\n  }).catch(err => {\n    // Do something for an error here\n  });\n\n","undoManager":{"mark":-2,"position":5,"stack":[[{"start":{"row":2,"column":17},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["l"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["e"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":3},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["s"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["e"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["t"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["n"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["a"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["m"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["e"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["="],"id":4},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["{"]}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["{"],"id":5}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":15},"action":"insert","lines":["[]"],"id":6}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":[";"],"id":7}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":27},"end":{"row":6,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":9,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1634399955069}