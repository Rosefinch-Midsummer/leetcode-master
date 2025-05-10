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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="前言.html"><strong aria-hidden="true">1.</strong> 前言</a></li><li class="chapter-item "><a href="数组/数组.html"><strong aria-hidden="true">2.</strong> 数组</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="数组/双指针.html"><strong aria-hidden="true">2.1.</strong> 双指针</a></li><li class="chapter-item "><a href="数组/二分查找.html"><strong aria-hidden="true">2.2.</strong> 二分查找</a></li><li class="chapter-item "><a href="数组/滑动窗口.html"><strong aria-hidden="true">2.3.</strong> 滑动窗口</a></li><li class="chapter-item "><a href="数组/矩阵.html"><strong aria-hidden="true">2.4.</strong> 矩阵</a></li></ol></li><li class="chapter-item "><a href="数与位/数与位.html"><strong aria-hidden="true">3.</strong> 数与位</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="数与位/数字位操作.html"><strong aria-hidden="true">3.1.</strong> 数字位操作</a></li></ol></li><li class="chapter-item "><a href="链表/链表.html"><strong aria-hidden="true">4.</strong> 链表</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="链表/设计链表.html"><strong aria-hidden="true">4.1.</strong> 设计链表</a></li><li class="chapter-item "><a href="链表/移除链表元素.html"><strong aria-hidden="true">4.2.</strong> 移除链表元素</a></li><li class="chapter-item "><a href="链表/反转链表.html"><strong aria-hidden="true">4.3.</strong> 反转链表</a></li><li class="chapter-item "><a href="链表/环形链表.html"><strong aria-hidden="true">4.4.</strong> 环形链表</a></li><li class="chapter-item "><a href="链表/交换节点.html"><strong aria-hidden="true">4.5.</strong> 交换节点</a></li></ol></li><li class="chapter-item "><a href="哈希表/哈希表.html"><strong aria-hidden="true">5.</strong> 哈希表</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="哈希表/哈希数组.html"><strong aria-hidden="true">5.1.</strong> 哈希数组</a></li><li class="chapter-item "><a href="哈希表/哈希集合.html"><strong aria-hidden="true">5.2.</strong> 哈希集合</a></li><li class="chapter-item "><a href="哈希表/哈希映射.html"><strong aria-hidden="true">5.3.</strong> 哈希映射</a></li></ol></li><li class="chapter-item "><a href="字符串/字符串.html"><strong aria-hidden="true">6.</strong> 字符串</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="字符串/字符串反转系列.html"><strong aria-hidden="true">6.1.</strong> 字符串反转系列</a></li></ol></li><li class="chapter-item "><a href="双指针/双指针.html"><strong aria-hidden="true">7.</strong> 双指针</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="双指针/移动元素.html"><strong aria-hidden="true">7.1.</strong> 移动元素</a></li><li class="chapter-item "><a href="双指针/三数之和.html"><strong aria-hidden="true">7.2.</strong> 三数之和</a></li><li class="chapter-item "><a href="双指针/接雨水.html"><strong aria-hidden="true">7.3.</strong> 接雨水</a></li></ol></li><li class="chapter-item "><a href="栈/栈.html"><strong aria-hidden="true">8.</strong> 栈</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="栈/栈的实现.html"><strong aria-hidden="true">8.1.</strong> 栈的实现</a></li><li class="chapter-item "><a href="栈/字符消消乐.html"><strong aria-hidden="true">8.2.</strong> 字符消消乐</a></li><li class="chapter-item "><a href="栈/栈与计算器.html"><strong aria-hidden="true">8.3.</strong> 栈与计算器</a></li></ol></li><li class="chapter-item "><a href="队列/队列.html"><strong aria-hidden="true">9.</strong> 队列</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="队列/队列的实现.html"><strong aria-hidden="true">9.1.</strong> 队列的实现</a></li><li class="chapter-item "><a href="队列/单调队列.html"><strong aria-hidden="true">9.2.</strong> 单调队列</a></li><li class="chapter-item "><a href="队列/优先队列.html"><strong aria-hidden="true">9.3.</strong> 优先队列</a></li></ol></li><li class="chapter-item "><a href="二叉树/二叉树.html"><strong aria-hidden="true">10.</strong> 二叉树</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="二叉树/二叉树遍历.html"><strong aria-hidden="true">10.1.</strong> 二叉树遍历</a></li><li class="chapter-item "><a href="二叉树/二叉树层序遍历.html"><strong aria-hidden="true">10.2.</strong> 二叉树层序遍历</a></li><li class="chapter-item "><a href="二叉树/二叉树路径.html"><strong aria-hidden="true">10.3.</strong> 二叉树路径</a></li><li class="chapter-item "><a href="二叉树/二叉树物理性质.html"><strong aria-hidden="true">10.4.</strong> 二叉树物理性质</a></li><li class="chapter-item "><a href="二叉树/二叉树反转对称.html"><strong aria-hidden="true">10.5.</strong> 二叉树反转对称</a></li><li class="chapter-item "><a href="二叉树/二叉树深度高度节点数.html"><strong aria-hidden="true">10.6.</strong> 二叉树深度高度节点数</a></li><li class="chapter-item "><a href="二叉树/二叉树构造.html"><strong aria-hidden="true">10.7.</strong> 二叉树构造</a></li><li class="chapter-item "><a href="二叉树/二叉搜索树.html"><strong aria-hidden="true">10.8.</strong> 二叉搜索树</a></li><li class="chapter-item "><a href="二叉树/最低公共祖先.html"><strong aria-hidden="true">10.9.</strong> 公共祖先</a></li><li class="chapter-item "><a href="二叉树/N叉树基本操作.html"><strong aria-hidden="true">10.10.</strong> N叉树基本操作</a></li></ol></li><li class="chapter-item "><a href="回溯/回溯.html"><strong aria-hidden="true">11.</strong> 回溯</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="回溯/组合.html"><strong aria-hidden="true">11.1.</strong> 组合</a></li><li class="chapter-item "><a href="回溯/分割.html"><strong aria-hidden="true">11.2.</strong> 分割</a></li><li class="chapter-item "><a href="回溯/子集.html"><strong aria-hidden="true">11.3.</strong> 子集</a></li><li class="chapter-item "><a href="回溯/排列.html"><strong aria-hidden="true">11.4.</strong> 排列</a></li><li class="chapter-item "><a href="回溯/棋盘.html"><strong aria-hidden="true">11.5.</strong> 棋盘</a></li></ol></li><li class="chapter-item "><a href="贪心/贪心.html"><strong aria-hidden="true">12.</strong> 贪心</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="贪心/数组与贪心.html"><strong aria-hidden="true">12.1.</strong> 数组与贪心</a></li><li class="chapter-item "><a href="贪心/子数组与贪心算法.html"><strong aria-hidden="true">12.2.</strong> 子数组与贪心算法</a></li><li class="chapter-item "><a href="贪心/子序列与贪心算法.html"><strong aria-hidden="true">12.3.</strong> 子序列与贪心算法</a></li><li class="chapter-item "><a href="贪心/数字与贪心.html"><strong aria-hidden="true">12.4.</strong> 数字与贪心</a></li><li class="chapter-item "><a href="贪心/跳跃游戏.html"><strong aria-hidden="true">12.5.</strong> 跳跃游戏</a></li><li class="chapter-item "><a href="贪心/区间和贪心算法.html"><strong aria-hidden="true">12.6.</strong> 区间和贪心算法</a></li><li class="chapter-item "><a href="贪心/字符串和贪心算法.html"><strong aria-hidden="true">12.7.</strong> 字符串和贪心算法</a></li><li class="chapter-item "><a href="贪心/二叉树和贪心算法.html"><strong aria-hidden="true">12.8.</strong> 二叉树和贪心算法</a></li><li class="chapter-item "><a href="贪心/单调栈法.html"><strong aria-hidden="true">12.9.</strong> 单调栈法</a></li></ol></li><li class="chapter-item "><a href="动态规划/动态规划.html"><strong aria-hidden="true">13.</strong> 动态规划</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="动态规划/爬楼梯.html"><strong aria-hidden="true">13.1.</strong> 爬楼梯</a></li><li class="chapter-item "><a href="动态规划/不同路径.html"><strong aria-hidden="true">13.2.</strong> 不同路径</a></li><li class="chapter-item "><a href="动态规划/不同二叉搜索树.html"><strong aria-hidden="true">13.3.</strong> 不同二叉搜索树</a></li><li class="chapter-item "><a href="动态规划/拆分系列.html"><strong aria-hidden="true">13.4.</strong> 拆分系列</a></li><li class="chapter-item "><a href="动态规划/01背包.html"><strong aria-hidden="true">13.5.</strong> 01背包</a></li><li class="chapter-item "><a href="动态规划/完全背包.html"><strong aria-hidden="true">13.6.</strong> 完全背包</a></li><li class="chapter-item "><a href="动态规划/多重背包.html"><strong aria-hidden="true">13.7.</strong> 多重背包</a></li><li class="chapter-item "><a href="动态规划/打家劫舍.html"><strong aria-hidden="true">13.8.</strong> 打家劫舍</a></li><li class="chapter-item "><a href="动态规划/买卖股票.html"><strong aria-hidden="true">13.9.</strong> 买卖股票</a></li><li class="chapter-item "><a href="动态规划/子序列.html"><strong aria-hidden="true">13.10.</strong> 子序列</a></li><li class="chapter-item "><a href="动态规划/编辑距离.html"><strong aria-hidden="true">13.11.</strong> 编辑距离</a></li><li class="chapter-item "><a href="动态规划/回文串.html"><strong aria-hidden="true">13.12.</strong> 回文串</a></li></ol></li><li class="chapter-item "><a href="图论/图论.html"><strong aria-hidden="true">14.</strong> 图论</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
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
