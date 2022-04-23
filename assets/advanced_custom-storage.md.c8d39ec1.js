import{_ as s,c as n,o as a,a as t}from"./app.94291136.js";const _='{"title":"Custom storage","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/custom-storage.md"}',o={},e=t(`<h1 id="custom-storage" tabindex="-1">Custom storage <a class="header-anchor" href="#custom-storage" aria-hidden="true">#</a></h1><p>By default the storage is set to localStorage, but you can specify the storage you want to use for each strategy by setting the <code>storage</code> key.</p><p>You can then use <code>sessionStorage</code>or <code>localStorage</code>.</p><p>priority: strategies/storage &gt; H5Storage &gt; defaultStorage(localStorage)</p><div class="language-typescript"><pre><code><span class="token comment">// store/use-user-store.ts</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;storeUser&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">&#39;alllen&#39;</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">&#39;ttk&#39;</span><span class="token punctuation">,</span>
      accessToken<span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  persist<span class="token operator">:</span> <span class="token punctuation">{</span>
    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    H5Storage<span class="token operator">:</span> sessionStorage<span class="token punctuation">,</span>
    strategies<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        storage<span class="token operator">:</span> localStorage<span class="token punctuation">,</span>
        paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;accessToken&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,5),p=[e];function c(r,u,l,i,k,d){return a(),n("div",null,p)}var x=s(o,[["render",c]]);export{_ as __pageData,x as default};
