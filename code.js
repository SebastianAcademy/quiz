var app = angular.module("quiz",[]);

app.controller("quizController", function($scope){
    $scope.questions = [
      {       image : "images/r2-d2.jpeg",
              choices : [
                      "C-3PO",
                      "QT-KT",
                      "R5-D404",
                      "R2-D2"
                        ],
              correct : "R2-D2"
        },
        {       image : "images/admiral-ackbar.jpeg",
                choices : [
                        "Adiral Motti",
                        "Admiral Ackbar",
                        "General Hux",
                        "Galen Erso"
                          ],
                correct : "Admiral Ackbar"
          }
        ]
});



    // ]
    // $scope.option = [
    //     "4-Lom",
    //     "Adiral Motti",
    //     "Anakin Skywalker",
    //     "Bail Organa",
    //     "BG-81",
    //     "Bossk",
    //     "Captain Needa",
    //     "Ello Asty",
    //     "EV-9D9",
    //     "Galen Erso",
    //     "General Hux",
    //     "General Tarpas",
    //     "Greedo",
    //     "Han Solo",
    //     "IG-88",
    //     "Jabba The Hutt",
    //     "Jar Jar Quiz",
    //     "K-2SO",
    //     "Kit Fisto",
    //     "Kylo Ren",
    //     "Lando Calrissian",
    //     "Lobot",
    //     "Luke Skywalker",
    //     "Mace Windu",
    //     "Max Rebo",
    //     "Nien Numb",
    //     "Obi-Wan Kenobi",
    //     "Oola",
    //     "Paploo",
    //     "Poe Dameron",
    //     "Ponda Baba",
    //     "QT-KT",
    //     "R5-D4",
    //     "Rancor-Keeper",
    //     "Salacious B Crumb",
    //     "Sebulba",
    //     "Silman",
    //     "TC-14",
    //     "Unkar Plutt",
    //     "Watto",
    //     "Wedge Antilles",
    //     "Yoda"
    // ];
