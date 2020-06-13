// ==UserScript==
// @name                KRUNKER Plus X
// @namespace           👑
// @author               [X]
// @description         Take over krunker [Auto Bhop]
// @version             2.5.2
// @supportURL          GG
// @match               ://krunker.io/
// @grant               none
// ==/UserScript==
(function() {
    'use strict';
     if (this.keyDown("Space")) {
         this.control.keys[this.control.jumpKey] = !this.control.keys[this.control.jumpKey];
         if (value === 2) {
             if (this.settings.isSliding) {
                 this.inputs[8] = 1;
                 return;
                 }
             if (this.me.yVel < -0.04 && this.me.canSlide) {
                 this.settings.isSliding = true;
                 setTimeout(() => {
                     this.settings.isSliding = false;
                     }, this.me.slidTime);
                 this.inputs[8] = 1;
             }
          }
       }
})();


==============================================================================================================================
"Just Test Version (I don't know It work)"
