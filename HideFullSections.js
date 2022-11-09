// ==UserScript==
// @name         Enhanced Registration Enhancer
// @namespace    elddc
// @version      1.0
// @description  Hide full sections
// @author       Elddc
// @match        https://banner.apps.uillinois.edu/StudentRegistrationSSB/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=illinois.edu
// @grant        none
// ==/UserScript==

const styles = document.createElement('style');
styles.innerHTML = `
tr:has(div.status-full) {
    display: none !important;
}
`;
document.head.appendChild(styles);
