import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { UserEntity } from '../lib/entity/User';
import { CalendarEventEntity } from '../lib/entity/CalendarEvent';
import { ContextData } from '../pages/api/graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISODate: Date;
};



export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  createdAt: Scalars['ISODate'];
};

export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  id: Scalars['ID'];
  title: Scalars['String'];
  start: Scalars['ISODate'];
  end: Scalars['ISODate'];
};

export type CreateCalendarEventInput = {
  title: Scalars['String'];
  start: Scalars['ISODate'];
  end: Scalars['ISODate'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  user?: Maybe<User>;
};

export type SignInPayload = {
  __typename?: 'SignInPayload';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type CreateCalendarEventPayload = {
  __typename?: 'CreateCalendarEventPayload';
  calendarEvent?: Maybe<CalendarEvent>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  viewer?: Maybe<User>;
  calendarEvents: Array<CalendarEvent>;
  calendarEvent?: Maybe<CalendarEvent>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryCalendarEventArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: SignUpPayload;
  signIn: SignInPayload;
  createCalendarEvent: CreateCalendarEventPayload;
  deleteCalendarEvents?: Maybe<Scalars['Boolean']>;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationCreateCalendarEventArgs = {
  input: CreateCalendarEventInput;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ISODate: ResolverTypeWrapper<Scalars['ISODate']>;
  User: ResolverTypeWrapper<UserEntity>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CalendarEvent: ResolverTypeWrapper<CalendarEventEntity>;
  CreateCalendarEventInput: CreateCalendarEventInput;
  SignUpInput: SignUpInput;
  SignInInput: SignInInput;
  SignUpPayload: ResolverTypeWrapper<Omit<SignUpPayload, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  SignInPayload: ResolverTypeWrapper<Omit<SignInPayload, 'user'> & { user?: Maybe<ResolversTypes['User']> }>;
  CreateCalendarEventPayload: ResolverTypeWrapper<Omit<CreateCalendarEventPayload, 'calendarEvent'> & { calendarEvent?: Maybe<ResolversTypes['CalendarEvent']> }>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ISODate: Scalars['ISODate'];
  User: UserEntity;
  ID: Scalars['ID'];
  String: Scalars['String'];
  CalendarEvent: CalendarEventEntity;
  CreateCalendarEventInput: CreateCalendarEventInput;
  SignUpInput: SignUpInput;
  SignInInput: SignInInput;
  SignUpPayload: Omit<SignUpPayload, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  SignInPayload: Omit<SignInPayload, 'user'> & { user?: Maybe<ResolversParentTypes['User']> };
  CreateCalendarEventPayload: Omit<CreateCalendarEventPayload, 'calendarEvent'> & { calendarEvent?: Maybe<ResolversParentTypes['CalendarEvent']> };
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
}>;

export type AuthDirectiveArgs = {  };

export type AuthDirectiveResolver<Result, Parent, ContextType = ContextData, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface IsoDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISODate'], any> {
  name: 'ISODate';
}

export type UserResolvers<ContextType = ContextData, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISODate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CalendarEventResolvers<ContextType = ContextData, ParentType extends ResolversParentTypes['CalendarEvent'] = ResolversParentTypes['CalendarEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['ISODate'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['ISODate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SignUpPayloadResolvers<ContextType = ContextData, ParentType extends ResolversParentTypes['SignUpPayload'] = ResolversParentTypes['SignUpPayload']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SignInPayloadResolvers<ContextType = ContextData, ParentType extends ResolversParentTypes['SignInPayload'] = ResolversParentTypes['SignInPayload']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CreateCalendarEventPayloadResolvers<ContextType = ContextData, ParentType extends ResolversParentTypes['CreateCalendarEventPayload'] = ResolversParentTypes['CreateCalendarEventPayload']> = ResolversObject<{
  calendarEvent?: Resolver<Maybe<ResolversTypes['CalendarEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type QueryResolvers<ContextType = ContextData, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  calendarEvents?: Resolver<Array<ResolversTypes['CalendarEvent']>, ParentType, ContextType>;
  calendarEvent?: Resolver<Maybe<ResolversTypes['CalendarEvent']>, ParentType, ContextType, RequireFields<QueryCalendarEventArgs, 'id'>>;
}>;

export type MutationResolvers<ContextType = ContextData, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  signUp?: Resolver<ResolversTypes['SignUpPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  signIn?: Resolver<ResolversTypes['SignInPayload'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'input'>>;
  createCalendarEvent?: Resolver<ResolversTypes['CreateCalendarEventPayload'], ParentType, ContextType, RequireFields<MutationCreateCalendarEventArgs, 'input'>>;
  deleteCalendarEvents?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ContextData> = ResolversObject<{
  ISODate?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  CalendarEvent?: CalendarEventResolvers<ContextType>;
  SignUpPayload?: SignUpPayloadResolvers<ContextType>;
  SignInPayload?: SignInPayloadResolvers<ContextType>;
  CreateCalendarEventPayload?: CreateCalendarEventPayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ContextData> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = ContextData> = ResolversObject<{
  auth?: AuthDirectiveResolver<any, any, ContextType>;
}>;


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = ContextData> = DirectiveResolvers<ContextType>;