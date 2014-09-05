var aside = angular.module('aside.services', []);

aside.factory('Aside', function ($rootScope) {

    var params = {
        cls: ""
    }

    return {
        params: params,
        show: function (params) {


            this.params.scope = params.scope;
            this.params.tpl = params.template;
            this.params.title = params.title;
            this.params.absolute = params.absolute != undefined ? params.absolute : true;

            if (params.show) {
                this.params.cls = 'show';
                $rootScope.$broadcast("aside:open");
            } else {
                $rootScope.$broadcast("aside:close");
                this.params.cls = '';
            }
            this.params.loading = true;
            if (!this.params.scope.$$phase && !this.params.scope.$root.$$phase) {
                this.params.scope.$apply();
            }
        },
        hide: function () {
            this.params.cls = "";
            $rootScope.$broadcast("aside:close");
        },
        toggle: function () {
            this.params.cls = (this.params.cls == "" ? "show" : "");
            if (this.params.cls == "") {
                $rootScope.$broadcast("aside:close");
            } else {
                $rootScope.$broadcast("aside:open");
            }

        },
        isOpen: function () {
            return this.params.cls == "show";
        },
        isAbsolute: function () {
            return this.params.absolute;
        }
    }
});