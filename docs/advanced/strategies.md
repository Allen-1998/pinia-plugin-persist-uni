# Strategies

With `pinia-plugin-persist-uni` You can use multiple strategies to persist your store data.

You can define a strategy list in your store under the `persist` key.

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
    strategies: [], // <- HERE
  },
})
```

Each strategy is an object like so:

```typescript
interface PersistStrategy {
  key?: string // Storage key
  paths?: string[] // list ok state keys you want to store in the storage
}
```
