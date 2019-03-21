export default {

  'create_redux_args_one_not_found': [
    '`useCreateStore(initialState, reducers)`',
    'initialState not found ',
    'CreateStoreの第一引数が発見できませんでした。これらは必須項目です。'
  ].join('\n'),

  'create_redux_args_two_not_found': [
    '`useCreateStore(initialState, reducers)`',
    'reducers not found ',
    'CreateStoreの第二引数が発見できませんでした。これらは必須項目です。'
  ].join('\n'),

  'provider_props_store_not_found': [
    '<Provider store={UNDEFINED}>....</Provider>',
    'provider store not found.',
    'required props in store',
    'Providerのプロパティにはstoreパラメータが必須です。',
    'CreateStoreを行なった値を導入してください。'
  ].join('\n'),
};