init = function() {
    something = 0;
    for ( var i = 0; i < 100000; i++ ) {
        something += kernel.getStats()[kernel.states.ready];
    }
    test12_2_init = true;

}

uninit = function() {
    test12_2_uninit = true;
}