
var url = location.href;
urlCheck(url);

history.pushState = (function(f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);

history.replaceState = (function(f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);

window.addEventListener("popstate", function() {
    window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", function() {
    url = location.href;
    urlCheck(url);
});

function urlCheck(url) {
    var allblogsurlstring = "https://abcfitness.com/";
    if (window.location.pathname.indexOf("/") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {    	    	
    	    init5009();    	
    } else {
        // Remove Test
    }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
        currentUrl.slice(0, currentUrl.indexOf("?")) :
        currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}

function init5009()
{
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-home-5009'))
    {
        bodyEle.classList.add('spz-home-5009');
        
        let btnHtml
        if(window.location.pathname.indexOf('/pt/') > -1){
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">Quero testar</a>
            </li>`;
        } else if(window.location.pathname.indexOf('/es/') > -1){
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">PruÃ©belo</a>
            </li>`;
        } else {
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">GET A DEMO</a>
            </li>`;
        }

        // let requestBtn = `
        //     <a class="spz-hero-btn" href="https://abcfitness.com/request-a-demo/">REQUEST A DEMO</a>
        // `;

        waitForElm('.site-header #mega-menu-primary').then((elm) => {            
            elm.insertAdjacentHTML("beforeend", btnHtml)        
            setTimeout(() => {
                if(window.location.pathname == '/'){
                    document.querySelector('.spz-demo-btn').addEventListener('click', function(e){
                        e.preventDefault();
                        document.querySelector('.n2-ss-slide-3 .n2-ss-layer a.popup').click()
                        return false;
                    })
                }
            }, 100)           
        });

        if(window.location.pathname == '/' || window.location.pathname == '/pt/' || window.location.pathname == '/es/'){
            waitForElm('.n2-ss-slide-3 .n2-ss-layer a.popup').then((elm) => {
                if(window.location.pathname.indexOf('/pt/') > -1){
                    elm.innerText = 'SOLICITE UMA DEMO';
                } else if(window.location.pathname.indexOf('/es/') > -1){
                    elm.innerText = 'SOLICITA UNA DEMO';
                } else {
                    elm.innerText = 'REQUEST A DEMO';
                }
            });
        }

        window.addEventListener('scroll', function () {
            var headerNav = document.querySelector(".bkg-header");
            let getScrollposition = window.scrollY;
            if(getScrollposition > headerNav.offsetTop){
                headerNav.classList.add('fixed-header')
            } else {
                if(headerNav.classList.contains('fixed-header')){
                    headerNav.classList.remove('fixed-header')
                }
            }
        })


        if(window.location.pathname != '/'){            
            let checkjQuery = setInterval(function(){
                
                if(typeof jQuery != 'undefined' && jQuery.fn)
                {                    
                    clearInterval(checkjQuery);
                    jQuery(document).ready(function($) {
                        jQuery('.spz-demo-btn').click(function(e) {
                            e.preventDefault();
                            
                            // Get the button's ID
                            var buttonID = 23276;
                            
                            // Make an AJAX request to fetch the form content
                            $.ajax({
                                url: 'https://abcfitness.com/wp-admin/admin-ajax.php',
                                type: 'POST',
                                data: {
                                    action: 'fetch_popup_form',
                                    id: buttonID
                                },
                                success: function(response) {
                                    // Append the form content to the modal
                                    console.log(response,"######");
                                    jQuery('#popupModal .modal-body').html(response);
                                    
                                    // Show the modal
                                    jQuery('#popupModal').modal('show');
                                },
                                error: function(xhr, status, error) {
                                    console.log(error);
                                }
                            });
                        });
                    });
        
                    let popupHtml = `
                        <div class="modal fade" id="popupModal" tabindex="-1" role="dialog" aria-labelledby="popupModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>`;

                        document.querySelector('footer.site-footer').insertAdjacentHTML('beforebegin', popupHtml)
                }
            });
        }
        

    }    
   
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}