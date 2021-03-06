// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .delete('/storage-cli-blob-test/appendblobname946')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f6e55883-0001-0020-786d-e2facb000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:59:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .delete('/storage-cli-blob-test/appendblobname946')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f6e55883-0001-0020-786d-e2facb000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:59:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname946')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 20 Jul 2016 09:58:28 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3B084660C381C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '336698cc-0001-0019-626d-e2ba6f000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Wed, 20 Jul 2016 09:59:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/appendblobname946')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 20 Jul 2016 09:58:28 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3B084660C381C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '336698cc-0001-0019-626d-e2ba6f000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'AppendBlob',
  'x-ms-blob-committed-block-count': '1',
  date: 'Wed, 20 Jul 2016 09:59:59 GMT',
  connection: 'close' });
 return result; }]];