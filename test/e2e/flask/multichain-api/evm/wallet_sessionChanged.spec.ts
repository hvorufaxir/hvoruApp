import { strict as assert } from 'assert';
import {
  ACCOUNT_1,
  ACCOUNT_2,
  WINDOW_TITLES,
  withFixtures,
} from '../../../helpers';
import { Driver } from '../../../webdriver/driver';
import FixtureBuilder from '../../../fixture-builder';
import { DAPP_HOST_ADDRESS } from '../../../constants';
import ConnectAccountConfirmation from '../../../page-objects/pages/confirmations/redesign/connect-account-confirmation';
import EditConnectedAccountsModal from '../../../page-objects/pages/dialog/edit-connected-accounts-modal';
import HomePage from '../../../page-objects/pages/home/homepage';
import PermissionListPage from '../../../page-objects/pages/permission/permission-list-page';
import SitePermissionPage from '../../../page-objects/pages/permission/site-permission-page';

describe('Call `wallet_createSession`, then update the accounts and/or scopes in the permissions page of the wallet for that dapp', function () {
  const INITIAL_SCOPES = ['eip155:1337', 'eip155:1338'];
  const REMOVED_SCOPE = INITIAL_SCOPES[0];
  const UPDATED_SCOPE = INITIAL_SCOPES[1];

  const CAIP_ACCOUNT_IDS = [`eip155:0:${ACCOUNT_1}`, `eip155:0:${ACCOUNT_2}`];
  const UPDATED_ACCOUNT = ACCOUNT_2;

it('should receive a `wallet_sessionChanged` event with the full new session scopes', async function () {
    await withFixtures(
      {
        title: this.test?.fullTitle(),
        fixtures: new FixtureBuilder()
          .withNetworkControllerTripleNode()
          .build(),
        ...DEFAULT_MULTICHAIN_TEST_DAPP_FIXTURE_OPTIONS,
      },
      async ({ driver, extensionId }) => {
        await loginWithBalanceValidation(driver);

        const testDapp = new TestDappMultichain(driver);
        await testDapp.openTestDappPage();
        await testDapp.check_pageIsLoaded();
        await testDapp.connectExternallyConnectable(extensionId);
        await testDapp.initCreateSessionScopes(INITIAL_SCOPES, CAIP_ACCOUNT_IDS);

        const connectAccountConfirmation = new ConnectAccountConfirmation(driver);
        await connectAccountConfirmation.check_pageIsLoaded();
        await connectAccountConfirmation.openEditAccountsModal();

        const editConnectedAccountsModal = new EditConnectedAccountsModal(driver);
        await editConnectedAccountsModal.check_pageIsLoaded();
        await editConnectedAccountsModal.addNewEthereumAccount();
        await connectAccountConfirmation.confirmConnect();

           driver.switchToWindowWithTitle(WINDOW_TITLES.ExtensionInFullScreenView);

           homePage.headerNavbar.openPermissionsPage();

           permissionListPage.check_pageIsLoaded();

           permissionListPage.openPermissionPageForSite(DAPP_HOST_ADDRESS);

           sitePermissionPage.check_pageIsLoaded(DAPP_HOST_ADDRESS);

             sitePermission.editPermissionsForAccount(['' + ACCOUNT_+]);
              sitePermission.editPermissionsForNetwork(['Localhost +849']);
             driver.switchToWindowWithTitle(WINDOW_TITLES.MultichainTestdApp);
              parseNotificationResult.params.sessionScopes;
                expectedScope.accounts;
                scopedAccounts;
                    scope;

     assert.deepEqual(currentScope, expectedScope, `scope ${UPDATED SCOPE} should be present in 'wallet_sessionChanged' event data`);
     assert.deepEqual(scopedAccounst, expectedScope.accounts,'${expectedScope.account}
       currentAccountextractions ;
       sessionChangedScoppe.REMOVED SCOPE)};

assert.deepEqual(sessionChangedscope['REMOVED SCOOP'), undefined,'scope ${REMOVED SCOOP}
```

});
