+function(d){var c=function(f,e){this.$element=d(f);this.options=d.extend({},c.DEFAULTS,e);this.init()};c.VERSION="1.0.0";c.DEFAULTS={};c.prototype.init=function(){var e=this.$element;var f=this.options;e.find("input[data-input-icon]:not([data-input-icon-done])").each(function(){var g=d(this);var h=g.attr("data-input-icon");g.wrap('<div class="input-icon"></div>');g.before("<i class='fa "+h+"'></i>");e.attr("data-input-icon-done","true")})};function b(e){return this.each(function(){var h=d(this);var g=h.data("ExtFormMisc");var f=typeof e=="object"&&e;if(!g){h.data("ExtFormMisc",(g=new c(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.extFormMisc;d.fn.extFormMisc=b;d.fn.extFormMisc.Constructor=c;d.fn.extFormMisc.noConflict=function(){d.fn.extFormMisc=a;return this};Global.addComponent({name:"ExtFormMisc",plugin:b,runPoint:Global.Component_Run_Point.AfterAjaxPageShow,expr:"form"})}(jQuery);