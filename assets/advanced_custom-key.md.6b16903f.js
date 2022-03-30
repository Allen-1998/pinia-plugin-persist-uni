import{_ as n,c as s,o as a,a as t}from"./app.e521951d.js";const x='{"title":"Custom storage key","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/custom-key.md"}',e={},o=t(`<h1 id="custom-storage-key" tabindex="-1">Custom storage key <a class="header-anchor" href="#custom-storage-key" aria-hidden="true">#</a></h1><p>You can set a custom storage key by setting the <code>key</code> key in each strategy.</p><p>In this example, the whole state will be stored in the localStorage under the key <code>user</code>.</p><div class="language-typescript"><pre><code><span class="token comment">// store/use-user-store.ts</span>
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
    strategies<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,4),p=[o];function c(r,u,l,k,i,d){return a(),s("div",null,p)}var h=n(e,[["render",c]]);export{x as __pageData,h as default};
