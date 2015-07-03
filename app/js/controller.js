/**
 * Created by Sylvain on 02/07/15.
 */
angular.module('Commande', [])
    .controller('commandeController', ['$scope', function($scope) {

        $scope.articles = [
                { id: 1, reference: 123, titre: "MSI GTX 980ti", prixUnitaire: "666,63 €", montantHT: 666.63, montantTTC: 799.95 },
                { id: 2, reference: 456, titre: "Intel Core i7-4770K", prixUnitaire: "324,96 €", montantHT: 324.96, montantTTC: 389.95 },
                { id: 3, reference: 789, titre: "ASUS MAXIMUS VII RANGER", prixUnitaire: "134,96 €", montantHT: 134.96, montantTTC: 161.95 }
        ]

        $scope.NombreArticle = "Votre panier contient " + $scope.articles.length + " articles";

        $scope.TotalTTC = 0;
        $scope.TotalHT = 0;

        angular.forEach($scope.articles, function(article){
                $scope.TotalTTC += article.montantTTC;
                $scope.TotalHT += article.montantHT;
        });

    }]);