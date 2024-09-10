let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    if (!body.classList.contains('spz-3003')) {
      body.classList.add('spz-3003');
      waitForElm('#hero-section').then(function () {
        document.querySelector('#hero-section .row.hero .col.content').insertAdjacentHTML('afterend', `
                    <div class="col spz-content">
                        <a href="https://expel.com/" class="site-logo-link" rel="home">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
                        </a>
                        <p class="eye-brow-text">Our Pricing</p>
                        <h1 class="section-heading">Expel pricing: flexibility, transparency, & ROI</h1>
                        <p class="s-copy">Expel offers flexible packaging options that meet you where you are with your security program. Whether you need us to augment your team, level-up your existing program, or unlock the ROI of your tech stack, we provide 24x7 MDR that works the way you need it to.</p>
                        <p class="s-copy">Either way, we integrate with your existing tech, apply our world-class detections and remediation actions, and provide 100% transparency into how our people and tech are building your cyber resilience.</p>
                    </div>`);

        // Form Reviews and Gartner
        document.querySelector('#hero-section .hero .spz-content + .col').insertAdjacentHTML('afterend', `
                    <div class="spz-form-baseline current_step_1">
                      <div class="form-block">
                        <span class="progress-bar"></span>
                        <div class="Questions-block">
                          <div class="form-step step_1">
                            <div class="step-header">
                              <h5 class="step-number">Step 1</h5>
                              <h2 class="step-heading">Get pricing</h2>
                              <p class="step-question">Which solutions are you interested in?</p>
                            </div>
                            <div class="step-content">
                              <div class="option-box">
                                <div class="option-item">
                                  <input type="checkbox" name="Cloud security" value="Cloud security">
                                  <div class="option-content">
                                    <div class="checkbox">
                                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                                      </svg>
                                    </div>
                                    <div class="option-icon">
                                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12853_375)">
                                        <path d="M20.4157 17.1205C22.8893 17.1205 24.8945 15.1153 24.8945 12.6417C24.8945 10.1681 22.8893 8.16285 20.4157 8.16285C20.1529 8.16285 19.8957 8.1868 19.6453 8.23025C19.1632 4.8837 16.2844 2.31195 12.8044 2.31195C9.33714 2.31195 6.46639 4.86485 5.96864 8.19345C5.79899 8.17395 5.62679 8.16285 5.45194 8.16285C2.97839 8.16285 0.973145 10.1681 0.973145 12.6417C0.973145 15.1153 2.97834 17.1205 5.45194 17.1205" stroke="white" stroke-width="0.96" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.967 22.6042L12.9337 23.8706L10.9005 22.6042C9.05856 21.4142 7.95996 19.4593 7.95996 17.3719V12.4345L8.94716 12.8687C9.93326 13.2553 11.0464 13.2486 12.027 12.8501L12.9337 12.4344L13.9265 12.8699C14.913 13.2557 16.0262 13.2481 17.0065 12.8487L17.9075 12.4344V17.3718C17.9075 19.4593 16.8089 21.4142 14.967 22.6042Z" stroke="white" stroke-width="0.96" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.8193 17.9635L11.9535 19.0977L15.2615 15.7897" stroke="white" stroke-width="0.96" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_12853_375">
                                        <rect width="25.6" height="25.6" fill="white" transform="translate(0.200195 0.200012)"/>
                                        </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    <h4 class="Option-text">Cloud <br>security</h4>
                                  </div>
                                </div>
                                <div class="option-item">
                                  <input type="checkbox" name="SIEM detections optimization" value="SIEM detections optimization">
                                  <div class="option-content">
                                    <div class="checkbox">
                                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                                      </svg>
                                    </div>
                                    <div class="option-icon">
                                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12853_382)">
                                        <path d="M11.88 4.06283C12.687 4.06283 13.482 4.15776 14.2531 4.34386C14.5107 4.40606 14.6692 4.66538 14.607 4.92308C14.5448 5.18078 14.2855 5.33926 14.0278 5.27707C13.3304 5.10874 12.611 5.02283 11.88 5.02283C6.84321 5.02283 2.76005 9.106 2.76005 14.1428C2.76005 19.1797 6.84321 23.2628 11.88 23.2628C16.9169 23.2628 21 19.1797 21 14.1428C21 13.5452 20.9426 12.9551 20.8296 12.3783C20.7786 12.1181 20.9481 11.8659 21.2083 11.8149C21.4684 11.7639 21.7207 11.9335 21.7716 12.1936C21.8966 12.8313 21.96 13.4831 21.96 14.1428C21.96 19.7099 17.4471 24.2228 11.88 24.2228C6.31302 24.2228 1.80005 19.7099 1.80005 14.1428C1.80005 8.5758 6.31302 4.06283 11.88 4.06283ZM11.88 7.26283C12.8579 7.26283 13.8079 7.46725 14.6822 7.85757C14.9242 7.96564 15.0328 8.24949 14.9248 8.49156C14.8167 8.73362 14.5329 8.84225 14.2908 8.73418C13.5391 8.39857 12.7224 8.22283 11.88 8.22283C8.61052 8.22283 5.96005 10.8733 5.96005 14.1428C5.96005 17.4124 8.61052 20.0628 11.88 20.0628C15.1496 20.0628 17.8 17.4124 17.8 14.1428C17.8 13.3621 17.6491 12.6032 17.3594 11.8971C17.2587 11.6519 17.376 11.3715 17.6212 11.2708C17.8665 11.1702 18.1469 11.2874 18.2475 11.5327C18.5845 12.3539 18.76 13.2366 18.76 14.1428C18.76 17.9426 15.6798 21.0228 11.88 21.0228C8.08033 21.0228 5.00005 17.9426 5.00005 14.1428C5.00005 10.3431 8.08033 7.26283 11.88 7.26283ZM11.88 10.4628C12.1451 10.4628 12.36 10.6777 12.36 10.9428C12.36 11.2079 12.1451 11.4228 11.88 11.4228C10.3778 11.4228 9.16005 12.6406 9.16005 14.1428C9.16005 15.645 10.3778 16.8628 11.88 16.8628C13.3823 16.8628 14.6 15.645 14.6 14.1428C14.6 13.8777 14.815 13.6628 15.08 13.6628C15.3451 13.6628 15.56 13.8777 15.56 14.1428C15.56 16.1752 13.9125 17.8228 11.88 17.8228C9.84764 17.8228 8.20005 16.1752 8.20005 14.1428C8.20005 12.1104 9.84764 10.4628 11.88 10.4628ZM20.5681 10.8707C20.4659 10.9729 20.3242 11.0227 20.1827 11.0091L20.1123 10.997L16.5853 10.1156L12.5395 14.1622C12.352 14.3497 12.0481 14.3497 11.8606 14.1622C11.6902 13.9918 11.6747 13.7252 11.8142 13.5373L11.8606 13.4834L16.0343 9.30915L15.2375 6.12225C15.2025 5.98205 15.2327 5.83489 15.3171 5.72063L15.3638 5.66643L19.8893 1.14094C20.1366 0.893608 20.5482 0.987886 20.6733 1.29888L20.6943 1.36394L21.3508 3.99267L22.7406 2.60342C22.9281 2.41597 23.232 2.41597 23.4195 2.60342C23.5899 2.77383 23.6054 3.0405 23.4659 3.22841L23.4195 3.28225L21.9031 4.79779L24.8706 5.54017C25.1885 5.61966 25.3235 5.97715 25.1728 6.24172L25.1361 6.29686L25.0936 6.34525L20.5681 10.8707ZM18.8484 7.85251L17.377 9.32387L20.0806 9.99965L21.5519 8.52841L18.8484 7.85251ZM17.7057 4.6813L16.2344 6.15254L16.8253 8.51811L18.2967 7.04675L17.7057 4.6813ZM21.1114 5.58947L19.64 7.06083L22.3438 7.73694L23.8146 6.26616L21.1114 5.58947ZM19.968 2.41949L18.4972 3.89028L19.0884 6.25507L20.5597 4.78371L19.968 2.41949Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_12853_382">
                                        <rect width="25.6" height="25.6" fill="white" transform="translate(0.200195 0.200012)"/>
                                        </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    <h4 class="Option-text">SIEM detections <br>optimization</h4>
                                  </div>
                                </div>
                                <div class="option-item">
                                  <input type="checkbox" name="SecOps metrics improvement" value="SecOps metrics improvement">
                                  <div class="option-content">
                                    <div class="checkbox">
                                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                                      </svg>
                                    </div>
                                    <div class="option-icon">
                                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9999 14.6C16.1319 14.6 13.7999 16.932 13.7999 19.8C13.7999 22.668 16.1319 25 18.9999 25C21.8679 25 24.1999 22.668 24.1999 19.8C24.1999 16.932 21.8679 14.6 18.9999 14.6ZM18.9999 24.2C16.5719 24.2 14.5999 22.228 14.5999 19.8C14.5999 17.372 16.5719 15.4 18.9999 15.4C21.4279 15.4 23.3999 17.372 23.3999 19.8C23.3999 22.228 21.4279 24.2 18.9999 24.2Z" fill="white"/>
                                        <path d="M20.3167 19.1989H20.2605V18.5805C20.2605 17.9284 19.7321 17.4 19.08 17.4C18.4279 17.4 17.8995 17.9284 17.8995 18.5805V19.1989H17.8432C17.3795 19.1989 17 19.5784 17 20.0421V21.1664C17 21.6302 17.3795 22.0097 17.8432 22.0097H20.3167C20.7805 22.0097 21.16 21.6302 21.16 21.1664V20.0421C21.16 19.5784 20.7805 19.1989 20.3167 19.1989ZM18.4616 18.5805C18.4616 18.2404 18.7399 17.9622 19.08 17.9622C19.4201 17.9622 19.6984 18.2404 19.6984 18.5805V19.1989H18.4616V18.5805ZM20.5978 21.1664C20.5978 21.321 20.4713 21.4475 20.3167 21.4475H17.8432C17.6886 21.4475 17.5622 21.321 17.5622 21.1664V20.0421C17.5622 19.8875 17.6886 19.7611 17.8432 19.7611H20.3167C20.4713 19.7611 20.5978 19.8875 20.5978 20.0421V21.1664Z" fill="white"/>
                                        <path d="M19.5299 20.3232H18.6304C18.4759 20.3232 18.3494 20.4497 18.3494 20.6043C18.3494 20.7589 18.4759 20.8854 18.6304 20.8854H19.5299C19.6845 20.8854 19.811 20.7589 19.811 20.6043C19.811 20.4497 19.6845 20.3232 19.5299 20.3232Z" fill="white"/>
                                        <path d="M13.0039 23.4H2.59993V1.8H19.3999V12.452C19.3999 12.672 19.5799 12.852 19.7999 12.852C20.0199 12.852 20.1999 12.672 20.1999 12.452V1.4C20.1999 1.18 20.0199 1 19.7999 1H2.19993C1.97993 1 1.79993 1.18 1.79993 1.4V23.8C1.79993 24.02 1.97993 24.2 2.19993 24.2H13.0039C13.2239 24.2 13.4039 24.02 13.4039 23.8C13.4039 23.58 13.2239 23.4 13.0039 23.4Z" fill="white"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.484 13H12.6506L12.6621 12.9961H4.99528C4.78444 12.9961 4.61194 12.8236 4.61194 12.6128V4.17933C4.61194 3.96849 4.78444 3.79599 4.99528 3.79599C5.20611 3.79599 5.37862 3.96849 5.37862 4.17933V8.3654L8.591 5.79702C8.60623 5.78484 8.62145 5.7775 8.6386 5.76923L8.65234 5.76252C8.65809 5.7606 8.66384 5.75677 8.66959 5.75294C8.67534 5.7491 8.68109 5.74527 8.68684 5.74335C8.729 5.72802 8.775 5.71652 8.82101 5.71652H8.82484C8.82867 5.71652 8.83251 5.71748 8.83634 5.71844C8.84017 5.7194 8.84401 5.72035 8.84784 5.72035C8.88617 5.72419 8.92067 5.73185 8.95517 5.74335L9.00117 5.76635C9.01267 5.77402 9.04334 5.78552 9.04334 5.78552L12.5892 8.26573L16.1965 3.93783C16.1984 3.93591 16.2012 3.93399 16.2041 3.93208C16.207 3.93016 16.2099 3.92824 16.2118 3.92633C16.2271 3.90716 16.2501 3.89182 16.2731 3.87649C16.2923 3.86116 16.3115 3.84966 16.3306 3.83816C16.3424 3.83108 16.3557 3.82836 16.3695 3.82552C16.3781 3.82375 16.387 3.82194 16.3958 3.81899C16.4226 3.81132 16.4495 3.80366 16.4763 3.80366H16.4916C16.4989 3.80366 16.5061 3.80622 16.5137 3.80893C16.5223 3.81195 16.5313 3.81516 16.5415 3.81516C16.5683 3.81899 16.5913 3.82282 16.6181 3.83049C16.6411 3.84199 16.6641 3.85349 16.6871 3.86882C16.6922 3.87138 16.6974 3.87351 16.7025 3.87564C16.7127 3.8799 16.7229 3.88416 16.7331 3.89182L16.7446 3.90333C16.7638 3.91866 16.7791 3.94166 16.7945 3.96466C16.8002 3.97424 16.8069 3.98383 16.8136 3.99341C16.8203 4.00299 16.827 4.01258 16.8328 4.02216C16.8399 4.03396 16.8426 4.04722 16.8454 4.06103C16.8472 4.06965 16.849 4.07849 16.852 4.08733C16.8596 4.11416 16.8673 4.141 16.8673 4.16783V4.18316V12.6166C16.8673 12.8275 16.6948 13 16.484 13ZM12.2672 8.98257L11.1172 8.17756L10.3505 7.64089L9.20051 6.83587V12.2333H10.3505H11.1172H12.2672V8.98257ZM14.1839 7.54122L13.0339 8.92124V12.2333H14.1839H14.9506H16.1006V5.24118L14.9506 6.6212L14.1839 7.54122ZM5.36712 9.35058V12.2333H6.51714H6.59301H7.28381H8.43383V6.89721L5.36712 9.35058Z" fill="white"/>
                                        <path d="M11.8 15.4854H4.99998C4.77998 15.4854 4.59998 15.6654 4.59998 15.8854C4.59998 16.1054 4.77998 16.2854 4.99998 16.2854H11.8C12.02 16.2854 12.2 16.1054 12.2 15.8854C12.2 15.6654 12.02 15.4854 11.8 15.4854Z" fill="white"/>
                                        <path d="M10.8 17.7854H4.99998C4.77998 17.7854 4.59998 17.9654 4.59998 18.1854C4.59998 18.4054 4.77998 18.5854 4.99998 18.5854H10.8C11.02 18.5854 11.2 18.4054 11.2 18.1854C11.2 17.9654 11.02 17.7854 10.8 17.7854Z" fill="white"/>
                                        <path d="M9.79998 20.0854H4.99998C4.77998 20.0854 4.59998 20.2654 4.59998 20.4854C4.59998 20.7054 4.77998 20.8854 4.99998 20.8854H9.79998C10.02 20.8854 10.2 20.7054 10.2 20.4854C10.2 20.2654 10.02 20.0854 9.79998 20.0854Z" fill="white"/>
                                      </svg>
                                    </div>
                                    <h4 class="Option-text">SecOps metrics <br>improvement</h4>
                                  </div>
                                </div>
                                <div class="option-item">
                                  <input type="checkbox" name="MITRE coverage uplevel" value="MITRE coverage uplevel">
                                  <div class="option-content">
                                    <div class="checkbox">
                                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0325 0.407487C10.9627 0.337191 10.8798 0.281395 10.7884 0.243318C10.697 0.205242 10.599 0.185638 10.5 0.185638C10.401 0.185638 10.3029 0.205242 10.2115 0.243318C10.1201 0.281395 10.0372 0.337191 9.96746 0.407487L4.37996 6.00249L2.03246 3.64749C1.96007 3.57756 1.87462 3.52257 1.78097 3.48567C1.68733 3.44877 1.58734 3.43067 1.4867 3.43241C1.38607 3.43415 1.28676 3.4557 1.19445 3.49582C1.10214 3.53594 1.01864 3.59385 0.948712 3.66624C0.878783 3.73863 0.823798 3.82408 0.786895 3.91773C0.749992 4.01137 0.731894 4.11136 0.733635 4.212C0.735376 4.31263 0.756922 4.41194 0.797042 4.50425C0.837162 4.59656 0.895071 4.68006 0.967462 4.74999L3.84746 7.62999C3.91718 7.70028 4.00014 7.75608 4.09153 7.79416C4.18292 7.83223 4.28095 7.85184 4.37996 7.85184C4.47897 7.85184 4.577 7.83223 4.6684 7.79416C4.75979 7.75608 4.84274 7.70028 4.91246 7.62999L11.0325 1.50999C11.1086 1.43976 11.1693 1.35452 11.2109 1.25964C11.2525 1.16477 11.2739 1.06231 11.2739 0.958737C11.2739 0.855161 11.2525 0.752707 11.2109 0.657832C11.1693 0.562958 11.1086 0.477719 11.0325 0.407487Z" fill="#031263"/>
                                      </svg>
                                    </div>
                                    <div class="option-icon">
                                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.9249 5.34995H2.17493C1.96793 5.34995 1.79993 5.18195 1.79993 4.97495V2.72495C1.79993 2.1047 2.30468 1.59995 2.92493 1.59995H23.1749C23.7952 1.59995 24.2999 2.1047 24.2999 2.72495V4.97495C24.2999 5.18195 24.1319 5.34995 23.9249 5.34995ZM2.54993 4.59995H23.5499V2.72495C23.5499 2.5187 23.3812 2.34995 23.1749 2.34995H2.92493C2.71868 2.34995 2.54993 2.5187 2.54993 2.72495V4.59995Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M6.67493 3.84995C6.88203 3.84995 7.04993 3.68205 7.04993 3.47495C7.04993 3.26784 6.88203 3.09995 6.67493 3.09995C6.46782 3.09995 6.29993 3.26784 6.29993 3.47495C6.29993 3.68205 6.46782 3.84995 6.67493 3.84995Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M5.17493 3.84995C5.38203 3.84995 5.54993 3.68205 5.54993 3.47495C5.54993 3.26784 5.38203 3.09995 5.17493 3.09995C4.96782 3.09995 4.79993 3.26784 4.79993 3.47495C4.79993 3.68205 4.96782 3.84995 5.17493 3.84995Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M3.67493 3.84995C3.88203 3.84995 4.04993 3.68205 4.04993 3.47495C4.04993 3.26784 3.88203 3.09995 3.67493 3.09995C3.46782 3.09995 3.29993 3.26784 3.29993 3.47495C3.29993 3.68205 3.46782 3.84995 3.67493 3.84995Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M5.92493 9.09995H3.67493C3.46793 9.09995 3.29993 8.93195 3.29993 8.72495C3.29993 8.51795 3.46793 8.34995 3.67493 8.34995H5.92493C6.13193 8.34995 6.29993 8.51795 6.29993 8.72495C6.29993 8.93195 6.13193 9.09995 5.92493 9.09995Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M8.17493 7.59995H3.67493C3.46793 7.59995 3.29993 7.43195 3.29993 7.22495C3.29993 7.01795 3.46793 6.84995 3.67493 6.84995H8.17493C8.38193 6.84995 8.54993 7.01795 8.54993 7.22495C8.54993 7.43195 8.38193 7.59995 8.17493 7.59995Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M14.9249 21.0999H2.92493C2.30468 21.0999 1.79993 20.5952 1.79993 19.9749V2.72495C1.79993 2.1047 2.30468 1.59995 2.92493 1.59995H23.1749C23.7952 1.59995 24.2999 2.1047 24.2999 2.72495V18.0999C24.2999 18.3069 24.1319 18.4749 23.9249 18.4749C23.7179 18.4749 23.5499 18.3069 23.5499 18.0999V2.72495C23.5499 2.51795 23.3812 2.34995 23.1749 2.34995H2.92493C2.71868 2.34995 2.54993 2.51795 2.54993 2.72495V19.9749C2.54993 20.1819 2.71868 20.3499 2.92493 20.3499H14.9249C15.1319 20.3499 15.2999 20.5179 15.2999 20.7249C15.2999 20.9319 15.1319 21.0999 14.9249 21.0999Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M13.7999 18.8499C10.4917 18.8499 7.79993 16.1582 7.79993 12.8499C7.79993 9.5417 10.4917 6.84995 13.7999 6.84995C17.1082 6.84995 19.7999 9.5417 19.7999 12.8499C19.7999 16.1582 17.1082 18.8499 13.7999 18.8499ZM13.7999 7.59995C10.9057 7.59995 8.54993 9.9557 8.54993 12.8499C8.54993 15.7442 10.9057 18.0999 13.7999 18.0999C16.6942 18.0999 19.0499 15.7442 19.0499 12.8499C19.0499 9.9557 16.6942 7.59995 13.7999 7.59995Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M19.0041 18.0541C19.0768 17.9814 19.1601 17.9244 19.2471 17.8749C19.2343 17.7991 19.2058 17.7264 19.1481 17.6679L18.0876 16.6066C17.9413 16.4604 17.7036 16.4604 17.5573 16.6066C17.4111 16.7536 17.4111 16.9906 17.5573 17.1376L18.6178 18.1981C18.6756 18.2566 18.7491 18.2844 18.8241 18.2964C18.8751 18.2101 18.9321 18.1269 19.0041 18.0541Z" fill="white" stroke="white" stroke-width="0.16"/>
                                        <path d="M19.7999 18.0999C19.9919 18.0999 20.1839 18.1734 20.3302 18.3197L23.3302 21.3197C23.6234 21.6129 23.6234 22.0869 23.3302 22.3802C23.1839 22.5264 22.9919 22.5999 22.7999 22.5999C22.6079 22.5999 22.4159 22.5264 22.2697 22.3802L19.2697 19.3802C18.9764 19.0869 18.9764 18.6129 19.2697 18.3197C19.4159 18.1734 19.6079 18.0999 19.7999 18.0999ZM19.7999 17.3499C19.3994 17.3499 19.0229 17.5059 18.7394 17.7894C18.4559 18.0729 18.2999 18.4494 18.2999 18.8499C18.2999 19.2504 18.4559 19.6269 18.7394 19.9104L21.7394 22.9104C22.0229 23.1939 22.3994 23.3499 22.7999 23.3499C23.2004 23.3499 23.5769 23.1939 23.8604 22.9104C24.1439 22.6269 24.2999 22.2504 24.2999 21.8499C24.2999 21.4494 24.1439 21.0729 23.8604 20.7894L20.8604 17.7894C20.5769 17.5059 20.2004 17.3499 19.7999 17.3499Z" fill="white" stroke="white" stroke-width="0.16"/>
                                      </svg>
                                    </div>
                                    <h4 class="Option-text">MITRE <br>coverage uplevel</h4>
                                  </div>
                                </div>
                              </div>
                              <div class="step-error"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/frame_6.svg" alt="Error Icon">Please select at least one option.</div>
                            </div>
                            <button class="step-button">Next<img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/4002/Icon-Right.svg" alt="Right Arrow"></button>
                          </div>
                          <div class="form-step step_2">
                            <div class="step-header">
                              <h5 class="step-number">Step 2</h5>
                              <h2 class="step-heading">Get pricing</h2>
                              <p class="step-question">How many employees do you have?</p>
                            </div>
                            <div class="step-content">
                              <div class="option-box">
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="Less than 100">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text"><100</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="100-999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">100-999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="1000-2999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">1,000-2,999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="3000-4999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">3,000-4,999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="5000-9999">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">5,000-9,999</h4>
                                  </div>
                                </div>
                                <div class="radio-option-item">
                                  <input type="radio" name="employees" value="More than 10000">
                                  <div class="option-content">
                                    <div class="radio">
                                      <span class="radio-dot"></span>
                                    </div>
                                    <h4 class="Option-text">10,000+</h4>
                                  </div>
                                </div>
                              </div>
                              <div class="step-error"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/frame_6.svg" alt="Error Icon">Please select at least one option.</div>
                            </div>
                            <button class="step-button">Next<img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/4002/Icon-Right.svg" alt="Right Arrow"></button>
                          </div>
                          <div class="form-step step_3">
                            <div class="step-header">
                              <h5 class="step-number">Step 3</h5>
                              <h2 class="step-heading">Get pricing</h2>
                            </div>
                            <div class="step-content"></div>
                          </div>
                        </div>
                        <p class="form-footer">This site is protected by reCAPTCHA  and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
                      </div>
                    </div>`);

        document.querySelector('#hero-section .row.hero').insertAdjacentHTML('afterend', `
                    <div class="hero-client-logos">
                        <div class="container">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275521.svg" alt="Visa" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275522.svg" alt="Uber" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275523.svg" alt="Markel" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275524.svg" alt="Carter's" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275525.svg" alt="Doordash" class="client-logo" />
                        </div>  
                    </div>`);

        //Form internal code
        waitForElm('.spz-3003  form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
          document.querySelector('.spz-3003 .spz-form-baseline .Questions-block .form-step.step_3 .step-content').appendChild(document.querySelector('.spz-3003 #hero-section  form.mktoForm'));
          formModify();
        });

        const checkboxes = document.querySelectorAll('.spz-3003 .spz-form-baseline .Questions-block .step-content input');
        checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener('click', function () {
            const stepContent = checkbox.closest('.step-content');
            if (stepContent && stepContent.classList.contains('error')) {
              stepContent.classList.remove('error', 'show-error');
            }
          });
        });

        document.querySelectorAll('.spz-3003 .spz-form-baseline .Questions-block .step-button').forEach(button => {
          button.addEventListener('click', function () {
            const formBaseline = document.querySelector('.spz-3003 .spz-form-baseline');
            const logoSection = document.querySelector('.spz-3003 .hero-client-logos');
            const currentStep = this.closest('.form-step');
            const stepContent = this.closest('.form-step').querySelector('.step-content');
            const checkboxes = stepContent.querySelectorAll('input');
            const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

            if (isChecked) {
              var step = false;
              if (document.querySelector('.step_1 input[type="checkbox"]:checked') !== null) {
                step = true;
              } else if (document.querySelector('.step_1 input[name="Cloud security"]:checked') !== null) {
                step = true;
              }
              if (step) {
                const nextStep = currentStep.nextElementSibling;
                if (nextStep && nextStep.classList.contains('form-step')) {
                  currentStep.style.display = 'none';
                  nextStep.style.display = 'block';

                  // Update the class of the current step number on spz-form-baseline
                  const currentStepNumber = nextStep.className.match(/step_(\d+)/)[1];
                  formBaseline.className = formBaseline.className.replace(/current_step_\d+/, '');
                  logoSection.className = logoSection.className.replace(/current_step_\d+/, '');
                  formBaseline.classList.add(`current_step_${currentStepNumber}`);
                  logoSection.classList.add(`current_step_${currentStepNumber}`);
                }

              }
            } else {
              stepContent.classList.add('error', 'show-error');
              // setTimeout(() => {
              //     stepContent.classList.remove('show-error');
              // }, 3000);
            }
          });
        });

        // Initial step visibility and setting initial class
        document.querySelectorAll('.spz-3003 .spz-form-baseline .Questions-block .form-step').forEach((step, index) => {
          const formBaseline = document.querySelector('.spz-3003 .spz-form-baseline');
          if (index === 0) {
            step.style.display = 'block';
          } else {
            step.style.display = 'none';
          }
        });

        //second section updates
        document.querySelectorAll('#stats-2-col .col.stats .single-stat a')[0].innerHTML = `<div class="gartner-wrapper ss-card"><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/g2_crowd_7.svg" alt="Gartner Insights"></div><div class="google-rating"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/stars_2.svg" alt="Rating"></div>`;

        document.querySelectorAll('#stats-2-col .col.stats .single-stat a')[1].innerHTML = `<div class="g2-wrapper ss-card"><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/g2_crowd_4.svg" alt="Gartner Insights"></div><div class="google-rating"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/stars_2.svg" alt="Rating"></div>
                <picture>`;
        document.querySelectorAll('#stats-2-col .col.stats .single-stat')[2].innerHTML = `<picture>
                    <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/nps_75.svg">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/3003/nps-mobile.svg" alt="Customer NPS 75">
                    </picture>`;
      });
    }
  }
});

function formModify() {
  // Unwrap all child elemnts of mktoFormRow
  var mktoForm = document.querySelector('.mktoForm');
  var mktoFormRows = document.querySelectorAll('.mktoFormRow');
  mktoFormRows.forEach(function (row) {
    while (row.firstChild) {
      mktoForm.insertBefore(row.firstChild, row);
    }
    row.remove();
  });

  // Add Unique class to each field in form as per the label name
  var form_fields = document.querySelectorAll('#hero-section .hero  form.mktoForm .mktoFormCol');
  form_fields.forEach(function (el) {
    if (el.querySelector('.mktoField:not([type="hidden"])')) {
      var label = el.querySelector('.mktoField:not([type="hidden"])').getAttribute('name').toLowerCase();
      el.classList.add(label);
    } else {
      el.classList.add('no-label');

      // Add class to privacy policy disclaimer
      if (el.querySelector('.mktoHtmlText') && el.querySelector('.mktoHtmlText').textContent.includes('Expel Online Privacy Policy')) {
        el.classList.add('spz-privacy-policy');
      }
    }
  });

  // Updating Form Labels
  document.querySelector('#LblEmail').textContent = "Business Email";
  document.querySelector('#LblCompany_Size__c').textContent = "Company Size";
  document.querySelector('#Company_Size__c').options[0].textContent = 'Select';
  document.querySelector('#LblPerson_Country__c').textContent = "Country";
  document.querySelector('#LblpersonNotestoAppend').textContent = "What would you like to see?";


  // Change Field Position
  var phone_field = document.querySelector('.mktoForm .phone');
  var lname_field = document.querySelector('.mktoForm .lastname');
  lname_field.after(phone_field);

  var disclaimer_field = document.querySelector('.mktoForm .mktoCaptchaDisclaimer');
  var form_button = document.querySelector('.mktoForm .mktoButtonRow');
  form_button.after(disclaimer_field);

  var isPartner_field = document.querySelector('.mktoForm .ispartner');
  var privacy_button = document.querySelector('.mktoForm .spz-privacy-policy');
  privacy_button.after(isPartner_field);

  // waitForElm('#hero-section form.mktoForm .mktoFormCol.ispartner').then(function (elm) {
  //     document.querySelector('#hero-section form.mktoForm .mktoFormCol.spz-privacy-policy').after(elm);
  // });

  // + Additional comments
  document.querySelector('.mktoForm .personnotestoappend .mktoFieldWrap').insertAdjacentHTML('beforebegin', `<a href="javascript:void(0);" class="comment-toggler">+ Additional comments</a>`);
  var comment_toggler = document.querySelector(".mktoForm .personnotestoappend .comment-toggler");
  comment_toggler.addEventListener("click", (event) => {
    comment_toggler.classList.add("show-field");
    document.querySelector('.mktoForm .personnotestoappend textarea.mktoField').focus();
  });


  focusFields();

  document.querySelector('#hero-section form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
    waitForElm('#hero-section .hero  form.mktoForm .mktoError').then(function (elm) {
      if (elm.parentNode.querySelector('#ValidMsgEmail')) {
        const targetNode = elm.parentNode;
        const config = { attributes: true, childList: true, subtree: true };
        const callback = (mutationList, observer) => {
          for (const mutation of mutationList) {
            if (mutation.type === "childList") {
              if (elm.parentNode === null && elm.style.display != 'none') {
                targetNode.classList.add('error');
              } else {
                elm.parentNode.classList.add('error');
              }
              observer.disconnect();
            } else if (mutation.type === "attributes") {
              if (elm.parentNode === null) {
                targetNode.classList.add('error');
              } else {
                elm.parentNode.classList.add('error');
              }
              observer.disconnect();
            }
          }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
      } else {
        let counterA = 0;
        const intervalIdA = setInterval(() => {
          if (document.querySelector('#hero-section .hero  form.mktoForm .mktoError #ValidMsgEmail') !== null) {
            document.querySelector('#hero-section .hero  form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
          }
          counterA++;
          if (counterA >= 10) {
            clearInterval(intervalIdA);
          }
        }, 500);
      }
    });
  });


  // Disable auto-fill for all input, select and textarea
  var inputFields = document.querySelectorAll('input, select, textarea');
  inputFields.forEach(function (field) {
    field.setAttribute('autocomplete', 'nofill');
  });
}

// On input focus add class on closest parent field class
function focusFields() {
  document.querySelectorAll(`#hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
    el.addEventListener('focus', function () {
      el.closest('.mktoFieldWrap').classList.add('active', 'typing');
      checkError(el);
    });
    el.addEventListener('blur', function () {
      el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
      checkError(el);
    });

    // add event listeners to the input element
    el.addEventListener('keypress', () => {
      checkError(el);
    });

    el.addEventListener('change', () => {
      checkError(el);
    });

    el.addEventListener('keydown', () => {
      checkError(el);
    });

    el.addEventListener('keyup', () => {
      checkError(el);
    });

    if (document.querySelectorAll('.mktoFormCol[data-zi-field-enriched="false"] .mktoField:not([type="hidden"])').length % 2 !== 0) {
      let lastField = document.querySelectorAll('.mktoFormCol[data-zi-field-enriched="false"] .mktoField:not([type="hidden"]').length - 1;
      document.querySelectorAll('.mktoFormCol[data-zi-field-enriched="false"]')[lastField].closest('.mktoFormCol').classList.add('full-width');
    }
    else {
      document.querySelectorAll('.mktoFormCol.mktoFormCol.full-width').forEach(function (el) {
        el.classList.remove('full-width');
      });
    }
  });
}

// Function to add .field-error class on closest parent .field class if .error is exist on input
function checkError(elem) {
  let timeBuffer = setInterval(() => {
    if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
      elem.closest('.mktoFieldWrap').classList.add('error');
    } else {
      elem.closest('.mktoFieldWrap').classList.remove('error');
    }
    if (elem && elem.value && (elem.value != '')) {
      elem.closest('.mktoFieldWrap').classList.add('filled');
    } else {
      elem.closest('.mktoFieldWrap').classList.remove('filled');
    }
  }, 100);

  setTimeout(() => {
    clearInterval(timeBuffer);
  }, 1000);

  waitForElm('#hero-section form.mktoForm .mktoFormCol .mktoField[data-zi-input-enriched="false"]').then(function (elm) {
    document.body.classList.add('form-expand');
  });

  if (elem.name == 'Person_Country__c') {
    waitForElm('#hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_27626_0 Privacy_Compliance_Explicit_Opt_In__c"]').then(function (elm) {
      document.querySelector('#hero-section form.mktoForm .mktoFormCol.spz-privacy-policy').after(elm);
    });
  }
}

// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
function hiddenValue(currentExperimentName, currentExperimentValue) {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  var ExistingExperimentName = getCookie('ExperimentName');
  var ExistingExperimentValue = getCookie('ExperimentValue');

  if (!ExistingExperimentName) {

    setCookie('ExperimentName', currentExperimentName, 1);
    setCookie('ExperimentValue', currentExperimentValue, 1);

  } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

    setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
    setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

  } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

    var existingNames = ExistingExperimentName.split(',');
    var existingValues = ExistingExperimentValue.split(',');

    var index = existingNames.indexOf(currentExperimentName);
    existingValues[index] = currentExperimentValue;

    setCookie('ExperimentName', existingNames.join(','), 1);
    setCookie('ExperimentValue', existingValues.join(','), 1);
  }
}
// Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)
// Use this and change value according to the experiment
hiddenValue('#3003 | Expel | Pricing | Qualifying Questions', 'variant_#3003');

// Generic Code
function waitForElm(selector) {
  return new Promise(function (resolve) {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(function (mutations) {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
  });
}