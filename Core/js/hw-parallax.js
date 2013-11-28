/*
 Copyright (C) 2013 Ziad Saab ziad(dot)saab(at)gmail(dot)com

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (i) {
    var t = function (t) {
        this.options = t, this.vendor_prefixes = ["webkit", "moz", "o", "ms"], this.num_vendor_prefixes = this.vendor_prefixes.length;
        var r = function (i) {
            var t = ["Webkit", "Moz", "ms", "O"], r = t.length, a = window.document.createElement("parallax");
            if (void 0 !== a.style[i])return!0;
            i = i.replace(/./, function (i) {
                return i.toUpperCase()
            });
            for (var e = 0; r > e; e++) {
                var o = t[e] + i;
                if (void 0 !== a.style[o])return!0
            }
            return!1
        };
        if (this.has_3dtransforms = r("perspective"), this.has_3dtransforms && r("WebkitPerspective")) {
            var a = i('<div><style type="text/css">@media (transform-3d),(-webkit-transform-3d) {#parallax-3dtest {position: absolute;left: 9px;height: 5px;margin: 0;padding: 0;border: 0;}</style><div id="parallax-3dtest"></div></div>').appendTo("body"), e = i("#parallax-3dtest");
            this.has_3dtransforms = 5 == e.height() && 9 == e.offset().left, a.remove()
        }
        this.has_2dtransforms = r("transform")
    };
    i.extend(t.prototype, {init: function () {
        this.scroll_factor = this.options.scroll_factor;
        var t = this.parallax_blocks = [], r = i("body"), a = this.options.origins;
        a.each(function () {
            var a, e = i(this);
            e.data("image") ? (a = i('<div class="parallax-block"><img class="parallax-image" src="' + e.data("image") + '"></div>'), t.push({origin: e, block: a, bg_ratio: e.data("width") / e.data("height")}), r.prepend(a)) : e.data("tile") && (a = i('<div class="parallax-block"><div class="parallax-image" style="background-image: url(' + e.data("tile") + ')"></div></div>'), t.push({origin: e, block: a, bg_ratio: 1}), r.prepend(a))
        });
        var e = this, o = function () {
            e.redrawBlocks(), e.render()
        }, s = i(window);
        s.on("load", o), s.on("resize", o), s.on("hwparallax.reconfigure", o), s.on("scroll", function () {
            e.render()
        })
    }, redrawBlocks: function () {
        var t = i(window).width(), r = this.window_height = i(window).height(), a = document.body, e = document.documentElement, o = Math.max(a.scrollHeight, a.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight);
        this.max_scrolltop = Math.max(0, o - r);
        for (var s = this.parallax_blocks.length, n = 0; s > n; n++) {
            var l = this.parallax_blocks[n], d = l.block, h = l.bg_ratio, f = d.children(".parallax-image"), p = l.origin, c = p.outerHeight(), g = r - (r - c) * this.scroll_factor, m = t, x = Math.ceil(m / h), _ = 0;
            g > x && (x = g, m = x * h, _ = Math.floor(m - t) / 2), f.width(m).height(x), d.width(t).height(c).css("visibility", "hidden"), i.extend(l, {origin_position: p.offset().top, origin_height: c, image: f, image_xoff: _, image_height: x})
        }
    }, render: function () {
        if (!this.drawing) {
            this.drawing = !0;
            var i = this;
            window.requestAnimationFrame ? window.requestAnimationFrame(function () {
                i.draw()
            }, document) : i.draw()
        }
    }, draw: function () {
        for (var t, r = Math.min(Math.max(0, i(window).scrollTop()), this.max_scrolltop), a = this.parallax_blocks.length, e = 0; a > e; e++)if (t = this.parallax_blocks[e], t.origin_position < r + this.window_height && t.origin_position + t.origin_height > r) {
            var o, s, n, l, d = t.origin_position - r, h = d * (this.scroll_factor - 1), f = {visibility: "visible"}, p = {};
            if (this.has_3dtransforms)for (o = f.transform = "translate3d(0px, " + d + "px, 0px)", s = p.transform = "translate3d(-" + t.image_xoff + "px, " + h + "px, 0px)", l = 0; this.num_vendor_prefixes > l; l++)n = "-" + this.vendor_prefixes[l] + "-transform", f[n] = o, p[n] = s; else if (this.has_2dtransforms)for (o = f.transform = "translate(0px, " + d + "px)", s = p.transform = "translate(-" + t.image_xoff + "px, " + h + "px)", l = 0; this.num_vendor_prefixes > l; l++)n = "-" + this.vendor_prefixes[l] + "-transform", f[n] = o, p[n] = s; else f.top = d + "px", f.left = "0px", p.top = h + "px", p.left = -t.image_xoff + "px";
            t.block.css(f), t.image.css(p)
        } else t.block.css("visibility", "hidden");
        this.drawing = !1
    }}), i.extend(i.fn, {parallax: function (r) {
        var a = i.extend({scroll_factor: .2}, r, {origins: i(this)}), e = new t(a);
        e.init()
    }})
})(jQuery);