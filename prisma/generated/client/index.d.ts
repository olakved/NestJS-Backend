
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppUsers
 * 
 */
export type AppUsers = $Result.DefaultSelection<Prisma.$AppUsersPayload>
/**
 * Model ContactList
 * 
 */
export type ContactList = $Result.DefaultSelection<Prisma.$ContactListPayload>
/**
 * Model namingList
 * 
 */
export type namingList = $Result.DefaultSelection<Prisma.$namingListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  systemAdmin: 'systemAdmin',
  admin: 'admin',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  active: 'active',
  inactive: 'inactive',
  deleted: 'deleted'
};

export type Status = (typeof Status)[keyof typeof Status]


export const MessageStatus: {
  read: 'read',
  unread: 'unread'
};

export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type MessageStatus = $Enums.MessageStatus

export const MessageStatus: typeof $Enums.MessageStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUsers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUsers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.appUsers`: Exposes CRUD operations for the **AppUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUsers.findMany()
    * ```
    */
  get appUsers(): Prisma.AppUsersDelegate<ExtArgs>;

  /**
   * `prisma.contactList`: Exposes CRUD operations for the **ContactList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactLists
    * const contactLists = await prisma.contactList.findMany()
    * ```
    */
  get contactList(): Prisma.ContactListDelegate<ExtArgs>;

  /**
   * `prisma.namingList`: Exposes CRUD operations for the **namingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NamingLists
    * const namingLists = await prisma.namingList.findMany()
    * ```
    */
  get namingList(): Prisma.namingListDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AppUsers: 'AppUsers',
    ContactList: 'ContactList',
    namingList: 'namingList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appUsers' | 'contactList' | 'namingList'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      AppUsers: {
        payload: Prisma.$AppUsersPayload<ExtArgs>
        fields: Prisma.AppUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>
          }
          findFirst: {
            args: Prisma.AppUsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>
          }
          findMany: {
            args: Prisma.AppUsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>[]
          }
          create: {
            args: Prisma.AppUsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>
          }
          createMany: {
            args: Prisma.AppUsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppUsersCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>[]
          }
          delete: {
            args: Prisma.AppUsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>
          }
          update: {
            args: Prisma.AppUsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>
          }
          deleteMany: {
            args: Prisma.AppUsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppUsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppUsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppUsersPayload>
          }
          aggregate: {
            args: Prisma.AppUsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppUsers>
          }
          groupBy: {
            args: Prisma.AppUsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUsersCountArgs<ExtArgs>,
            result: $Utils.Optional<AppUsersCountAggregateOutputType> | number
          }
        }
      }
      ContactList: {
        payload: Prisma.$ContactListPayload<ExtArgs>
        fields: Prisma.ContactListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          findFirst: {
            args: Prisma.ContactListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          findMany: {
            args: Prisma.ContactListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>[]
          }
          create: {
            args: Prisma.ContactListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          createMany: {
            args: Prisma.ContactListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactListCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>[]
          }
          delete: {
            args: Prisma.ContactListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          update: {
            args: Prisma.ContactListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          deleteMany: {
            args: Prisma.ContactListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactListPayload>
          }
          aggregate: {
            args: Prisma.ContactListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactList>
          }
          groupBy: {
            args: Prisma.ContactListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactListCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactListCountAggregateOutputType> | number
          }
        }
      }
      namingList: {
        payload: Prisma.$namingListPayload<ExtArgs>
        fields: Prisma.namingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.namingListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.namingListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>
          }
          findFirst: {
            args: Prisma.namingListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.namingListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>
          }
          findMany: {
            args: Prisma.namingListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>[]
          }
          create: {
            args: Prisma.namingListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>
          }
          createMany: {
            args: Prisma.namingListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.namingListCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>[]
          }
          delete: {
            args: Prisma.namingListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>
          }
          update: {
            args: Prisma.namingListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>
          }
          deleteMany: {
            args: Prisma.namingListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.namingListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.namingListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$namingListPayload>
          }
          aggregate: {
            args: Prisma.NamingListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNamingList>
          }
          groupBy: {
            args: Prisma.namingListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NamingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.namingListCountArgs<ExtArgs>,
            result: $Utils.Optional<NamingListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AppUsers
   */

  export type AggregateAppUsers = {
    _count: AppUsersCountAggregateOutputType | null
    _min: AppUsersMinAggregateOutputType | null
    _max: AppUsersMaxAggregateOutputType | null
  }

  export type AppUsersMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    otpCode: string | null
    status: $Enums.Status | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type AppUsersMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    otpCode: string | null
    status: $Enums.Status | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type AppUsersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    password: number
    email: number
    phone_number: number
    role: number
    otpCode: number
    status: number
    isActive: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    _all: number
  }


  export type AppUsersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    password?: true
    email?: true
    phone_number?: true
    role?: true
    otpCode?: true
    status?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type AppUsersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    password?: true
    email?: true
    phone_number?: true
    role?: true
    otpCode?: true
    status?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type AppUsersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    password?: true
    email?: true
    phone_number?: true
    role?: true
    otpCode?: true
    status?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type AppUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to aggregate.
     */
    where?: AppUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUsersOrderByWithRelationInput | AppUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUsersMaxAggregateInputType
  }

  export type GetAppUsersAggregateType<T extends AppUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUsers[P]>
      : GetScalarType<T[P], AggregateAppUsers[P]>
  }




  export type AppUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUsersWhereInput
    orderBy?: AppUsersOrderByWithAggregationInput | AppUsersOrderByWithAggregationInput[]
    by: AppUsersScalarFieldEnum[] | AppUsersScalarFieldEnum
    having?: AppUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUsersCountAggregateInputType | true
    _min?: AppUsersMinAggregateInputType
    _max?: AppUsersMaxAggregateInputType
  }

  export type AppUsersGroupByOutputType = {
    id: string
    firstname: string | null
    lastname: string | null
    password: string | null
    email: string
    phone_number: string
    role: $Enums.Role
    otpCode: string | null
    status: $Enums.Status
    isActive: boolean
    isDeleted: boolean
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    _count: AppUsersCountAggregateOutputType | null
    _min: AppUsersMinAggregateOutputType | null
    _max: AppUsersMaxAggregateOutputType | null
  }

  type GetAppUsersGroupByPayload<T extends AppUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUsersGroupByOutputType[P]>
            : GetScalarType<T[P], AppUsersGroupByOutputType[P]>
        }
      >
    >


  export type AppUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    otpCode?: boolean
    status?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["appUsers"]>

  export type AppUsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    otpCode?: boolean
    status?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["appUsers"]>

  export type AppUsersSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    otpCode?: boolean
    status?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }


  export type $AppUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUsers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string | null
      lastname: string | null
      password: string | null
      email: string
      phone_number: string
      role: $Enums.Role
      otpCode: string | null
      status: $Enums.Status
      isActive: boolean
      isDeleted: boolean
      createdAt: Date | null
      updatedAt: Date | null
      lastLogin: Date | null
    }, ExtArgs["result"]["appUsers"]>
    composites: {}
  }

  type AppUsersGetPayload<S extends boolean | null | undefined | AppUsersDefaultArgs> = $Result.GetResult<Prisma.$AppUsersPayload, S>

  type AppUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppUsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppUsersCountAggregateInputType | true
    }

  export interface AppUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUsers'], meta: { name: 'AppUsers' } }
    /**
     * Find zero or one AppUsers that matches the filter.
     * @param {AppUsersFindUniqueArgs} args - Arguments to find a AppUsers
     * @example
     * // Get one AppUsers
     * const appUsers = await prisma.appUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppUsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppUsersFindUniqueArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AppUsers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppUsersFindUniqueOrThrowArgs} args - Arguments to find a AppUsers
     * @example
     * // Get one AppUsers
     * const appUsers = await prisma.appUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppUsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppUsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsersFindFirstArgs} args - Arguments to find a AppUsers
     * @example
     * // Get one AppUsers
     * const appUsers = await prisma.appUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppUsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppUsersFindFirstArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AppUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsersFindFirstOrThrowArgs} args - Arguments to find a AppUsers
     * @example
     * // Get one AppUsers
     * const appUsers = await prisma.appUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppUsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppUsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUsers.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUsersWithIdOnly = await prisma.appUsers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppUsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppUsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AppUsers.
     * @param {AppUsersCreateArgs} args - Arguments to create a AppUsers.
     * @example
     * // Create one AppUsers
     * const AppUsers = await prisma.appUsers.create({
     *   data: {
     *     // ... data to create a AppUsers
     *   }
     * })
     * 
    **/
    create<T extends AppUsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppUsersCreateArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AppUsers.
     * @param {AppUsersCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUsers = await prisma.appUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AppUsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppUsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppUsers and returns the data saved in the database.
     * @param {AppUsersCreateManyAndReturnArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUsers = await prisma.appUsers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUsers and only return the `id`
     * const appUsersWithIdOnly = await prisma.appUsers.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AppUsersCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AppUsersCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a AppUsers.
     * @param {AppUsersDeleteArgs} args - Arguments to delete one AppUsers.
     * @example
     * // Delete one AppUsers
     * const AppUsers = await prisma.appUsers.delete({
     *   where: {
     *     // ... filter to delete one AppUsers
     *   }
     * })
     * 
    **/
    delete<T extends AppUsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppUsersDeleteArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AppUsers.
     * @param {AppUsersUpdateArgs} args - Arguments to update one AppUsers.
     * @example
     * // Update one AppUsers
     * const appUsers = await prisma.appUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppUsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppUsersUpdateArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUsersDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppUsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppUsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUsers = await prisma.appUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppUsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppUsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppUsers.
     * @param {AppUsersUpsertArgs} args - Arguments to update or create a AppUsers.
     * @example
     * // Update or create a AppUsers
     * const appUsers = await prisma.appUsers.upsert({
     *   create: {
     *     // ... data to create a AppUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUsers we want to update
     *   }
     * })
    **/
    upsert<T extends AppUsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppUsersUpsertArgs<ExtArgs>>
    ): Prisma__AppUsersClient<$Result.GetResult<Prisma.$AppUsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsersCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUsers.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUsersCountArgs>(
      args?: Subset<T, AppUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppUsersAggregateArgs>(args: Subset<T, AppUsersAggregateArgs>): Prisma.PrismaPromise<GetAppUsersAggregateType<T>>

    /**
     * Group by AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUsersGroupByArgs['orderBy'] }
        : { orderBy?: AppUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUsers model
   */
  readonly fields: AppUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AppUsers model
   */ 
  interface AppUsersFieldRefs {
    readonly id: FieldRef<"AppUsers", 'String'>
    readonly firstname: FieldRef<"AppUsers", 'String'>
    readonly lastname: FieldRef<"AppUsers", 'String'>
    readonly password: FieldRef<"AppUsers", 'String'>
    readonly email: FieldRef<"AppUsers", 'String'>
    readonly phone_number: FieldRef<"AppUsers", 'String'>
    readonly role: FieldRef<"AppUsers", 'Role'>
    readonly otpCode: FieldRef<"AppUsers", 'String'>
    readonly status: FieldRef<"AppUsers", 'Status'>
    readonly isActive: FieldRef<"AppUsers", 'Boolean'>
    readonly isDeleted: FieldRef<"AppUsers", 'Boolean'>
    readonly createdAt: FieldRef<"AppUsers", 'DateTime'>
    readonly updatedAt: FieldRef<"AppUsers", 'DateTime'>
    readonly lastLogin: FieldRef<"AppUsers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUsers findUnique
   */
  export type AppUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where: AppUsersWhereUniqueInput
  }

  /**
   * AppUsers findUniqueOrThrow
   */
  export type AppUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where: AppUsersWhereUniqueInput
  }

  /**
   * AppUsers findFirst
   */
  export type AppUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUsersOrderByWithRelationInput | AppUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUsersScalarFieldEnum | AppUsersScalarFieldEnum[]
  }

  /**
   * AppUsers findFirstOrThrow
   */
  export type AppUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUsersOrderByWithRelationInput | AppUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUsersScalarFieldEnum | AppUsersScalarFieldEnum[]
  }

  /**
   * AppUsers findMany
   */
  export type AppUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUsersOrderByWithRelationInput | AppUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUsersScalarFieldEnum | AppUsersScalarFieldEnum[]
  }

  /**
   * AppUsers create
   */
  export type AppUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * The data needed to create a AppUsers.
     */
    data: XOR<AppUsersCreateInput, AppUsersUncheckedCreateInput>
  }

  /**
   * AppUsers createMany
   */
  export type AppUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUsersCreateManyInput | AppUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUsers createManyAndReturn
   */
  export type AppUsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AppUsers.
     */
    data: AppUsersCreateManyInput | AppUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUsers update
   */
  export type AppUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * The data needed to update a AppUsers.
     */
    data: XOR<AppUsersUpdateInput, AppUsersUncheckedUpdateInput>
    /**
     * Choose, which AppUsers to update.
     */
    where: AppUsersWhereUniqueInput
  }

  /**
   * AppUsers updateMany
   */
  export type AppUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUsersUpdateManyMutationInput, AppUsersUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUsersWhereInput
  }

  /**
   * AppUsers upsert
   */
  export type AppUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * The filter to search for the AppUsers to update in case it exists.
     */
    where: AppUsersWhereUniqueInput
    /**
     * In case the AppUsers found by the `where` argument doesn't exist, create a new AppUsers with this data.
     */
    create: XOR<AppUsersCreateInput, AppUsersUncheckedCreateInput>
    /**
     * In case the AppUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUsersUpdateInput, AppUsersUncheckedUpdateInput>
  }

  /**
   * AppUsers delete
   */
  export type AppUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
    /**
     * Filter which AppUsers to delete.
     */
    where: AppUsersWhereUniqueInput
  }

  /**
   * AppUsers deleteMany
   */
  export type AppUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUsersWhereInput
  }

  /**
   * AppUsers without action
   */
  export type AppUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsers
     */
    select?: AppUsersSelect<ExtArgs> | null
  }


  /**
   * Model ContactList
   */

  export type AggregateContactList = {
    _count: ContactListCountAggregateOutputType | null
    _avg: ContactListAvgAggregateOutputType | null
    _sum: ContactListSumAggregateOutputType | null
    _min: ContactListMinAggregateOutputType | null
    _max: ContactListMaxAggregateOutputType | null
  }

  export type ContactListAvgAggregateOutputType = {
    totalViews: number | null
  }

  export type ContactListSumAggregateOutputType = {
    totalViews: number | null
  }

  export type ContactListMinAggregateOutputType = {
    id: string | null
    senderName: string | null
    senderEmail: string | null
    senderPhone: string | null
    totalViews: number | null
    messageTitle: string | null
    message: string | null
    status: $Enums.MessageStatus | null
    createdAt: Date | null
  }

  export type ContactListMaxAggregateOutputType = {
    id: string | null
    senderName: string | null
    senderEmail: string | null
    senderPhone: string | null
    totalViews: number | null
    messageTitle: string | null
    message: string | null
    status: $Enums.MessageStatus | null
    createdAt: Date | null
  }

  export type ContactListCountAggregateOutputType = {
    id: number
    senderName: number
    senderEmail: number
    senderPhone: number
    totalViews: number
    messageTitle: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactListAvgAggregateInputType = {
    totalViews?: true
  }

  export type ContactListSumAggregateInputType = {
    totalViews?: true
  }

  export type ContactListMinAggregateInputType = {
    id?: true
    senderName?: true
    senderEmail?: true
    senderPhone?: true
    totalViews?: true
    messageTitle?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactListMaxAggregateInputType = {
    id?: true
    senderName?: true
    senderEmail?: true
    senderPhone?: true
    totalViews?: true
    messageTitle?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactListCountAggregateInputType = {
    id?: true
    senderName?: true
    senderEmail?: true
    senderPhone?: true
    totalViews?: true
    messageTitle?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactList to aggregate.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactLists
    **/
    _count?: true | ContactListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactListMaxAggregateInputType
  }

  export type GetContactListAggregateType<T extends ContactListAggregateArgs> = {
        [P in keyof T & keyof AggregateContactList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactList[P]>
      : GetScalarType<T[P], AggregateContactList[P]>
  }




  export type ContactListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactListWhereInput
    orderBy?: ContactListOrderByWithAggregationInput | ContactListOrderByWithAggregationInput[]
    by: ContactListScalarFieldEnum[] | ContactListScalarFieldEnum
    having?: ContactListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactListCountAggregateInputType | true
    _avg?: ContactListAvgAggregateInputType
    _sum?: ContactListSumAggregateInputType
    _min?: ContactListMinAggregateInputType
    _max?: ContactListMaxAggregateInputType
  }

  export type ContactListGroupByOutputType = {
    id: string
    senderName: string | null
    senderEmail: string | null
    senderPhone: string | null
    totalViews: number | null
    messageTitle: string | null
    message: string | null
    status: $Enums.MessageStatus
    createdAt: Date
    _count: ContactListCountAggregateOutputType | null
    _avg: ContactListAvgAggregateOutputType | null
    _sum: ContactListSumAggregateOutputType | null
    _min: ContactListMinAggregateOutputType | null
    _max: ContactListMaxAggregateOutputType | null
  }

  type GetContactListGroupByPayload<T extends ContactListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactListGroupByOutputType[P]>
            : GetScalarType<T[P], ContactListGroupByOutputType[P]>
        }
      >
    >


  export type ContactListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderName?: boolean
    senderEmail?: boolean
    senderPhone?: boolean
    totalViews?: boolean
    messageTitle?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactList"]>

  export type ContactListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderName?: boolean
    senderEmail?: boolean
    senderPhone?: boolean
    totalViews?: boolean
    messageTitle?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactList"]>

  export type ContactListSelectScalar = {
    id?: boolean
    senderName?: boolean
    senderEmail?: boolean
    senderPhone?: boolean
    totalViews?: boolean
    messageTitle?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $ContactListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderName: string | null
      senderEmail: string | null
      senderPhone: string | null
      totalViews: number | null
      messageTitle: string | null
      message: string | null
      status: $Enums.MessageStatus
      createdAt: Date
    }, ExtArgs["result"]["contactList"]>
    composites: {}
  }

  type ContactListGetPayload<S extends boolean | null | undefined | ContactListDefaultArgs> = $Result.GetResult<Prisma.$ContactListPayload, S>

  type ContactListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactListCountAggregateInputType | true
    }

  export interface ContactListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactList'], meta: { name: 'ContactList' } }
    /**
     * Find zero or one ContactList that matches the filter.
     * @param {ContactListFindUniqueArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactListFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactList that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactListFindUniqueOrThrowArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListFindFirstArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactListFindFirstArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListFindFirstOrThrowArgs} args - Arguments to find a ContactList
     * @example
     * // Get one ContactList
     * const contactList = await prisma.contactList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactLists
     * const contactLists = await prisma.contactList.findMany()
     * 
     * // Get first 10 ContactLists
     * const contactLists = await prisma.contactList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactListWithIdOnly = await prisma.contactList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactList.
     * @param {ContactListCreateArgs} args - Arguments to create a ContactList.
     * @example
     * // Create one ContactList
     * const ContactList = await prisma.contactList.create({
     *   data: {
     *     // ... data to create a ContactList
     *   }
     * })
     * 
    **/
    create<T extends ContactListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactListCreateArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactLists.
     * @param {ContactListCreateManyArgs} args - Arguments to create many ContactLists.
     * @example
     * // Create many ContactLists
     * const contactList = await prisma.contactList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ContactListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactLists and returns the data saved in the database.
     * @param {ContactListCreateManyAndReturnArgs} args - Arguments to create many ContactLists.
     * @example
     * // Create many ContactLists
     * const contactList = await prisma.contactList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactLists and only return the `id`
     * const contactListWithIdOnly = await prisma.contactList.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ContactListCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactListCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ContactList.
     * @param {ContactListDeleteArgs} args - Arguments to delete one ContactList.
     * @example
     * // Delete one ContactList
     * const ContactList = await prisma.contactList.delete({
     *   where: {
     *     // ... filter to delete one ContactList
     *   }
     * })
     * 
    **/
    delete<T extends ContactListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactListDeleteArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactList.
     * @param {ContactListUpdateArgs} args - Arguments to update one ContactList.
     * @example
     * // Update one ContactList
     * const contactList = await prisma.contactList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactListUpdateArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactLists.
     * @param {ContactListDeleteManyArgs} args - Arguments to filter ContactLists to delete.
     * @example
     * // Delete a few ContactLists
     * const { count } = await prisma.contactList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactLists
     * const contactList = await prisma.contactList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactList.
     * @param {ContactListUpsertArgs} args - Arguments to update or create a ContactList.
     * @example
     * // Update or create a ContactList
     * const contactList = await prisma.contactList.upsert({
     *   create: {
     *     // ... data to create a ContactList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactList we want to update
     *   }
     * })
    **/
    upsert<T extends ContactListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactListUpsertArgs<ExtArgs>>
    ): Prisma__ContactListClient<$Result.GetResult<Prisma.$ContactListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContactLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListCountArgs} args - Arguments to filter ContactLists to count.
     * @example
     * // Count the number of ContactLists
     * const count = await prisma.contactList.count({
     *   where: {
     *     // ... the filter for the ContactLists we want to count
     *   }
     * })
    **/
    count<T extends ContactListCountArgs>(
      args?: Subset<T, ContactListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactListAggregateArgs>(args: Subset<T, ContactListAggregateArgs>): Prisma.PrismaPromise<GetContactListAggregateType<T>>

    /**
     * Group by ContactList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactListGroupByArgs['orderBy'] }
        : { orderBy?: ContactListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactList model
   */
  readonly fields: ContactListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactList model
   */ 
  interface ContactListFieldRefs {
    readonly id: FieldRef<"ContactList", 'String'>
    readonly senderName: FieldRef<"ContactList", 'String'>
    readonly senderEmail: FieldRef<"ContactList", 'String'>
    readonly senderPhone: FieldRef<"ContactList", 'String'>
    readonly totalViews: FieldRef<"ContactList", 'Int'>
    readonly messageTitle: FieldRef<"ContactList", 'String'>
    readonly message: FieldRef<"ContactList", 'String'>
    readonly status: FieldRef<"ContactList", 'MessageStatus'>
    readonly createdAt: FieldRef<"ContactList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactList findUnique
   */
  export type ContactListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList findUniqueOrThrow
   */
  export type ContactListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList findFirst
   */
  export type ContactListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactLists.
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactLists.
     */
    distinct?: ContactListScalarFieldEnum | ContactListScalarFieldEnum[]
  }

  /**
   * ContactList findFirstOrThrow
   */
  export type ContactListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Filter, which ContactList to fetch.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactLists.
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactLists.
     */
    distinct?: ContactListScalarFieldEnum | ContactListScalarFieldEnum[]
  }

  /**
   * ContactList findMany
   */
  export type ContactListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Filter, which ContactLists to fetch.
     */
    where?: ContactListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactLists to fetch.
     */
    orderBy?: ContactListOrderByWithRelationInput | ContactListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactLists.
     */
    cursor?: ContactListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactLists.
     */
    skip?: number
    distinct?: ContactListScalarFieldEnum | ContactListScalarFieldEnum[]
  }

  /**
   * ContactList create
   */
  export type ContactListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * The data needed to create a ContactList.
     */
    data?: XOR<ContactListCreateInput, ContactListUncheckedCreateInput>
  }

  /**
   * ContactList createMany
   */
  export type ContactListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactLists.
     */
    data: ContactListCreateManyInput | ContactListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactList createManyAndReturn
   */
  export type ContactListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContactLists.
     */
    data: ContactListCreateManyInput | ContactListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactList update
   */
  export type ContactListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * The data needed to update a ContactList.
     */
    data: XOR<ContactListUpdateInput, ContactListUncheckedUpdateInput>
    /**
     * Choose, which ContactList to update.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList updateMany
   */
  export type ContactListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactLists.
     */
    data: XOR<ContactListUpdateManyMutationInput, ContactListUncheckedUpdateManyInput>
    /**
     * Filter which ContactLists to update
     */
    where?: ContactListWhereInput
  }

  /**
   * ContactList upsert
   */
  export type ContactListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * The filter to search for the ContactList to update in case it exists.
     */
    where: ContactListWhereUniqueInput
    /**
     * In case the ContactList found by the `where` argument doesn't exist, create a new ContactList with this data.
     */
    create: XOR<ContactListCreateInput, ContactListUncheckedCreateInput>
    /**
     * In case the ContactList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactListUpdateInput, ContactListUncheckedUpdateInput>
  }

  /**
   * ContactList delete
   */
  export type ContactListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
    /**
     * Filter which ContactList to delete.
     */
    where: ContactListWhereUniqueInput
  }

  /**
   * ContactList deleteMany
   */
  export type ContactListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactLists to delete
     */
    where?: ContactListWhereInput
  }

  /**
   * ContactList without action
   */
  export type ContactListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactList
     */
    select?: ContactListSelect<ExtArgs> | null
  }


  /**
   * Model namingList
   */

  export type AggregateNamingList = {
    _count: NamingListCountAggregateOutputType | null
    _min: NamingListMinAggregateOutputType | null
    _max: NamingListMaxAggregateOutputType | null
  }

  export type NamingListMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type NamingListMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type NamingListCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    createdAt: number
    _all: number
  }


  export type NamingListMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
  }

  export type NamingListMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
  }

  export type NamingListCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type NamingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which namingList to aggregate.
     */
    where?: namingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of namingLists to fetch.
     */
    orderBy?: namingListOrderByWithRelationInput | namingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: namingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` namingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` namingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned namingLists
    **/
    _count?: true | NamingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NamingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NamingListMaxAggregateInputType
  }

  export type GetNamingListAggregateType<T extends NamingListAggregateArgs> = {
        [P in keyof T & keyof AggregateNamingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNamingList[P]>
      : GetScalarType<T[P], AggregateNamingList[P]>
  }




  export type namingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: namingListWhereInput
    orderBy?: namingListOrderByWithAggregationInput | namingListOrderByWithAggregationInput[]
    by: NamingListScalarFieldEnum[] | NamingListScalarFieldEnum
    having?: namingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NamingListCountAggregateInputType | true
    _min?: NamingListMinAggregateInputType
    _max?: NamingListMaxAggregateInputType
  }

  export type NamingListGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date
    _count: NamingListCountAggregateOutputType | null
    _min: NamingListMinAggregateOutputType | null
    _max: NamingListMaxAggregateOutputType | null
  }

  type GetNamingListGroupByPayload<T extends namingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NamingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NamingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NamingListGroupByOutputType[P]>
            : GetScalarType<T[P], NamingListGroupByOutputType[P]>
        }
      >
    >


  export type namingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["namingList"]>

  export type namingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["namingList"]>

  export type namingListSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
  }


  export type $namingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "namingList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["namingList"]>
    composites: {}
  }

  type namingListGetPayload<S extends boolean | null | undefined | namingListDefaultArgs> = $Result.GetResult<Prisma.$namingListPayload, S>

  type namingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<namingListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NamingListCountAggregateInputType | true
    }

  export interface namingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['namingList'], meta: { name: 'namingList' } }
    /**
     * Find zero or one NamingList that matches the filter.
     * @param {namingListFindUniqueArgs} args - Arguments to find a NamingList
     * @example
     * // Get one NamingList
     * const namingList = await prisma.namingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends namingListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, namingListFindUniqueArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NamingList that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {namingListFindUniqueOrThrowArgs} args - Arguments to find a NamingList
     * @example
     * // Get one NamingList
     * const namingList = await prisma.namingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends namingListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, namingListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NamingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {namingListFindFirstArgs} args - Arguments to find a NamingList
     * @example
     * // Get one NamingList
     * const namingList = await prisma.namingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends namingListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, namingListFindFirstArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NamingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {namingListFindFirstOrThrowArgs} args - Arguments to find a NamingList
     * @example
     * // Get one NamingList
     * const namingList = await prisma.namingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends namingListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, namingListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NamingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {namingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NamingLists
     * const namingLists = await prisma.namingList.findMany()
     * 
     * // Get first 10 NamingLists
     * const namingLists = await prisma.namingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const namingListWithIdOnly = await prisma.namingList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends namingListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, namingListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NamingList.
     * @param {namingListCreateArgs} args - Arguments to create a NamingList.
     * @example
     * // Create one NamingList
     * const NamingList = await prisma.namingList.create({
     *   data: {
     *     // ... data to create a NamingList
     *   }
     * })
     * 
    **/
    create<T extends namingListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, namingListCreateArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NamingLists.
     * @param {namingListCreateManyArgs} args - Arguments to create many NamingLists.
     * @example
     * // Create many NamingLists
     * const namingList = await prisma.namingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends namingListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, namingListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NamingLists and returns the data saved in the database.
     * @param {namingListCreateManyAndReturnArgs} args - Arguments to create many NamingLists.
     * @example
     * // Create many NamingLists
     * const namingList = await prisma.namingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NamingLists and only return the `id`
     * const namingListWithIdOnly = await prisma.namingList.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends namingListCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, namingListCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a NamingList.
     * @param {namingListDeleteArgs} args - Arguments to delete one NamingList.
     * @example
     * // Delete one NamingList
     * const NamingList = await prisma.namingList.delete({
     *   where: {
     *     // ... filter to delete one NamingList
     *   }
     * })
     * 
    **/
    delete<T extends namingListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, namingListDeleteArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NamingList.
     * @param {namingListUpdateArgs} args - Arguments to update one NamingList.
     * @example
     * // Update one NamingList
     * const namingList = await prisma.namingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends namingListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, namingListUpdateArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NamingLists.
     * @param {namingListDeleteManyArgs} args - Arguments to filter NamingLists to delete.
     * @example
     * // Delete a few NamingLists
     * const { count } = await prisma.namingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends namingListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, namingListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NamingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {namingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NamingLists
     * const namingList = await prisma.namingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends namingListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, namingListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NamingList.
     * @param {namingListUpsertArgs} args - Arguments to update or create a NamingList.
     * @example
     * // Update or create a NamingList
     * const namingList = await prisma.namingList.upsert({
     *   create: {
     *     // ... data to create a NamingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NamingList we want to update
     *   }
     * })
    **/
    upsert<T extends namingListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, namingListUpsertArgs<ExtArgs>>
    ): Prisma__namingListClient<$Result.GetResult<Prisma.$namingListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NamingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {namingListCountArgs} args - Arguments to filter NamingLists to count.
     * @example
     * // Count the number of NamingLists
     * const count = await prisma.namingList.count({
     *   where: {
     *     // ... the filter for the NamingLists we want to count
     *   }
     * })
    **/
    count<T extends namingListCountArgs>(
      args?: Subset<T, namingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NamingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NamingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NamingListAggregateArgs>(args: Subset<T, NamingListAggregateArgs>): Prisma.PrismaPromise<GetNamingListAggregateType<T>>

    /**
     * Group by NamingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {namingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends namingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: namingListGroupByArgs['orderBy'] }
        : { orderBy?: namingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, namingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNamingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the namingList model
   */
  readonly fields: namingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for namingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__namingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the namingList model
   */ 
  interface namingListFieldRefs {
    readonly id: FieldRef<"namingList", 'String'>
    readonly firstName: FieldRef<"namingList", 'String'>
    readonly lastName: FieldRef<"namingList", 'String'>
    readonly phone: FieldRef<"namingList", 'String'>
    readonly createdAt: FieldRef<"namingList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * namingList findUnique
   */
  export type namingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * Filter, which namingList to fetch.
     */
    where: namingListWhereUniqueInput
  }

  /**
   * namingList findUniqueOrThrow
   */
  export type namingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * Filter, which namingList to fetch.
     */
    where: namingListWhereUniqueInput
  }

  /**
   * namingList findFirst
   */
  export type namingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * Filter, which namingList to fetch.
     */
    where?: namingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of namingLists to fetch.
     */
    orderBy?: namingListOrderByWithRelationInput | namingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for namingLists.
     */
    cursor?: namingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` namingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` namingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of namingLists.
     */
    distinct?: NamingListScalarFieldEnum | NamingListScalarFieldEnum[]
  }

  /**
   * namingList findFirstOrThrow
   */
  export type namingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * Filter, which namingList to fetch.
     */
    where?: namingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of namingLists to fetch.
     */
    orderBy?: namingListOrderByWithRelationInput | namingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for namingLists.
     */
    cursor?: namingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` namingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` namingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of namingLists.
     */
    distinct?: NamingListScalarFieldEnum | NamingListScalarFieldEnum[]
  }

  /**
   * namingList findMany
   */
  export type namingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * Filter, which namingLists to fetch.
     */
    where?: namingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of namingLists to fetch.
     */
    orderBy?: namingListOrderByWithRelationInput | namingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing namingLists.
     */
    cursor?: namingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` namingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` namingLists.
     */
    skip?: number
    distinct?: NamingListScalarFieldEnum | NamingListScalarFieldEnum[]
  }

  /**
   * namingList create
   */
  export type namingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * The data needed to create a namingList.
     */
    data?: XOR<namingListCreateInput, namingListUncheckedCreateInput>
  }

  /**
   * namingList createMany
   */
  export type namingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many namingLists.
     */
    data: namingListCreateManyInput | namingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * namingList createManyAndReturn
   */
  export type namingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many namingLists.
     */
    data: namingListCreateManyInput | namingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * namingList update
   */
  export type namingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * The data needed to update a namingList.
     */
    data: XOR<namingListUpdateInput, namingListUncheckedUpdateInput>
    /**
     * Choose, which namingList to update.
     */
    where: namingListWhereUniqueInput
  }

  /**
   * namingList updateMany
   */
  export type namingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update namingLists.
     */
    data: XOR<namingListUpdateManyMutationInput, namingListUncheckedUpdateManyInput>
    /**
     * Filter which namingLists to update
     */
    where?: namingListWhereInput
  }

  /**
   * namingList upsert
   */
  export type namingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * The filter to search for the namingList to update in case it exists.
     */
    where: namingListWhereUniqueInput
    /**
     * In case the namingList found by the `where` argument doesn't exist, create a new namingList with this data.
     */
    create: XOR<namingListCreateInput, namingListUncheckedCreateInput>
    /**
     * In case the namingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<namingListUpdateInput, namingListUncheckedUpdateInput>
  }

  /**
   * namingList delete
   */
  export type namingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
    /**
     * Filter which namingList to delete.
     */
    where: namingListWhereUniqueInput
  }

  /**
   * namingList deleteMany
   */
  export type namingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which namingLists to delete
     */
    where?: namingListWhereInput
  }

  /**
   * namingList without action
   */
  export type namingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the namingList
     */
    select?: namingListSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppUsersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    otpCode: 'otpCode',
    status: 'status',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin'
  };

  export type AppUsersScalarFieldEnum = (typeof AppUsersScalarFieldEnum)[keyof typeof AppUsersScalarFieldEnum]


  export const ContactListScalarFieldEnum: {
    id: 'id',
    senderName: 'senderName',
    senderEmail: 'senderEmail',
    senderPhone: 'senderPhone',
    totalViews: 'totalViews',
    messageTitle: 'messageTitle',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactListScalarFieldEnum = (typeof ContactListScalarFieldEnum)[keyof typeof ContactListScalarFieldEnum]


  export const NamingListScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type NamingListScalarFieldEnum = (typeof NamingListScalarFieldEnum)[keyof typeof NamingListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>
    


  /**
   * Reference to a field of type 'MessageStatus[]'
   */
  export type ListEnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AppUsersWhereInput = {
    AND?: AppUsersWhereInput | AppUsersWhereInput[]
    OR?: AppUsersWhereInput[]
    NOT?: AppUsersWhereInput | AppUsersWhereInput[]
    id?: StringFilter<"AppUsers"> | string
    firstname?: StringNullableFilter<"AppUsers"> | string | null
    lastname?: StringNullableFilter<"AppUsers"> | string | null
    password?: StringNullableFilter<"AppUsers"> | string | null
    email?: StringFilter<"AppUsers"> | string
    phone_number?: StringFilter<"AppUsers"> | string
    role?: EnumRoleFilter<"AppUsers"> | $Enums.Role
    otpCode?: StringNullableFilter<"AppUsers"> | string | null
    status?: EnumStatusFilter<"AppUsers"> | $Enums.Status
    isActive?: BoolFilter<"AppUsers"> | boolean
    isDeleted?: BoolFilter<"AppUsers"> | boolean
    createdAt?: DateTimeNullableFilter<"AppUsers"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"AppUsers"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"AppUsers"> | Date | string | null
  }

  export type AppUsersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
  }

  export type AppUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    AND?: AppUsersWhereInput | AppUsersWhereInput[]
    OR?: AppUsersWhereInput[]
    NOT?: AppUsersWhereInput | AppUsersWhereInput[]
    firstname?: StringNullableFilter<"AppUsers"> | string | null
    lastname?: StringNullableFilter<"AppUsers"> | string | null
    password?: StringNullableFilter<"AppUsers"> | string | null
    role?: EnumRoleFilter<"AppUsers"> | $Enums.Role
    otpCode?: StringNullableFilter<"AppUsers"> | string | null
    status?: EnumStatusFilter<"AppUsers"> | $Enums.Status
    isActive?: BoolFilter<"AppUsers"> | boolean
    isDeleted?: BoolFilter<"AppUsers"> | boolean
    createdAt?: DateTimeNullableFilter<"AppUsers"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"AppUsers"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"AppUsers"> | Date | string | null
  }, "id" | "id" | "email" | "phone_number">

  export type AppUsersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: AppUsersCountOrderByAggregateInput
    _max?: AppUsersMaxOrderByAggregateInput
    _min?: AppUsersMinOrderByAggregateInput
  }

  export type AppUsersScalarWhereWithAggregatesInput = {
    AND?: AppUsersScalarWhereWithAggregatesInput | AppUsersScalarWhereWithAggregatesInput[]
    OR?: AppUsersScalarWhereWithAggregatesInput[]
    NOT?: AppUsersScalarWhereWithAggregatesInput | AppUsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppUsers"> | string
    firstname?: StringNullableWithAggregatesFilter<"AppUsers"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"AppUsers"> | string | null
    password?: StringNullableWithAggregatesFilter<"AppUsers"> | string | null
    email?: StringWithAggregatesFilter<"AppUsers"> | string
    phone_number?: StringWithAggregatesFilter<"AppUsers"> | string
    role?: EnumRoleWithAggregatesFilter<"AppUsers"> | $Enums.Role
    otpCode?: StringNullableWithAggregatesFilter<"AppUsers"> | string | null
    status?: EnumStatusWithAggregatesFilter<"AppUsers"> | $Enums.Status
    isActive?: BoolWithAggregatesFilter<"AppUsers"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"AppUsers"> | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter<"AppUsers"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AppUsers"> | Date | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"AppUsers"> | Date | string | null
  }

  export type ContactListWhereInput = {
    AND?: ContactListWhereInput | ContactListWhereInput[]
    OR?: ContactListWhereInput[]
    NOT?: ContactListWhereInput | ContactListWhereInput[]
    id?: StringFilter<"ContactList"> | string
    senderName?: StringNullableFilter<"ContactList"> | string | null
    senderEmail?: StringNullableFilter<"ContactList"> | string | null
    senderPhone?: StringNullableFilter<"ContactList"> | string | null
    totalViews?: IntNullableFilter<"ContactList"> | number | null
    messageTitle?: StringNullableFilter<"ContactList"> | string | null
    message?: StringNullableFilter<"ContactList"> | string | null
    status?: EnumMessageStatusFilter<"ContactList"> | $Enums.MessageStatus
    createdAt?: DateTimeFilter<"ContactList"> | Date | string
  }

  export type ContactListOrderByWithRelationInput = {
    id?: SortOrder
    senderName?: SortOrderInput | SortOrder
    senderEmail?: SortOrderInput | SortOrder
    senderPhone?: SortOrderInput | SortOrder
    totalViews?: SortOrderInput | SortOrder
    messageTitle?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactListWhereInput | ContactListWhereInput[]
    OR?: ContactListWhereInput[]
    NOT?: ContactListWhereInput | ContactListWhereInput[]
    senderName?: StringNullableFilter<"ContactList"> | string | null
    senderEmail?: StringNullableFilter<"ContactList"> | string | null
    senderPhone?: StringNullableFilter<"ContactList"> | string | null
    totalViews?: IntNullableFilter<"ContactList"> | number | null
    messageTitle?: StringNullableFilter<"ContactList"> | string | null
    message?: StringNullableFilter<"ContactList"> | string | null
    status?: EnumMessageStatusFilter<"ContactList"> | $Enums.MessageStatus
    createdAt?: DateTimeFilter<"ContactList"> | Date | string
  }, "id" | "id">

  export type ContactListOrderByWithAggregationInput = {
    id?: SortOrder
    senderName?: SortOrderInput | SortOrder
    senderEmail?: SortOrderInput | SortOrder
    senderPhone?: SortOrderInput | SortOrder
    totalViews?: SortOrderInput | SortOrder
    messageTitle?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactListCountOrderByAggregateInput
    _avg?: ContactListAvgOrderByAggregateInput
    _max?: ContactListMaxOrderByAggregateInput
    _min?: ContactListMinOrderByAggregateInput
    _sum?: ContactListSumOrderByAggregateInput
  }

  export type ContactListScalarWhereWithAggregatesInput = {
    AND?: ContactListScalarWhereWithAggregatesInput | ContactListScalarWhereWithAggregatesInput[]
    OR?: ContactListScalarWhereWithAggregatesInput[]
    NOT?: ContactListScalarWhereWithAggregatesInput | ContactListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactList"> | string
    senderName?: StringNullableWithAggregatesFilter<"ContactList"> | string | null
    senderEmail?: StringNullableWithAggregatesFilter<"ContactList"> | string | null
    senderPhone?: StringNullableWithAggregatesFilter<"ContactList"> | string | null
    totalViews?: IntNullableWithAggregatesFilter<"ContactList"> | number | null
    messageTitle?: StringNullableWithAggregatesFilter<"ContactList"> | string | null
    message?: StringNullableWithAggregatesFilter<"ContactList"> | string | null
    status?: EnumMessageStatusWithAggregatesFilter<"ContactList"> | $Enums.MessageStatus
    createdAt?: DateTimeWithAggregatesFilter<"ContactList"> | Date | string
  }

  export type namingListWhereInput = {
    AND?: namingListWhereInput | namingListWhereInput[]
    OR?: namingListWhereInput[]
    NOT?: namingListWhereInput | namingListWhereInput[]
    id?: StringFilter<"namingList"> | string
    firstName?: StringNullableFilter<"namingList"> | string | null
    lastName?: StringNullableFilter<"namingList"> | string | null
    phone?: StringNullableFilter<"namingList"> | string | null
    createdAt?: DateTimeFilter<"namingList"> | Date | string
  }

  export type namingListOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type namingListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: namingListWhereInput | namingListWhereInput[]
    OR?: namingListWhereInput[]
    NOT?: namingListWhereInput | namingListWhereInput[]
    firstName?: StringNullableFilter<"namingList"> | string | null
    lastName?: StringNullableFilter<"namingList"> | string | null
    createdAt?: DateTimeFilter<"namingList"> | Date | string
  }, "id" | "id" | "phone">

  export type namingListOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: namingListCountOrderByAggregateInput
    _max?: namingListMaxOrderByAggregateInput
    _min?: namingListMinOrderByAggregateInput
  }

  export type namingListScalarWhereWithAggregatesInput = {
    AND?: namingListScalarWhereWithAggregatesInput | namingListScalarWhereWithAggregatesInput[]
    OR?: namingListScalarWhereWithAggregatesInput[]
    NOT?: namingListScalarWhereWithAggregatesInput | namingListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"namingList"> | string
    firstName?: StringNullableWithAggregatesFilter<"namingList"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"namingList"> | string | null
    phone?: StringNullableWithAggregatesFilter<"namingList"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"namingList"> | Date | string
  }

  export type AppUsersCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    password?: string | null
    email: string
    phone_number: string
    role?: $Enums.Role
    otpCode?: string | null
    status?: $Enums.Status
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
  }

  export type AppUsersUncheckedCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    password?: string | null
    email: string
    phone_number: string
    role?: $Enums.Role
    otpCode?: string | null
    status?: $Enums.Status
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
  }

  export type AppUsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppUsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppUsersCreateManyInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    password?: string | null
    email: string
    phone_number: string
    role?: $Enums.Role
    otpCode?: string | null
    status?: $Enums.Status
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    lastLogin?: Date | string | null
  }

  export type AppUsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppUsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactListCreateInput = {
    id?: string
    senderName?: string | null
    senderEmail?: string | null
    senderPhone?: string | null
    totalViews?: number | null
    messageTitle?: string | null
    message?: string | null
    status?: $Enums.MessageStatus
    createdAt?: Date | string
  }

  export type ContactListUncheckedCreateInput = {
    id?: string
    senderName?: string | null
    senderEmail?: string | null
    senderPhone?: string | null
    totalViews?: number | null
    messageTitle?: string | null
    message?: string | null
    status?: $Enums.MessageStatus
    createdAt?: Date | string
  }

  export type ContactListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderEmail?: NullableStringFieldUpdateOperationsInput | string | null
    senderPhone?: NullableStringFieldUpdateOperationsInput | string | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    messageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderEmail?: NullableStringFieldUpdateOperationsInput | string | null
    senderPhone?: NullableStringFieldUpdateOperationsInput | string | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    messageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactListCreateManyInput = {
    id?: string
    senderName?: string | null
    senderEmail?: string | null
    senderPhone?: string | null
    totalViews?: number | null
    messageTitle?: string | null
    message?: string | null
    status?: $Enums.MessageStatus
    createdAt?: Date | string
  }

  export type ContactListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderEmail?: NullableStringFieldUpdateOperationsInput | string | null
    senderPhone?: NullableStringFieldUpdateOperationsInput | string | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    messageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderEmail?: NullableStringFieldUpdateOperationsInput | string | null
    senderPhone?: NullableStringFieldUpdateOperationsInput | string | null
    totalViews?: NullableIntFieldUpdateOperationsInput | number | null
    messageTitle?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type namingListCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type namingListUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type namingListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type namingListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type namingListCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type namingListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type namingListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppUsersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    otpCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AppUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    otpCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AppUsersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    otpCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContactListCountOrderByAggregateInput = {
    id?: SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    senderPhone?: SortOrder
    totalViews?: SortOrder
    messageTitle?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactListAvgOrderByAggregateInput = {
    totalViews?: SortOrder
  }

  export type ContactListMaxOrderByAggregateInput = {
    id?: SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    senderPhone?: SortOrder
    totalViews?: SortOrder
    messageTitle?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactListMinOrderByAggregateInput = {
    id?: SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    senderPhone?: SortOrder
    totalViews?: SortOrder
    messageTitle?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactListSumOrderByAggregateInput = {
    totalViews?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type namingListCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type namingListMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type namingListMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AppUsersDefaultArgs instead
     */
    export type AppUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactListDefaultArgs instead
     */
    export type ContactListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use namingListDefaultArgs instead
     */
    export type namingListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = namingListDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}