$(document).ready(function(){$("nav li a").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){var r=e.offset().top;return $("html,body").animate({scrollTop:r},1e3),!1}}})}),window.sr=ScrollReveal(),sr.reveal(".navbar",{duration:2e3,origin:"top",distance:"2rem"}),sr.reveal(".btn",{duration:2e3,origin:"bottom",distance:"18.75rem"}),sr.reveal(".section-title",{duration:1e3,origin:"top",distance:"2rem"}),sr.reveal(".section-subtitle",{duration:1500,origin:"bottom",distance:"2rem"}),sr.reveal("hr",{duration:1e3,origin:"bottom",distance:"2rem"}),sr.reveal("#hero .display-4",{duration:1e3,origin:"left",distance:"25rem"}),sr.reveal("#hero p",{duration:1500,origin:"right",distance:"18.75rem"}),sr.reveal("#about h3",{duration:1e3,origin:"left",distance:"10rem"}),sr.reveal("#about p",{duration:1500,origin:"right",distance:"20rem"}),sr.reveal("#about img",{duration:2e3,origin:"right",distance:"5rem"}),sr.reveal("#skills li span",{duration:2e3,origin:"right",distance:"20rem"}),sr.reveal(".project-title",{duration:1e3,origin:"left",distance:"10rem"}),sr.reveal(".project-image",{duration:1500,origin:"left",distance:"5rem"}),sr.reveal(".project-stack",{duration:1500,origin:"right",distance:"5rem"}),sr.reveal(".project-content p",{duration:2e3,origin:"bottom",distance:"10rem"}),sr.reveal("#testimonials blockquote",{duration:2e3,origin:"top",distance:"2rem"}),sr.reveal("#testimonials .testimonial-info",{duration:1500,origin:"bottom",distance:"2rem"}),sr.reveal("#contact .contact-form",{duration:2e3,origin:"left",distance:"30rem"}),sr.reveal("footer .social-link-group",{duration:2500,origin:"right",distance:"10rem"}),sr.reveal("footer .text-muted",{duration:2e3,origin:"bottom",distance:"2rem"});