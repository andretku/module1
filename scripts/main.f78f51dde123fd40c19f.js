(()=>{"use strict";function e(e,t,n,i,d){var r=document.createElement("button");r.classList.add("showHideButton");var s=document.createElement("img");s.setAttribute("src","./assets/img/expand.svg"),s.setAttribute("alt","MoreLess");var o=document.createElement("p");o.innerText=e,r.addEventListener("click",(function(){d.classList.toggle(n),s.classList.toggle("showHideButton_rotate"),d.classList.contains(n)?o.innerText=e:o.innerText=t})),r.append(s,o),i.append(r)}function t(e,t,n,i,d){for(var r=function(r){var s=document.createElement("div");if(window.innerWidth<768?s.classList.add("swiper-slide"):s.classList.add(i),"brandsSwiper"===t.id){var o=document.createElement("img");o.setAttribute("src","./assets/brands/".concat(n[r],".png")),o.setAttribute("alt",n[r]);var a=b(d);s.append(o,a)}if("servicesSwiper"===t.id){var l=document.createElement("p");l.innerText=n[r];var c=b(d);s.append(l,c)}if("offersSwiper"===t.id)if(window.innerWidth<768){var u=document.createElement("div");u.classList.add("offers__content");var m=document.createElement("p");m.classList.add("offers__title"),m.innerText="Ремонтные услуги";var p=document.createElement("p");p.classList.add("offers__info"),p.innerText=n[r].value;var v=document.createElement("p");v.classList.add("offers__title"),v.innerText="Цена";var f=document.createElement("p");f.classList.add("offers__info"),f.innerText=n[r].price;var g=document.createElement("div");g.classList.add("offers__order");var E=document.createElement("p");E.classList.add("offers__title"),E.innerText="Срок";var L=document.createElement("p");L.classList.add("offers__info"),L.innerText=n[r].term;var w=document.createElement("button");w.classList.add("orderButton"),w.innerHTML='<p>Заказать</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#FF3E79"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z" fill="white"/></svg>',w.addEventListener("click",(function(){console.log("click on:",n[r].id)})),E.append(L),g.append(E,w),u.append(m,p,v,f,g),s.append(u)}else{var y=document.createElement("div");y.innerText=n[r].value;var h=document.createElement("div");h.innerText=n[r].price;var _=document.createElement("div");_.innerText=n[r].term;var B=document.createElement("button");B.classList.add("orderButton"),B.innerHTML='<p>Заказать</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#FF3E79"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z" fill="white"/></svg>',B.addEventListener("click",(function(){console.log("click on:",n[r].id)})),s.append(y,h,_,B)}function b(e){var t=document.createElement("a");return t.classList.add(e),t.setAttribute("href","#"),t.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="1" y="1" width="38" height="38" rx="19" stroke="#FF3E79" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z" fill="#FF3E79"/>',t}window.innerWidth>=768?e.append(s):t.append(s)},s=0;s<n.length;s++)r(s)}function n(e,t){t.addEventListener("pointerup",(function(t){e.style.display="none"}))}var i,d,r,s,o,a,l,c,u,m,p,v,f,g,E,L,w,y,h=["lenovo","samsung","apple","viewsonic","bosch","hp","acer","sony","lenovo","samsung","apple"],_=["Ремонт ноутбуков","Ремонт планшетов","Ремонт ПК","Ремонт мониторов"],B=[{id:1,value:"Диагностика",price:"Бесплатно",term:"30 мин"},{id:2,value:"Замена дисплея",price:1e3,term:"30-120 мин"},{id:3,value:"Замена полифонического динамика",price:1e3,term:"30-120 мин"},{id:4,value:"Тестирование с выдачей технического заключения",price:1e3,term:"30-120 мин"},{id:5,value:"Замена программного обеспечения",price:1e3,term:"30-120 мин"}];i=document.querySelector("#menuContainer"),d=document.querySelector("#menu"),r=document.querySelector("#burger"),s=document.querySelector("#burgerX"),i.addEventListener("pointerup",(function(e){e.stopPropagation(),d.style.display="flex"})),r.addEventListener("pointerup",(function(e){e.stopPropagation(),d.style.display="flex"})),n(d,s),function(){var e=document.getElementById("brandsContainer"),n=document.getElementById("brandsSwiper"),i=document.getElementById("servicesContainer"),d=document.getElementById("servicesSwiper"),r=document.getElementById("offersContainer"),s=document.getElementById("offersSwiper");new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},spaceBetween:20,centeredSlides:!1,autoplay:{delay:1e4,stopOnLastSlide:!1,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1.15},340:{slidesPerView:1.3},380:{slidesPerView:1.4},420:{slidesPerView:1.5},460:{slidesPerView:1.6},500:{slidesPerView:1.8},540:{slidesPerView:2.2},600:{slidesPerView:2.3},640:{slidesPerView:2.4},680:{slidesPerView:2.5},720:{slidesPerView:2.6},767:{slidesPerView:2.7}}});t(e,n,h,"brands__content","brands__icon"),t(i,d,_,"services__content","services__icon"),t(r,s,B,"offers__content","offers__icon")}(),o=document.getElementById("readMain"),a=document.getElementById("readContainer"),l=document.getElementById("brandsMain"),c=document.getElementById("brandsContainer"),u=document.getElementById("servicesMain"),m=document.getElementById("servicesContainer"),e("Читать далее","Скрыть","main__text_hidden",o,a),window.innerWidth>=768&&(e("Показать все","Скрыть","brands_hidden",l,c),e("Показать все","Скрыть","services_hidden",u,m)),p=document.getElementById("call"),v=document.getElementById("callClose"),f=document.getElementById("client"),g=document.getElementById("clientClose"),E=document.getElementById("callButtonHeader"),L=document.getElementById("messageButtonHeader"),w=document.getElementById("callButtonAside"),y=document.getElementById("messageButtonAside"),n(p,v),n(f,g),E.addEventListener("pointerup",(function(e){e.stopPropagation(),p.style.display="block"})),L.addEventListener("pointerup",(function(e){e.stopPropagation(),f.style.display="block"})),w.addEventListener("pointerup",(function(e){e.stopPropagation(),p.style.display="block"})),y.addEventListener("pointerup",(function(e){e.stopPropagation(),f.style.display="block"}))})();