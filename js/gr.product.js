function openGrModal(){document.getElementById("grModals").style.display="block"}function closeGrModal(){document.getElementById("grModals").style.display="none"}let slideIndex=1;function grModBtn(e){showGrSlide(slideIndex+=e)}function currentGrModal(e){showGrSlide(slideIndex=e)}function showGrSlide(e){const t=document.getElementsByClassName("grImgModal"),n=t.length,a=document.getElementsByClassName("grImgSlide"),i=document.getElementsByClassName("grImgModalGallery");document.getElementById("caption");e>n&&(slideIndex=1),e<1&&(slideIndex=n);for(let e=0;e<n;e++)t[e].style.display="none",a[e].style.display="none",i[e].className=i[e].className.replace(" w3-opacity-off","");a[slideIndex-1].style.display="block",t[slideIndex-1].style.display="block",i[slideIndex-1].className+=" w3-opacity-off"}function gr_tt_show(e){const t=document.getElementById("gr-img-tt");t.innerHTML='<div class="w3-modal-content w3-margin-bottom w3-animate-zoom"><img src="'+e.src+'" style="width:100%"/></div>',t.style.display="block"}!function(){let e,t,n,o,r,p,m,g,f,h="",y=1,w=5,v="",_="https://goodz.pages.dev/",b=new URLSearchParams(window.location.search);o=b.get("utm_source");const E=b.get("id"),I=document.currentScript;if(t=I.getAttribute("grus"),E){const a=E.split(".");e=a[1],n=a[0],t||(t=a[2],_="")}else e=I.getAttribute("grid"),n=I.getAttribute("gram");let k,B=`https://api.goodz.workers.dev/product/${t}/${n}.${e}`;function j(){y>1&&(y--,L(y))}function M(){y<$()&&(y++,L(y))}function L(e){e<1&&(e=1),e>$()&&(e=$());let t="";for(let n=(e-1)*w;n<e*w&&n<v.length;n++){t+='<p></p><img src="'+v[n].shop_testimonial_image+'" class="w3-left w3-circle w3-margin-right" width="50px"/><p>'+v[n].shop_testimonial_name+"<br/>";for(let e=0;e<v[n].shop_testimonial_rate;e++)t+='<span class="w3-text-orange">&#9733;</span>';if(v[n].shop_testimonial_rate<5)for(let e=0;e<5-v[n].shop_testimonial_rate;e++)t+='<span class="w3-text-grey">&#9733;</span>';t+="</p><p>"+v[n].shop_testimonial_content+"</p>";let e=1;v[n].shop_testimonial_file.filter((e=>""!==e)).forEach(((a,i)=>{t+='<div class="w3-col s1 m1 l1" style="padding:0 2px"><img src="'+a+'" id="ttf_'+n+"_"+i+'" class="w3-image" onclick="gr_tt_show(this)" alt="File testimonial from '+v[n].shop_testimonial_name+" "+i+'">&nbsp;</div>',!(e+n)%12&&(t+='<div style="clear:both"></div>')})),t+='<div style="clear:both"></div>'}document.getElementById("listingReview").innerHTML=t,document.getElementById("pageofreview").innerHTML=e+"/"+$(),document.getElementById("btn_tt_prev").style.visibility=1==e?"hidden":"visible",e==$()?document.getElementById("btn_tt_next").style.visibility="hidden":document.getElementById("btn_tt_next").style.visibility="visible"}function $(){return Math.ceil(v.length/w)}function T(e){if(1==e){let e=document.getElementsByClassName("radiov1");for(i=0;i<e.length;i++)e[i].className=e[i].className.replace("w3-padding w3-card w3-theme","w3-tag w3-theme-l1")}else{let e=document.getElementsByClassName("radiov2");for(i=0;i<e.length;i++)e[i].className=e[i].className.replace("w3-padding w3-card w3-theme","w3-tag w3-theme-l1")}}function q(e){let t,n,a,i,o,r;if("radvar1"==e.split("_")[0]?(T(1),document.getElementById("span_"+e).className="radiov1 w3-padding w3-card w3-theme w3-round w3-hover-theme"):(T(2),document.getElementById("span_"+e).className="radiov2 w3-padding w3-card w3-theme w3-round w3-hover-theme"),t=document.querySelector('input[name="variasi1"]:checked'),a=t?t.value:"",!a)return!1;if(1==h.variation_type)o=h.variation_name1+" "+a,r=h.variations[a];else{if(n=document.querySelector('input[name="variasi2"]:checked'),i=n?n.value:"",!i)return!1;a&&i?(o=h.variation_name1+" "+a+" "+h.variation_name2+" "+i,r=h.variations[a][i]):(r="0",o="-")}const d=document.getElementById("order_variationz");d&&(d.innerHTML=o);let s=document.querySelectorAll(".order_price");for(let e=0;e<s.length;e++)s[e].innerHTML=r;document.getElementById("order_variation").value=o,document.getElementById("order_price").value=r}function x(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+r[3]},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>e)).catch((e=>{throw e}))}function H(e,t){return fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Basic "+t}}).then((e=>e.json())).then((e=>e)).catch((e=>{throw e}))}function S(){if(!A){A=1;const e=document.getElementById("lab_req_city");if(e&&(we("https://cdn.jsdelivr.net/gh/LCweb-ita/LC-select@main/lc_select.min.js"),ye("https://cdn.jsdelivr.net/gh/LCweb-ita/LC-select@main/themes/light.css"),e.innerHTML='<i class="fa fa-spinner fa-spin"></i>',H(r[12][0],t).then((t=>{if(200==t.code){e.innerHTML="*",N=t.data;const n=document.getElementById("cityoption");for(let e in N){let t=document.createElement("option");t.value=e,t.text=N[e].type+" "+N[e].city_name+" - "+N[e].province,n.appendChild(t)}new lc_select(n,{wrap_width:"100%",enable_search:!0,autofocus_search:!0,pre_placeh_opt:!0,labels:["Ketik disini..","add options","Select options..",".. kota tidak ada .."]})}else console.log(t.msg),alert("Error get data city: "+t.msg+". Contact administrator")})).catch((e=>{console.log(e.message)}))),k){const e=document.getElementById("load_cpn");e&&(e.innerHTML='<i class="fa fa-refresh fa-spin"></i>',setTimeout((()=>{fe(0)}),1e3))}}}let A=null,N="";function z(e){const t=e.target.value;if(!t)return!1;document.getElementById("city").value=N[t].type+" "+N[t].city_name+" - Prov "+N[t].province+" (Pos "+N[t].postal_code+")",1==r[1]&&null!=r[6]&&""!=r[7]&&O(t)}let C="";function O(e=""){const t=document.querySelectorAll(".product_order_qty");t&&t.forEach((function(e){e.disabled=!0}));const n=document.getElementById("product_weight"),a=n&&n.value?parseInt(n.value):1e3,i=e||document.getElementById("cityoption").value,o=G*a;document.getElementById("resongkir").innerHTML='<i class="fa fa-spinner fa-spin"></i>',document.getElementById("reg_btn").disabled=!0;const d={a:r[7],b:i,c:o,d:r[6],e:r[3]};x(r[12][1],d).then((e=>{if(200==e.code){C=e.data;let t="<p></p>",n=0;for(let e=0;e<C.length;e++){t+='<input type="hidden" value="'+C[e].name+'" name="data_courir[name]['+e+']" placeholder="Nama kurir" required/>';let a=C[e].costs;for(let i=0;i<a.length;i++)t+='<div class="data_courir_check w3-padding w3-margin-bottom w3-pale-blue w3-border w3-hover-shadow" id="ong_'+e+"_"+i+'">',t+=C[e].name+"<br/>",t+='<input type="radio" value="'+e+":"+i+'" class="w3-radio" name="data_courir_check" style="z-index: -1;opacity: 0;position: absolute;"/> ',t+=a[i].service+" (@"+a[i].cost[0].value+")<br/>",t+='<span class="w3-small resc_weight">['+o+'gr]</span> <span class="w3-small">'+a[i].description+" (est "+a[i].cost[0].etd+" hari)</span><br/>",t+="</div>",t+='<input type="hidden" value="'+a[i].service+'" name="data_courir[service]['+e+"]["+i+']"/>',t+='<input type="hidden" value="'+a[i].description+'" name="data_courir[description]['+e+"]["+i+']"/>',t+='<input type="hidden" id="val_'+n+'" value="'+a[i].cost[0].value+'" name="data_courir[value]['+e+"]["+i+']"/>',t+='<input type="hidden" value="'+a[i].cost[0].etd+'" name="data_courir[etd]['+e+"]["+i+']"/>';t+="",n++}document.getElementById("resongkir").innerHTML=t}else document.getElementById("resongkir").innerHTML="<p>"+e.msg+"</p>";t&&t.forEach((function(e){e.disabled=!1})),document.getElementById("reg_btn").disabled=!1;const n=document.querySelectorAll(".data_courir_check");n.length>0&&n.forEach((function(e){e.addEventListener("click",(function(e){const t=e.target.id.split("_");t[1]&&t[2]&&(!function(e){document.querySelector(`#resongkir #ong_${e[1]}_${e[2]} input[type="radio"]`).checked=!0,Y=C[e[1]].costs[e[2]].cost[0].value,document.getElementById("order_ongkir").innerHTML=Y,0==J?document.getElementById("order_total").innerHTML=oe():U()}(t),pe(e,n))}))}))})).catch((e=>{console.log(e.message)}))}let G=1;function P(e){G=e.target.value,(!G||G<1)&&(G=1),D(),X()}let Z=0;function D(){F=1==Z?0==r[11][3]?0:Math.ceil(parseInt(r[11][4])+parseInt(.01*r[11][3]*ee())):0}function R(e){Z=e.target.checked?1:0,Q()}function W(e){const t=document.getElementById("order_asuransi");t&&(t.innerHTML=e);const n=document.getElementById("order_insurance");n&&(n.value=e)}function K(e){const t=document.getElementById("order_codz");t&&(t.innerHTML=e);const n=document.getElementById("order_cod");n&&(n.value=e)}let F=0;function U(){1==r[11][5]&&(Z=1,D());const e=(F+ee())*(.01*r[11][0]);J=Math.ceil(function(e){return e<r[11][1]?parseInt(r[11][1]):r[11][2]>0&&e>r[11][2]?parseInt(r[11][2]):e}(e)),W(F),K(J),document.getElementById("order_total").innerHTML=oe()}let J=0;function V(e){let t=e.target.value;t||(t=0),"COD"==t||"cod"==t?U():(1==r[11][5]&&(Z=1),D(),J=0,document.getElementById("order_qty").innerHTML=G+" pc",W(F),K(0),document.getElementById("order_total").innerHTML=oe())}function X(){document.getElementById("order_qty").innerHTML=G+" pc",C?(Y=0,W(F),document.getElementById("order_ongkir").innerHTML=0,document.getElementById("order_total").innerHTML=0,O()):0==J?(W(F),document.getElementById("order_total").innerHTML=oe()):U()}let Y=0;function Q(){D(),0==Y&&""==C?X():0==J?(r[11]&&(1==r[11][5]&&(Z=1,D()),W(F)),document.getElementById("order_total").innerHTML=oe()):U()}function ee(){return G*parseInt(document.getElementById("order_price").value)}function te(e,t,n,a,i){return 2==e?t>n?[t-n,"","",n,i]:[0,"","",t,i]:t*n*.01>a?[t-a,"("+n+"%",' <span class="w3-small">Max <i>'+a+"</i></span>) ",a,i]:[t-t*n*.01,"("+n+"%)"," ",t*n*.01,i]}function ne(e,t,n,a){let i;i=1==t?'<span class="w3-text-green">Anda mendapatkan potongan dari diskon ini <i class="fa fa-check-circle"><i></span>':2==t?'<span class="w3-text-red">Tidak mencapai minimal belanja</span>':3==t?'<span class="w3-text-red">Silahkan pilih ongkir terlebih dahulu</span>':t,document.getElementById("info_info_"+e).innerHTML=i,document.getElementById(n).innerHTML=a;const o=document.getElementById("cou_"+e);1==t?-1==o.className.indexOf("w3-leftbar w3-border-theme")&&(o.className+=" w3-leftbar w3-border-theme"):o.className=o.className.replace(" w3-leftbar w3-border-theme","")}let ae=0,ie=0;function oe(){if(""==de&&""==le)return Math.ceil(F+J+Y+ee());if(""!=de&&""!=le)if(ee()>=ge[de][4]?(ae=te(ge[de][2],ee(),ge[de][3],ge[de][5],ge[de][1]),ne(de,1,"coupon_price",ae[1]+ae[2]+"-"+ae[3])):(ne(de,2,"coupon_price",0),ae=[ee(),"","","",""]),ee()>=ge[le][4]&&Y>0)ie=te(ge[le][2],Y,ge[le][3],ge[le][5],ge[le][1]),ne(le,1,"coupon_ship",ie[1]+ie[2]+"-"+ie[3]);else{ne(le,0==Y?3:2,"coupon_ship",0),ie=[Y,"","","",""]}else if(""!=de&&""==le)ee()>=ge[de][4]?(ae=te(ge[de][2],ee(),ge[de][3],ge[de][5],ge[de][1]),ne(de,1,"coupon_price",ae[1]+ae[2]+"-"+ae[3])):(ne(de,2,"coupon_price",0),ae=[ee(),"","","",""]),ie=[Y,"","","",""];else if(""==de&&""!=le){if(ee()>=ge[le][4]&&Y>0)ie=te(ge[le][2],Y,ge[le][3],ge[le][5],ge[le][1]),ne(le,1,"coupon_ship",ie[1]+ie[2]+"-"+ie[3]);else{ne(le,0==Y?3:2,"coupon_ship",0),ie=[Y,"","","",""]}ae=[ee(),"","","",""]}return document.getElementById("coupon").value=ae[4]+(""==ae[4]||""==ie[4]?"":"+")+ie[4],Math.ceil(F+J+ie[0]+ae[0])}function re(e){const t=document.querySelectorAll(".info_"+e);for(let e=0;e<t.length;e++)t[e].innerHTML=""}let de="";function se(e){de=0==e?"0":e,document.querySelector(`#couponlist #cou_${e} input[type="radio"]`).checked=!0,re("dcouponval"),document.getElementById("order_total").innerHTML=oe()}let le="";let ce=(new Date).getTime();function ue(e){const t=new Date(e).getTime()-ce,n=Math.floor(t/864e5);return t<0?"EXPIRED":n}function pe(e,t,n=1){for(i=0;i<t.length;i++)t[i].className=t[i].className.replace(" w3-leftbar w3-border-theme","");n&&(e.currentTarget.className+=" w3-leftbar w3-border-theme")}function me(){ge.sort((function(e,t){return e[0]-t[0]}));let e,t,n,a,i="";for(let o=0;o<ge.length;o++)1==ge[o][0]?(e="w3-pale-green",t="Harga",n="dcouponval",a="w3-green"):(e="w3-pale-yellow",t="Ongkir",n="dcouponship",a="w3-yellow"),i+=`<div class="${n} w3-padding w3-margin-bottom ${e} w3-border w3-hover-shadow" id="cou_${o}">\n        <span class="w3-tag w3-round w3-tiny w3-shine-effect ${a}">Potongan ${t}</span> <span id="info_info_${o}" class="w3-tiny info_${n}"></span><br/>\n        <input type="radio" class="w3-radio" name="${n}" id="labc${o}" value="${ge[o][1]}" style="z-index: -1;opacity: 0;position: absolute;"/> ${ge[o][1]}<br/>\n        Disc ${ge[o][3]+(1==ge[o][2]?"% Max "+ge[o][5]:"")} Min ${ge[o][4]}<br/><span class="w3-small">${ge[o][8]}</span>\n        <br/>\n        <span class="w3-tiny">Berakhir dalam ${ue(ge[o][7])} hari | ${ge[o][7]}</span>\n        </div>`;document.getElementById("couponlist").innerHTML=i,document.getElementById("load_cpn").innerHTML="";const o=document.getElementById("coupon");o&&o.setAttribute("readonly",!0);const r=document.querySelectorAll(".dcouponval");r.length>0&&r.forEach((function(e){e.addEventListener("click",(function(e){const t=e.target.id.split("_")[1];t&&t!=de&&(pe(e,r,0),se(t))}))}));const d=document.querySelectorAll(".dcouponship");d.length>0&&d.forEach((function(e){e.addEventListener("click",(function(e){const t=e.target.id.split("_")[1];var n;t&&t!=le&&(pe(e,d,0),le=0==(n=t)?"0":n,document.querySelector(`#couponlist #cou_${n} input[type="radio"]`).checked=!0,re("dcouponship"),document.getElementById("order_total").innerHTML=oe())}))}))}let ge="";function fe(e){document.getElementById("couponlist").innerHTML='<p><i class="fa fa-spin fa-spinner"></i></p>';const n=`?u=${r[3]}&t=${r[1]?2:1}&p=${r[10]}&c=${e||(r[13]?"only":"all")}`;H(r[12][2]+n,t).then((e=>{200==e.code?(ge=e.data,me()):document.getElementById("couponlist").innerHTML="<p>"+e.msg+"</p>"})).catch((e=>{console.log(e.message)}))}function he(e){""==ge?e.target.value&&fe(e.target.value):(de=ge.map((e=>e[1])).indexOf(e.target.value),de>=0&&1==ge[de][0]?(se(de),document.getElementById("load_cpn").innerHTML='<i class="fa fa-check-circle"></i>'):(de="",document.getElementById("order_total").innerHTML=oe(),document.getElementById("load_cpn").innerHTML='<span class="w3-tag w3-red w3-small w3-round">Kode kupon tidak terdaftar</span>'))}function ye(e){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,t.onerror=()=>{console.error(`Failed to load stylesheet: ${e}`)},document.head.appendChild(t)}function we(e){const t=document.createElement("script");t.type="text/javascript",t.src=e,document.head.appendChild(t)}function ve(e){let t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#039;":"'","\r\n":"<br>","\r":"<br>","\n":"<br>"};for(let n in t){let a=new RegExp(n,"g");e=e.replace(a,t[n])}return e}function _e(e){return 1==e?" required":""}function be(e,t){"product_order_qty"==e&&(f=t)}function Ee(e,t,n){if("payment_method"==e&&null!=t){let e="";return(t[3]>0||t[4]>0)&&(e+=`<input class="w3-check" type="checkbox" ${t[5]>0?'onclick="return false;"':""} id="asuransi" name="fields[insurance]" value="Yes"${t[5]>0?" checked":""}/> <label for="asuransi">Insurance</label><br/> <input type="hidden" name="order_insurance" id="order_insurance" value="" readonly required/>`),(t[0]>0||t[1]>0)&&(e+='<input type="hidden" name="order_cod" id="order_cod" value="" readonly required/>'),g=n,e}return""}function Ie(e,t){let n="";if(null!==t)for(let a in t)n+='<input type="radio" name="variasi'+e+'" value="'+t[a]+'" style="z-index: -1;opacity: 0;position: absolute;" id="radvar'+e+"_"+a+'" required/>\n      <label for="radvar'+e+"_"+a+'"><span class="w3-tag w3-theme-l1 radiov'+e+' w3-round w3-hover-theme" id="span_radvar'+e+"_"+a+'">'+t[a]+"</span></label>";return n}function ke(e,t,n){if(null==e)return null;let a;return e.some((function(i,o){if(i.name==t)return a="shipping"==n?e[o].shipping:"payment"!=n||e[o].payment,!0})),null==a?null:a}function Be(e,t,n,a,i,o,r,d,s){let l;l=d?`<a id="pre_bbtn" href="javascript:void(0)" class="w3-button w3-shine-effect w3-card w3-large w3-theme w3-hover-theme w3-round w3-block w3-card">${s?ve(s):"Buy Now"}</a>\n        <div id="openform" class="w3-card-4 w3-container w3-round-large w3-animate-opacity" style="display:none;">`:'<div id="openform" class="w3-card-4 w3-container w3-round-large w3-animate-opacity">';let c=l+`<div class="w3-section"> <label for="name">Nama</label> <input class="w3-input w3-border" type="text" id="name" name="name" value="" placeholder="Nama" required> </div>\n        <div class="w3-section"> <label for="phone">Nomor Whatsapp</label> <input class="w3-input w3-border" type="number" id="phone" name="phone" value="" placeholder="No Whatsapp" pattern="[0]{1}[0-9]{8,12}" required> </div>\n        <input type="hidden" name="order_price" id="order_price" value="${i}" readonly required/>`;return c+=function(e){if(null==e)return"";let t=0,n="";for(;e[t];){if("textarea"==e[t].type)n+='<div class="w3-section">\n            <label for="'+e[t].name+'">'+e[t].label+'</label>\n            <textarea class="w3-input w3-border" rows="5" id="'+e[t].name+'" name="fields['+e[t].name+']" placeholder="'+e[t].placeholder+'" pattern="[a-zA-Z0-9,.-_ ]"'+_e(e[t].required)+"></textarea>\n            </div>";else if("radio"==e[t].type){let a=Ee(e[t].name,e[t].payment,1);be(e[t].name,1),n+='<div class="w3-section"><label>'+e[t].label+"</label><br/>";for(let a in e[t].value)n+=`<input class="w3-radio ${e[t].name}" type="radio" id="`+e[t].name+e[t].value[a]+'" name="fields['+e[t].name+']" value="'+e[t].value[a]+'" '+_e(e[t].required)+'/><label for="'+e[t].name+e[t].value[a]+'"> '+a+"</label> <br/>";n+=a+"</div>"}else if("select"==e[t].type){let a=Ee(e[t].name,e[t].payment,2);be(e[t].name,2),n+='<div class="w3-section"><label for="'+e[t].name+'">'+e[t].label+`</label><br/>\n    <select class="w3-select w3-border ${e[t].name}" name="fields[`+e[t].name+']" '+_e(e[t].required)+'>\n    <option value="" selected disabled>Select One</option>';for(let a in e[t].value)n+='<option value="'+e[t].value[a]+'">'+a+"</option>";n+="</select>"+a+"</div>"}else if("checkbox"==e[t].type){n+='<div class="w3-section"><label>'+e[t].label+"</label><br/>";for(let a in e[t].value)n+='<input class="w3-check" type="checkbox" id="'+e[t].name+e[t].value[a]+'" name="fields['+e[t].name+'][]" value="'+e[t].value[a]+'"/><label for="'+e[t].name+e[t].value[a]+'"> '+a+"</label> <br/>";n+="</div>"}else if("city"==e[t].name)n+='<div class="w3-section"><label for="cityoption">'+e[t].label+' <span id="lab_req_city" class="w3-text-red">*</span></label><br/>\n    <select name="cityoption" id="cityoption" class="w3-select w3-border" data-placeholder="Ketik 2 huruf.."></select>\n    <input class="w3-input w3-border" type="hidden" id="city" name="fields[city]" value="" placeholder="City"/><br/>\n    <div id="resongkir"></div></div>';else if("coupon"==e[t].name)n+='<div class="w3-section">\n            <label for="'+e[t].name+'">'+e[t].label+' <span id="load_cpn"><i class="fa fa-refresh"></i></span></label> <input class="w3-input w3-border" type="'+e[t].type+'" id="'+e[t].name+'" name="fields['+e[t].name+']" value="" placeholder="'+e[t].placeholder+'" pattern="[a-zA-Z0-9 ]{3,}"'+_e(e[t].required)+'/>\n            </div><div id="couponlist"></div>';else{var a;be(e[t].name,3),a="email"==e[t].type?"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}":"number"==e[t].type?"[0-9]+":"text"==e[t].type?"[a-zA-Z0-9,.-_ ]{3,}":"",n+='<div class="w3-section">\n            <label for="'+e[t].name+'">'+e[t].label+`</label> <input class="w3-input w3-border ${e[t].name}" type="`+e[t].type+'" id="'+e[t].name+'" name="fields['+e[t].name+']" placeholder="'+e[t].placeholder+'" pattern="'+a+'"'+_e(e[t].required)+"/>\n            </div>"}t++}return n}(e),c+=a,c+=t,c+=`<button type="submit" class="w3-button w3-shine-effect w3-margin-bottom w3-block w3-theme-d1 w3-xlarge w3-hover-theme w3-card w3-round" id="reg_btn">${ve(o)}</button>`,c+=r?n:`<div style="display:none">${n}</div>`,c+='<p class="w3-margin-top w3-small" id="dev-creator">Powered by goodresponse</p></div>',c}function je(n){if(200!=n.code)return console.log(n),document.getElementById("gr-docs").innerHTML=`<center>${n.msg}<br/><img src="${_}img/page-found-concept.png" class="w3-image"/></center>`,!1;if(!n.data.jsuser[0])return alert("Addrz setting required"),!1;!document.querySelector('link[href*="w3-theme"]')&&n.data.jsuser[0][14]&&ye(`https://www.w3schools.com/lib/w3-theme-${n.data.jsuser[0][14]}.css`),!0===n.data.jsuser[1].fb.track&&n.data.jsuser[1].fb.ids&&n.data.jsuser[1].fb.ids.length>0&&function(e,t,n="",i=0){a=window,s=document,l="script",a.fbq||(d=a.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},a._fbq||(a._fbq=d),d.push=d,d.loaded=!0,d.version="2.0",d.queue=[],(c=s.createElement(l)).async=!0,c.src="https://connect.facebook.net/en_US/fbevents.js",(u=s.getElementsByTagName(l)[0]).parentNode.insertBefore(c,u)),t.ids.forEach((function(e){fbq("init",e)})),fbq("track","PageView"),e?(t.events[0]&&(p=function(){fbq("track",t.events[0],{source:"gr form product: "+n,version:"3"})}),t.events[1]&&(m=function(){fbq("track",t.events[1],{source:"gr form product: "+n,version:"3",value:i})})):t.events[1]&&(m=function(){fbq("track",t.events[1],{source:"gr form product: "+n,version:"3",value:i})})}(n.data.jsuser[0][8],n.data.jsuser[1].fb,n.data.jspro.product_name?n.data.jspro.product_name:"",n.data.jspro.product_price?n.data.jspro.product_price:0);const i=ke(n.data.jsfield,"coupon",""),y=ke(n.data.jsfield,"payment_method","payment"),b=ke(n.data.jsfield,"city","shipping"),E=function(e){return null!=e?'<input type="hidden" name="order_variation" class="order_variation" id="order_variation" value="" readonly required/>\n          <input type="hidden" name="opsiofvariation" value="1" required/>':""}(n.data.jsspek.product_variation.variation_type),I=function(e,t,n,a,i,o){let r=`<input type="hidden" name="product_weight" class="product_weight"  value="${a||1}" id="product_weight" readonly required/>\n<input type="hidden" name="udata[product]" value="${e}">\n<input type="hidden" name="udata[users]" value="${t}">\n<input type="hidden" name="udata[autores]" value="${n}">\n<input type="hidden" name="src" id="source" value="${i||""}">`;return r+=o?`<input type="hidden" name="fields[addrz_id]" value="${o}">`:"",r}(e,t,n.data.autoresid,n.data.jspro.product_weight,o,n.data.jsspek.addrz_id);let B=b&&n.data.jsuser[2]?1:0;if(r=["cl",B,n.data.jsspek.addrz_id,t,"cl",[],n.data.jsuser[3],n.data.jsuser[2],"cl",n.data.jsuser[0][15],e,y,n.data.jsendpo,n.data.jsuser[0][16]],v=n.data.jsspek.product_testimonial,h=n.data.jsspek.product_variation,k=n.data.jsuser[0][6],n.data.jsuser[0][0]){const e=n.data.jspro.product_image.substring(n.data.jspro.product_image.lastIndexOf("/")+1);if(document.getElementById("doc_slide").innerHTML=`<img src="${n.data.jspro.product_image}" alt="${e}" class="w3-image"/>`,n.data.jsspek.image_slide&&n.data.jsspek.image_slide.length>0){const e=n.data.jsspek.image_slide;e.unshift(n.data.jspro.product_image),setTimeout((function(){document.getElementById("doc_slide").innerHTML=function(e){const t='<span class="w3-display-left w3-xxlarge w3-padding-small w3-theme-l4 w3-opacity w3-hover-opacity-off" onclick="grModBtn(-1)">&#10094;</span>\n  <span class="w3-display-right w3-xxlarge w3-padding-small w3-theme-l4 w3-opacity w3-hover-opacity-off" onclick="grModBtn(1)">&#10095;</span>',n=e.length;let a,i="",o="",r="";for(a=0;a<n;a++){const t=e[a].substring(e[a].lastIndexOf("/")+1);i+=`<img class="grImgSlide" src="${e[a]}" style="width:100%;cursor:pointer;display:none;" onclick="openGrModal();currentGrModal(${a+1})" alt="${t}">`,o+=`<img class="grImgModal" src="${e[a]}" style="width:100%" alt="${t}" title="${t}">`,r+=`<div class="w3-col s2">\n      <img class="grImgModalGallery w3-opacity w3-hover-opacity-off" src="${e[a]}" style="width:100%" onclick="currentGrModal(${a+1})" alt="${t}">\n      </div>`,(a+1)%6==0&&(r+='<div style="clear:both"></div>')}return`<div class="w3-content w3-display-container">${i}  ${t}</div>\n  <div id="grModals" class="w3-modal">\n  <span class="w3-text-white w3-xxlarge w3-hover-text-grey w3-container w3-display-topright" onclick="closeGrModal()" style="cursor:pointer">&#10005;</span>\n  <div class="w3-modal-content w3-margin-bottom">\n    <div class="w3-content" style="max-width:900px">\n    <div class="w3-display-container">${o} ${t}</div>\n    <div class="w3-row w3-theme-l4 w3-center">${r}</div>\n    </div>\n  </div>\n  </div>`}(e),showGrSlide(slideIndex)}),1e3)}}n.data.jsuser[0][1]&&(document.getElementById("doc_title").innerHTML=n.data.jspro.product_name),document.title=n.data.jspro.product_name,n.data.jsuser[0][2]&&(document.getElementById("doc_rating").innerHTML=function(e,t,n){let a="";for(let e=0;e<5;e++)a+='<span class="w3-text-orange">&#9733;</span>';return"<p>\n            "+e+" "+a+' | <a href="#reviews">'+t+"</a> reviews | "+n+" sold\n        </p>"}(n.data.jspro.product_rating,n.data.jspro.product_review,n.data.jspro.product_sold)),n.data.jsuser[0][3]&&(document.getElementById("doc_price").innerHTML=function(e,t,n,a){return"<p>\n            "+e+" <s>"+t+'</s>\n            <span class="w3-xlarge order_price">'+n+'</span>\n            <span class="w3-tag w3-red w3-round w3-small">'+a+' OFF</span> <span class="order_variation w3-theme-l4 w3-tag w3-border w3-border-theme w3-round" id="order_variationz">!</span>\n            </p>'}(n.data.jspro.product_currency,n.data.jspro.product_price_normal,n.data.jspro.product_price,n.data.jspro.product_discount)),n.data.jsuser[0][13]&&(document.getElementById("doc_details").innerHTML=function(e){let t="";if("object"==typeof e&&Object.keys(e).length>0){t+='<div class="w3-container w3-border w3-border-theme w3-margin-bottom"><div class="w3-row">';for(let n in e)t+='<div class="w3-col s6 l4 m6"><p><b>'+n+"</b> : "+e[n]+"</p></div>";t+="</div></div>"}return t}(n.data.jsspek.product_details)),n.data.jsuser[0][4]&&(document.getElementById("doc_descr").innerHTML=ve(n.data.jspro.product_description)),n.data.jsuser[0][7]&&v.length>0&&(w=n.data.jsuser[0][11],document.getElementById("doc_testi").innerHTML='<div id="reviews"> <div id="gr-img-tt" class="w3-modal" onclick="this.style.display=\'none\'"></div>\n  <p></p>\n  <span class="w3-tag w3-theme">Reviews</span>\n  <div id="listingReview"><i class="fa fa-circle-o-notch fa-spin"></i></div>\n  <div class="w3-right">\n  <a href="javascript:void(0)" id="btn_tt_prev" class="w3-tag w3-theme w3-round w3-small" style="text-decoration:none"> &#8592; </a> <span id="pageofreview"></span> <a href="javascript:void(0)" id="btn_tt_next" class="w3-tag w3-theme w3-round w3-small" style="text-decoration:none;"> &#8594; </a>\n  </div>\n  </div>',setTimeout((()=>{document.getElementById("btn_tt_prev").addEventListener("click",j),document.getElementById("btn_tt_next").addEventListener("click",M),L(1)}),1e3)),document.getElementById("doc_variations").innerHTML=function(e){let t="<p>";if(1==e.variation_type)t+=e.variation_name1,t+=Ie(1,e.variation_value1);else{if(2!=e.variation_type){const e=document.getElementById("order_variationz");return e&&(e.style.display="none"),""}t+=e.variation_name1,t+=Ie(1,e.variation_value1),t+="</p><p>",t+=e.variation_name2,t+=Ie(2,e.variation_value2)}return t+="</p>",t}(n.data.jsspek.product_variation);const $=function(e,t,n,a,i,o){let r=`Rincian Order<br/>\n    <table class="w3-table w3-border w3-border-theme">\n    \n    <tr>\n        <td>Jumlah</td>\n      <td><span class="order_qty w3-right" id="order_qty">1 pc</span></td>\n    </tr>\n    <tr>\n    <td>Harga</td>\n        <td class="w3-right"><s>${i||""}</s> <span class="order_price">${e}</span></td>\n    </tr>`;return t&&(r+='<tr>\n        <td>Potongan Harga</td>\n        <td><span class="coupon_price w3-right" id="coupon_price">0</span></td>\n    </tr>\n    '),(n&&n[0]||n&&n[1])&&(r+='<tr>\n        <td>Biaya COD<br/><span class="w3-small">('+n[0]+"%. Min: "+n[1]+')</span></td>\n        <td><span class="order_cod w3-right" id="order_codz">0</span></td>\n    </tr>'),n&&n[3]&&(r+='<tr>\n        <td>Asuransi<br/><span class="w3-small">('+n[3]+"%. Adm: "+n[4]+')</span></td>\n        <td><span class="order_asuransi w3-right" id="order_asuransi">0</span></td>\n    </tr>'),a&&(r+='<tr>\n        <td>Ongkir</td>\n        <td><span class="order_ongkir w3-right" id="order_ongkir">0</span></td>\n    </tr>',t&&(r+='<tr>\n      <td>Potongan Ongkir</td>\n      <td><span class="coupon_ship w3-right" id="coupon_ship">0</span></td>\n    </tr>')),r+=`<tr>\n        <td>Total</td>\n        <td class="w3-right">${o||""} <b><span class="order_total" id="order_total">`+e+"</span></b></td>\n    </tr>\n    </table>",r}(n.data.jspro.product_price,i,y,B,n.data.jspro.product_price_normal,n.data.jspro.product_currency);document.getElementById("doc_field").innerHTML=Be(n.data.jsfield,I,$,E,n.data.jspro.product_price,n.data.jsuser[0][10],n.data.jsuser[0][5],n.data.jsuser[0][8],n.data.jsuser[0][9]),n.data.jsuser[0][8]?document.getElementById("pre_bbtn").addEventListener("click",(function(){!function(e,t="",n=""){document.getElementById(e).style.display="block",t&&n&&(document.getElementById(t).innerHTML=n)}("openform"),A||(S(),"function"==typeof p&&(p(),console.log("tracked")),document.getElementById("pre_bbtn").remove())})):document.getElementById("openform").addEventListener("click",S),function(){const e=document.getElementById("coupon");e&&e.addEventListener("change",he);const t=document.getElementById("cityoption");t&&t.addEventListener("change",z);const n=document.getElementById("asuransi");n&&n.addEventListener("change",R);let a=document.querySelectorAll('input[type="radio"][name="variasi1"]');a.length>0&&a.forEach((function(e){e.addEventListener("change",(function(e){q(e.target.id),Q()}))}));let i=document.querySelectorAll('input[type="radio"][name="variasi2"]');if(i.length>0&&i.forEach((function(e){e.addEventListener("change",(function(e){q(e.target.id),Q()}))})),g)if(1===g){let e=document.querySelectorAll('input[type="radio"][name="fields[payment_method]"]');e.length>0&&e.forEach((function(e){e.addEventListener("change",V)}))}else if(2===g){const e=document.querySelector('select[name="fields[payment_method]"]');e&&e.addEventListener("change",V)}if(f)if(1===f){let e=document.querySelectorAll('input[type="radio"][name="fields[product_order_qty]"]');e.length>0&&e.forEach((function(e){e.addEventListener("change",P)}))}else if(2===f){const e=document.querySelector('select[name="fields[product_order_qty]"]');e&&e.addEventListener("change",P)}else if(3===f){const e=document.querySelector('input[name="fields[product_order_qty]"]');e&&e.addEventListener("change",P)}}()}document.getElementById("gr-docs").innerHTML='<div id="doc_slide" class="w3-center"></div><div class="w3-xlarge" id="doc_title"></div><div id="doc_rating"></div><div id="doc_price"></div><form id="form-gr"><div id="doc_variations"></div><div id="doc_details"></div><div class="w3-section" id="doc_descr"></div><div id="doc_field"></div></form><div id="doc_testi"></div>',t&&e?H(B,t).then((e=>je(e))).catch((e=>console.log(e.message))):(document.getElementById("gr-docs").innerHTML=`<center><img src="${_}img/page-found-concept.png" class="w3-image"/></center>`,console.log("Kredensial grus, grid, gram diperlukan")),document.getElementById("form-gr").addEventListener("submit",(function(e){if(e.preventDefault(),"undefined"!=typeof customScript&&"function"==typeof customScript){const e=customScript();if(!0!==e)return console.log(e),"undefined"!=typeof swal?(swal("Whoops... !",e,"error"),!1):(alert(e),!1)}const t=document.getElementById("email");if(t&&t.value){if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(t.value))return"undefined"!=typeof swal?(swal("Whoops... !","Email tidak valid, mohon masukkan email yang valid","error"),!1):(alert("Email tidak valid, mohon masukkan email yang valid"),!1)}const n=document.getElementById("city");if(n&&!n.value)return"undefined"!=typeof swal?(swal("Whoops... !","Kota wajib di isi, pilih salah satu kota yang tersedia","error"),!1):(alert("Kota wajib di isi, pilih salah satu kota yang tersedia"),!1);const a=document.querySelectorAll('input[name="data_courir_check"]');if(a.length>0){let e=!1;if(a.forEach((t=>{t.checked&&(e=!0)})),!e)return"undefined"!=typeof swal?(swal("Whoops... !","Ekspedisi wajib di isi, pilih salah satu yang tersedia","error"),!1):(alert("Ekspedisi wajib di isi, pilih salah satu yang tersedia"),!1)}const i=document.getElementById("reg_btn");i.innerHTML='Loading.. <i class="fa fa-circle-o-notch fa-spin"></i>',i.disabled=!0;let o=function(e){let t={};return e.forEach((function(e,n){let a=n.split("["),i=a[0],o=a.slice(1).map((function(e){return e.replace("]","")}));t[i]||(0===o.length?t[i]=e:t[i]={});let r=t[i];o.forEach((function(t,n){r[t]||(n===o.length-1?r[t]=e:r[t]={}),r=r[t]}))})),t}(new FormData(this));x(r[12][3],o).then((e=>{201===e.code?(console.log(e),"function"==typeof m&&(m(),console.log("tracked")),window.location.href=decodeURIComponent(e.url)):(i.disabled=!1,i.innerHTML='SUBMIT <i class="fa fa-repeat" aria-hidden="true"></i>',console.log(e.msg),"undefined"!=typeof swal?swal("Whoops... !",e.msg,"error"):alert(e.msg))})).catch((e=>console.log(e.message)))}));let Me=[];document.querySelector('link[href*="w3css"]')||Me.push("https://www.w3schools.com/w3css/4/w3.css"),document.querySelector('link[href*="font-awesome"]')||Me.push("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),Me.length>0&&Me.forEach((function(e){ye(e)}));let Le=[];document.querySelector('script[src*="sweetalert"]')||Le.push("https://unpkg.com/sweetalert/dist/sweetalert.min.js"),Le.length>0&&Le.forEach((function(e){we(e)}))}();