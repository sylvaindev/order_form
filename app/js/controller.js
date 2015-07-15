/**
 * Created by Sylvain on 02/07/15.
 */
angular.module('Commande', [])
    .controller('commandeController', ['$scope', function($scope) {

        $scope.articles = [
                { id: 1, reference: 123, titre: "MSI GTX 980ti", prixUnitaire: 666.63, quantite: 0, montantHT: 666.63, montantTTC: 799.95 },
                { id: 2, reference: 456, titre: "Intel Core i7-4770K", prixUnitaire: 324.96, quantite: 0, montantHT: 324.96, montantTTC: 389.95 },
                { id: 3, reference: 789, titre: "ASUS MAXIMUS VII RANGER", prixUnitaire: 134.96, quantite: 0, montantHT: 134.96, montantTTC: 161.95 }
        ];



        $scope.PrixTotalTTC = function() {
            var resultTTC = 0;

            angular.forEach($scope.articles, function (article) {
                resultTTC += article.montantTTC * article.quantite;
            });
            return resultTTC;
        };

        $scope.PrixTotalHT = function() {
            var resultHT = 0;

            angular.forEach($scope.articles, function (article) {
                resultHT += article.montantHT * article.quantite;
            });
            return resultHT;
        };

        $scope.NombreArticle = function() {
            var resultArticle = 0;

            angular.forEach($scope.articles, function(article){
                resultArticle += article.quantite;
            });
            return resultArticle;
        };

        $scope.AjouterArticle = function() {
            $scope.articles.push({
                id: '',
                reference: '',
                titre: '',
                prixUnitaire: 0,
                quantite: 0,
                montantHT: 0,
                montantTTC: 0
            });
        };

        $scope.SupprimerArticle = function(index) {
            $scope.articles.splice(index, 1);
        };

    }]);