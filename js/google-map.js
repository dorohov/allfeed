function initMap(){var e="map-google",o=$("#"+e);if(o.length){var a=JSON.parse(o.attr("data-map")||"{}"),t=a.center;screenJS.device()&&(t=a.center),screenJS.pc()&&(t=a.center);var n=a.zoom,r={zoom:n,center:new google.maps.LatLng(t[0],t[1])},c=document.getElementById(e),l=new google.maps.Map(c,r),i={path:"M25,0C12.1,0.5,1.4,10.5,0.1,23.4C-0.1,26,0,28.5,0.5,30.9l0,0c0,0,0,0.3,0.2,0.8c0.4,1.8,1,3.5,1.7,5.1 C5,43,11,53.3,24.5,64.5c0.8,0.7,2,0.7,2.9,0C40.9,53.3,46.9,43,49.5,36.8c0.8-1.6,1.3-3.3,1.7-5.1c0.1-0.5,0.2-0.8,0.2-0.8l0,0 c0.3-1.6,0.5-3.2,0.5-4.9C51.9,11.3,39.7-0.5,25,0z M25.9,38.8c-7,0-12.6-5.6-12.6-12.6S19,13.6,25.9,13.6s12.6,5.6,12.6,12.6 \t\tS32.9,38.8,25.9,38.8z",fillColor:"#a3ba02",strokeColor:"#000000",fillOpacity:1,anchor:new google.maps.Point(26,65),strokeWeight:0,scale:1};if(a.placemarks.length)for(var s=0;s<a.placemarks.length;s++){var p={lat:a.placemarks[s].coord[0],lng:a.placemarks[s].coord[1]};new google.maps.Marker({position:p,map:l,icon:i})}$(document.body).on("click.azbn7",".azbn__office__map__set-center-btn",null,function(e){e.preventDefault();var o=$(this),a=o.attr("data-coord"),t=a.split(",");console.dir(t),l.setCenter({lat:parseFloat((t[0]||"").trim()),lng:parseFloat((t[1]||"").trim())})})}}$(function(){$(document.body).on("shown.bs.modal",".modal",{},function(e){e.preventDefault(),$(window).trigger("resize")})});