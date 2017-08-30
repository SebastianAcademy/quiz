var app = angular.module("quiz",[]);


app.controller("quizController", function($scope){
    var idx = 0;
    $scope.questions = [
        {   image : "images/r2-d2.jpeg",
            choices : [
                "C-3PO",
                "QT-KT",
                "R5-D404",
                "R2-D2"
            ],
            correct : "R2-D2"
        },
        {   image : "images/admiral-ackbar.jpeg",
            choices : [
                "Admiral Motti",
                "Admiral Ackbar",
                "A Trap",
                "Galen Erso"
            ],
            correct : "Admiral Ackbar"
        },
        {   image : "images/biggs-darklighter.jpeg",
            choices : [
                "Captain Needa",
                "Biggs Darklighter",
                "Anakin Skywalker",
                "Jar Jar Quiz"
            ],
            correct : "Biggs Darklighter"
        },
        {   image : "images/dengar.jpeg",
            choices : [
                "Silman",
                "Rancor-Keeper",
                "Oola",
                "Dengar"
            ],
            correct : "Dengar"
        },
        {   image : "images/saw-gerrera.jpeg",
            choices : [
                "Bail Organa",
                "Saw Gerrera",
                "Mace Windu",
                "Unkar Plutt"
            ],
            correct : "Saw Gerrera"
        },
        {   image : "images/mon-mothma.jpeg",
            choices : [
                "Obi-Wan Kenobi",
                "Galen Erso",
                "Ponda Baba",
                "Mon Mothma"
            ],
            correct : "Mon Mothma"
        },
        {   image : "images/captain-phasma.jpeg",
            choices : [
                "Count Dooku",
                "Captain Phasma",
                "EV-9D9",
                "Salacious B Crumb"
            ],
            correct : "Captain Phasma"
        },
        {   image : "images/darth-vader.jpeg",
            choices : [
                "Captain Phasma",
                "Stormtrooper",
                "Darth Vader",
                "Max Rebo Band"
            ],
            correct : "Darth Vader"
        },
        {   image : "images/c2-b5.jpeg",
            choices : [
                "C-3PO",
                "K-2SO",
                "4-LOM",
                "C2-B5"
            ],
            correct : "C2-B5"
        },
        {   image : "images/bib-fortuna.jpeg",
            choices : [
                "Bib Fortuna",
                "Grand Quiz Tarkin",
                "Nien Numb",
                "Sebulba"
            ],
            correct : "Bib Fortuna"
        }
      ]
        $scope.loadNextQuestion = function() {
          idx ++;
        }
        $scope.question = function() {
            return $scope.questions[idx];
        }
    });
