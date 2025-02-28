// Times [1,2,3,4,5,6]
var fazes = [
    {
      //faze:1 - mundo:0 (Ilha)======================================================
      terreno:[
        [ 6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
        [ 6,6,6,6,6,2,2,2,2,2,2,2,6,6,6,6,6],
        [ 6,6,2,2,2,2,1,1,1,1,1,2,2,2,2,6,6],
        [ 6,6,2,1,1,1,1,1,1,1,1,1,1,1,2,6,6],
        [ 6,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,6],
        [ 6,6,2,1,1,1,1,1,1,1,1,1,1,1,2,6,6],
        [ 6,6,2,2,2,2,1,1,1,1,1,1,1,2,2,6,6],
        [ 6,6,6,6,6,2,2,2,2,2,2,2,6,6,6,6,6],
        [ 6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
      ],
      dominio:[
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,3,3,5,5,5,5,6,0,0,0,0,0],
        [ 0,0,1,1,1,1,6,5,5,5,5,4,4,4,4,0,0],
        [ 0,0,1,1,1,1,6,4,1,1,1,4,4,4,4,0,0],
        [ 0,4,5,6,3,3,6,1,5,5,1,5,1,2,1,2,0],
        [ 0,0,2,2,2,2,1,4,1,2,5,3,3,3,3,0,0],
        [ 0,0,2,2,2,2,6,6,6,6,5,3,3,3,3,0,0],
        [ 0,0,0,0,0,5,6,6,6,6,2,2,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ],
      construcao:[
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        [ 0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0],
        [ 0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ],
      tropas:[
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [ 0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0],
        [ 0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ],
      cenografia:[
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [ 0,6,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0],
        [ 0,0,4,0,4,1,2,5,0,3,5,4,4,0,0,0,0],
        [ 0,0,1,1,1,1,2,4,1,1,1,4,4,4,4,0,0],
        [ 0,0,5,3,3,3,3,1,5,2,1,5,1,2,1,5,0],
        [ 0,0,3,2,2,2,1,4,1,2,1,3,3,3,3,0,6],
        [ 0,0,5,0,0,0,3,3,3,3,1,3,3,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0],
        [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0],
      ]
    },
    {
    //faze:2 - mundo:1 (Rio/Floresta)======================================================
    terreno:[
      [ 1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1],
      [ 1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1],
      [ 1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1],
      [ 6,6,6,4,6,6,6,6,4,6,6,6,6,4,6,6,6],
      [ 6,6,6,4,6,6,6,6,4,6,6,6,6,4,6,6,6],
      [ 6,6,6,4,6,6,6,6,4,6,6,6,6,4,6,6,6],
      [ 1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1],
      [ 1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1],
      [ 1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1],
    ],
    dominio:[
      [ 6,5,1,1,1,5,4,6,6,6,4,3,5,5,5,1,6],
      [ 1,4,1,1,1,6,3,6,6,6,5,2,5,5,5,2,5],
      [ 2,3,2,1,2,1,5,1,6,4,6,1,6,5,3,4,6],
      [ 0,0,0,5,0,0,0,0,4,0,0,0,0,1,0,0,0],
      [ 0,0,0,1,0,0,0,0,2,0,0,0,0,3,0,0,0],
      [ 0,0,0,4,0,0,0,0,5,0,0,0,0,6,0,0,0],
      [ 6,5,1,2,3,4,3,2,3,4,5,4,3,4,5,6,5],
      [ 4,3,2,2,2,5,2,3,3,3,6,3,4,4,4,1,4],
      [ 2,1,2,2,2,6,1,3,3,3,1,2,4,4,4,2,3],
    ],
    construcao:[
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,3,0,0,0,0,3,0,0,0,0,3,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,3,0,0,0,0,3,0,0,0,0,3,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    tropas:[
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    cenografia:[
      [ 2,2,3,0,3,2,2,3,0,3,2,2,3,0,3,2,2],
      [ 2,2,3,0,3,2,2,3,0,3,2,2,3,0,3,2,2],
      [ 2,2,3,0,3,2,2,3,0,3,2,2,3,0,3,2,2],
      [ 0,0,5,0,5,0,0,5,0,5,0,0,5,0,5,0,0],
      [ 0,6,0,5,0,0,0,0,0,0,0,0,0,5,0,6,0],
      [ 0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0],
      [ 2,2,3,0,3,2,2,3,0,3,2,2,3,0,3,2,2],
      [ 2,2,3,0,3,2,2,3,0,3,2,2,3,0,3,2,2],
      [ 2,2,3,0,3,2,2,3,0,3,2,2,3,0,3,2,2],
    ]
  },{
    //faze:3 - mundo:2 (Vulcao)======================================================
    terreno:[
      [ 1,1,1,2,2,2,4,4,4,4,4,2,2,2,1,1,1],
      [ 1,1,2,2,4,4,4,4,3,4,4,4,4,2,2,1,1],
      [ 1,2,4,4,4,4,3,3,5,3,3,4,4,4,4,2,1],
      [ 1,2,4,4,3,3,5,5,5,5,5,3,3,4,4,2,1],
      [ 1,2,4,4,3,5,5,5,5,5,5,5,3,4,4,2,1],
      [ 1,2,4,4,4,3,3,5,5,5,3,3,4,4,4,2,1],
      [ 1,2,2,4,4,4,4,3,3,3,4,4,4,4,2,2,1],
      [ 1,1,2,2,2,4,4,4,4,4,4,4,2,2,2,1,1],
      [ 1,1,1,2,2,2,2,4,4,4,2,2,2,2,1,1,1],
    ],
    dominio:[
      [ 2,3,4,5,2,4,6,6,6,6,6,3,1,2,3,4,6],
      [ 5,6,1,1,1,3,4,6,6,6,1,3,5,5,5,1,2],
      [ 4,5,1,1,1,5,4,6,0,6,2,3,5,5,5,2,1],
      [ 3,4,1,1,1,0,0,0,0,0,0,4,5,5,5,3,6],
      [ 2,3,5,5,5,0,0,0,0,0,0,0,2,2,2,4,5],
      [ 1,1,2,2,2,0,0,0,0,0,0,0,4,4,4,5,4],
      [ 6,3,2,2,2,6,5,3,3,3,1,5,4,4,4,6,3],
      [ 5,4,2,2,2,6,4,3,3,3,1,2,4,4,4,1,2],
      [ 6,5,4,3,1,6,1,3,3,3,1,6,1,2,3,5,6],
    ],
    construcao:[
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
      [ 0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0],
      [ 0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    tropas:[
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0],
      [ 0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0],
      [ 0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    cenografia:[
      [ 2,2,2,3,5,0,0,5,0,5,0,0,5,3,2,2,2],
      [ 2,2,4,0,0,0,0,0,0,0,0,0,0,0,4,2,2],
      [ 2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2],
      [ 3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
      [ 3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
      [ 3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
      [ 2,4,0,5,0,0,0,0,0,0,0,0,0,5,0,4,2],
      [ 2,2,4,0,0,0,0,0,0,0,0,0,0,0,4,2,2],
      [ 2,2,2,4,3,0,5,0,0,0,5,0,3,4,2,2,2],
    ]
  },{
    //faze:4 - mundo:3 (Inferno)======================================================
    terreno:[
      [ 3,3,5,5,5,5,5,3,3,3,5,5,5,5,5,3,3],
      [ 3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [ 5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5],
      [ 5,3,3,3,5,3,3,3,5,3,3,3,5,3,3,3,5],
      [ 5,5,5,3,5,3,3,5,5,5,3,3,5,3,5,5,5],
      [ 5,3,3,3,5,3,3,3,5,3,3,3,5,3,3,3,5],
      [ 5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5],
      [ 3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [ 3,3,5,5,5,5,5,3,3,3,5,5,5,5,5,3,3],
    ],
    dominio:[
      [ 1,1,0,0,0,0,0,6,6,6,0,0,0,0,0,5,5],
      [ 1,1,1,4,6,5,1,6,6,6,2,4,1,6,5,5,5],
      [ 0,1,1,4,3,5,1,3,6,4,2,2,1,6,5,5,0],
      [ 0,2,2,6,0,3,3,2,0,3,6,5,0,2,4,6,0],
      [ 0,0,0,5,0,2,2,0,0,0,4,4,0,1,0,0,0],
      [ 0,3,2,5,0,1,1,6,0,3,5,5,0,2,5,5,0],
      [ 0,2,2,3,4,6,3,6,3,6,4,5,3,1,4,4,0],
      [ 2,2,2,1,4,3,1,3,3,3,4,5,6,1,4,4,4],
      [ 2,2,0,0,0,0,0,3,3,3,0,0,0,0,0,4,4],
    ],
    construcao:[
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
      [ 0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
      [ 0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    tropas:[
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [ 0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
      [ 0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    cenografia:[
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,5,0,0,0,0,5,0,3,0,0,5,0,0,0,0],
      [ 0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,5,0],
      [ 0,0,5,0,0,0,5,0,0,0,0,5,0,0,0,0,0],
      [ 0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0],
      [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]
  },

]