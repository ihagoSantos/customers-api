
(async () => {
    function importTest(name, path){
        describe(name, function(){
            require(path);
        });
    }
    
    importTest('validatorTest.js', './validator/validatorTest.js');
    importTest('clienteValidatorTest.js', './validator/clienteValidatorTest.js');
    importTest('cidadeValidatorTest.js', './validator/cidadeValidatorTest.js');
    importTest('errorHelperTest.js', './helper/errorHelperTest.js');
    importTest('cidadeRepositoryTest.js', './repository/cidadeRepositoryTest.js');
    

})();