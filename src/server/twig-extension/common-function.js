Twig.extendFunction("repeat", function(value, times) {
    return new Array(times+1).join(value);
});