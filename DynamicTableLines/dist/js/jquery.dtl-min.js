
(function($){"use strict";jQuery.fn.DynamicTable=function(options){var AddLnButton='<input type="button" id="addLn" class="btnAddLn" value="+">';var RmvLnButton='<input type="button" id="rmvLn" class="btnRmvLn" value="-">';var AddButtonAdded=0;var FirstLn='';var ScdLn='';var AllTr='';var LnContent='';var Flag=0;var settings=$.extend({'table':''},options);SetVar();LnContent=FirstLn.html();AllTr.each(function(){if(AddButtonAdded==0){$(this).append('<td>'+AddLnButton+'</td>');AddButtonAdded=1;}else{var btn=$(this).append('<td>'+RmvLnButton+'</td>');btn.on('click',RemoveLn);}});$('#addLn').on('click',function(){Addline();});this.AddLn=function(){Addline();}
this.RmvLn=function(el){if($(el).closest('tr')!=settings.table.find('tr:first')&&$(el).closest('tr')!=settings.table.find('tr:nth-child(2)')){$(el).closest('tr').remove();}}
function Addline(){var Addbtn=$(FirstLn).find('td:last').find('input[type=button]').detach();FirstLn.before('<tr>'+LnContent+'</tr>');SetVar();FirstLn.append('<td></td>');Addbtn.appendTo(FirstLn.find('td:last'));ScdLn.find('td:last').append(RmvLnButton);var rmvB=ScdLn.find('td:last').find('input[type=button]');rmvB.on('click',RemoveLn);}
function RemoveLn(){$(this).closest('tr').remove();}
function SetVar(){FirstLn=$(settings.table).find('tbody').find('tr:nth-child(2)');ScdLn=$(settings.table).find('tbody').find('tr:nth-child(3)');AllTr=$(settings.table).find('tbody').find('tr:not(:first)');}}})(jQuery);