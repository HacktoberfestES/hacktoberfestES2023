module.exports = function (eleventyConfig) {
    // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("CNAME");
    return {
        dir: {
            input: "src",
        },
    };
};
