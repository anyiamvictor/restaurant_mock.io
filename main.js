(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="",e.append(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("p");return n.textContent="Welcome to De' Local Restaurant. Wer'e  not french so dont mind the name",t.classList.add("welcomemessage"),t.append(n),e.append(t),e}())};function t(e,t,n){let a=document.createElement("div"),o=document.createElement("h1"),c=document.createElement("p"),d=document.createElement("div"),i=document.createElement("img");return a.classList.add("menuitem"),o.id="menutitle",c.id="menuingredients",d.id="imagewrapper",o.textContent=e,c.textContent=t.join(" , "),i.src=n,i.alt=e,a.append(o),d.append(i),a.append(d),a.append(c),a}const n=function(){const e=document.getElementById("main");e.innerHTML="",e.append(function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p");return e.id="aboutid",t.textContent="credits",n.innerHTML="Thanks to <a href=https://unsplash.com/>Unsplash</a>  for their open licence to use their images and to the following individuals whose images i used in this little project.<br><br>\n    1.Prithivaraj A<br>\n    2.anh nguyen<br>\n    3.chad montano<br>\n    4.eiliv aceron",e.append(t),e.append(n),e}())};function a(e){document.querySelectorAll(".tabs").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const o=document.getElementById("content");o.append(function(){const e=document.createElement("header"),t=document.createElement("h1");return t.textContent="'De' Local Restaurant",t.classList.add("title"),e.append(t),e}()),o.append(function(){const o=document.createElement("nav"),c=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");return c.textContent="Home",d.textContent="Menu",i.textContent="Contact",s.textContent="About",c.classList.add("active"),c.setAttribute("id","home"),c.classList.add("tabs","clicked"),d.setAttribute("id","menu"),d.classList.add("tabs","clicked"),i.setAttribute("id","contact"),i.classList.add("tabs","clicked"),s.setAttribute("id","about"),s.classList.add("tabs","clicked"),c.addEventListener("click",(function(){const t=document.getElementById("home");a(t),e(),console.log(t)})),d.addEventListener("click",(function(){a(d),function(){const e=document.getElementById("main");e.textContent="";let n=document.createElement("div");n.classList.add("menuContainer"),n.append(t("Egusi Soup",["melon","oil","meat"],"./egusi.jpeg")),n.append(t("Afang Soup",["Vegetable","meat","red oil","salt","etc"],"./afang.jpeg")),n.append(t(" Pizza",["Vegetable","white looking stuf","tomato","etc"],"./img4_chad-montano.jpg")),n.append(t("Vegetable Salad ",["Vegetable","more Vegetables","some juice"],"./img5_eiliv-aceron.jpg")),n.append(t("Vegetable Salad ",["egg"," Vegetables","tomatos","peas","some greens"],"./img3_anh-nguyen.jpg")),n.append(t(" desert ",["something brownish"," veggies","tomatos","ketchup"," greens"],"./img2_jay-wennington-N.jpg")),e.append(n)}(),console.log(this)})),i.addEventListener("click",(function(){a(this),function(){const e=document.getElementById("main");e.textContent="",e.append(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p"),n=document.createElement("p"),a=document.createElement("p");return t.textContent="Address: No. 23  Dream World Housing Estate",n.textContent="Phone: +234-5478-910",a.textContent="Email: delocalRez@instanceof.qualm",e.append(t),e.append(n),e.append(a),e}())}(),console.log(this)})),s.addEventListener("click",(function(){a(s),n(),console.log(this)})),o.append(c),o.append(d),o.append(i),o.append(s),o}()),o.append(function(){const e=document.createElement("main");return e.setAttribute("id","main"),e}()),o.append(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("p");return n.classList.add("paragraph"),t.id="aboutdiv",n.innerHTML=` Created with ❤️ by <a href=https://github.com/anyiamvictor>AnyiamVictor</a> Copyright &copy ${(new Date).getFullYear()}. For more details check the <div id='aboutdiv'>About Page</div> `,e.classList.add("footer"),e.append(n),e}()),e()}();const o=document.getElementById("aboutdiv");null!==o&&o.addEventListener("click",n)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2suaW8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21vY2suaW8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21vY2suaW8vLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9tb2NrLmlvLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfbW9jay5pby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X21vY2suaW8vLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb21lKCkgeyAgXHJcbiAgICBjb25zdCBob21lQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHdlbGNvbWVNc2dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyAgICBcclxuXHJcbiAgICB3ZWxjb21lTXNnVGV4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBEZScgTG9jYWwgUmVzdGF1cmFudC4gV2VyJ2UgIG5vdCBmcmVuY2ggc28gZG9udCBtaW5kIHRoZSBuYW1lXCJcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnd2VsY29tZW1lc3NhZ2UnKTtcclxuICAgIHRleHQuYXBwZW5kKHdlbGNvbWVNc2dUZXh0KTtcclxuICAgIGhvbWVCb2R5LmFwcGVuZCh0ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gaG9tZUJvZHk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGNvbnRlbnRXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoY3JlYXRlSG9tZSgpKTtcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lIDsiLCJcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtVGl0bGUsIGluZ3JlZGllbnQsIGltYWdlKSB7XHJcbiAgICBcclxuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbGV0IG1lbnVJdGVtSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgaW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbWVudUl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgXHJcbm1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVpdGVtJyk7XHJcbm1lbnVJdGVtVGl0bGUuaWQgPSAnbWVudXRpdGxlJztcclxuICAgIG1lbnVJdGVtSW5ncmVkaWVudHMuaWQgPSAnbWVudWluZ3JlZGllbnRzJztcclxuICAgIGltYWdlV3JhcHBlci5pZD0naW1hZ2V3cmFwcGVyJ1xyXG4gICAgbWVudUl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW1UaXRsZTtcclxuICAgIG1lbnVJdGVtSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpbmdyZWRpZW50LmpvaW4oJyAsICcpO1xyXG4gICAgbWVudUl0ZW1JbWFnZS5zcmMgPSBpbWFnZTtcclxuICAgIG1lbnVJdGVtSW1hZ2UuYWx0ID0gaXRlbVRpdGxlO1xyXG5cclxuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SXRlbVRpdGxlKTtcclxuICAgIGltYWdlV3JhcHBlci5hcHBlbmQobWVudUl0ZW1JbWFnZSk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmQoaW1hZ2VXcmFwcGVyKTsgICAgXHJcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUl0ZW1JbmdyZWRpZW50cyk7XHJcbiAgICByZXR1cm4gbWVudUl0ZW1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7ICAgIFxyXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZU1lbnVJdGVtKCdFZ3VzaSBTb3VwJywgWydtZWxvbicsICdvaWwnLCAnbWVhdCddLCAnLi9lZ3VzaS5qcGVnJykpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlTWVudUl0ZW0oJ0FmYW5nIFNvdXAnLCBbJ1ZlZ2V0YWJsZScsICdtZWF0JywgJ3JlZCBvaWwnLCAnc2FsdCcsICdldGMnXSwgJy4vYWZhbmcuanBlZycpKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZU1lbnVJdGVtKCcgUGl6emEnLCBbJ1ZlZ2V0YWJsZScsICd3aGl0ZSBsb29raW5nIHN0dWYnLCAndG9tYXRvJywgJ2V0YyddLCAnLi9pbWc0X2NoYWQtbW9udGFuby5qcGcnKSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChjcmVhdGVNZW51SXRlbSgnVmVnZXRhYmxlIFNhbGFkICcsIFsnVmVnZXRhYmxlJywgJ21vcmUgVmVnZXRhYmxlcycsICdzb21lIGp1aWNlJ10sICcuL2ltZzVfZWlsaXYtYWNlcm9uLmpwZycpKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGNyZWF0ZU1lbnVJdGVtKCdWZWdldGFibGUgU2FsYWQgJywgWydlZ2cnLCAnIFZlZ2V0YWJsZXMnLCd0b21hdG9zJywncGVhcycsICdzb21lIGdyZWVucyddLCAnLi9pbWczX2FuaC1uZ3V5ZW4uanBnJykpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlTWVudUl0ZW0oJyBkZXNlcnQgJywgWydzb21ldGhpbmcgYnJvd25pc2gnLCAnIHZlZ2dpZXMnLCd0b21hdG9zJywna2V0Y2h1cCcsICcgZ3JlZW5zJ10sICcuL2ltZzJfamF5LXdlbm5pbmd0b24tTi5qcGcnKSk7XHJcblxyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobWVudUNvbnRhaW5lcilcclxuICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJmdW5jdGlvbiBjcmVhdGVDcmVkaXRzKCl7XHJcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3JlZGl0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhYm91dENvbnRhaW5lci5pZCA9ICdhYm91dGlkJztcclxuICAgIFxyXG5cclxuICAgIGNyZWRpdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiY3JlZGl0c1wiO1xyXG4gICAgY3JlZGl0cy5pbm5lckhUTUwgPSBgVGhhbmtzIHRvIDxhIGhyZWY9aHR0cHM6Ly91bnNwbGFzaC5jb20vPlVuc3BsYXNoPC9hPiAgZm9yIHRoZWlyIG9wZW4gbGljZW5jZSB0byB1c2UgdGhlaXIgaW1hZ2VzIGFuZCB0byB0aGUgZm9sbG93aW5nIGluZGl2aWR1YWxzIHdob3NlIGltYWdlcyBpIHVzZWQgaW4gdGhpcyBsaXR0bGUgcHJvamVjdC48YnI+PGJyPlxyXG4gICAgMS5Qcml0aGl2YXJhaiBBPGJyPlxyXG4gICAgMi5hbmggbmd1eWVuPGJyPlxyXG4gICAgMy5jaGFkIG1vbnRhbm88YnI+XHJcbiAgICA0LmVpbGl2IGFjZXJvbmA7XHJcblxyXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kKGNyZWRpdHNUaXRsZSk7XHJcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmQoY3JlZGl0cyk7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0Q29udGFpbmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kKGNyZWF0ZUNyZWRpdHMoKSk7XHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgbG9hZEFib3V0IGZyb20gJy4vYWJvdXQnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCInRGUnIExvY2FsIFJlc3RhdXJhbnRcIjtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7IFxyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSk7XHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBjb25zdCB0YWJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuXHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAgXHJcbiAgICBcclxuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7IFxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCd0YWJzJywgJ2NsaWNrZWQnKTsgXHJcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpOyBcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgndGFicycsJ2NsaWNrZWQnKTtcclxuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7IFxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCd0YWJzJywnY2xpY2tlZCcpOyBcclxuICAgIGFib3V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKTsgXHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCd0YWJzJywnY2xpY2tlZCcpOyAgXHJcblxyXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgIFxyXG4gICAgICAgIGNvbnN0IGhvbWVidG4gPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XHJcbiAgICAgICAgYWN0aXZhdGVCdXR0b24oaG9tZWJ0bik7XHJcbiAgICAgICAgbG9hZEhvbWUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhob21lYnRuKTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhY3RpdmF0ZUJ1dHRvbihtZW51KTsgICAgICBcclxuICAgICAgICBsb2FkTWVudSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhY3RpdmF0ZUJ1dHRvbih0aGlzKTtcclxuICAgICAgICBsb2FkQ29udGFjdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpOyAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFjdGl2YXRlQnV0dG9uKGFib3V0KTtcclxuICAgICAgICBsb2FkQWJvdXQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgIH0pXHJcbiAgICBcclxuXHJcbiAgICB0YWJXcmFwcGVyLmFwcGVuZChob21lKTtcclxuICAgIHRhYldyYXBwZXIuYXBwZW5kKG1lbnUpO1xyXG4gICAgdGFiV3JhcHBlci5hcHBlbmQoY29udGFjdCk7XHJcbiAgICB0YWJXcmFwcGVyLmFwcGVuZChhYm91dCk7XHJcblxyXG4gICAgcmV0dXJuIHRhYldyYXBwZXI7XHJcbiAgICBcclxufVxyXG5cclxuICBmdW5jdGlvbiBhY3RpdmF0ZUJ1dHRvbihidG4pIHtcclxuICAgICAgY29uc3QgdGFic0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJyk7XHJcblxyXG5cclxuICAgICAgdGFic0FsbC5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWIgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudENvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xyXG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgncGFyYWdyYXBoJyk7XHJcbiAgICBhYm91dExpbmsuaWQgPSAnYWJvdXRkaXYnO1xyXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGAgQ3JlYXRlZCB3aXRoIOKdpO+4jyBieSA8YSBocmVmPWh0dHBzOi8vZ2l0aHViLmNvbS9hbnlpYW12aWN0b3I+QW55aWFtVmljdG9yPC9hPiBDb3B5cmlnaHQgJmNvcHkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LiBGb3IgbW9yZSBkZXRhaWxzIGNoZWNrIHRoZSA8ZGl2IGlkPSdhYm91dGRpdic+QWJvdXQgUGFnZTwvZGl2PiBgO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmFwcGVuZChwYXJhZ3JhcGgpO1xyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyLGNyZWF0ZU5hdixjcmVhdGVDb250ZW50Q29udGFpbmVyLGZvb3RlciB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZU5hdiwgY3JlYXRlQ29udGVudENvbnRhaW5lciwgZm9vdGVyIH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9hYm91dCc7XG5cbmZ1bmN0aW9uIHdlYkFwcCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmQoY3JlYXRlTmF2KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmQoZm9vdGVyKCkpOyAgICBcbiAgICBsb2FkSG9tZSgpO1xufVxuXG5cbndlYkFwcCgpO1xuY29uc3QgYWJvdXRkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRkaXYnKTtcbmlmIChhYm91dGRpdiAhPT0gbnVsbCkgYWJvdXRkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWJvdXQpO1xuICAgICIsIlxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGFjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTsgXHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIFxyXG5cclxuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnQWRkcmVzczogTm8uIDIzICBEcmVhbSBXb3JsZCBIb3VzaW5nIEVzdGF0ZSc7XHJcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogKzIzNC01NDc4LTkxMCc7XHJcbiAgICBlbWFpbC50ZXh0Q29udGVudD0gJ0VtYWlsOiBkZWxvY2FsUmV6QGluc3RhbmNlb2YucXVhbG0nXHJcblxyXG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kKGFkZHJlc3MpO1xyXG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kKHBob25lKTtcclxuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZChlbWFpbCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RXcmFwcGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGNvbnRlbnRXcmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoY3JlYXRlQ29udGFjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7Il0sIm5hbWVzIjpbImNvbnRlbnRXcmFwcGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiaG9tZUJvZHkiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsIndlbGNvbWVNc2dUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlSG9tZSIsImNyZWF0ZU1lbnVJdGVtIiwiaXRlbVRpdGxlIiwiaW5ncmVkaWVudCIsImltYWdlIiwibWVudUl0ZW0iLCJtZW51SXRlbVRpdGxlIiwibWVudUl0ZW1JbmdyZWRpZW50cyIsImltYWdlV3JhcHBlciIsIm1lbnVJdGVtSW1hZ2UiLCJpZCIsImpvaW4iLCJzcmMiLCJhbHQiLCJpbm5lckhUTUwiLCJhYm91dENvbnRhaW5lciIsImNyZWRpdHNUaXRsZSIsImNyZWRpdHMiLCJjcmVhdGVDcmVkaXRzIiwiYWN0aXZhdGVCdXR0b24iLCJidG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhYiIsInRoaXMiLCJyZW1vdmUiLCJjb250ZW50IiwiaGVhZGVyIiwidGl0bGUiLCJjcmVhdGVIZWFkZXIiLCJ0YWJXcmFwcGVyIiwiaG9tZSIsIm1lbnUiLCJjb250YWN0IiwiYWJvdXQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaG9tZWJ0biIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50Q29udGFpbmVyIiwibWVudUNvbnRhaW5lciIsImNvbnRhY3RXcmFwcGVyIiwiYWRkcmVzcyIsInBob25lIiwiZW1haWwiLCJjcmVhdGVDb250YWN0IiwiY3JlYXRlTmF2IiwiY3JlYXRlQ29udGVudENvbnRhaW5lciIsImZvb3RlciIsImFib3V0TGluayIsInBhcmFncmFwaCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIndlYkFwcCIsImFib3V0ZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==