// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="数组/数组.html"><strong aria-hidden="true">1.</strong> 数组</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="数组/双指针.html"><strong aria-hidden="true">1.1.</strong> 双指针</a></li><li class="chapter-item expanded "><a href="数组/二分查找.html"><strong aria-hidden="true">1.2.</strong> 二分查找</a></li><li class="chapter-item expanded "><a href="数组/滑动窗口.html"><strong aria-hidden="true">1.3.</strong> 滑动窗口</a></li><li class="chapter-item expanded "><a href="数组/矩阵.html"><strong aria-hidden="true">1.4.</strong> 矩阵</a></li></ol></li><li class="chapter-item expanded "><a href="链表/链表.html"><strong aria-hidden="true">2.</strong> 链表</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="链表/设计链表.html"><strong aria-hidden="true">2.1.</strong> 设计链表</a></li><li class="chapter-item expanded "><a href="链表/移除链表元素.html"><strong aria-hidden="true">2.2.</strong> 移除链表元素</a></li><li class="chapter-item expanded "><a href="链表/反转链表.html"><strong aria-hidden="true">2.3.</strong> 反转链表</a></li><li class="chapter-item expanded "><a href="链表/环形链表.html"><strong aria-hidden="true">2.4.</strong> 环形链表</a></li><li class="chapter-item expanded "><a href="链表/交换节点.html"><strong aria-hidden="true">2.5.</strong> 交换节点</a></li></ol></li><li class="chapter-item expanded "><a href="哈希表.html"><strong aria-hidden="true">3.</strong> 哈希表</a></li><li class="chapter-item expanded "><a href="字符串.html"><strong aria-hidden="true">4.</strong> 字符串</a></li><li class="chapter-item expanded "><a href="双指针/双指针.html"><strong aria-hidden="true">5.</strong> 双指针</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="双指针/移动元素.html"><strong aria-hidden="true">5.1.</strong> 移动元素</a></li><li class="chapter-item expanded "><a href="双指针/三数之和.html"><strong aria-hidden="true">5.2.</strong> 三数之和</a></li><li class="chapter-item expanded "><a href="双指针/接雨水.html"><strong aria-hidden="true">5.3.</strong> 接雨水</a></li></ol></li><li class="chapter-item expanded "><a href="栈与队列.html"><strong aria-hidden="true">6.</strong> 栈与队列</a></li><li class="chapter-item expanded "><a href="二叉树/二叉树.html"><strong aria-hidden="true">7.</strong> 二叉树</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="二叉树/二叉树遍历.html"><strong aria-hidden="true">7.1.</strong> 二叉树遍历</a></li><li class="chapter-item expanded "><a href="二叉树/路径之和.html"><strong aria-hidden="true">7.2.</strong> 路径之和</a></li><li class="chapter-item expanded "><a href="二叉树/二叉树半径.html"><strong aria-hidden="true">7.3.</strong> 二叉树半径</a></li><li class="chapter-item expanded "><a href="二叉树/二叉树右视图.html"><strong aria-hidden="true">7.4.</strong> 二叉树右视图</a></li></ol></li><li class="chapter-item expanded "><a href="回溯.html"><strong aria-hidden="true">8.</strong> 回溯</a></li><li class="chapter-item expanded "><a href="贪心.html"><strong aria-hidden="true">9.</strong> 贪心</a></li><li class="chapter-item expanded "><a href="动态规划.html"><strong aria-hidden="true">10.</strong> 动态规划</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
