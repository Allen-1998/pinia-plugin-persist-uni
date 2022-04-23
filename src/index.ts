import { PiniaPluginContext } from 'pinia'

export interface PersistStrategy {
  key?: string
  storage?: Storage
  paths?: string[]
}

export interface PersistOptions {
  enabled: true
  H5Storage?: Storage
  strategies?: PersistStrategy[]
}

type Store = PiniaPluginContext['store']
type PartialState = Partial<Store['$state']>

declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: PersistOptions
  }
}

export const updateStorage = (strategy: PersistStrategy, store: Store) => {
  const storage = strategy.storage || sessionStorage
  const storeKey = strategy.key || store.$id

  if (strategy.paths) {
    const partialState = strategy.paths.reduce((finalObj, key) => {
      finalObj[key] = store.$state[key]
      return finalObj
    }, {} as PartialState)
    /* #ifdef H5 */
    storage.setItem(storeKey, JSON.stringify(partialState))
    /* #endif */
    /* #ifndef H5 */
    uni.setStorage({ key: storeKey, data: JSON.stringify(partialState) })
    /* #endif */
  } else {
    /* #ifdef H5 */
    storage.setItem(storeKey, JSON.stringify(store.$state))
    /* #endif */
    /* #ifndef H5 */
    uni.setStorage({ key: storeKey, data: JSON.stringify(store.$state) })
    /* #endif */
  }
}

export default ({ options, store }: PiniaPluginContext): void => {
  if (options.persist?.enabled) {
    const defaultStrat: PersistStrategy[] = [
      {
        key: store.$id,
        storage: options.persist?.H5Storage || sessionStorage,
      },
    ]

    const strategies = options.persist?.strategies?.length
      ? options.persist?.strategies
      : defaultStrat

    strategies.forEach((strategy) => {
      const storage = strategy.storage || options.persist?.H5Storage || sessionStorage
      const storeKey = strategy.key || store.$id
      let storageResult
      /* #ifdef H5 */
      storageResult = storage.getItem(storeKey)
      /* #endif */
      /* #ifndef H5 */
      storageResult = uni.getStorageSync(storeKey)
      /* #endif */

      if (storageResult) {
        store.$patch(JSON.parse(storageResult))
        updateStorage(strategy, store)
      }
    })

    store.$subscribe(() => {
      strategies.forEach((strategy) => {
        updateStorage(strategy, store)
      })
    })
  }
}
