// when dom is loaded remove script where src includes '/template_child.min.css"'
document.addEventListener("DOMContentLoaded", function() {
    var scripts = document.querySelectorAll('script[src*="/template_child.min.css"]');
    scripts.forEach(function(script) {
        script.remove();
    });
});