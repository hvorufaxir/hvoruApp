import { migrate, version } from './127';

const oldVersion = 126;

const sentryCaptureExceptionMock = jest.fn();
global.sentry = {
  captureException: sentryCaptureExceptionMock,
};

describe(`migration #${version}`, () => {
  afterEach(() => jest.resetAllMocks());

  it('updates the version metadata', async () => {
    const oldState = { meta: { version: oldVersion }, data: {} };
    const newState = await migrate(oldState);
    expect(newState.meta).toStrictEqual({ version });
  });

  it('captures an exception if the network controller state is not defined', async () => {
    const oldState = { meta: { version: oldVersion }, data: {} };
    await migrate(oldState);
    expect(sentryCaptureExceptionMock).toHaveBeenCalledTimes(1);
    expect(sentryCaptureExceptionMock).toHaveBeenCalledWith(new Error(`state.NetworkController is not defined`));
  });

  it('captures an exception if the network controller state is not an object', async () => {
    for (const NetworkController of [undefined, null, 1, 'foo']) {
      const oldState = { meta: { version: oldVersion }, data: { NetworkController } };
      await migrate(oldState);
      expect(sentryCaptureExceptionMock).toHaveBeenCalledTimes(1);
      expect(sentryCaptureExceptionMock).toHaveBeenCalledWith(new Error(`typeof state.NetworkController is ${typeof NetworkController}`));
      sentryCaptureExceptionMock.mockClear();
    }
  });

});
