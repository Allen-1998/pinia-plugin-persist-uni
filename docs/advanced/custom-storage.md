# Custom storage

By default the storage is set to localStorage, but you can specify the storage you want to use for each strategy by setting the `storage` key.

You can then use `sessionStorage`or `localStorage`.

priority:
strategies/storage > H5Storage > defaultStorage(localStorage)

```typescript
// store/use-user-store.ts

export const useUserStore = defineStore('storeUser', {
  state() {
    return {
      firstName: 'alllen',
      lastName: 'ttk',
      accessToken: 'xxxxxxxxxxxxx',
    }
  },
  persist: {
    enabled: true,
    H5Storage: sessionStorage,
    strategies: [
      {
        storage: localStorage,
        paths: ['accessToken'],
      },
    ],
  },
})
```
