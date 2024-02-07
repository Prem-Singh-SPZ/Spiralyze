var css_1012 = `
    body.spz-1012 #__next {
      display: none !important;
    }
    
    body.spz-1012 #__next>header.MuiPaper-root[data-csk-entry-type=header],
    body.spz-1012 #__next>div.MuiBox-root[data-testid=HeroSubpage],
    body.spz-1012 #__next>main[data-csk-entry-field=contents] {
      display: none !important;
    }
    
    body.spz-1012 .hero-section-1012 form fieldset:has(.hs-form-field[style="display: none;"]) {
      display: none;
    }
    
    body.spz-1012 .hero-right-section {
      width: calc(100% - 604px);
      background-color: transparent;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-left: 58px;
    }
    
    body.spz-1012 .review-wrapper-spz {
      border-radius: 0px 12px 12px 0px;
      padding: 32px 40px 40px 40px;
      max-width: 499px;
      min-height: 100%;
    }
    
    body.spz-1012 .mui-1ek5bku-Modal-modalContentContainer {
      max-width: 604px;
      width: 100%;
      left: 0;
      right: 0;
      position: static;
      overflow: visible;
      -webkit-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
      border-radius: 12px;
      height: auto;
      padding: 32px 40px 40px;
    }
    
    body.spz-1012 .form-wrap {
      position: fixed;
      z-index: 1300;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      max-width: 1258px;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    
      width: 100%;
      padding: 20px;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    
    .spz-1012 .review-wrapper-spz .quote-icon {
      width: 57px;
      height: 57px;
      -o-object-fit: contain;
      object-fit: contain;
    }
    
    .spz-1012 .review-wrapper-spz .author-info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 34px 0 20px;
    }
    
    .spz-1012 .review-wrapper-spz .author-info .author-img {
      width: 40.1%;
      max-width: 168px;
      margin-right: 24px;
      border-radius: 10px;
    }
    
    .spz-1012 .review-wrapper-spz .author-info .author-name .name {
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: -0.02em;
      margin: 0 0 8px 0;
      color: #000;
    }
    
    .spz-1012 .review-wrapper-spz .author-info .author-name .designation {
      font-family: 'Inter';
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0px;
      margin: 0;
      color: #000;
    }
    
    .spz-1012 .review-wrapper-spz .review-content {
      font-family: 'Inter';
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0px;
      color: #5B5B5B;
      margin: 0;
    }
    
    .spz-1012 form fieldset {
      gap: 12px !important;
      row-gap: 0 !important;
    }
    
    .spz-1012 form fieldset .hs-form-field {
      margin-bottom: 12px;
    }
    
    .spz-1012 .css-1l26vu-Form-root form {
      display: grid;
      gap: 0;
    }
    
    .spz-1012 .hs_demo_product_of_interest.hs-demo_product_of_interest.hs-fieldtype-checkbox {
      margin: 32px 0;
      margin-top: 20px;
    }
    
    /* Updated Css */
    .spz-1012 .form-wrap .hero-right-section .hero-content-title { font-size: 54px; font-weight: 900; line-height: 64px; letter-spacing: -0.02em; text-align: left; margin: 0; margin-bottom: 40px; color: #0C131A; }
    .spz-1012 .form-wrap .hero-right-section .hero-content-list-title { font-size: 24px; font-weight: 900; line-height: 28px; letter-spacing: 0px; text-align: left; margin: 0; margin-bottom: 20px; color: #0C131A; }
    .spz-1012 .form-wrap .hero-right-section .hero-content-list ul { margin: 0; padding: 0; list-style: none; }
    .spz-1012 .form-wrap .hero-right-section .hero-content-list ul li { font-family: Inter; font-size: 18px; font-weight: 800; line-height: 26px; letter-spacing: 0px; text-align: left; margin: 0; margin-bottom: 20px; padding-left: 32px; background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ3MDlfMTY2NCkiPgo8cGF0aCBkPSJNNSAwSDE1QzE1IDAgMjAgMCAyMCA1VjE1QzIwIDE1IDIwIDIwIDE1IDIwSDVDNSAyMCAwIDIwIDAgMTVWNUMwIDUgMCAwIDUgMFoiIGZpbGw9IiMxNzkzRkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy45NTUxIDYuNzMyNzZDMTQuMDQ1NSA2LjgwNTAyIDE0LjEyMDggNi44OTQ0MSAxNC4xNzY3IDYuOTk1OEMxNC4yMzI1IDcuMDk3MiAxNC4yNjc4IDcuMjA4NjEgMTQuMjgwNiA3LjMyMzY3QzE0LjI5MzQgNy40Mzg3MiAxNC4yODMzIDcuNTU1MTYgMTQuMjUxIDcuNjY2MzNDMTQuMjE4NyA3Ljc3NzUgMTQuMTY0OSA3Ljg4MTIxIDE0LjA5MjUgNy45NzE1NEw5LjM5NTY1IDEzLjg0MjVDOS4yNTI2MyAxNC4wMjEyIDkuMDQ1NjUgMTQuMTM3MiA4LjgxODU4IDE0LjE2NTlDOC41OTE1MSAxNC4xOTQ3IDguMzYyMTggMTQuMTMzOCA4LjE3OTE4IDEzLjk5NjRMNS44MzA3OCAxMi4yMzUxQzUuNzM4MjYgMTIuMTY1NyA1LjY2MDMxIDEyLjA3ODcgNS42MDEzOSAxMS45NzkyQzUuNTQyNDcgMTEuODc5NyA1LjUwMzcyIDExLjc2OTYgNS40ODczNyAxMS42NTUxQzUuNDcxMDEgMTEuNTQwNiA1LjQ3NzM3IDExLjQyNCA1LjUwNjA3IDExLjMxMkM1LjUzNDc3IDExLjIgNS41ODUyNiAxMS4wOTQ3IDUuNjU0NjUgMTEuMDAyMkM1LjcyNDAzIDEwLjkwOTYgNS44MTA5NyAxMC44MzE3IDUuOTEwNDggMTAuNzcyOEM2LjAwOTk5IDEwLjcxMzggNi4xMjAxNCAxMC42NzUxIDYuMjM0NjIgMTAuNjU4N0M2LjM0OTExIDEwLjY0MjQgNi40NjU3IDEwLjY0ODcgNi41Nzc3MyAxMC42Nzc0QzYuNjg5NzYgMTAuNzA2MSA2Ljc5NTA0IDEwLjc1NjYgNi44ODc1NiAxMC44MjZMOC41NTM3NSAxMi4wNzU0TDEyLjcxNTEgNi44NzEzMUMxMi43ODczIDYuNzgwNzkgMTIuODc2NiA2LjcwNTM5IDEyLjk3OCA2LjY0OTQzQzEzLjA3OTMgNi41OTM0NiAxMy4xOTA3IDYuNTU4MDMgMTMuMzA1OCA2LjU0NTE2QzEzLjQyMDggNi41MzIyOSAxMy41MzczIDYuNTQyMjQgMTMuNjQ4NSA2LjU3NDQzQzEzLjc1OTcgNi42MDY2MiAxMy44NjQ3IDYuNjYwNDIgMTMuOTU1MSA2LjczMjc2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80NzA5XzE2NjQiPgo8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="); background-repeat: no-repeat; background-position: 0 2px; background-size: auto; color: #0C131A; }
    .spz-1012 .form-wrap .hero-right-section .hero-content-list ul li:marker { display: none !important; }
    .spz-1012 .MuiModal-root.mui-79ws1d-MuiModal-root .css-1k588bk-Media-root-Modal-styledMedia { opacity: 0.5; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer { display: flex; flex-wrap: wrap; column-gap: 24px; row-gap: 24px; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label { padding: 0; margin: 0; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label .css-16maa1s-MuiButtonBase-root-MuiCheckbox-root { padding: 0; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label .css-16maa1s-MuiButtonBase-root-MuiCheckbox-root.Mui-checked + span { font-weight: 600; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label .css-198vr4a-MuiTypography-root { padding-left: 8px; font-family: Inter; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0.1px; text-align: left; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-child(1) { order: 1; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-child(2) { order: 3; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-child(3) { order: 2; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-child(4) { order: 4; }
    .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-child(5) { order: 5; }
    .spz-1012 .form-wrap button.css-1lx1tlz-MuiButtonBase-root-MuiIconButton-root-Modal-styledIconButton { position: absolute; top: 24px; left: 24px; }
    .spz-1012 .css-1l26vu-Form-root form fieldset .field.hs-form-field .input .hs-input { border-radius: 8px; height: 64px; padding-left: 12px; }
    .spz-1012 .css-1l26vu-Form-root form fieldset .field.hs-form-field .input select { background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljg4IDkuMjlMMTIgMTMuMTdMOC4xMTk5OCA5LjI5QzcuNzI5OTggOC45IDcuMDk5OTggOC45IDYuNzA5OTggOS4yOUM2LjMxOTk4IDkuNjggNi4zMTk5OCAxMC4zMSA2LjcwOTk4IDEwLjdMMTEuMyAxNS4yOUMxMS42OSAxNS42OCAxMi4zMiAxNS42OCAxMi43MSAxNS4yOUwxNy4zIDEwLjdDMTcuNjkgMTAuMzEgMTcuNjkgOS42OCAxNy4zIDkuMjlDMTYuOTEgOC45MSAxNi4yNyA4LjkgMTUuODggOS4yOVoiIGZpbGw9IiNCREJEQkQiLz4KPC9zdmc+Cg=="); background-position: right 12px center; background-size: auto; background-origin: border-box; background-repeat: no-repeat; }
    .spz-1012 div[id^="reactHubspotForm"] form button[type="submit"] { width: 100%; font-size: 16px; font-weight: 600; line-height: 24px; letter-spacing: 0em; text-align: left; padding: 18px; padding-left: 30px; border: none; border-radius: 12px; }
    .spz-1012 div[id^="reactHubspotForm"] form button[type="submit"] svg { margin-left: 24px; }
    .spz-1012 .css-1txh7dx-MuiTypography-root-Form-formMessage { margin-bottom: 32px !important; }
    .spz-1012 form fieldset .hs_demo_product_of_interest legend { font-size: 20px; font-weight: 600; line-height: 28px; letter-spacing: 0px; text-align: left; }
    .spz-1012 .hs_demo_product_of_interest.hs-demo_product_of_interest.hs-fieldtype-checkbox .css-76ezyl-MuiFormControl-root { margin-top: 20px; }
    .spz-1012 .hs_demo_product_of_interest.hs-demo_product_of_interest.hs-fieldtype-checkbox .css-12b3r6t-MuiTypography-root-Form-styledTypography { margin-top: 20px; display: block; width: 100%; font-size: 14px; font-weight: 500; line-height: 20px; letter-spacing: 0px; text-align: left; }
    body.spz-1012 .hero-right-section .hero-content-wrapper { margin-top: 22px; }
    
    @media(min-width: 1200px) {
        body.spz-1012 .form-wrap { max-width: initial; overflow: auto; width: 100%; height: 100%; align-items: center; transform: none; top: 0; left: 0; }
        body.spz-1012 .hero-right-section { max-width: 614px; }
        body.spz-1012 .mui-1ek5bku-Modal-modalContentContainer { max-height: initial; }
    }
    @media(max-width: 1199.98px) {
      .spz-1012 .review-wrapper-spz .author-info .author-img {
        margin-right: 12px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .name {
        font-size: 28px;
        line-height: 36px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .designation,
      .spz-1012 .review-wrapper-spz .review-content {
        font-size: 18px;
        line-height: 26px;
      }
    
      body.spz-1012 .form-wrap {
        max-height: 622px;
        min-height: 622px;
      }
    
      /* }
    
    @media (max-width: 1023.98px) { */
      .spz-1012 .review-wrapper-spz .author-info .author-img {
        margin-right: 24px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .name {
        font-size: 32px;
        line-height: 40px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .designation {
        font-size: 20px;
        line-height: 28px;
      }
    
      body.spz-1012 .mui-1ek5bku-Modal-modalContentContainer {
        width: 100%;
        border-radius: 12px;
        max-width: 100%;
        height: auto;
        max-height: 100%;
      }
    
      body.spz-1012 .hero-right-section {
        width: 100%;
        border-radius: 0 0 12px 12px;
        height: auto;
      }
    
      body.spz-1012 .form-wrap {
        max-height: 100%;
        padding: 152px 32px;
        max-width: 768px;
        position: static;
        transform: inherit;
        margin: 0 auto;
      }
    
      body.spz-1012 .review-wrapper-spz {
        max-width: 100%;
        min-height: auto;
      }
    
      .mui-79ws1d-MuiModal-root {
        position: static !important;
      }
    
      body.spz-1012 .MuiBox-root.mui-0 {
        display: none;
      }
    
      body.css-1qp6j59.spz-1012 {
        overflow: visible !important;
        padding: 0 !important;
        height: 100% !important;
        background-image: url('//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/1012/image_1.webp');
        background-size: cover;
        background-position: left top;
        background-repeat: no-repeat;
      }
      
      body.spz-1012 .hero-right-section { padding-left: 0; }
      body.spz-1012 .hero-right-section .hero-content-wrapper { padding: 32px 40px; margin: 0; }
      .spz-1012 .form-wrap .hero-right-section .hero-content-title { font-size: 42px; line-height: 48px; margin-bottom: 32px; }
    }
    
    @media(max-width: 767.98px) {
      body.spz-1012 .hero-section-1012 .review-wrapper-spz {
        padding: 28px 20px 30px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info {
        margin: 12px 0 20px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-img {
        margin-right: 12px;
        max-width: 100px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .name {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 7px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .designation {
        font-size: 18px;
        line-height: 26px;
      }
    
      .spz-1012 .review-wrapper-spz .review-content {
        font-size: 16px;
        line-height: 24px;
      }
    
      body.spz-1012 .form-wrap {
        padding: 98px 0;
        max-width: 328px;
      }
    
      body.spz-1012 .review-wrapper-spz {
        padding: 28px 20px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-img {
        margin-right: 12px;
        width: 100px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .name {
        font-size: 24px;
        line-height: 28px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info .author-name .designation {
        font-size: 18px;
        line-height: 26px;
      }
    
      .spz-1012 .review-wrapper-spz .author-info {
        margin: 13px 0 20px;
      }
    
      .spz-1012 .review-wrapper-spz .review-content {
        font-size: 16px;
        line-height: 24px;
      }
    
      .spz-1012 form fieldset {
        gap: 0 !important;
      }
      
      body.spz-1012 .mui-1ek5bku-Modal-modalContentContainer { padding: 28px 20px; min-height: 664px; }
      .spz-1012 .form-wrap button.css-1lx1tlz-MuiButtonBase-root-MuiIconButton-root-Modal-styledIconButton { top: 12px; left: 12px; }
      .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label .css-198vr4a-MuiTypography-root { font-size: 14px; line-height: 20px; letter-spacing: 0; }
      .spz-1012 form fieldset .hs_demo_product_of_interest legend { font-size: 18px; line-height: 26px; }
      body.spz-1012 .hero-right-section .hero-content-wrapper { padding: 32px 20px 0; }
      .spz-1012 .form-wrap .hero-right-section .hero-content-title { font-size: 24px; line-height: 28px; letter-spacing: 0px; margin-bottom: 20px; }
      .spz-1012 .form-wrap .hero-right-section .hero-content-list ul li { font-size: 16px; line-height: 24px; margin-bottom: 12px; }
      .spz-1012 .form-wrap .hero-right-section .hero-content-list-title { font-size: 20px; font-weight: 800; margin-bottom: 12px; }
      .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer { gap: 0; }
      .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label { margin-right: 24px; margin-bottom: 24px; }
      .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-child(2) { margin-right: 0; }
      .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-last-child(-n+2) { margin-bottom: 0; }
      .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:nth-child(4) { margin-right: 28px; max-width: 66px; }
    }
    
    @media(max-width: 359.98px)
    {
        .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label { margin-right: 24px !important; margin-bottom: 24px; }
        .spz-1012 div[id^="reactHubspotForm"] form .css-1f2wtwn-Form-inlineCheckBoxContainer label:last-child { margin-bottom: 0; }
    }
    
    .safari .form-wrap form fieldset .field.hs-form-field .input select.hs-input {
      background-color: #fff !important;
    }
`;
head = document.head || document.getElementsByTagName('head')[0],
style_1012 = document.createElement('style');
head.appendChild(style_1012);
style_1012.type = 'text/css';
style_1012.appendChild(document.createTextNode(css_1012));

(function () {
  function loadTest() {
    // Load Hubspot libs
    document.body.classList.add('spz-1012');
    const hubSpotJS = document.createElement('script');
    hubSpotJS.src = '//js.hsforms.net/forms/embed/v2.js';
    hubSpotJS.type = 'text/javascript';
    hubSpotJS.setAttribute('charset', 'utf-8');
    document.head.appendChild(hubSpotJS);

    //document.body.insertAdjacentHTML("afterbegin", pageContent());
    //document.querySelector('.MuiBox-root.css-1l26vu-Form-root').insertAdjacentHTML("afterend", pageContent());


    const hfInt = setInterval(() => {
      if (document.querySelectorAll('.form-wrap .mui-1ek5bku-Modal-modalContentContainer').length == 0 && document.querySelector('.MuiModal-root.mui-79ws1d-MuiModal-root .MuiBox-root.mui-0')) {
        clearInterval(hfInt);
        const existingDiv = document.querySelector('.MuiModal-root.mui-79ws1d-MuiModal-root .MuiBox-root.mui-0');
        const createDiv = document.createElement('div');
        createDiv.className = 'form-wrap';
        existingDiv.parentNode.insertBefore(createDiv, existingDiv.nextSibling);

        const modalContentDiv = document.querySelector('.mui-1ek5bku-Modal-modalContentContainer');
        createDiv.appendChild(modalContentDiv);

        document.querySelector('.form-wrap .mui-1ek5bku-Modal-modalContentContainer').insertAdjacentHTML('afterend', `<div class="hero-right-section">
                <div class="hero-content-wrapper">
                    <h2 class="hero-content-title">Get Compliant 80% Faster With Drata.</h2>
                    <div class="hero-content-list">
                        <h3 class="hero-content-list-title">Here's how:</h3>
                        <ul>
                            <li>85+ integrations to automate evidence collection</li>
                            <li>Live expert guidance from former auditors</li>
                            <li>Includes pre-mapped frameworks with required policies</li>
                        </ul>
                    </div>
                </div>
            </div>`);
            
        document.querySelector('.form-wrap button[aria-label="back"]').innerHTML = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 26L4 16M4 16L14 6M4 16H28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        
        let checkSubmitButton = setInterval(function(){
            if(document.querySelectorAll('div[id^="reactHubspotForm"] form .hs_submit button[type="submit"]').length > 1) {
                clearInterval(checkSubmitButton);
                document.querySelectorAll('div[id^="reactHubspotForm"] form .hs_submit button[type="submit"]').forEach(function(element, index, arr){
                    // console.log(element);
                    element.innerHTML = '<span>Get Started</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4L10 8L6 12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>';
                });
            }
        }, 500);
        // waitForElm('div[id^="reactHubspotForm"] form .hs_submit button[type="submit"]').then((form_cta_elm) => {
        //     document.querySelectorAll('div[id^="reactHubspotForm"] form .hs_submit button[type="submit"]').forEach(function(element, index, arr){
        //         console.log(element);
        //         element.innerHTML = '<span>Get Started</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4L10 8L6 12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>';
        //     });
        // });

        submitTestDetails();
      }
    }, 100);

    hubSpotJS.onload = function () {
      appendHubspotScript();
    }

    // const formInt = setInterval(() => {
    //   if (document.querySelectorAll('.hbspt-form form').length > 0 && document.querySelectorAll('.hs-form').length == 2) {
    //     clearInterval(formInt);
    //     document.body.classList.add('spz-1012');

    //     document.querySelector('.form-wrapper-spz').style.opacity = 1;

    //     appendInputLabel();

    //     // Set input label
    //     document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';
    //     document.querySelector('[name="source__inbound_demo_"]').setAttribute('placeholder', 'How did you hear about us?*');
    //     document.querySelector('label#label-demo_product_of_interest-429140d2-bd90-4a8b-a561-5d732c9bd514 + .hs-field-desc').innerHTML = 'What product(s) are you interested in?';

    //     // Set button label
    //     document.querySelector('.hs-button').addEventListener('click', function () {
    //       const err = setInterval(() => {
    //         checkError();
    //         clearInterval(err);
    //       }, 100);
    //     });

    //     // Add field-untouched class on select element
    //     document.querySelectorAll('select.hs-input').forEach(function (el) {
    //       if (el.options.length > 0) {
    //         el.closest('.field').classList.add('field-untouched');
    //       }
    //     });

    //     // Set focus on input
    //     focusFields();
    //     submitTestDetails();

    //     document.querySelector('.form-wrapper-spz .form-title-spz').insertAdjacentHTML('beforebegin', `<div class="back-to-home"><a href="javascript:void(0)" class="drata-home"><img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1697018085/drata/1005/frame.svg" alt="Back Arrow"></a>
    //     </div>`);

    //   }
    // }, 100);

    function forClearBitForms() {
      document.querySelectorAll('.form-wrapper-spz .hs-input').forEach(function (el) {
        if (el.closest('.hs-form-field[style*="display: none"]')) {
          el.closest('fieldset').classList.add('field-hidden');
        } else {
          el.closest('fieldset').classList.remove('field-hidden');
        }

        const hiddenFields = document.querySelectorAll('fieldset:not(.form-columns-3).field-hidden').length;
        if (hiddenFields % 2 == 0) {
          document.querySelector('.hs_source__inbound_demo_').closest('fieldset').classList.remove('full-width');
        } else {
          document.querySelector('.hs_source__inbound_demo_').closest('fieldset').classList.add('full-width');
        }
      });
    }

    setInterval(function () {
      forClearBitForms();
    }, 500);

    document.addEventListener('keyup', function (e) {
      if (e.target.classList.contains('hs-input')) {
        forClearBitForms();
      }
    });
  }

  function appendFavicon() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
        <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1681388733/drata/4001/System_Icons_open.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1686657672/drata/1005/Checkbox.svg" as="image">`
    );
  }

  appendFavicon();

  //Passing test details to hidden fields
  function submitTestDetails() {
    setTimeout(() => {
      if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input')) {
        document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '#1012__Variant');
      }
    }, 2000);
  }

  // Create input label with placeholder text
  function appendInputLabel() {
    document.querySelectorAll('.hbspt-form form .hs-input').forEach(function (el) {
      const label = document.createElement("label");
      label.innerHTML = el.placeholder;
      if (!el.hasAttribute('type') && el.options.length > 0) {
        label.innerHTML = el.options[0].text;
      }
      label.setAttribute('for', el.id);
      label.classList.add('hs-label-spz');
      if (label.innerHTML != '') {
        el.parentNode.insertBefore(label, el.nextSibling);
      }
    });
  }


  // On input focus add class on closest parent .field class
  function focusFields() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
      el.addEventListener('focus', function () {
        el.closest('.field').classList.add('field-focus');
        setTimeout(function () {
          el.closest('.field').classList.remove('field-error');
          el.closest('.field').classList.remove('field-untouched');
        }, 100);
      });

      el.addEventListener('blur', function () {
        el.closest('.field').classList.remove('field-focus');
        setTimeout(function () {
          checkError();
        }, 100);
      });

      if (el.tagName == 'SELECT') {
        el.addEventListener('change', function () {
          el.closest('.field').classList.remove('field-error');
        });
      }
    });
  }

  // Click on 'did you know email address' link in error message
  document.addEventListener("click", function (e) {
    const target = e.target.closest(".inputs-list label a");

    if (target) {
      checkError();
    }

    if (e.target.classList.contains('drata-home')) {
      document.querySelector('a[href="/"]').click();
    }
  });

  // Generic
  history.pushState = (function (f) {
    return function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('pushstate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.pushState);
  history.replaceState = (function (f) {
    return function replaceState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.replaceState);

  window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
  });
  window.addEventListener('locationchange', function () {
    url = location.href;
    urlCheck(url);
  });

  let url = location.href;
  urlCheck(url);
  function urlCheck(url) {
    let testURL = '';

    if (window.location.href.indexOf('https://drata.com/demo') > -1) {
      testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
      if (document.querySelectorAll('.form-wrap').length == 0) {
        loadTest();
      }
    } else {
      removeTest();
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

  function removeTest() {
    if (document.body.classList.contains('spz-1012')) {
      document.body.classList.remove('spz-1012');
    }
    if (document.querySelectorAll('.form-wrap').length > 0) {
      document.querySelector('.form-wrap').remove();
    }
  }

  function checkError() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
      if (el.closest('.field').querySelector('.error') != null) {
        el.closest('.field').classList.add('field-error');
      } else {
        el.closest('.field').classList.remove('field-error');
      }
    });
  }

  if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari');
  }

  // function pageContent() {
  //   return `

  // `;
  // }

  // Append hubspot script in '.form-wrapper-spz' div
  function appendHubspotScript() {
    const script = document.createElement('script');

    script.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "7817592", formId: "429140d2-bd90-4a8b-a561-5d732c9bd514", cssClass: "hs-form-spz", css: "", submitText: "Get Started", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });';
    if (document.querySelector('.form-wrapper-spz')) {
      document.querySelector('.form-wrapper-spz').appendChild(script);
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

})();