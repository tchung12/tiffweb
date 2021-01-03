module.exports = (function(eleventyConfig) {
    eleventyConfig.addFilter("typeEmail", function(path) {
        if (path.includes("@"))
            return "mailto:" + path;
        return path;
       });
});