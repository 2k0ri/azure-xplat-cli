// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '045c28ea-c686-462f-9081-33c34e871ba3',
    name: 'MDInsightsPROD1_10759063',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [];

 exports.randomTestIdsGenerated = function() { return ['xplattestadla528','xplattestadla5810','xplattestadla4305','xplattestadls1070','xplattestadls8823','xplattestadls599','adlacatalogitem9987','adlacatalogitem9067','adlacatalogitem410','adlacatalogitem8616','adlacatalogitem5348','adlacatalogitem516','adlacatalogitem9649','adlacatalogitem5226'];};