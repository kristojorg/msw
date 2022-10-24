// export interface SetupApi<TLifecycleMap, TStartOptions, TStartReturnType> {
//   /**
//    * This is the new name. Previously we had start for setupWorker and listen for setupServer
//    */
//   /**
//    * Registers and activates the mock Service Worker.
//    * @see {@link https://mswjs.io/docs/api/setup-worker/start `worker.start()`}
//    */
//   start: (options?: TStartOptions) => TStartReturnType

//   /**
//    * AKA Close in setupServer
//    */
//   /**
//    * Stops requests interception for the current client.
//    * @see {@link https://mswjs.io/docs/api/setup-worker/stop `worker.stop()`}
//    */
//   stop: StopHandler

//   /**
//    * Prepends given request handlers to the list of existing handlers.
//    * @param {RequestHandler[]} handlers List of runtime request handlers.
//    * @see {@link https://mswjs.io/docs/api/setup-worker/use `worker.use()`}
//    */
//   use: (...handlers: RequestHandler[]) => void

//   /**
//    * Marks all request handlers that respond using `res.once()` as unused.
//    * @see {@link https://mswjs.io/docs/api/setup-worker/restore-handlers `worker.restoreHandlers()`}
//    */
//   restoreHandlers: () => void

//   /**
//    * Resets request handlers to the initial list given to the `setupWorker` call, or to the explicit next request handlers list, if given.
//    * @param {RequestHandler[]} nextHandlers List of the new initial request handlers.
//    * @see {@link https://mswjs.io/docs/api/setup-worker/reset-handlers `worker.resetHandlers()`}
//    */
//   resetHandlers: (...nextHandlers: RequestHandler[]) => void

//   /**
//    * Returns a readonly list of currently active request handlers.
//    * @see {@link https://mswjs.io/docs/api/setup-worker/list-handlers `worker.listHandlers()`}
//    */
//   listHandlers(): ReadonlyArray<
//     RequestHandler<
//       RequestHandlerDefaultInfo,
//       MockedRequest<DefaultBodyType>,
//       any,
//       MockedRequest<DefaultBodyType>
//     >
//   >

//   /**
//    * Lists all active request handlers.
//    * @see {@link https://mswjs.io/docs/api/setup-worker/print-handlers `worker.printHandlers()`}
//    */
//   printHandlers: () => void

//   events: LifeCycleEventEmitter<TLifecycleMap>
// }

// export interface CreateSetup<TLifecycleMap, TStartOptions, TStartReturnType> {
//   (...interceptors: { new (): Interceptor<HttpRequestEventMap> }[]): (
//     ...requestHandlers: RequestHandler[]
//   ) => SetupApi<TLifecycleMap, TStartOptions, TStartReturnType>
// }

// /**
//  * OUR CODE
//  */
// import { CreateSetup } from 'msw'
// import { FetchInterceptor } from '@mswjs/interceptor'

// const createSetupEdge: CreateSetup = () => {
//   return function createEdgeInterceptor(...requestHandlers): SetupApi {
//     return {
//       start() {
//         // start intercepting edge requests
//       },
//       stop() {
//         // stop intercepting edge requests
//       },
//     }
//   }
// }

// const setupEdge = createSetupEdge(new FetchInterceptor())
// const instance = setupEdge(...handlers)

// // instance.start()
// // instance.use()
// // instance.resetHandlers()
// // instance.restoreHandlers()
// // instance.stop()

// /**
//  * Our thinking is currently:
//  *
//  * 1. Create a SetupApi interface with the start/stop/printHandlers/etc.
//  * 2. Create a `CreateSetup` interface that is a function returning a function to setup
//  *    a particular environment
//  * 3. In our own code, write a `createSetupEdge` that somewhat mimicks `createSetupServer`
//  *    while avoiding the `http` module.
//  *
//  * Does that sound about right?
//  */
