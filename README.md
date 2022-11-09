# UIUC-registration-hide-full
A quick and easy userscript to hide full sections when registering for classes at UIUC using Enhanced Registration

---
This userscript just injects some CSS into the page. If you'd prefer to use your own CSS injector, use the following selector:

```css
tr:has(div.status-full) {
    display: none !important;
}
```
