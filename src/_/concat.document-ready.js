$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});

$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$(".form__block").validationEngine("attach",{promptPosition:"bottomLeft",scrollOffset:200}),$('[data-plugin="datepicker"]').datepicker({}),$(".form__control[data-plugin='timepicki']").timepicki({start_time:["10","00","AM"],show_meridian:!1,min_hour_value:10,max_hour_value:18,step_size_minutes:10,overflow_minutes:!0,add:!0,increase_direction:"up",disable_keyboard_mobile:!0}),$("button[data-heading]").on("click",function(){var t=$(this).attr("data-heading");$(".form__control.is--products").attr("value",t)}),$(".form__radio-input").on("click",function(){$(".form__datetime.is--radio").toggleClass("is--active")});
$("img").addClass("img-responsive");
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$(".navbar__town-link").removeAttr("data-toggle"),$(".navbar__town-link").on("click",function(a){$(this).toggleClass("is--active"),$(".navbar__town-menu").toggleClass("is--active")});
$(document.body).on("azbn.setActive","svg#azbn-svg .products-pizza__elem-group",{},function(e){e.preventDefault();var a=$(this),t=a.attr("data-id")||0;a.addClass("is--visible"),$('.basket-delivery__check-order-item.is--pizza-calc[data-id="'+t+'"]').addClass("is--active")}),$(document.body).on("azbn.setRemove","svg#azbn-svg .products-pizza__elem-group",{},function(e){e.preventDefault();var a=$(this),t=a.attr("data-id")||0;a.removeClass("is--visible"),$('.basket-delivery__check-order-item.is--pizza-calc[data-id="'+t+'"]').removeClass("is--active")}),$(document.body).on("click.azbn",".basket-delivery__check-order-item.is--pizza-calc .is--plus.azbn7__cart__add__btn",{},function(e){e.preventDefault();var a=$(this),t=a.closest(".basket-delivery__check-order-item.is--pizza-calc"),i=t.attr("data-id")||0;$('svg#azbn-svg .products-pizza__elem-group[data-id="'+i+'"]').trigger("azbn.setActive")}),$(document.body).on("click.azbn",".basket-delivery__check-order-item.is--pizza-calc .is--minus.azbn7__cart__add__btn",{},function(e){e.preventDefault();var a=$(this),t=a.closest(".basket-delivery__check-order-item.is--pizza-calc"),i=t.attr("data-id")||0;$('svg#azbn-svg .products-pizza__elem-group[data-id="'+i+'"]').trigger("azbn.setRemove")});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');