angular.module("ifsp", ["ngRoute"]);

angular.module("ifsp", ["ngRoute"]).config(($routeProvider) => {
    $routeProvider.when("/contatos", {
        templateUrl: "partials/contatos.html",
        controller: "ContatosController",
    });

    $routeProvider.when("/contato/:contatoId", {
        templateUrl: "partials/contato.html",
        controller: "ContatoController",
    });

    $routeProvider.otherwise({ redirectTo: "/contatos" });
});
