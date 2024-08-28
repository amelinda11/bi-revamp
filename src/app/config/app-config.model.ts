/**
 * Created by Amelindar on 02/06/2023
 */

export interface IAppConfig {
  env: {
    name: string;
  };
  apiServer: {
    TRANSACTION_SERVICE_BASE_URL: string;
    MASTER_SERVICE_BASE_URL: string;
  };
  applicationTitle: any;
  outletCode: any;

}
