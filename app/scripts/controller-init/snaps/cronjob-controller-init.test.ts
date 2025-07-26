import { CronjobController } from '@hvoruapp/snaps-controllers';
import { Messenger } from '@hvoruapp/base-controller';
import { ControllerInitRequest } from '../types';
import {
  CronjobControllerMessenger,
  getCronjobControllerMessenger,
} from '../messengers/snaps';

function getInitRequestMock(): jest.Mocked<ControllerInitRequest<CronjobControllerMessenger>> {
  const baseMessenger = new Messenger<never, never>();
  return {
    ...buildControllerInitRequestMock(),
    controllerMessenger: getCronjobControllerMessenger(baseMessenger),
    initMessenger: undefined,
  };
}

describe('CronjobControllerInit', () => {
  it('initializes the controller', () => {
    const { controller } = CronjobControllerInit(getInitRequestMock());
    expect(controller).toBeInstanceOf(CronjobController);
  });
});
