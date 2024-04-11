// $(document).ready(function() {
//     // Ensure the first section is visible by default
//     $('.section1').css('opacity', 1);
// });

// // Function to update the stroke-dasharray of the SVG path
// function updateStrokeDasharray(scrollTop) {
//     var svgDoc = document.getElementById("svgObject").contentDocument;
//     var $path = $(svgDoc.getElementById("Opaque_Ring"));
//     TweenMax.to(counter, 0.5, {
//         var: scrollTop / 150,
//         onUpdate: function () {
//             $path.css("stroke-dasharray", Math.floor(counter.var) * 140 + ",1000");
//         },
//         ease: Linear.easeNone
//     });
// }

// // Function to animate the text in the current section
// function animateText(sectionIndex) {
//     var textElement = $('.section' + (sectionIndex + 1)).find('.section-text');
//     TweenMax.to(textElement, 0.5, {
//         y: '0%', // Adjust as needed
//         ease: Power1.easeOut,
//         onComplete: function() {
//             // Update the text content for the next section
//             var nextSectionIndex = (sectionIndex + 1) % 6; // Loop back to 0 after section 6
//             textElement.text('Section ' + (nextSectionIndex + 1));
//         }
//     });
// }

// var counter = { var: 0 }; // Define the counter variable

// // Setup Intersection Observer with adjusted rootMargin and threshold
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Correctly calculate the section index
//             var sectionIndex = parseInt($(entry.target).attr('class').split(' ')[1].replace('section', '')) - 1;
//             // Ensure the current section is visible and others are hidden
//             $('.section').css('opacity', 0);
//             $(entry.target).css('opacity', 1);
//             // Animate the text for the current section
//             animateText(sectionIndex);
//             // Update the stroke-dasharray based on scroll position
//             updateStrokeDasharray($(window).scrollTop());
//         }
//     });
// }, {
//     rootMargin: '0px', // Adjusted rootMargin for more accurate triggering
//     threshold: 0.5 // Adjusted threshold for more frequent triggering
// });

// // Observe each section
// $('.section').each(function() {
//     observer.observe(this);
// });

// // Update stroke-dasharray on window scroll for the initial setup
// $(window).scroll(function () {
//     updateStrokeDasharray($(window).scrollTop());
// });
