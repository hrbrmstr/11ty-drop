module.exports = function(eleventyConfig) {
  
	// NEW THING #1 to copy everything in img/ to the published site
	// "img/" is where I put the images in my Drop folders
	//
	// this directive tells 11ty to mkdir an img/ dir in the published
	// site dir and copy everyhing in the local one to it
  eleventyConfig.addPassthroughCopy("img");

	// NEW THING #2 (same for CSS)
	eleventyConfig.addPassthroughCopy("css");

	// ALSO INSERTED AT NEW THING #1 TIME
  return {
    passthroughFileCopy: true
	};
	
};