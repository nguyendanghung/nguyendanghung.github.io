window.Constants.screenSizes={lg:1200,md:992,sm:768,xs:0},window.Helpers={stringToBool:function(t){return"true"===t.toString().toLowerCase()},screenType:{isLG:function(){return Constants.screenSizes.lg<$(window).width()},isMD:function(){return Constants.screenSizes.md<$(window).width()&&Constants.screenSizes.lg>$(window).width()},isSM:function(){return Constants.screenSizes.sm<$(window).width()&&Constants.screenSizes.md>$(window).width()},isXS:function(){return Constants.screenSizes.sm>$(window).width()}}},"undefined"!=typeof module&&(module.exports=window.Helpers);