System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorZZService;
    return {
        setters:[],
        execute: function() {
            AuthorZZService = (function () {
                function AuthorZZService() {
                }
                AuthorZZService.prototype.getbanana = function () {
                    return ["Author1", "Author2", "Author3"];
                };
                return AuthorZZService;
            }());
            exports_1("AuthorZZService", AuthorZZService);
        }
    }
});
//# sourceMappingURL=author.service.js.map